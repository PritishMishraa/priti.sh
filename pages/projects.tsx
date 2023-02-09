import Container from "components/Container";
import ProjectCard from "components/ProjectCard";
import projects from '../utils/projects.json'

export default function Projects() {
    return (
        <Container
            title="Projects – Pritish Mishra"
            description="All my learnings."
        >
            <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
                <h1 className="mb-4 text-5xl font-bold tracking-tight text-black dark:text-white">
                    Projects
                </h1>
                <p className="mb-10 text-gray-600 dark:text-gray-400">
                    These are all projects I made while learing fullstack development. Each project presented here showcases my skills and abilities as a web developer, as well as my passion for creating engaging and user-friendly websites.
                </p>
                <div className="flex flex-col w-full gap-8">
                    {projects.map(project => {
                        return <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            gradient={project.gradient}
                            tech={project.tech}
                            githubLink={project.githubLink}
                            hostedLink={project.hostedLink}
                            isMigrating={project.isMigrating}
                        />
                    })}
                </div>
            </div>
        </Container>
    );
}