import { Project } from "../types/project";
import { skills } from "./skills";

export const projects: { [key: string]: Project } = {
    'dancer-tribe': {
        title: 'Dancer Tribe',
        link: 'https://dancertribe.com/',
        imageUrl: '/project-dancer-tribe.png',
        slug: 'dancer-tribe',
        description: `
        I designed and developed a worldwide directory of dance studios that include
        schedules, pricing, reviews and photos. It also allows studio owners add
        and manage their own pages.
      `,
        snippet: 'A directory of dance studios',
        skills: [
            skills.angular, skills.firebase, skills.algolia, skills.uiux, skills.typescript,
            skills.scss
        ],
    },
    'educaider': {
        title: 'Educaider',
        link: 'https://www.educaider.co.nz/',
        imageUrl: '/project-educaider.jpg',
        slug: 'educaider',
        description: `
        Educaider contains 800+ courses in New Zealand you can search from. I worked
        on implementing the design, adding a content-managed blog, search feature,
        course pages and campus pages.
      `,
        snippet: 'Explore 800+ courses in New Zealand',
        skills: [
            skills.react, skills.next, skills.typescript, skills.contentful, skills.algolia,
            skills.instantsearchjs
        ]
    },
    'dubber': {
        title: 'Dubber',
        link: 'https://www.dubber.net/',
        imageUrl: '/project-dubber.png',
        slug: 'dubber',
        description: `
        A content-managed marketing website and blog for Dubber -
        the world's leading provider of cloud-based call recording and voice AI.
        I worked on creating components for the CMS including the blog pages.
      `,
        snippet: `Marketing website for the world's leading provider of cloud-based call recording and voice AI`,
        skills: [
            skills.react, skills.next, skills.typescript, skills.contentful,
        ]
    },
    'nzma': {
        title: 'New Zealand Management Academies (NZMA)',
        link: 'https://www.nzma.ac.nz/',
        imageUrl: '/project-nzma.jpg',
        slug: 'nzma',
        snippet: 'Marketing website for NZMA - a school offering vocational courses in New Zealand',
        description: `
        NZMA offers a wide range of vocational courses in different industries
        such as hospitality, cookery, business, plumbing, etc. I implemented
        the designs.
      `,
        skills: [
            skills.react, skills.next, skills.typescript, skills.contentful,
        ]
    },
    'nzst': {
        title: 'New Zealand School of Tourism',
        link: 'https://www2.nzschooloftourism.co.nz/',
        imageUrl: '/project-nzst.jpg',
        slug: 'nzst',
        snippet: 'A content-managed website for NZST',
        description: `
        A content-managed marketing website and blog for New Zealand School of Tourism.
        I developed the CMS components needed to accomplish the design.
      `,
        skills: [
            skills.react, skills.next, skills.typescript, skills.contentful,
        ]
    },
    'apolinar': {
        title: 'Apolinar',
        link: 'https://apolinargroup.com',
        imageUrl: '/project-apolinar.jpeg',
        slug: 'apolinar',
        snippet: 'Marketing website for Apolinar Group - a web agency in New Zealand',
        description: `
        Apolinar is an award-winning digital team in New Zealand. I worked on
        implementing the design of their landing page.
      `,
        skills: [
            skills.html, skills.scss, skills.javascript
        ]
    },
}