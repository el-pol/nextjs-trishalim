import SiteLayout from '../components/SiteLayout'
import {Project} from '../components/Project'
import Icon from '../components/Icon'
import React from "react"
import {skills} from "../content/skills"
import {projects} from "../content/projects"
import {Project as IProject} from "../types/project"

interface ProjectPageProps {
    slug: string;
}

export default function ProjectPage(props: ProjectPageProps) {
    const { slug } = props
    const skill = skills[slug]
    const {name, icon} = skill
    const projectList: Array<IProject> = []

    Object.keys(projects).forEach((key) => {
        const project = projects[key]
        const matchingSkill = project.skills?.find((skill) => skill.slug === slug)
        if (matchingSkill) projectList.push(project)
    })

    return (
        <SiteLayout>
            <main className='container pt-10 pb-32 lg:pt-16'>
                <div className="mb-8 flex items-center">
                    {icon && <Icon icon={icon} className='block mr-5 text-5xl' />}
                    <h1 className='text-2xl md:text-3xl'>
                        {name} Projects
                    </h1>
                </div>
                {
                    projectList?.length ? (
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {projectList.map((p) => (
                                <Project content={p} key={p.slug} />
                            ))}
                        </div>
                    ): (
                        <p>No projects found.</p>
                    )
                }
            </main>
        </SiteLayout>
    )
}

// @ts-ignore
export function getServerSideProps({ query }) {
    const { slug } = query
    const skill = skills[slug]

    if (!skill) {
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