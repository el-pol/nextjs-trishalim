import React, { ReactElement } from "react";
import { Project as IProject } from "../types/project";
import Link from 'next/link';
import { Skill } from "./Skill";

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
          }}></div>
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