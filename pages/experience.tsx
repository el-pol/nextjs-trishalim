import Experience from '../components/Experience'
import SiteLayout from '../components/SiteLayout'
import { experiences } from '../content/experiences'
import Link from "next/link";
import { Skill } from "../components/Skill";
import { Project } from "../components/Project";

export default function ExperiencePage() {
    return (
        <SiteLayout>
            <main className='max-w-2xl py-20 mx-auto'>
                <h1 className='text-3xl mb-12'>Work Experience</h1>
                <div>
                    {
                        experiences.map((e) => (
                            <div className="mb-10" key={e.company}>
                                <div className="md:flex flex-wrap items-center justify-between">
                                    <div className="flex my-2">
                                        <h3 className="text-xl mr-5">
                                            <Link href={e.link}>
                                                <a href={e.link} target="_blank" rel="nofollow noreferrer">
                                                    {e.position} at {e.company}
                                                </a>
                                            </Link>
                                        </h3>
                                    </div>
                                    <p className="text-gray-500 text-sm my-2">{e.dateStart} - {e.dateEnd}</p>
                                </div>
                                <div className="my-5">
                                    {e.description}
                                </div>
                                <div>
                                    <div className="mt-5 flex flex-wrap">
                                        {
                                            e.skills.map((s) => <Skill key={s.name} content={s} />)
                                        }
                                    </div>
                                </div>

                                {e.projects?.length && (
                                    <>
                                        <h2 className='text-gray-500 text-sm font-normal my-5'>Projects</h2>
                                        <div className="flex flex-wrap -mx-6 -my-8">
                                            {
                                                e.projects.map((p) => (
                                                    <div key={p.link} className="w-full px-6 py-8 md:w-6/12"><Project content={p} /></div>
                                                ))
                                            }
                                        </div>
                                    </>
                                )}
                            </div>
                        ))
                    }
                </div>
            </main>
        </SiteLayout>
    )
}