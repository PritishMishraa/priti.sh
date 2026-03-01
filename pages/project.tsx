import Container from 'components/Container';
import ProjectCard from 'components/ProjectCard';

export default function Projects() {
  return (
    <Container
      title="Projects – Pritish Mishra"
      description="Things I've built."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-12 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl dark:text-stone-100">
          Projects
        </h1>
        <div className="flex flex-col w-full">
          <ProjectCard
            title="smoll.host"
            description="A simple web hosting service that allows you to deploy HTML projects with a simple drag and drop."
            tech={['Next.js', 'AWS S3', 'TypeScript']}
            githubLink="https://github.com/PritishMishraa/smoll-host"
            hostedLink="https://smoll-host.vercel.app/"
          />
          <ProjectCard
            title="Streakks"
            description="A task management app with GitHub commit heat map like calendar to show your consistency."
            tech={['Next.js', 'Zustand', 'TypeScript']}
            githubLink="https://github.com/PritishMishraa/streaks"
            hostedLink="https://streakks.vercel.app/"
          />
          <ProjectCard
            title="SQL Editor"
            description="A simple SQL editor for quickly running SQL queries on your local SQLite databases."
            tech={['Go', 'React', 'Tailwind CSS']}
            githubLink="https://github.com/PritishMishraa/sql-editor"
            hostedLink="https://github.com/PritishMishraa/sql-editor"
          />
          <ProjectCard
            title="GATE CSE Tracker"
            description="A platform that helps GATE CSE aspirants to track their progress from free YouTube resources."
            tech={['Next.js', 'TypeScript', 'Tailwind CSS']}
            githubLink="https://github.com/PritishMishraa/gatecsetracker"
            hostedLink="https://gatecsetracker.vercel.app/"
          />
          <ProjectCard
            title="marcam"
            description="A minimalistic and open source LeetCode bookmarker."
            tech={['Next.js', 'React Query', 'PostgreSQL']}
            githubLink="https://github.com/PritishMishraa/marcam"
            hostedLink="https://marcam.vercel.app/"
          />
          <ProjectCard
            title="Code Task"
            description="A platform that integrates LeetCode and Todoist to help track coding practice."
            tech={['Next.js', 'NextAuth', 'Prisma']}
            githubLink="https://github.com/PritishMishraa/code-task"
            hostedLink="https://codetask.vercel.app/"
          />
          <ProjectCard
            title="add-shebangs"
            description="A CLI tool that adds shebang commands to your files without remembering the syntax."
            tech={['Node.js', 'CLI', 'NPM']}
            githubLink="https://github.com/PritishMishraa/add-shebangs"
            hostedLink="https://www.npmjs.com/package/add-shebangs"
          />
        </div>
      </div>
    </Container>
  );
}
