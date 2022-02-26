import type { NextPage } from "next";
import React from "react";
import Post from "../components/Post";
import Experience from "../components/Experience";
import Project from "../components/Project";
import SiteLayout from "../components/SiteLayout";
import Socials from "../components/Socials";
import { experiences } from "../content/experiences";
import { posts } from "../content/posts";
import { projects } from "../content/projects";
import Button from "../components/Button";
import { services } from "../content/services";
import Service from "../components/Service";
import SkillLogos from "../components/SkillLogos";

const Home: NextPage = () => {
  return (
    <SiteLayout>
      <main className="container py-5 lg:py-12">
        <div className="flex w-full justify-between items-center flex-wrap flex-row-reverse md:flex-row mt-8">
          <div className="my-5 text-center md:text-left w-full md:w-10/12">
            <h1 className="font-bold text-5xl md:text-6xl">Trisha Lim</h1>
            <h2 className="my-3 text-xl sm:text-2xl">Frontend Engineer ✨</h2>
          </div>
          <div className="my-5 mx-auto w-4/12 md:w-2/12">
            <img
              src="/profile.png"
              alt="Trisha Lim"
              width={144}
              className="mx-auto rounded-full border-primary border-4 overflow-hidden"
            />
          </div>
        </div>

        <span id="about" className="block mb-8" />

        <section className="max-w-3xl">
          <p className="mb-3">Hey, I&apos;m Trisha! 👋</p>

          <p className="mb-3">
            I&apos;m a Frontend Engineer specializing in React + Next.js +
            TypeScript with 6+ years experience building interactive web
            applications. I&apos;m dedicated to delivering great user
            experiences by working closely with designers, and writing good
            quality code to maintain a good developer experience.
          </p>

          <p className="mb-3">
            I&apos;ve worked on large B2B apps and content-managed websites for
            clients in the US, New Zealand and Australia. I&apos;m a seasoned
            remote worker capable of working across timezones with teams of
            diverse backgrounds.
          </p>

          <p className="mb-8">
            I also publish articles about tech and life. I recently wrote about{" "}
            <a
              href="https://dev.to/trishathecookie/css-tricks-to-create-that-dark-futuristic-web3-look-53bm"
              target="_blank"
              className="text-primary underline hover:no-underline font-semibold"
              rel="noreferrer"
            >
              CSS in Web3
            </a>{" "}
            and{" "}
            <a
              href="https://dev.to/trishathecookie/react-creating-a-reusable-form-using-react-context-5eof"
              target="_blank"
              className="text-primary underline hover:no-underline font-semibold"
              rel="noreferrer"
            >
              learning React Context
            </a>
            . If you&apos;re interested in working with me, you can{" "}
            <a
              href="mailto:hello@trishalim.com"
              className="text-primary underline hover:no-underline font-semibold"
            >
              send me an email
            </a>
            .
          </p>
        </section>

        <Socials />

        <section className="my-16">
          <h2 className="mb-8">Projects</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {Object.keys(projects)
              .slice(0, 3)
              .map((key) => (
                <div key={projects[key].link}>
                  <Project content={projects[key]} />
                </div>
              ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button href="/projects">See all projects</Button>
          </div>
        </section>

        <section className="my-16">
          <h2 className="mb-8">Services</h2>

          <div className="grid md:grid-cols-3 gap-5">
            {services.map((service) => (
              <Service key={service.title} content={service} />
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              href="mailto:hello@trishalim.com"
              className="mx-auto mt-8"
              icon="fa-solid:envelope"
            >
              Inquire by email
            </Button>
          </div>
        </section>

        <section className="my-16">
          <h2 className="mb-8">Skills</h2>

          <SkillLogos className="max-w-3xl justify-center gap-8 text-3xl md:text-4xl m-auto" />
        </section>

        <section className="my-16">
          <h2 className="mb-8">Experience</h2>
          <div>
            {experiences.map((e) => (
              <Experience content={e} key={e.company} />
            ))}

            <div className="flex justify-center">
              <Button href="/experience">Learn more</Button>
            </div>
          </div>
        </section>

        <section className="my-16">
          <h2 className="mb-8">Latest Posts</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((c) => (
              <div key={c.link}>
                <Post content={c} />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button href="/blog">See all posts</Button>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
};

export default Home;
