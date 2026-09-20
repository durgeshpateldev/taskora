import { ListTodo } from "lucide-react";
import TaskCard from "./TaskCard";

function TaskList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="flex min-h-48 flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white px-4 text-center dark:border-slate-700 dark:bg-slate-800/50">
        <ListTodo className="mb-3 text-slate-400" size={36} />
        <h2 className="font-semibold text-slate-700 dark:text-slate-200">
          No tasks found
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Add a task or change the selected filter.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-3">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
