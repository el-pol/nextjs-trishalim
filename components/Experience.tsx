import { ReactElement } from "react";
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
    skills
  } = props.content;

  return (
    <div className="experience">
      <h3>{company}</h3>
      <p>{position} {dateStart} - {dateEnd}</p>

      <div className="experience__skills">
        {
          skills.map((s) => <Skill content={s} />)
        }
      </div>


      <div>
        {description}
      </div>
    </div>
  )
}