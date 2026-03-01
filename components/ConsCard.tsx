export default function ConsCard({ title, cons }) {
  return (
    <div className="w-full p-6 my-6 border border-rose-200 dark:border-rose-900/50 bg-rose-50 dark:bg-rose-900/20 rounded-lg">
      <span className="text-stone-700 dark:text-stone-300">{`You might not use ${title} if...`}</span>
      <div className="mt-4">
        {cons.map((con) => (
          <div key={con} className="flex items-baseline mb-2">
            <div className="w-4 h-4 mr-2">
              <svg className="w-4 h-4 text-rose-600 dark:text-rose-400" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </g>
              </svg>
            </div>
            <span className="text-stone-700 dark:text-stone-300">{con}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
