import { ReactElement } from "react"
import { Skill as ISkill } from "../types/skill"

export const Skill = (props: {
  content: ISkill
}): ReactElement => {
  const {
    name
  } = props.content

  return (
    <span className="bg-gray-200 py-1 px-2 mb-3 mr-3 text-xs text-gray-500 rounded">
      {name}
    </span>
  )
}