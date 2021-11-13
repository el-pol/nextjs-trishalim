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
    <div className="mb-10">
      <div className="md:flex flex-wrap items-center justify-between">
        <div className="flex my-2">
          <h3 className="text-xl mr-5">
            <Link href={link}>
              <a href={link} target="_blank" rel="nofollow noreferrer">
                {company}
              </a>
            </Link>
          </h3>
          <p className="text-xl">{position}</p>
        </div>
        <p className="uppercase text-gray-500 text-sm my-2">{dateStart} - {dateEnd}</p>
      </div>
      <p className="my-5">
        {description}
      </p>
      <div>
      <div className="mt-3 flex flex-wrap">
        {
          skills.map((s) => <Skill key={s.name} content={s} />)
        }
      </div>
      </div>
    </div>
  )
}