import { Moon, Sun } from "lucide-react";

function Header({ remainingTasks, darkMode, onToggleTheme }) {
  return (
    <header className="flex flex-col gap-4 rounded-xl border border-blue-100 bg-blue-50 p-4 dark:border-slate-700 dark:bg-slate-800 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl">
          <img
            className="h-full w-full object-cover"
            src="/Taskora_logo.png"
            alt="Taskora logo"
          />
        </div>

        <div className="min-w-0">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Taskora
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Keep your tasks in check.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 sm:justify-end">
        <span className="rounded-full bg-white px-3 py-2 text-sm font-medium text-slate-600 dark:bg-slate-900 dark:text-slate-300">
          {remainingTasks} {remainingTasks === 1 ? "task" : "tasks"} left
        </span>

        <button
          type="button"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          onClick={onToggleTheme}
          className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
