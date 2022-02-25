import { projects } from '../../content/projects'
import { Skill } from '../../components/Skill'
import { Project } from '../../components/Project'
import SiteLayout from '../../components/SiteLayout'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import Carousel from "../../components/Carousel"
import React from "react"
import Button from "../../components/Button"
import Testimonial from "../../components/Testimonial"
import Image from "next/image"

interface ProjectPageProps {
    slug: string;
}

export default function ProjectPage(props: ProjectPageProps) {
    const { slug } = props
    const project = projects[slug]
    const { title, description, imageUrl, images, skills, link, body, links, testimonials, otherProjects } = project
    const button = (
        <Button href={link} target='_blank'>
            See live

            <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-3 w-3 h-3" />
        </Button>
    )
    return (
        <SiteLayout>
            <main className='container pt-10 pb-32 lg:pt-16'>
                <div>

                    <div className='flex justify-between items-center mb-8'>
                        <h1 className="text-2xl md:text-3xl w-full md:w-8/12">{title}</h1>
                        <span className='hidden md:flex'>
                            {button}
                        </span>
                    </div>

                    {
                        images?.length ? (
                            <Carousel images={images} className='mb-5' title={title} />
                        ): (
                            <Image src={imageUrl} className='mb-5' width='1000' height='750' alt={`${title} screenshot`} />
                        )
                    }

                    {
                        skills &&
                        <div className="flex flex-wrap mb-2">
                            {skills.map((s) => <Skill key={s.name} content={s} />)}
                        </div>
                    }

                    <div className='space-y-5 py-5'>
                        {description && <p>{description}</p>}
                        {body}
                    </div>

                    {links?.length && (
                        <ul className='list-disc pl-8 space-y-2'>
                            {links.map((link) => (
                                <li key={link}>
                                    <Link href={link} passHref>
                                        <a target='_blank' className='text-primary underline hover:no-underline'>
                                            {link}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className='md:hidden flex justify-center my-10 w-full'>{button}</div>

                    {testimonials?.length ? (
                        <section className='my-16 space-y-8'>
                            <h2 className='text-2xl'>References</h2>
                            {
                                testimonials.map((testimonial) => (
                                    <Testimonial key={testimonial.name} content={testimonial} />
                                ))
                            }
                        </section>
                    ): <></>}
                </div>

                <section className='mt-16'>
                    <h2 className='text-lg md:text-3xl mb-12 text-center'>Other Projects</h2>
                    <div className="grid md:grid-cols-3 gap-y-8 md:gap-8">
                        {otherProjects?.map((project) =>
                            <div key={project.slug}> <Project content={project} /> </div>
                        )}
                    </div>
                </section>
            </main>
        </SiteLayout>
    )
}

// @ts-ignore
export function getServerSideProps({ query }) {
    const { slug } = query
    const project = projects[slug]

    if (!project) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            slug
        }
    }
}