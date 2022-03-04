import SiteLayout from "../components/SiteLayout";
import React from "react";
import { posts } from "../content/posts";
import Post from "../components/Post";
import TemplatePromo from "../components/TemplatePromo";

const Blog = () => {
  return (
    <SiteLayout>
      <main className="container py-10 lg:py-16">
        <h1 className="mb-8">Blog</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((c) => (
            <div key={c.link}>
              <Post content={c} />
            </div>
          ))}
        </div>

        <TemplatePromo className="my-16" />
      </main>
    </SiteLayout>
  );
};

export default Blog;
