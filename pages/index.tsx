import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Content } from '../components/Content'
import { Experience } from '../components/Experience'
import Header from '../components/Header'
import { Project } from '../components/Project'
import { Socials } from '../components/Socials'
import { Experience as IExperience } from '../types/experience'
import { Project as IProject } from '../types/project'
import { Skill } from '../types/skill'

const SKILLS: { [key: string]: Skill } = {
  REACT: {
    name: 'React'
  },
  NEXT: {
    name: 'Next.js'
  },
  CONTENTFUL: {
    name: 'Contentful CMS'
  },
  ANGULAR: {
    name: 'Angular'
  },
  HTML: {
    name: 'HTML'
  },
  CSS: {
    name: 'CSS'
  },
  JAVASCRIPT: {
    name: 'JavaScript'
  },
  TYPESCRIPT: {
    name: 'TypeScript'
  },
  SCSS: {
    name: 'SCSS'
  },
  LESS: {
    name: 'LESS'
  },
  GIT: {
    name: 'Git'
  },
  FIREBASE: {
    name: 'Firebase'
  },
  MYSQL: {
    name: 'MySQL'
  },
  ALGOLIA: {
    name: 'Algolia'
  },
  BOOTSTRAP: {
    name: 'Bootstrap'
  },
  SPRING: {
    name: 'Spring'
  },
  JAVA: {
    name: 'Java'
  },
  REDUX: {
    name: 'Redux'
  },
  CPP: {
    name: 'C++'
  },
  SCRUM: {
    name: 'Scrum'
  },
  UIUX: {
    name: 'UI/UX Design',
  },
  INSTANTSEARCHJS: {
    name: 'InstantSearch.js'
  }
};

