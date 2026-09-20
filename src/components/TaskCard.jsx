import { Trash2 } from "lucide-react";

function TaskCard({ task, deleteTask, toggleTask }) {
  return (
    <article className="flex min-w-0 items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <label className="flex min-w-0 flex-1 cursor-pointer items-center gap-3">
        <input
          className="h-4 w-4 shrink-0 cursor-pointer accent-blue-600"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          type="checkbox"
        />

        <span
          className={`min-w-0 wrap-break-word text-sm sm:text-base ${
            task.completed
              ? "text-slate-400 line-through dark:text-slate-500"
              : "font-medium text-slate-700 dark:text-slate-200"
          }`}
        >
          {task.text}
        </span>
      </label>

      <button
        type="button"
        aria-label={`Delete task: ${task.text}`}
        title="Delete task"
        onClick={() => deleteTask(task.id)}
        className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-red-200 text-red-500 transition hover:bg-red-50 hover:text-red-600 dark:border-red-900 dark:hover:bg-red-950"
      >
        <Trash2 size={17} />
      </button>
    </article>
  );
}

export default TaskCard;
