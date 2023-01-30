import Books from "components/Books";
import Container from "components/Container";

export default function TBR() {
    return (
        <Container
            title="TBR – Pritish Mishra"
            description="All the books I want to read!"
        >
            <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
                <h1 className="mb-2 text-5xl font-bold tracking-tight text-black md:mb-4 dark:text-white">
                    TBR
                </h1>
                <p className="mb-10 text-gray-600 dark:text-gray-400">
                    Welcome to my personal book club! Here, you'll find a carefully curated selection of books that I am excited to read and share with you. I'm confident you'll find something here to add to your reading list. Check back often as I am always updating my list with new and captivating books. Let's embark on this literary journey together!
                    I maintain my list on <a href="https://oku.club/" target="_blank" rel="noopener noreferrer"
                        className="text-blue-700 hover:underline underline-offset-4 dark:text-blue-500">oku.club</a>.
                </p>
                <Books />
            </div>
        </Container>
    );
}