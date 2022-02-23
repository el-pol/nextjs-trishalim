import React, {ReactElement} from "react"
import {Content as IContent} from "../types/content"
import Link from 'next/link'
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Image from "next/image"

export const Content = (props: {
    content: IContent
}): ReactElement => {
    const {
        imageUrl,
        title,
        link,
        description
    } = props.content

    return (
        <Link href={link}>
            <a href={link} target="_blank" rel="noreferrer">

                <div className="relative w-full h-60 sm:h-60 md:h-44 rounded mb-5 overflow-hidden">
                    <Image src={imageUrl} layout='fill' objectFit='cover' alt='' />
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-primary rounded opacity-0 hover:opacity-80 transition-all duration-500 flex items-center justify-center">
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="text-white w-10 h-10"/>
                    </div>
                </div>
                <h3 className="text-xl">{title}</h3>
                <p>{description}</p>
            </a>
        </Link>
    )
}