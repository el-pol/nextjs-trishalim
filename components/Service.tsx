import IService from "../types/service"
import React from "react"

const Service = (props: {
    content: IService
}) => {
    const { title, description } = props.content

    return (
        <div className='p-5 bg-neutral-50'>
            <h3 className='text-lg mb-3'>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Service