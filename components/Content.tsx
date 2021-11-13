import React, { ReactElement } from "react";
import { Content as IContent } from "../types/content";
import Link from 'next/link';

export const Content = (props: {
  content: IContent
}): ReactElement => {
  const {
    imageUrl,
    title,
    link,
    description
  } = props.content;

  return (
    <Link href={link}>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="w-full h-80 rounded mb-5 bg-top bg-cover"style={{
            backgroundImage: `url(${imageUrl})`
          }}></div>
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </Link>
  )
}