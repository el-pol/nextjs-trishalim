import {projects} from "../../content/projects"
import {Project} from "../../components/Project"
import React from "react"
import SiteLayout from "../../components/SiteLayout"

const ProjectsPage = () => {
    return (
        <SiteLayout>
            <main className="container py-10 lg:py-16">
                <h2 className="mb-8">Projects</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {Object.keys(projects).map((key) => (
                        <div
                            key={projects[key].link}>
                            <Project content={projects[key]} />
                        </div>
                    ))}
                </div>
            </main>
        </SiteLayout>
    )
}

export default ProjectsPage