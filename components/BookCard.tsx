import Image from "next/image";

export default function BookCard({ image, title, author, slug }) {
    return (
        <a href={`https://oku.club/book/${slug}`} target="_blank" rel="noopener noreferrer">
            <div
                className="border border-gray-200 dark:border-gray-800 transform hover:scale-[1.01] transition-all rounded-xl w-full p-4">
                <div className="flex flex-col w-full rounded-lg md:flex-row">
                    <div className="mx-auto md:min-w-max md:my-auto md:mx-0">
                        {image ? <Image
                            alt={title}
                            src={image}
                            height={128}
                            width={100}
                            quality={100}
                            className="object-cover h-full rounded-lg shadow-lg md:h-24 md:w-full"
                        /> :
                            <div className="object-cover w-32 h-24 bg-gray-200 rounded-lg shadow-lg md:w-24 md:h-32 dark:bg-gray-700 animate-pulse"></div>
                        }
                    </div>
                    <div className="flex flex-col items-center justify-center pt-6 md:pl-6 md:pt-0 md:items-start">
                        <h5 className="mb-1 text-lg font-medium text-black capsize dark:text-white md:text-xl">{title}</h5>
                        <p className="mb-4 text-sm text-gray-600 capsize dark:text-gray-400 md:text-base">
                            {`by ${author}`}
                        </p>
                    </div>
                </div>
            </div>
        </a >
    );
}