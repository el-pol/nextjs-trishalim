import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { ReactElement } from "react"
import { faTwitter, faGithub, faLinkedin, faDev, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"

export const Socials = (): ReactElement => {

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

  return (
    <div className="flex items-center">
      {
        links.map((l) => (
          <Link href={l.link} key={l.link}>
            <a href={l.link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={l.icon} className="w-7 mr-5 hover:text-primary transition-colors" />
            </a>
          </Link>
        ))
      }
    </div>
  )
}