import React, { ReactElement } from "react";
import { Project as IProject } from "../types/project";
import Link from 'next/link';
import { Skill } from "./Skill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export const Project = (props: {
  content: IProject
}): ReactElement => {
  const {
    imageUrl,
    title,
    slug,
    snippet
  } = props.content;

  return (
    <Link href={`/project/${slug}`} passHref>
      <a>
        <div className="w-ful h-60 sm:h-80 md:h-60 rounded mb-5 bg-center bg-cover"style={{
            backgroundImage: `url(${imageUrl})`
          }}>
          <div className="w-full h-full bg-pink rounded opacity-0 hover:opacity-80 transition-all duration-500 flex items-center justify-center">
            <FontAwesomeIcon icon={faExternalLinkAlt} className="text-white w-10 h-10" />
          </div>
        </div>
        <h3 className="mb-2 text-xl">{title}</h3>
        <p>{snippet}</p>
      </a>
    </Link>
  )
}