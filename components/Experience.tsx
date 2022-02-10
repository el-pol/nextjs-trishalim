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
        <div className="mb-10">
            <div className="md:flex flex-wrap items-center justify-between">
                <div className="flex my-2">
                    <h3 className="text-xl mr-5">
                        <Link href={link}>
                            <a href={link} target="_blank" rel="nofollow noreferrer">
                                {position} at {company}
                            </a>
                        </Link>
                    </h3>
                </div>
                <p className="text-gray-500 text-sm my-2">{dateStart} - {dateEnd}</p>
            </div>
            <p>
                {snippet}
            </p>
        </div>
    )
}

export default Experience;