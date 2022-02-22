import { useRouter } from 'next/router'
import { projects } from '../../content/projects'
import { Project as IProject } from '../../types/project'
import { Skill } from '../../components/Skill'
import { Project } from '../../components/Project'
import SiteLayout from '../../components/SiteLayout'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Carousel from "../../components/Carousel";
import React from "react";

interface ProjectPageProps {
    slug: string;
}

export default function ProjectPage(props: ProjectPageProps) {
    const { slug } = props
    const project = projects[slug]
    const { title, description, imageUrl, images, skills, link, body, links } = project
    const button = (
        <Link href={link}>
            <a className='w-full justify-center flex items-center font-semibold border-2 border-pink bg-pink hover:bg-white hover:text-pink text-white px-4 py-1.5 rounded transition' target='_blank'>
                See live

                <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-3 w-3 h-3" />
            </a>
        </Link>
    )
    return (
        <SiteLayout>
            <main>
                <div className='max-w-3xl px-3 mx-auto my-16'>

                    <div className='flex justify-between items-center mb-8'>
                        <h1 className="text-2xl md:text-3xl w-full md:w-8/12">{title}</h1>
                        <span className='hidden md:flex'>
                            {button}
                        </span>
                    </div>

                    {
                        images?.length ? (
                            <Carousel images={images} className='mb-5' />
                        ): (
                            <img src={imageUrl} className='rounded mb-5' alt={`${title} screenshot`} />
                        )
                    }

                    {
                        skills &&
                        <div className="flex flex-wrap mb-2">
                            {skills.map((s) => <Skill key={s.name} content={s} />)}
                        </div>
                    }

                    <div className='space-y-5 py-5'>
                        <p>{description}</p>
                        {body}
                    </div>

                    {links?.length && (
                        <ul className='list-disc pl-8 space-y-2'>
                            {links.map((link) => (
                                <li key={link}>
                                    <Link href={link} passHref>
                                        <a target='_blank' className='text-pink underline hover:no-underline'>
                                            {link}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className='md:hidden flex justify-center my-10 w-full'>{button}</div>
                </div>

                <div className='w-full my-20 pb-20'>
                    <div className='max-w-7xl px-3 mx-auto'>
                        <h2 className='text-lg md:text-3xl mb-12 text-center'>Other Projects</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-8">
                            {Object.keys(projects).filter((key) => key !== slug).map((key, index) => {
                                const project = projects[key]
                                if (index < 4) {
                                    return <div> <Project content={project} /> </div>
                                }
                            })}
                        </div>
                    </div>
                </div>
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