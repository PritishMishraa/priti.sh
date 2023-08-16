export function Migrating() {
  return (
    <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-lg dark:bg-red-900 dark:text-red-300 mr-2">
      <span className="w-2 h-2 mr-1 bg-red-500 dark:bg-red-300 rounded-full"></span>
      Migrating
    </span>
  );
}

export function WIP() {
  return (
    <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-lg dark:bg-green-900 dark:text-green-300 mr-2">
      <span className="w-2 h-2 mr-1 bg-green-500 dark:bg-green-300 rounded-full"></span>
      WIP
    </span>
  );
}

export function Paused() {
  return (
    <span className="inline-flex items-center bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-lg dark:bg-yellow-900 dark:text-yellow-300 mr-2">
      <span className="w-2 h-2 mr-1 bg-yellow-500 dark:bg-yellow-300 rounded-full"></span>
      Paused
    </span>
  );
}
