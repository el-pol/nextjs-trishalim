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
            <h1 className="font-bold text-4xl md:text-6xl">Timothy Jonathan</h1>
            <h2 className="my-3 text-xl sm:text-2xl">Full-Stack Engineer</h2>
          </div>
          <div className="my-5 mx-auto w-4/12 md:w-2/12">
            <div
              className="mx-auto h-32 w-32 rounded-full border-primary border-4 bg-cover bg-center"
              style={{
                backgroundImage: `url(/profile-guy.jpg)`,
              }}
            />
          </div>
        </div>

        <span id="about" className="block mb-8" />

        <section className="max-w-3xl">
          <p className="mb-3">Hey, I&apos;m Timothy! 👋</p>

          <p className="mb-3">
            I&apos;m a Full-Stach Engineer with 10+ years experience building
            large-scale web applications for Fortune 500 companies. I&apos;m a seasoned
            remote worker capable of working across timezones with teams of
            diverse backgrounds.
          </p>

          <p className="mb-8">
            I also publish articles about tech and life. If you&apos;re
            interested in working with me, you can{" "}
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
              Work with me
            </Button>
          </div>
        </section>

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
