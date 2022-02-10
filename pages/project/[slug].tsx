import { useRouter } from 'next/router'
import { projects } from '../../content/projects'
import { Project } from '../../types/project'
import { Skill } from '../../components/Skill'
import SiteLayout from '../../components/SiteLayout'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

interface ProjectPageProps {
    project: Project;
}

export default function ProjectPage(props: ProjectPageProps) {
    const { project } = props
    const { title, description, imageUrl, skills, link } = project
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
            <main className='max-w-2xl px-3 mx-auto py-16'>
                <div className='flex justify-between items-center mb-8'>
                    <h1 className="text-lg md:text-3xl">{title}</h1>
                    <span className='hidden md:flex'>
                        {button}
                    </span>
                </div>
                <img src={imageUrl} className='rounded mb-5' alt={`${title} screenshot`} />
                {
                    skills &&
                    <div className="flex flex-wrap mb-2">
                        {skills.map((s) => <Skill key={s.name} content={s} />)}
                    </div>
                }
                <p>{description}</p>

                <div className='md:hidden flex justify-center my-10 w-full'>{button}</div>
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
            project
        }
    }
}