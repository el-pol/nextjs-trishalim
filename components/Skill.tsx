import { ReactElement } from "react";
import { Skill as ISkill } from "../types/skill";

export const Skill = (props: {
  content: ISkill
}): ReactElement => {
  const {
    name
  } = props.content;

  return (
    <span className="skill">
      {name}
    </span>
  )
}