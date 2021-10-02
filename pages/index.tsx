import type { NextPage } from 'next'
import Head from 'next/head'
import { Content } from '../components/Content'
import { Experience } from '../components/Experience'
import { Project } from '../components/Project'
import { Socials } from '../components/Socials'
import styles from '../styles/Home.module.css'
import { Experience as IExperience } from '../types/experience'
import { Project as IProject } from '../types/project'
import { Skill } from '../types/Skill'

const SKILLS: { [key: string]: Skill } = {
  REACT: {
    name: 'React'
  },
  NEXT: {
    name: 'Next.js'
  },
  CONTENTFUL: {
    name: 'Contentful'
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
  }
};

const Home: NextPage = () => {

  const experiences: Array<IExperience> = [
    {
      position: 'Full Stack Engineer',
      company: 'Apolinar',
      dateStart: 'Jul 2020',
      dateEnd: 'Present',
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
      description: <p>
        Corebridge is a management tool for printing businesses. It's a large
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
      title: 'How I Became a Digital Nomad',
      imageUrl: '/content-digital-nomad.png',
      link: 'https://www.youtube.com/watch?v=ihb6Yu3zy40'
    }
  ];

  const projects: Array<IProject> = [
    {
      title: 'Dancer Tribe',
      link: 'https://dancertribe.com/',
      imageUrl: '/project-dancer-tribe.png',
      description: `
        Dancer Tribe helps dancers find dance studios worldwide
        including their schedule, pricing, reviews and photos.
        Studio owners can also manage their own pages.
      `,
      skills: [
        SKILLS.ANGULAR, SKILLS.FIREBASE, SKILLS.ALGOLIA, SKILLS.UIUX, SKILLS.TYPESCRIPT,
        SKILLS.SCSS
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Trisha Lim</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className="headline">
          <h1>
            Trisha Lim
          </h1>
          <img className="profile-image" src="/profile.png"/>
        </div>

        <br />

        <p>
          Hey, I'm Trisha! 👋
        </p>

        <p>
          I'm a Full Stack Engineer specializing in React + Next.js + TypeScript with
          5 years experience building single page applications.
          I'm dedicated to delivering great user experiences, writing clean code,
          and working closely with designers.
        </p>

        <p>
          I've worked on large B2B apps and content-managed websites for various clients in the US,
          New Zealand and Australia. I've mostly done this remotely, working with teams across
          different timezones.
        </p>

        <p>
          I'm currently living the island life at Koh Samui 🏝, Thailand.
        </p>

        <br />
        <br />

        <Socials />

        <br />
        <br />

        <h2>I worked at</h2>
          {
            experiences.map((e) => (
              <Experience content={e} />
            ))
          }
        <br />

        <h2>I built</h2>
        {
          projects.map((p) => <Project content={p} />)
        }
        <br />

        <h2>I talked about</h2>
        <div className="content-grid">
        {
          content.map((c) => <Content content={c} />)
        }
        </div>
        <br />
      </main>

    </div>
  )
}

export default Home
