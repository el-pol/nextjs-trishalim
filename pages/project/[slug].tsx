import { useRouter } from 'next/router'
import { projects } from '../../content/projects'
import { Project } from '../../types/project'
import { Skill } from '../../components/Skill'
import SiteLayout from '../../components/SiteLayout'
import Link from 'next/link'

interface ProjectPageProps {
    project: Project;
}

export default function ProjectPage(props: ProjectPageProps) {
    const { project } = props
    const { title, description, imageUrl, skills, link } = project
    return (
        <SiteLayout>
            <main className='container mx-auto py-16'>
                <h1 className="mb-5 text-2xl">Project: {title}</h1>
                <img src={imageUrl} className='rounded mb-5' alt={`${title} screenshot`} />
                {
                    skills &&
                    <div className="flex flex-wrap mb-2">
                        {skills.map((s) => <Skill key={s.name} content={s} />)}
                    </div>
                }
                <p>{description}</p>
                <Link href={link}>
                    <a className='block mt-5 text-pink font-bold' target='_blank'>
                        See live
                    </a>
                </Link>
            </main>
        </SiteLayout>
    )
}

// @ts-ignore
export function getServerSideProps({ query }) {
    const { slug } = query
    const project = projects.find((p) => p.slug === slug)

    if (!project) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            project
        }
    }
}