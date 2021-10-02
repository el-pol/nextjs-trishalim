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
      <div className="experience__headline">
        <div className="experience__headline-title">
          <h3>{company}</h3>
          <p>{position}</p>
        </div>
        <p className="experience__date"> {dateStart} - {dateEnd}</p>
      </div>

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