import React, { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { PostOrPage } from "@tryghost/content-api";

const Post = (props: { content: PostOrPage }): ReactElement => {
  const { feature_image, title, slug } = props.content;

  return (
    <Link href={`/blog/${slug}`} passHref>
      <a>
        <div className="relative w-full h-60 sm:h-60 md:h-44 rounded mb-5 overflow-hidden">
          {feature_image && (
            <Image src={feature_image} layout="fill" objectFit="cover" alt="" />
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
};

export default Post;
