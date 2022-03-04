import { getPosts } from "../../lib/posts";
import SiteLayout from "../../components/SiteLayout";
import { PostOrPage } from "@tryghost/content-api";
import React from "react";
import BlogPost from "../../components/BlogPost";
import TemplatePromo from "../../components/TemplatePromo";

interface BlogProps {
  posts: Array<PostOrPage>;
}

const Blog = (props: BlogProps) => {
  const { posts } = props;

  return (
    <SiteLayout>
      <main className="container py-10 lg:py-16">
        <h1 className="mb-8">Blog</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogPost content={post} key={post.id} />
          ))}
        </div>

        <TemplatePromo className="my-16" />
      </main>
    </SiteLayout>
  );
};

export const getStaticProps = async () => {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
};

export default Blog;
