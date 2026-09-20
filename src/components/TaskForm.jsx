import { useState } from "react";
import { Plus } from "lucide-react";

function TaskForm({ onAddTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!input.trim()) return;

    onAddTask(input);
    setInput("");
  };

  return (
    <form
      className="flex flex-col gap-3 py-5 sm:flex-row"
      onSubmit={handleSubmit}
    >
      <input
        className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:ring-blue-900"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Add a new task..."
        aria-label="New task"
        maxLength={200}
      />

      <button
        type="submit"
        className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <Plus size={18} />
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
