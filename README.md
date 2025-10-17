# React Jobs 2025

A modern job board web application built with React, Vite, Tailwind CSS, and React Router.

## Features
- Browse, add, edit, and delete job listings
- Responsive design with Tailwind CSS
- Routing with React Router v7
- Mock backend with JSON Server
- Toast notifications with React Toastify
- Loading spinners with React Spinners

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation
1. Clone the repository:
	```bash
	git clone https://github.com/derekzhao33/react-jobs-2025.git
	cd react-jobs-2025
	```
2. Install dependencies:
	```bash
	npm install
	```

### Running the App
Start the mock backend (JSON Server):
```bash
npm run server
```

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
react-jobs-2025/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── assets/
│   ├── jobs.json
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Scripts
- `npm run dev` — Start Vite dev server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run server` — Start JSON Server (mock API)

## Credits
This project was inspired by [Traversy Media's React Job Board Tutorial](https://youtu.be/LDB4uaJ87e0?si=Tstutm-Mi0Tdr_Ne).