const Home: NextPage = () => {

  const experiences: Array<IExperience> = [
    {
      position: 'Full-Stack Engineer',
      company: 'Apolinar',
      dateStart: 'Jul 2020',
      dateEnd: 'Present',
      link: 'https://apolinargroup.com/',
      description: <>
        <p>
          Apolinar is an award-winning digital team in New Zealand. We create
          content-managed websites for clients in various sectors like
          healthcare, education, NGO and tech. 
        </p>
        <p>
          I work on these sites, implementing pixel-perfect designs across
          multiple devices and browsers, while providing a good user experience for
          content editors on the backend in Contentful.
        </p>
      </>,
      skills: [
        SKILLS.REACT, SKILLS.NEXT, SKILLS.CONTENTFUL, SKILLS.ANGULAR, SKILLS.SCSS, SKILLS.LESS,
        SKILLS.TYPESCRIPT, SKILLS.BOOTSTRAP, SKILLS.ALGOLIA, SKILLS.REDUX
      ]
    },
    {
      position: 'Frontend Engineer',
      company: 'Corebridge',
      dateStart: 'May 2019',
      dateEnd: 'Jul 2020',
      link: 'https://corebridge.net/',
      description: <p>
        Corebridge is a management tool for printing businesses. It&apos;s a large
        complex web app that calculates orders based on a number of costs
        like labor, machine, materials, etc. I worked on the frontend side 
        using Angular with a team of 30+ devs and led tasking of user stories. 
      </p>,
      skills: [
        SKILLS.ANGULAR, SKILLS.JAVASCRIPT, SKILLS.TYPESCRIPT, SKILLS.GIT, SKILLS.SCRUM
      ]
    },
    {
      position: 'Web Developer',
      company: 'Catapult',
      dateStart: 'Apr 2017',
      dateEnd: 'Mar 2019',
      link: 'https://www.magaya.com/catapult-freight-rate-management-software/',
      description: <p>
        I worked on a single page app for logistics quote management.
        I designed and developed a drag and drop form builder which allowed
        for users to resize and format various elements in the form.
      </p>,
      skills: [
        SKILLS.ANGULAR, SKILLS.UIUX, SKILLS.JAVASCRIPT, SKILLS.TYPESCRIPT, SKILLS.SPRING, SKILLS.JAVA
      ]
    },
    {
      position: 'Firmware Engineer',
      company: 'Lexmark Research & Development',
      dateStart: 'May 2016',
      dateEnd: 'Mar 2017',
      link: 'https://www.lexmark.com/en_us.html',
      description: <p>
        I developed UI for printers using C++ in a Linux environment.
      </p>,
      skills: [
        SKILLS.CPP, SKILLS.GIT, SKILLS.SCRUM
      ]
    },
    {
      position: 'Software Engineer (Intern)',
      company: 'Azeus',
      dateStart: 'Apr 2015',
      dateEnd: 'May 2015',
      link: 'https://www.azeus.com/',
      description: <p>
        I underwent trainings on React and SQL, then developed a web app
        using said technologies.
      </p>,
      skills: [
        SKILLS.REACT, SKILLS.MYSQL, SKILLS.SPRING, SKILLS.JAVA
      ]
    }
  ];

  const content = [
    {
      title: 'React: How to create a reusable form using React Context',
      imageUrl: '/content-react-context.png',
      link: 'https://dev.to/trishathecookie/react-creating-a-reusable-form-using-react-context-5eof'
    },
    {
      title: 'How I became a digital nomad',
      imageUrl: '/content-digital-nomad.png',
      link: 'https://www.youtube.com/watch?v=ihb6Yu3zy40'
    },
    {
      title: `Best Investments I've Made Before 25`,
      imageUrl: 'https://images.unsplash.com/photo-1616077168639-f770d830e3d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDEzNXx8c3RvY2tzfGVufDB8fHx8MTYzMzc2NzI0OQ&ixlib=rb-1.2.1&q=80&w=800',
      link: 'https://trisha-lim.ghost.io/best-investments-ive-made-before-25/',
    },
    {
      title: 'Magical Sakura Days in Japan',
      imageUrl: 'https://trisha-lim.ghost.io/content/images/size/w800/2021/10/DSC3989-1.jpeg',
      link: 'https://trisha-lim.ghost.io/magical-sakura-days-in-kyoto-japan/'
    }
  ];

  const projects: Array<IProject> = [
    {
      title: 'Dancer Tribe',
      link: 'https://dancertribe.com/',
      imageUrl: '/project-dancer-tribe.png',
      description: `
        I designed and developed a worldwide directory of dance studios that include
        schedules, pricing, reviews and photos. It also allows studio owners add
        and manage their own pages.
      `,
      skills: [
        SKILLS.ANGULAR, SKILLS.FIREBASE, SKILLS.ALGOLIA, SKILLS.UIUX, SKILLS.TYPESCRIPT,
        SKILLS.SCSS
      ]
    },
    {
      title: 'Educaider',
      link: 'https://www.educaider.co.nz/',
      imageUrl: '/project-educaider.jpg',
      description: `
        Educaider contains 800+ courses in New Zealand you can search from. I worked
        on implementing the design, adding a content-managed blog, search feature,
        course pages and campus pages.
      `,
      skills: [
        SKILLS.REACT, SKILLS.NEXT, SKILLS.TYPESCRIPT, SKILLS.CONTENTFUL, SKILLS.ALGOLIA,
        SKILLS.INSTANTSEARCHJS
      ]
    },
    {
      title: 'Dubber',
      link: 'https://www.dubber.net/',
      imageUrl: '/project-dubber.png',
      description: `
        A content-managed marketing website and blog for Dubber -
        the world's leading provider of cloud-based call recording and voice AI.
        I worked on creating components for the CMS including the blog pages.
      `,
      skills: [
        SKILLS.REACT, SKILLS.NEXT, SKILLS.TYPESCRIPT, SKILLS.CONTENTFUL,
      ]
    },
    {
      title: 'New Zealand Management Academies (NZMA)',
      link: 'https://www.nzma.ac.nz/',
      imageUrl: '/project-nzma.jpg',
      description: `
        NZMA offers a wide range of vocational courses in different industries
        such as hospitality, cookery, business, plumbing, etc. I implemented
        the designs.
      `,
      skills: [
        SKILLS.REACT, SKILLS.NEXT, SKILLS.TYPESCRIPT, SKILLS.CONTENTFUL,
      ]
    },
    {
      title: 'New Zealand School of Tourism',
      link: 'https://www2.nzschooloftourism.co.nz/',
      imageUrl: '/project-nzst.jpg',
      description: `
        A content-managed marketing website and blog for New Zealand School of Tourism.
        I developed the CMS components needed to accomplish the design.
      `,
      skills: [
        SKILLS.REACT, SKILLS.NEXT, SKILLS.TYPESCRIPT, SKILLS.CONTENTFUL,
      ]
    },
    {
      title: 'Apolinar',
      link: 'https://apolinargroup.com',
      imageUrl: '/project-apolinar.jpeg',
      description: `
        Apolinar is an award-winning digital team in New Zealand. I worked on
        implementing the design of their landing page.
      `,
      skills: [
        SKILLS.HTML, SKILLS.SCSS, SKILLS.JAVASCRIPT
      ]
    },
  ];

  const title = `Trisha Lim - Frontend Engineer`;
  const description = `Frontend Engineer with 5+ years experience working on single page applications using React, Next.js, TypeScript.`;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content="https://trishalim.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={title}
        />
        <meta name="twitter:card" content={description} />
        <meta
          property="og:description"
          content={description}
        />
        <meta property="og:image" content="/fb-social-share.jpg" />
        <script async src="https://platform.twitter.com/widgets.js"></script>
      </Head>

      <Header />
    
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
          5 years experience building single page applications.
          I&apos;m dedicated to delivering great user experiences by working closely with
          designers, and writing good quality code to maintain a good developer experience.
        </p>

        <p className="mb-3">
          I&apos;ve worked on large B2B apps and content-managed websites for clients in the US,
          New Zealand and Australia. I&apos;m a seasoned remote worker capable of working across timezones
          with teams of diverse backgrounds.
        </p>

        <p className="mb-8">
          I&apos;m looking for remote contract roles, preferrably a frontend role in web3.
          If you&apos;re interested in working with me, you can <a href="mailto:hello@trishalim.com"
            className="text-pink hover:underline">
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
        </div>

        <span id="projects" className="block pb-16" />

        <h2 className="mb-8">Projects</h2>
        <div className="flex flex-wrap -mx-6 -my-8">
          {
            projects.map((p) => <div key={p.link} className="w-full px-6 py-8 md:w-6/12"><Project content={p} /></div>)
          }
        </div>

        <span id="posts" className="block pb-20" />

        <h2 className="mb-8">Blog</h2>
        <div className="flex flex-wrap -mx-6 -my-8">
          {
            content.map((c) => <div key={c.link} className="w-full px-6 py-8 md:w-6/12"><Content content={c} /></div>)
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

    </div>
  )
}

export default Home
