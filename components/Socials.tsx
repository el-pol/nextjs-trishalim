import React, { ReactElement } from "react";
import Link from "next/link";
import Icon from "./Icon";

const Socials = (props: {
  size?: "sm" | "md";
  className?: string;
}): ReactElement => {
  const { size = "md", className = "" } = props;

  const links = [
    {
      icon: "fa6-brands:twitter",
      link: "https://twitter.com/trishathecookie",
      title: "Twitter",
    },
    {
      icon: "fa6-brands:dev",
      link: "https://dev.to/trishathecookie",
      title: "Dev.to",
    },
    {
      icon: "fa6-brands:github",
      link: "https://github.com/trishalim",
      title: "GitHub",
    },
    {
      icon: "fa6-brands:linkedin",
      link: "https://www.linkedin.com/in/trisha-jean-lim/",
      title: "LinkedIn",
    },
    {
      icon: "fa6-brands:instagram",
      link: "https://www.instagram.com/thetrishalim/",
      title: "Instagram",
    },
    {
      icon: "fa-solid:envelope",
      link: "mailto:hello@trishalim.com",
      title: "Email",
    },
  ];

  const containerClass = {
    sm: "space-x-3 text-xl",
    md: "space-x-4 text-2xl",
  };

  return (
    <div className={`${className} flex ${containerClass[size]}`}>
      {links.map((l) => (
        <Link href={l.link} key={l.link}>
          <a
            href={l.link}
            target="_blank"
            rel="noreferrer"
            aria-label={l.title}
          >
            <Icon
              icon={l.icon}
              className={"hover:text-primary transition-colors}"}
            />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
