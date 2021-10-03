import Link from "next/link";
import React, { ReactElement } from "react";
import { Experience as IExperience } from "../types/experience";
import { Skill } from "./Skill";

export const Experience = (props: {
  content: IExperience
}): ReactElement => {
  const {
    position,
    company,
    dateStart,
    dateEnd,
    description,
    skills,
    link
  } = props.content;

  return (
    <div className="experience">
      <div className="experience__headline">
        <div className="experience__headline-title">
          <h3>
            <Link href={link}>
              <a href={link} target="_blank" rel="nofollow">
                {company}
              </a>
            </Link>
          </h3>
          <p>{position}</p>
        </div>
        <p className="experience__date"> {dateStart} - {dateEnd}</p>
      </div>

      <div>
        {description}
      </div>

      <div className="experience__skills">
        {
          skills.map((s) => <Skill key={s.name} content={s} />)
        }
      </div>
    </div>
  )
}