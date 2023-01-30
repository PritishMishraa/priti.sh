import Container from 'components/Container';
import TechLogo from 'components/TechLogo';

import logos from '../utils/logos.json'

export default function Stack() {
    return (
        <Container
            title="Stack – Pritish Mishra"
            description="The stack I work with!"
        >
            <div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
                <h1 className="mb-2 text-5xl font-bold tracking-tight text-black md:mb-4 dark:text-white">
                    Stack
                </h1>
                <p className="mb-10 text-gray-600 dark:text-gray-400">
                    The tech I am learning and working with. This website is made with Next12 and Next.js API routes deployed as serverless functions
                </p>
                <div className='grid w-full grid-cols-3 md:grid-cols-4 md:gap-y-8 gap-y-4'>
                    {logos.map(logo => {
                        return <TechLogo key={logo.title} path={logo.path} title={logo.title} />
                    })}
                </div>
            </div>
        </Container>
    );
}