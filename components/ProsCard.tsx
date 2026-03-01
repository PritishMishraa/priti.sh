export default function ProsCard({ title, pros }) {
  return (
    <div className="w-full p-6 my-4 border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
      <span className="text-stone-700 dark:text-stone-300">{`You might use ${title} if...`}</span>
      <div className="mt-4">
        {pros.map((pro: string) => (
          <div key={pro} className="flex items-baseline mb-2">
            <div className="w-4 h-4 mr-2">
              <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24">
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
            <span className="text-stone-700 dark:text-stone-300">{pro}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
