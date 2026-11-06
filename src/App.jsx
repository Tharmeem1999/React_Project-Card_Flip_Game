import { useState } from "react";
import Settings from "./components/Settings";
import Scoreboard from "./components/Scoreboard";
import ResetButton from "./components/ResetButton";
import GameBoard from "./components/GameBoard";
import Graffiti from "./components/Graffiti";
import TempComponent from "./components/TempComponent";
import generateIcons from "./utils/generateIcons";
import shuffleDeck from "./utils/shuffleDeck";

const App = () => {
  // State to store the current grid size (e.g., 4x4)
  const [gridSize, setGridSize] = useState(4);

  // Function to create a new shuffled deck of emoji pairs based on the grif size
  const createNewDeck = (size) => {
    // Calculate how many unique icons are needed (half the number of cards)
    const iconCount = (size * size) / 2;

    // Generate that many unique random icons
    const icons = generateIcons(iconCount);

    // Duplicate the icons to create pairs (each icon appears twice)
    const newDeck = [...icons, ...icons]

    // Shuffle the full deck so the pairs are randomly distributed 
    return shuffleDeck(newDeck);
  }

  // Lazily initialize the desk state.
  // The function passed to useState is only executed on the initial render.
  // This sets up the board correctly from the start wothout an effect.
  // State to store the current deck of cards (intialized only once).
  const [deck, setDeck] = useState(() => createNewDeck(4));

  // State to count the number of moves made by the player.
  const [moves, setMoves] = useState(0);

  // State to track how many matches the player has found
  const [matches, setMatches] = useState(0);

  // State to trigger a re-render/ reset in the GameBoard
  // (used as a key or signal)
  const [resetCounter, setResetCounter] = useState(0);

  // Function to initialize or restart the game with a given grid size
  const reInitializeGame = (size) => {
    // Update the grid size state with the new size selected
    setGridSize(size);

    // Generate a new shuffled deck based on the new grid size
    setDeck(createNewDeck(size));

    // Reset the number of moves to 0 for the new game
    setMoves(0);

    // Reset the number of mtches to 0 for the new game
    setMatches(0);
  };

  return (
    <div className="h-screen flex flex-col p-4 max-w-screen-md mx-auto bg-gradient-to-bl from-cyan-100 via-blue-50 to-white">
      <TempComponent
        deck={deck}
        gridSize={gridSize}
        moves={moves}
        matches={matches}
        resetCounter={resetCounter}
        setMoves={setMoves}
        setMatches={setMatches}
      />

      <h1 className="text-3xl font-bold text-center mb-4">
        Memory Match Mania
      </h1>

      {/* Settings: lets user choose grid size and restart the game */}
      <Settings onGridChange={reInitializeGame} />

      {/* Scoreboard: shows number of moves, matches, and total pairs  */}
      <Scoreboard
        moves={moves}
        matches={matches}
        total={deck.length / 2}
      />

      {/* ResetButton: allows resetting the current game */}
      <ResetButton onReset={() => reInitializeGame(gridSize)} />

      {/* GameBoard: render the card grid and handles gameplay */}
      <div className="flex-grow">
        <GameBoard
          key={resetCounter}
          gridSize={gridSize}
          deck={deck}
          setMoves={setMoves}
          setMatches={setMatches}
        />
      </div>

      {/* Graffiti: shows a celebration when all matches are made */}
      {matches === deck.length / 2 && <Graffiti />}
    </div>
  )
};

export default App;
