import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { ReactElement } from "react"
import { faTwitter, faGithub, faLinkedin, faDev, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"

export const Socials = (props: {
  size?: 'sm' | 'md'
  className?: string
}): ReactElement => {
  const { size = 'md', className = '' } = props

  const links = [
    {
      icon: faTwitter,
      link: 'https://twitter.com/trishathecookie',
      title: 'Twitter'
    },
    {
      icon: faDev,
      link: 'https://dev.to/trishathecookie',
      title: 'Dev.to'
    },
    {
      icon: faGithub,
      link: 'https://github.com/trishalim',
      title: 'GitHub'
    },
    {
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/trisha-jean-lim/',
      title: 'LinkedIn'
    },
    {
      icon: faInstagram,
      link: 'https://www.instagram.com/thetrishalim/',
      title: 'Instagram'
    },
    {
      icon: faEnvelope,
      link: 'mailto:hello@trishalim.com',
      title: 'Email'
    }
  ]

  const containerClass = {
    sm: 'space-x-3',
    md: 'space-x-5'
  }

  const iconClass = {
    sm: 'w-5',
    md: 'w-7'
  }

  return (
    <div className={`${className} flex ${containerClass[size]}`}>
      {
        links.map((l) => (
          <Link href={l.link} key={l.link}>
            <a href={l.link} target="_blank" rel="noreferrer" aria-label={l.title}>
              <FontAwesomeIcon icon={l.icon} className={`hover:text-primary transition-colors ${iconClass[size]}`} />
            </a>
          </Link>
        ))
      }
    </div>
  )
}