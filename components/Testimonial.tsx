import ITestimonial from "../types/testimonial"
import Image from 'next/image'
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Testimonial = (props: {
    content: ITestimonial
}) => {
    const {
        name,
        position,
        description,
        imageUrl
    } = props.content
    return (
        <figure className='relative pt-2 text-xl leading-8 max-w-2xl'>
            {description}

            <FontAwesomeIcon
                icon={faQuoteLeft}
                className='w-8 text-primary opacity-10 absolute top-0 -left-2'
            />

            <figcaption className='flex items-center mt-5 text-base'>
                <Image className='rounded-full' src={imageUrl} width='50' height='50' alt={`photo of ${name}`} />
                <div className='ml-5'>
                    <div>{name}</div>
                    <div className='text-neutral-400'>{position}</div>
                </div>
            </figcaption>
        </figure>
    )
}

export default Testimonial