import { useRouter } from 'next/router'
import { projects } from '../../content/projects'
import { Project } from '../../types/project'
import { Skill } from '../../components/Skill'

interface ProjectPageProps {
    project: Project;
}

export default function ProjectPage(props: ProjectPageProps) {
    const { project } = props
    const { title, description, imageUrl, skills } = project
    return (
        <div className='container mx-auto py-24'>
            <img src={imageUrl} />
            <h2 className="my-5 text-xl">{title}</h2>
            {
                skills &&
                <div className="flex flex-wrap mb-2">
                    {skills.map((s) => <Skill key={s.name} content={s} />)}
                </div>
            }
            <p>{description}</p>
        </div>
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