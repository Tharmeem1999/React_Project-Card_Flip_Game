import Settings from "./components/Settings";
import Scoreboard from "./components/Scoreboard";
import ResetButton from "./components/ResetButton";
import GameBoard from "./components/GameBoard";
import Graffiti from "./components/Graffiti";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">
        Memory Match Mania
      </h1>

      {/* Settings: lets user choose grid size and restart the game */}
      <Settings />

      {/* Scoreboard: shows number of moves, matches, and total pairs  */}
      <Scoreboard />

      {/* ResetButton: allows resetting the current game */}
      <ResetButton />

      {/* GameBoard: render the card grid and handles gameplay */}
      <GameBoard />

      {/* Graffiti: shows a celebration when all matches are made */}
      <Graffiti />
    </div>
  )
};

export default App;
