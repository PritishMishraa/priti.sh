export default function Step({ number, title }) {
  return (
    <div className="flex items-center py-4 step">
      <div className="flex items-center justify-center w-8 h-8 font-bold text-blue-500 border border-gray-200 rounded-full dark:border-gray-700">
        {number}
      </div>
      <h3 className="ml-3 font-bold tracking-tight text-black dark:text-white">{title}</h3>
    </div>
  );
}