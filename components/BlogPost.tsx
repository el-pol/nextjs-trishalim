import React, { ReactElement } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { PostOrPage } from "@tryghost/content-api";

const getSrcSet = (url: string) => {
  if (!url) return undefined;

  const sizes = [
    { imageWidth: 300, viewportWidth: 300 },
    { imageWidth: 600, viewportWidth: 600 },
    { imageWidth: 800, viewportWidth: 1000 },
    { imageWidth: 800, viewportWidth: 2000 },
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

const Post = (props: { content: PostOrPage }): ReactElement => {
  const { feature_image, title, slug } = props.content;

  return (
    <Link href={`/blog/${slug}`} passHref>
      <a>
        <div className="relative w-full h-60 sm:h-60 md:h-44 rounded mb-5 overflow-hidden">
          {feature_image && (
            <img
              src={feature_image}
              srcSet={getSrcSet(feature_image)}
              alt=""
              className="object-cover"
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
};

export default Post;
