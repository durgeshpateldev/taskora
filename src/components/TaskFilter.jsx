const filters = [
  { value: "all", label: "All", countKey: "totalTasks" },
  { value: "active", label: "Active", countKey: "activeTasks" },
  { value: "completed", label: "Completed", countKey: "completedTasks" },
];

function TaskFilter({
  filter,
  onFilterChange,
  totalTasks,
  completedTasks,
  activeTasks,
}) {
  const counts = { totalTasks, activeTasks, completedTasks };

  return (
    <div
      className="grid grid-cols-3 gap-2 rounded-xl bg-slate-100 p-1 dark:bg-slate-800"
      role="tablist"
      aria-label="Task filters"
    >
      {filters.map(({ value, label, countKey }) => {
        const isActive = filter === value;

        return (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onFilterChange(value)}
            className={`cursor-pointer rounded-lg px-2 py-2 text-sm font-semibold transition ${
              isActive
                ? "bg-white text-blue-600 shadow-sm dark:bg-slate-700 dark:text-blue-300"
                : "text-slate-600 hover:bg-white/70 dark:text-slate-300 dark:hover:bg-slate-700/70"
            }`}
          >
            {label} ({counts[countKey]})
          </button>
        );
      })}
    </div>
  );
}

export default TaskFilter;
