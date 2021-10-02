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
      <a href={link} target="_blank" className="project">
        <div className="project__image"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        ></div>
        <div className="project__text">
          <h3>{title}</h3>
          {
            skills &&
            <div className="experience__skills">
              {skills.map((s) => <Skill content={s} />)}
            </div>
          }
          <p>{description}</p>
        </div>
      </a>
    </Link>
  )
}