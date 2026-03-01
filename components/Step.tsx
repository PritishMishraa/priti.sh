export default function Step({ number, title }) {
  return (
    <div className="flex items-center py-4 step">
      <div className="flex items-center justify-center w-8 h-8 font-medium text-stone-600 border border-stone-200 rounded-full dark:border-stone-700 dark:text-stone-400">
        {number}
      </div>
      <h3 className="ml-3 font-medium tracking-tight text-stone-900 dark:text-stone-100">{title}</h3>
    </div>
  );
}