import type {NextPage} from 'next'
import Link from 'next/link'
import React from 'react'
import {Content} from '../components/Content'
import Experience from '../components/Experience'
import {Project} from '../components/Project'
import SiteLayout from '../components/SiteLayout'
import {Socials} from '../components/Socials'
import {experiences} from '../content/experiences'
import {posts} from '../content/posts'
import {projects} from '../content/projects'

const Home: NextPage = () => {
    return (
        <SiteLayout>
            <main className="max-w-4xl p-5 lg:py-10 mx-auto">

                <div className="flex w-full justify-between items-center flex-wrap flex-row-reverse md:flex-row mt-8">
                    <div className="my-5 text-center md:text-left w-full md:w-10/12">
                        <h1 className="font-bold text-4xl sm:text-6xl">
                            Trisha Lim
                        </h1>
                        <h2 className="my-3 text-xl  sm:text-2xl">Frontend Engineer ✨</h2>
                    </div>
                    <img className="my-5 mx-auto rounded-full w-4/12 md:w-2/12 border-pink border-4"
                         src="/profile.png" alt="Trisha Lim"/>
                </div>

                <span id="about" className="block mb-8"/>

                <section className='max-w-3xl'>
                    <p className="mb-3">
                        Hey, I&apos;m Trisha! 👋
                    </p>

                    <p className="mb-3">
                        I&apos;m a Frontend Engineer specializing in React + Next.js + TypeScript with
                        5+ years experience building single page applications.
                        I&apos;m dedicated to delivering great user experiences by working closely with
                        designers, and writing good quality code to maintain a good developer experience.
                    </p>

                    <p className="mb-3">
                        I&apos;ve worked on large B2B apps and content-managed websites for clients in the US,
                        New Zealand and Australia. I&apos;m a seasoned remote worker capable of working across timezones
                        with teams of diverse backgrounds.
                    </p>

                    <p className="mb-8">
                        I also publish articles about tech and life. I recently wrote about <a
                        href="https://dev.to/trishathecookie/css-tricks-to-create-that-dark-futuristic-web3-look-53bm"
                        target="_blank" className="text-pink underline hover:no-underline font-semibold" rel="noreferrer">CSS
                        in Web3</a> and <a
                        href="https://dev.to/trishathecookie/react-creating-a-reusable-form-using-react-context-5eof"
                        target="_blank" className="text-pink underline hover:no-underline font-semibold" rel="noreferrer">
                        learning React Context
                    </a>. If you&apos;re interested in working with me, you can <a href="mailto:hello@trishalim.com"
                                                                                   className="text-pink underline hover:no-underline font-semibold">
                        send me an email
                    </a>.
                    </p>

                    <p className="mb-12">
                        📍 Koh Samui, Thailand.
                    </p>
                </section>


                <Socials/>

                <span id="projects" className="block pb-16"/>

                <h2 className="mb-8">Projects</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {Object.keys(projects).map((key) => (
                        <div
                            key={projects[key].link}>
                            <Project content={projects[key]} />
                        </div>
                    ))}
                </div>

                <span id="experience" className="block pb-20"/>

                <h2 className="mb-8">Experience</h2>
                <div>
                    {
                        experiences.map((e) => (
                            <Experience content={e} key={e.company}/>
                        ))
                    }

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Link href='/experience' passHref>
                            <a className="font-semibold border-2 border-pink bg-pink hover:bg-white hover:text-pink text-white px-6 py-2 rounded transition mt-5">
                                Learn more
                            </a>
                        </Link>
                    </div>
                </div>

                <span id="blog" className="block pb-20"/>

                <h2 className="mb-8">Blog</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {
                        posts.map((c) => <div key={c.link}><Content content={c}/>
                        </div>)
                    }
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Link href="mailto:hello@trishalim.com">
                        <a href="mailto:hello@trishalim.com"
                           className="font-semibold border-2 border-pink bg-pink hover:bg-white hover:text-pink text-white px-6 py-2 rounded transition my-20">
                            Contact me
                        </a>
                    </Link>
                </div>
            </main>

        </SiteLayout>
    )
}

export default Home
