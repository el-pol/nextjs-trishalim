import {ReactElement} from "react"
import {Skill as ISkill} from "../types/skill"
import Link from 'next/link'

export const Skill = (props: {
    content: ISkill
}): ReactElement => {
    const {
        name,
        slug
    } = props.content

    return (
        <Link href={`/${slug}`}>
            <a className='text-pink border border-pink py-1 px-2 mb-3 mr-3 text-xs text-gray-500 rounded transition hover:text-white hover:bg-pink'>
                {name}
            </a>
        </Link>
    )
}