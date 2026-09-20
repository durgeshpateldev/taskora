# Taskora

Taskora is a clean and responsive task management app built with React and Tailwind CSS. It lets you add, complete, delete, filter, and clear tasks while keeping your data saved in the browser.

## Live Demo

**Live URL:** 

## Features

- Add new tasks
- Mark tasks as completed
- Delete individual tasks
- Filter tasks by All, Active, and Completed
- Clear all completed tasks
- Light and dark mode
- Tasks persist after page refresh using `localStorage`
- Responsive design for mobile, tablet, and desktop
- Accessible buttons, labels, and task controls
- Empty-state UI when no tasks are available

## Tech Stack

- React
- Vite
- Tailwind CSS v4
- JavaScript
- Lucide React
- Browser `localStorage`

## Project Structure

```text
Taskora/
├── public/
│   ├── Taskora_logo.png
│   ├── favicon.svg
│   └── ...
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── TaskCard.jsx
│   │   ├── TaskFilter.jsx
│   │   ├── TaskForm.jsx
│   │   └── TaskList.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Taskora
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

## Production Build

Create a production build with:

```bash
npm run build
```

Preview the production build locally with:

```bash
npm run preview
```

## Future Improvements

- Edit existing tasks
- Add task priorities
- Add due dates
- Add categories or tags
- Add drag-and-drop task ordering
- Add backend authentication and cloud storage

