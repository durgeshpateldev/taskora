import { useEffect, useMemo, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskFilter from "./components/TaskFilter";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const TASKS_KEY = "taskora-tasks";
const THEME_KEY = "taskora-theme";

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(TASKS_KEY)) || [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem(THEME_KEY) === "dark",
  );

  useEffect(() => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, darkMode ? "dark" : "light");
  }, [darkMode]);

  const addTask = (text) => {
    const cleanText = text.trim();
    if (!cleanText) return;

    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: crypto.randomUUID(),
        text: cleanText,
        completed: false,
      },
    ]);
  };

  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id),
    );
  };

  const clearCompleted = () => {
    setTasks((currentTasks) => currentTasks.filter((task) => !task.completed));
  };

  const filteredTasks = useMemo(() => {
    if (filter === "active") {
      return tasks.filter((task) => !task.completed);
    }

    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    }

    return tasks;
  }, [filter, tasks]);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const activeTasks = totalTasks - completedTasks;

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="min-h-screen bg-white px-4 py-6 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100 sm:px-6 sm:py-10">
        <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="p-4 sm:p-6">
            <Header
              remainingTasks={activeTasks}
              darkMode={darkMode}
              onToggleTheme={() => setDarkMode((current) => !current)}
            />

            <TaskForm onAddTask={addTask} />

            <TaskFilter
              filter={filter}
              onFilterChange={setFilter}
              totalTasks={totalTasks}
              completedTasks={completedTasks}
              activeTasks={activeTasks}
            />

            <TaskList
              tasks={filteredTasks}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />

            <Footer
              remainingTasks={activeTasks}
              completedTasks={completedTasks}
              totalTasks={totalTasks}
              clearCompleted={clearCompleted}
            />

            <p className="pt-2 text-center text-sm text-slate-400">
              Small steps. Big progress.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
