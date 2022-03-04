import { getPost, getPosts } from "../../lib/posts";
import SiteLayout from "../../components/SiteLayout";
import { PostOrPage } from "@tryghost/content-api";
import React from "react";

interface BlogPostProps {
  post: PostOrPage;
}

const getSrcSet = (url: string) => {
  if (!url) return undefined;

  const sizes = [
    { imageWidth: 300, viewportWidth: 300 },
    { imageWidth: 600, viewportWidth: 600 },
    { imageWidth: 1000, viewportWidth: 1000 },
    { imageWidth: 2000, viewportWidth: 2000 },
  ];

  if (url.startsWith("https://images.unsplash.com")) {
    return sizes
      .map(
        (size) =>
          `${url.replace("w=2000", `w=${size.imageWidth}`)} ${
            size.viewportWidth
          }w`
      )
      .join(", ");
  }

  return sizes
    .map(
      (size) =>
        `${url.replace("images", `images/size/w${size.imageWidth}`)} ${
          size.viewportWidth
        }w`
    )
    .join(", ");
};

const BlogPost = (props: BlogPostProps) => {
  const { title, html, feature_image } = props.post;

  return (
    <SiteLayout>
      <div className="py-10 lg:py-16 ">
        <h1 className="my-8 max-w-2xl mx-auto">{title}</h1>
        {feature_image && (
          <img
            srcSet={getSrcSet(feature_image)}
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
