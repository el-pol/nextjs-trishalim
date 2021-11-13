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
    link,
    description,
    skills,
  } = props.content;

  return (
    <Link href={link}>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="w-ful h-60 sm:h-80 md:h-60 rounded mb-5 bg-center bg-cover"style={{
            backgroundImage: `url(${imageUrl})`
          }}>
          <div className="w-full h-full bg-pink rounded opacity-0 hover:opacity-80 transition-all duration-500 flex items-center justify-center">
            <FontAwesomeIcon icon={faExternalLinkAlt} className="text-white w-10 h-10" />
          </div>
        </div>
        <h3 className="mb-5 text-xl">{title}</h3>
        {
          skills &&
          <div className="flex flex-wrap mb-2">
            {skills.map((s) => <Skill key={s.name} content={s} />)}
          </div>
        }
        <p>{description}</p>
      </a>
    </Link>
  )
}