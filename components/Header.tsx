import Link from "next/link";
import React, {ReactElement} from "react";
import {Menu} from '@headlessui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from '@fortawesome/free-solid-svg-icons'
export const Header = (): ReactElement => {
    const links = [
        {
            title: 'Home',
            url: '/',
        },
        {
            title: 'About',
            url: '/#about',
        },
        {
            title: 'Experience',
            url: '/experience',
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
        <>
            <div className='md:hidden px-3 py-1 fixed flex justify-between items-center w-full bg-gray-100 sticky top-0 shadow bg-opacity-80 z-50 '  style={{
                backdropFilter: `saturate(180%) blur(20px)`
            }}>
                <div>
                    <Link href='/' passHref>
                        <a className='text-xl font-semibold'>Trisha Lim</a>
                    </Link>
                </div>
                <div className='relative'>
                    <Menu>
                        <Menu.Button>
                            <span className='inline-block px-4 py-2.5 rounded text-pink mt-1'>
                                <FontAwesomeIcon icon={faBars} className="w-3.5" />
                            </span>
                        </Menu.Button>
                        <Menu.Items>
                            <ul className='absolute top-full right-0 bg-white shadow-lg rounded py-2 w-48'>
                                {links.map((link) => (
                                    <Menu.Item key={link.url}>
                                        <Link href={link.url} passHref>
                                            <a className="block text-pink font-semibold py-1.5 px-5 opacity-80 hover:opacity-100 text-sm hover:bg-gray-50 transition">{link.title}</a>
                                        </Link>
                                    </Menu.Item>
                                ))}
                            </ul>
                        </Menu.Items>
                    </Menu>
                </div>
            </div>
            <div className="w-full bg-gray-100 sticky top-0 hidden md:block shadow bg-opacity-80 z-50" style={{
                backdropFilter: `saturate(180%) blur(20px)`
            }}>
                <div className="container px-5 py-4 mx-auto max-w-3xl text-center">
                    {
                        links.map((link) => (
                            <Link href={link.url} key={link.url}>
                                <a href={link.url}
                                   className="text-pink font-semibold uppercase p-5 opacity-80 hover:opacity-100 tracking-wider text-xs">{link.title}</a>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Header;