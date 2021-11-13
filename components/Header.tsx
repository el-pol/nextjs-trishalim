import Link from "next/link";
import React, { ReactElement } from "react";

export const Header = (): ReactElement => {
  const links = [
    {
      title: 'About',
      url: '/#about',
    },
    {
      title: 'Experience',
      url: '/#experience',
    },
    {
      title: 'Projects',
      url: '/#projects',
    },
    {
      title: 'Posts',
      url: '/#posts',
    },
    {
      title: 'Contact',
      url: 'mailto:hello@trishalim.com'
    },
  ];

  return (
    <div className="w-full bg-pink sticky top-0 hidden md:block shadow-sm">
      <div className="container px-5 py-4 mx-auto max-w-3xl text-center">
      {
        links.map((link) => (
          <Link href={link.url} key={link.url}>
            <a href={link.url} className="text-white uppercase p-5 opacity-80 hover:opacity-100 tracking-wider text-xs">{link.title}</a>
          </Link>
        ))
      }
      </div>
    </div>
  )
}

export default Header;