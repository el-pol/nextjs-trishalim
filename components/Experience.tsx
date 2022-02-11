import Link from "next/link";
import React, {ReactElement} from "react";
import {Experience as IExperience} from "../types/experience";
import {Skill} from "./Skill";

const Experience = (props: {
    content: IExperience
}): ReactElement => {
    const {
        position,
        company,
        dateStart,
        dateEnd,
        snippet,
        link
    } = props.content;

    return (
        <div className="mb-10 md:flex md:space-x-8">
            <p className="text-gray-500 text-sm my-2 md:w-3/12 md:text-right pt-1.5">{dateStart} - {dateEnd}</p>
            <div className="md:flex flex-wrap items-center justify-between md:w-8/12">
                <div className="flex my-2">
                    <h3 className="text-xl mr-5">
                        <Link href={link}>
                            <a href={link} target="_blank" rel="nofollow noreferrer">
                                {position} at {company}
                            </a>
                        </Link>
                    </h3>
                </div>
                <p>
                    {snippet}
                </p>
            </div>
        </div>
    )
}

export default Experience;