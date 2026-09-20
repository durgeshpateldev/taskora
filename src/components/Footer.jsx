import { Trash2 } from "lucide-react";

function Footer({
  remainingTasks,
  completedTasks,
  totalTasks,
  clearCompleted,
}) {
  if (totalTasks === 0) {
    return null;
  }

  return (
    <footer className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-4 text-sm dark:border-slate-700 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-slate-600 dark:text-slate-300">
        <span className="font-bold">{remainingTasks}</span>{" "}
        {remainingTasks === 1 ? "task" : "tasks"} remaining
      </p>

      <button
        type="button"
        disabled={completedTasks === 0}
        onClick={clearCompleted}
        className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-red-200 px-3 py-2 text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-red-900 dark:hover:bg-red-950"
      >
        <Trash2 size={16} />
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
