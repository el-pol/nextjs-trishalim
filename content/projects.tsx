import { Project } from "../types/project"
import { skills } from "./skills"
import React from "react"

const dancerTribe = {
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
        skills.angular, skills.firebase, skills.algolia, skills.ux, skills.typescript,
        skills.scss
    ],
    images: [
        '/project-dancer-tribe-1.png',
        '/project-dancer-tribe-2.png',
        '/project-dancer-tribe-3.png'
    ],
    testimonials: [
        // {
        //     name: 'Judith Black',
        //     position: 'CEO, Tuple',
        //     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a urna eu quam consectetur blandit. Morbi gravida vel nunc sed imperdiet. Aliquam sit amet tortor sem. Vivamus dapibus luctus elit, sit amet consectetur nisl vehicula vel. Nullam ut ex ut felis rhoncus convallis consectetur ac tellus.`,
        //     imageUrl: '/profile.png'
        // },
        //
        // {
        //     name: 'Judith Black',
        //     position: 'CEO, Tuple',
        //     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a urna eu quam consectetur blandit. Morbi gravida vel nunc sed imperdiet. Aliquam sit amet tortor sem. Vivamus dapibus luctus elit, sit amet consectetur nisl vehicula vel. Nullam ut ex ut felis rhoncus convallis consectetur ac tellus.`,
        //     imageUrl: '/profile.png'
        // }
    ],
}

const educaider = {
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
    ],
    images: [
        '/project-educaider-1.png',
        '/project-educaider-2.png',
        '/project-educaider-3.png',
    ]
}

const dubber = {
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
}

const ipinfo = {
    title: 'IPinfo',
    link: 'https://ipinfo.io/',
    imageUrl: '/project-ipinfo.jpg',
    slug: 'ipinfo',
    snippet: 'Marketing website and tools for making IP address data more usable',
    description: ``,
    images: [
        '/project-ipinfo-1.png',
        '/project-ipinfo-2.png',
        '/project-ipinfo-3.png',
    ],
    body: <>
        <p>
            IPinfo is the trusted source for IP address information, handling 40 billion
            IP geolocation API requests per month for over 1,000 businesses and 100,000+ developers.
        </p>
        <p>
            I worked on their design system to ensure that designs are translated well and
            accurately, and that components are created for maximum reusability. They were
            previously using jQuery and Bootstrap, so I refactored existing code to use
            modern technologies like React, Next.js and Tailwind - making the code easier
            to maintain and build on top of.
        </p>
        <p>
            I also worked on tools that make their IP address data more usable, helping users
            apply IP insights better and test data precision. The following tools are:
        </p>
    </>,
    links: [
        'https://ipinfo.io/tools/summarize-ips',
        'https://ipinfo.io/tools/map',
        'https://ipinfo.io/tools/cidr-to-ip-range-converter',
        'https://ipinfo.io/tools/reverse-dns-lookup',
        'https://ipinfo.io/tools/pingable-ips'
    ]
}

const nzma = {
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
}

const nzst = {
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
}

const apolinar = {
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
}

export const projects: { [key: string]: Project } = {
    'dancer-tribe': {
        ...dancerTribe,
        otherProjects: [educaider, ipinfo, nzst]
    },
    educaider: {
        ...educaider,
        otherProjects: [dubber, nzma, apolinar]
    },
    dubber: {
        ...dubber,
        otherProjects: [dancerTribe, apolinar, ipinfo]
    },
    ipinfo: {
        ...ipinfo,
        otherProjects: [nzst, dubber, dancerTribe]
    },
    nzma: {
        ...nzma,
        otherProjects: [ipinfo, educaider, dancerTribe]
    },
    nzst: {
        ...nzst,
        otherProjects: [ipinfo, dubber, apolinar]
    },
    apolinar: {
        ...apolinar,
        otherProjects: [dubber, dancerTribe, educaider]
    }
}