import Container from "components/Container";
import LeetCodeViews from "components/LeetCodeViews";
import LeetCodeQuesCard from "components/LeetCodeQuesCard";
import LeetCode from 'components/metrics/Leetcode';
import CodingNinjas from 'components/metrics/CodingNinjas';

export default function Dashboard() {

    return (
        <Container
            title="LeetCode – Pritish Mishra"
            description="My LeetCode Stats!"
        >
            <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
                <h1 className="mb-4 text-5xl font-bold tracking-tight text-black dark:text-white">
                    LeetCode
                </h1>
                <p className="mb-10 text-gray-600 dark:text-gray-400">
                    I am on a mission to sharpen my data structures and algorithms skills and Leetcode is my go-to platform for practice. I am committing to spending more time on solving different problem types to strengthen my understanding and improve my problem-solving abilities. I am excited to track my progress and see my growth as I continue to put in the effort.
                </p>
                <h2 className="mb-2 text-3xl font-bold tracking-tight text-black md:mb-4 dark:text-white">
                    Stats
                </h2>
                <LeetCode />
                <h2 className="mt-12 mb-2 text-3xl font-bold tracking-tight text-black md:mb-4 md:mt-16 dark:text-white">
                    The Last Question I Solved
                </h2>
                <p className="mb-2 text-gray-600 md:mb-4 dark:text-gray-400">
                    Consistency is the key 🔑
                </p>
                <LeetCodeQuesCard />
                <h3 className="mt-12 mb-2 text-3xl font-bold tracking-tight text-black md:mb-4 md:mt-16 dark:text-white">
                    Most Viewed LeetCode Solutions
                </h3>
                <p className="mb-2 text-gray-600 md:mb-4 dark:text-gray-400">
                    I started writing solutions on LeetCode Solutions as notes to myself. Over time they garnered few views. Here are a few of the most viewed solutions.
                </p>
                <LeetCodeViews />
            </div>
        </Container>
    )
}