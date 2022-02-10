import { Project } from "../types/project";
import { skills } from "./skills";

export const projects: Array<Project> = [
    {
        title: 'Dancer Tribe',
        link: 'https://dancertribe.com/',
        imageUrl: '/project-dancer-tribe.png',
        slug: 'dancer-tribe',
        description: `
        I designed and developed a worldwide directory of dance studios that include
        schedules, pricing, reviews and photos. It also allows studio owners add
        and manage their own pages.
      `,
        skills: [
            skills.ANGULAR, skills.FIREBASE, skills.ALGOLIA, skills.UIUX, skills.TYPESCRIPT,
            skills.SCSS
        ]
    },
    {
        title: 'Educaider',
        link: 'https://www.educaider.co.nz/',
        imageUrl: '/project-educaider.jpg',
        slug: 'educaider',
        description: `
        Educaider contains 800+ courses in New Zealand you can search from. I worked
        on implementing the design, adding a content-managed blog, search feature,
        course pages and campus pages.
      `,
        skills: [
            skills.REACT, skills.NEXT, skills.TYPESCRIPT, skills.CONTENTFUL, skills.ALGOLIA,
            skills.INSTANTSEARCHJS
        ]
    },
    {
        title: 'Dubber',
        link: 'https://www.dubber.net/',
        imageUrl: '/project-dubber.png',
        slug: 'dubber',
        description: `
        A content-managed marketing website and blog for Dubber -
        the world's leading provider of cloud-based call recording and voice AI.
        I worked on creating components for the CMS including the blog pages.
      `,
        skills: [
            skills.REACT, skills.NEXT, skills.TYPESCRIPT, skills.CONTENTFUL,
        ]
    },
    {
        title: 'New Zealand Management Academies (NZMA)',
        link: 'https://www.nzma.ac.nz/',
        imageUrl: '/project-nzma.jpg',
        slug: 'nzma',
        description: `
        NZMA offers a wide range of vocational courses in different industries
        such as hospitality, cookery, business, plumbing, etc. I implemented
        the designs.
      `,
        skills: [
            skills.REACT, skills.NEXT, skills.TYPESCRIPT, skills.CONTENTFUL,
        ]
    },
    {
        title: 'New Zealand School of Tourism',
        link: 'https://www2.nzschooloftourism.co.nz/',
        imageUrl: '/project-nzst.jpg',
        slug: 'nzst',
        description: `
        A content-managed marketing website and blog for New Zealand School of Tourism.
        I developed the CMS components needed to accomplish the design.
      `,
        skills: [
            skills.REACT, skills.NEXT, skills.TYPESCRIPT, skills.CONTENTFUL,
        ]
    },
    {
        title: 'Apolinar',
        link: 'https://apolinargroup.com',
        imageUrl: '/project-apolinar.jpeg',
        slug: 'apolinar',
        description: `
        Apolinar is an award-winning digital team in New Zealand. I worked on
        implementing the design of their landing page.
      `,
        skills: [
            skills.HTML, skills.SCSS, skills.JAVASCRIPT
        ]
    },
];