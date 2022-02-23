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
      link: 'https://twitter.com/trishathecookie'
    },
    {
      icon: faDev,
      link: 'https://dev.to/trishathecookie'
    },
    {
      icon: faGithub,
      link: 'https://github.com/trishalim'
    },
    {
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/trisha-jean-lim/'
    },
    {
      icon: faInstagram,
      link: 'https://www.instagram.com/thetrishalim/',
    },
    {
      icon: faEnvelope,
      link: 'mailto:hello@trishalim.com'
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
            <a href={l.link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={l.icon} className={`hover:text-primary transition-colors ${iconClass[size]}`} />
            </a>
          </Link>
        ))
      }
    </div>
  )
}