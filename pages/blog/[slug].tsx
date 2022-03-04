import { getPost, getPosts } from "../../lib/posts";
import SiteLayout from "../../components/SiteLayout";
import { PostOrPage } from "@tryghost/content-api";
import React from "react";

interface BlogPostProps {
  post: PostOrPage;
}

const BlogPost = (props: BlogPostProps) => {
  const { title, html, feature_image, custom_excerpt } = props.post;

  const sizes = [300, 600, 1000, 2000];
  const srcSet = feature_image
    ? sizes
        .map(
          (size) =>
            `${feature_image.replace(
              "images",
              `images/size/w${size}`
            )} ${size}w`
        )
        .join(", ")
    : undefined;

  return (
    <SiteLayout>
      <div className="py-10 lg:py-16 ">
        <h1 className="my-8 max-w-2xl mx-auto">{title}</h1>
        {custom_excerpt && (
          <h2 className="font-light max-w-2xl mx-auto text-xl text-neutral-500 my-8">
            {custom_excerpt}
          </h2>
        )}
        {feature_image && (
          <img
            srcSet={srcSet}
            src={feature_image}
            alt={title}
            className="mb-8 max-w-5xl mx-auto"
          />
        )}
        {html && (
          <div
            className="max-w-2xl mx-auto gh-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </div>
    </SiteLayout>
  );
};

export async function getStaticPaths() {
  const posts = await getPosts();

  let paths: any = [];

  if (posts) {
    paths = posts.map((post) => ({
      params: { slug: post.slug },
    }));
  }

  // Get the paths we want to create based on posts

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false };
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
// @ts-ignore
export async function getStaticProps(context) {
  const post = await getPost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
}

export default BlogPost;
