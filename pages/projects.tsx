import Container from 'components/Container';
import ProjectCard from 'components/ProjectCard';

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
          These are all projects I made while learning fullstack development.
          Each project presented here showcases my skills and abilities as a web
          developer, as well as my passion for creating engaging and
          user-friendly websites.
        </p>
        <div className="flex flex-col w-full gap-8">
          <ProjectCard
            title="GATE CSE Tracker"
            description="A platform that helps GATE CSE aspirants to track their progress and streamline their preparation from free YouTube resources. Currently cruising at 14K page views."
            gradient="from-[#696eff] to-[#f8acff]"
            tech={[
              'NextJS 13',
              'TypeScript',
              'TailwindCSS',
              'APIs',
              'Scraping'
            ]}
            githubLink="https://github.com/PritishMishraa/gatecsetracker"
            hostedLink="https://gatecsetracker.vercel.app/"
            isWIP={true}
          />
          <ProjectCard
            title="ThreadCraft"
            description="Seamlessly transform Twitter Threads to captivating LinkedIn Carousels"
            gradient="from-[#f5e6ad] to-[#f13c77]"
            tech={['TypeScript', 'NextJS', 'TailwindCSS', 'APIs']}
            githubLink="https://github.com/PritishMishraa/thread-to-carousel"
            hostedLink="https://thread-to-carousel.vercel.app/"
            isWIP={true}
          />
          <ProjectCard
            title="priti.sh"
            description="My personal website ✨. It is a static website built using NextJS and TailwindCSS. It is hosted on Vercel."
            gradient="from-[#239eab] to-[#74deee]"
            tech={['TypeScript', 'NextJS', 'TailwindCSS']}
            githubLink="https://github.com/PritishMishraa/priti.sh"
            hostedLink="https://priti-sh.vercel.app/"
          />
          <ProjectCard
            title="Code Task"
            description="A platform that integrates LeetCode and Todoist using APIs and makes it easy for the user to keep track of his coding practice."
            gradient="from-[#ff0f7b] to-[#f89b29]"
            tech={['TypeScript', 'NextJS', 'NextAuth', 'Prisma', 'TailwindCSS']}
            githubLink="https://github.com/PritishMishraa/code-task"
            hostedLink="https://codetask.vercel.app/"
          />
          <ProjectCard
            title="Ideas Grab API"
            description="An API built for the famous website IdeasGrab by David Delahunty. It is a collection of more than 3,600 project ideas to inspire you to create."
            gradient="from-[#0061ff] to-[#60efff]"
            tech={['NodeJS', 'ExpressJS', 'MongoDB']}
            githubLink="https://github.com/PritishMishraa/ideas-grab-api"
            hostedLink="https://ideas-grab-api.herokuapp.com/"
            isMigrating={true}
          />
          <ProjectCard
            title="Google Chrome Extension - LeetCode Like Percentage"
            description="An API built for the famous website IdeasGrab by David Delahunty. It is a collection of more than 3,600 project ideas to inspire you to create."
            gradient="from-[#ff930f] to-[#fff95b]"
            tech={['Chrome Extension', 'Javascript']}
            githubLink="https://github.com/PritishMishraa/leetcode-like-percentage-extension"
            hostedLink="https://github.com/PritishMishraa/leetcode-like-percentage-extension"
          />
          <ProjectCard
            title="add-shebangs"
            description="No need to remember shebang command syntax. This simple CLI tool will add a shebang command to your file."
            gradient="from-[#696eff] to-[#f8acff]"
            tech={['NodeJS', 'CLI', 'NPM']}
            githubLink="https://github.com/PritishMishraa/add-shebangs"
            hostedLink="https://www.npmjs.com/package/add-shebangs"
          />
          <ProjectCard
            title="Realtime Comment Section"
            description="A simulation of a real-world comment section where different users can simultaneously type, read and post comments."
            gradient="from-[#ff5858] to-[#ffc8c8]"
            tech={['Javascript', 'Socket.IO', 'MongoDB']}
            githubLink="https://github.com/PritishMishraa/realtime-comment-section"
            hostedLink="https://github.com/PritishMishraa/realtime-comment-section"
          />
          <ProjectCard
            title="Custom Barcode - ReactMini I"
            description="A react PWA that generates custom barcodes that can be downloaded in PNG format."
            gradient="from-[#ffcf67] to-[#d3321d]"
            tech={['ReactJS', 'PWA', 'CSS']}
            githubLink="https://github.com/PritishMishraa/react-barcode-app"
            hostedLink="https://react-barcode-app.vercel.app/"
          />
          <ProjectCard
            title="Google Maps - ReactMini II"
            description="Google Maps mini clone."
            gradient="from-[#1ed7b5] to-[#f0f9a7]"
            tech={['ReactJS', 'CSS']}
            githubLink="https://github.com/PritishMishraa/react-google-map"
            hostedLink="https://react-google-map-black.vercel.app/"
          />
          <ProjectCard
            title="Temperature Control - ReactMini III"
            description="My first attempt at progressive web apps"
            gradient="from-[#08203e] to-[#557c93]"
            tech={['ReactJS', 'PWA', 'CSS']}
            githubLink="https://github.com/PritishMishraa/react-pwa-temp-controls"
            hostedLink="https://react-pwa-temp-controls.vercel.app/"
          />
        </div>
      </div>
    </Container>
  );
}
