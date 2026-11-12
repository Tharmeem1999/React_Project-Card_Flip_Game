# Memory Match Mania

A playful React memory game where players flip cards to find matching emoji pairs. Built with Vite and React, this project focuses on smooth gameplay, animated card flips, and a polished arcade-style interface.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)

## Overview

Memory Match Mania is a classic concentration-style card game where each pair of cards contains the same emoji. The player flips two cards at a time, tries to remember their positions, and matches all pairs before running out of moves or to beat their personal best.

The project is designed to showcase:

- React state management and component composition
- Dynamic grid configurations
- Interactive animations with CSS transforms
- Sound effects for flips and wins
- Responsive UI for desktop and mobile screens

## Features

- 4x4, 6x6, and 8x8 board sizes
- Randomized emoji pair generation
- Animated flip-card transitions
- Move and match tracking scoreboard
- Reset game button for quick restarts
- Victory celebration overlay
- Responsive card sizing and layout
- Lightweight audio feedback for card flips and win state

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- JavaScript (ES modules)
- ESLint for code quality checks

## Project Structure

```text
React_Project-Card_Flip_Game/
├── public/
│   └── sounds/
│       ├── flip.wav
│       └── win.mp3
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── GameBoard.jsx
│   │   ├── Graffiti.jsx
│   │   ├── ResetButton.jsx
│   │   ├── Scoreboard.jsx
│   │   └── Settings.jsx
│   ├── utils/
│   │   ├── generateIcons.js
│   │   ├── playFlipSoundOnce.js
│   │   └── shuffleDeck.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── LICENSE
├── package.json
├── README.md
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Run in development mode

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal, usually:

```text
http://localhost:5173
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Gameplay

1. Select a grid size from the dropdown menu.
2. Flip two cards to reveal hidden emojis.
3. Match the same emoji to score a point.
4. Clear the whole board to trigger the victory banner.
5. Use the reset button to start a fresh round instantly.

## Screenshots

<img width="1258" height="955" alt="img1" src="https://github.com/user-attachments/assets/9d91dab7-e291-4b71-97fb-6a71befe6aa0" />
<img width="1255" height="957" alt="img2" src="https://github.com/user-attachments/assets/1eedb181-502d-4a32-819c-d77eec2af303" />
<img width="1260" height="957" alt="img3" src="https://github.com/user-attachments/assets/45954ec7-4bbb-4e02-ac20-d2047d197002" />
<img width="1257" height="957" alt="img4" src="https://github.com/user-attachments/assets/9c0c4d4f-7eb2-4889-873c-b6c9be35a7a6" />

## Notes

This project is a compact front-end game built for learning and demonstration. It demonstrates practical usage of:

- React hooks such as `useState` and `useRef`
- Event-driven game logic
- CSS-based 3D card animation
- Audio cues triggered by game events

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

Created as a polished React card-flip game project for practice, experimentation, and portfolio-style showcasing.
