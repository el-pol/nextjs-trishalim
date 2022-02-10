import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Content } from '../components/Content'
import Experience from '../components/Experience'
import Header from '../components/Header'
import { Project } from '../components/Project'
import SiteLayout from '../components/SiteLayout'
import { Socials } from '../components/Socials'
import { experiences } from '../content/experiences'
import { posts } from '../content/posts'
import { projects } from '../content/projects'
import { Experience as IExperience } from '../types/experience'
import { Project as IProject } from '../types/project'
import { Skill } from '../types/skill'

const Home: NextPage = () => {
  const title = `Trisha Lim - Frontend Engineer`;
  const description = `Frontend Engineer with 5+ years experience working on single page applications using React, Next.js, TypeScript.`;

  return (
    <SiteLayout>
      <main className="container p-5 lg:py-10 mx-auto max-w-3xl">

        <div className="flex w-full justify-between items-center flex-wrap flex-row-reverse md:flex-row mt-8">
          <div className="my-5 text-center md:text-left w-full md:w-10/12">
            <h1 className="font-bold">
              Trisha Lim
            </h1>
            <h2 className="my-3 text-2xl">Frontend Engineer ✨</h2>
          </div>
          <img className="my-5 mx-auto rounded-full w-6/12 sm:w-4/12 md:w-2/12 border-pink border-4" src="/profile.png" alt="Trisha Lim"/>
        </div>

        <span id="about" className="block mb-8" />

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
          target="_blank" className="text-pink underline hover:no-underline font-semibold" rel="noreferrer">CSS in Web3</a> and <a
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

        <Socials />

        <span id="experience" className="block pb-20" />

        <h2 className="mb-8">Experience</h2>
        <div>
        {
          experiences.map((e) => (
            <Experience content={e} key={e.company} />
          ))
        }

          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Link href='/experience' passHref>
              <a className="px-10 py-4 text-xl bg-black text-white hover:bg-pink rounded-xl transition-colors my-5">
                Read more
              </a>
            </Link>
          </div>
        </div>

        <span id="projects" className="block pb-16" />

        <h2 className="mb-8">Projects</h2>
        <div className="flex flex-wrap -mx-6 -my-8">
          {
            Object.keys(projects).map((key) => <div key={projects[key].link} className="w-full px-6 py-8 md:w-6/12"><Project content={projects[key]} /></div>)
          }
        </div>

        <span id="posts" className="block pb-20" />

        <h2 className="mb-8">Blog</h2>
        <div className="flex flex-wrap -mx-6 -my-8">
          {
            posts.map((c) => <div key={c.link} className="w-full px-6 py-8 md:w-6/12"><Content content={c} /></div>)
          }
        </div>

        <h2 className="mt-16 mb-8">I tweet...</h2>
        <div className="flex flex-wrap -m-3">
          <div className="w-full md:w-8/12 p-3"> 
            <blockquote className="twitter-tweet"><p lang="en" dir="ltr">The first tutorial I ever wrote made it to <a href="https://twitter.com/ThePracticalDev?ref_src=twsrc%5Etfw">@ThePracticalDev</a>&#39;s &quot;Top 7 Featured DEV Posts from the Past Week&quot;!<br/><br/>I&#39;m SO HAPPY. Thank you so much 👉👈<a href="https://t.co/noSfV7OWoR">https://t.co/noSfV7OWoR</a></p>&mdash; trishalim.eth (@trishathecookie) <a href="https://twitter.com/trishathecookie/status/1443067957400125445?ref_src=twsrc%5Etfw">September 29, 2021</a></blockquote>
          </div>
          
          {/* <div className="w-full md:w-8/12 p-3">
            <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Starting a new project today that I&#39;m excited about! The work is pretty simple, but I love making cool designs come to life. 😊</p>&mdash; trishalim.eth (@trishathecookie) <a href="https://twitter.com/trishathecookie/status/1455731771241234439?ref_src=twsrc%5Etfw">November 3, 2021</a></blockquote>
          </div>
          <div className="w-full md:w-8/12 p-3">
            <blockquote className="twitter-tweet"><p lang="en" dir="ltr">It’s the weekend. Do I want to learn Tailwind or do I want to start a blog? 🤷‍♀️</p>&mdash; trishalim.eth (@trishathecookie) <a href="https://twitter.com/trishathecookie/status/1446637531341021185?ref_src=twsrc%5Etfw">October 9, 2021</a></blockquote> 
          </div> */}
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Link href="mailto:hello@trishalim.com">
            <a href="mailto:hello@trishalim.com"
              className="px-10 py-4 text-xl bg-black text-white hover:bg-pink rounded-xl transition-colors my-20">
              Contact me
            </a>
          </Link>
        </div>

        <br />
        <br />
      </main>

    </SiteLayout>
  )
}

export default Home
