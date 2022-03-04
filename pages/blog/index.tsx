import { getPosts } from "../../lib/posts";
import SiteLayout from "../../components/SiteLayout";
import { PostOrPage } from "@tryghost/content-api";
import Image from "next/image";
import Icon from "../../components/Icon";
import Link from "next/link";
import React from "react";

interface BlogProps {
  posts: Array<PostOrPage>;
}

const Blog = (props: BlogProps) => {
  const { posts } = props;
  return (
    <SiteLayout>
      <ul>
        {posts.map((post) => {
          const { id, title, slug, feature_image } = post;

          return (
            <Link href={`/blog/${slug}`} passHref key={id}>
              <a>
                <div className="relative w-full h-60 sm:h-60 md:h-44 rounded mb-5 overflow-hidden">
                  {feature_image && (
                    <Image
                      src={feature_image}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  )}
                  <div className="absolute top-0 left-0 w-full h-full bg-primary rounded opacity-0 hover:opacity-80 transition-all duration-500 flex items-center justify-center">
                    <Icon
                      icon="fa-solid:external-link-alt"
                      className="text-white text-3xl"
                    />
                  </div>
                </div>
                <h3 className="text-xl">{title}</h3>
              </a>
            </Link>
          );
        })}
      </ul>
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
