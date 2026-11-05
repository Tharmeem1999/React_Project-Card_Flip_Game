const TempComponent = ({ deck, gridSize, moves, matches, resetCounter, setMoves, setMatches }) => {
    return (
        <div className="fixed bottom-4 left-4 space-y-2 z-50">
            <button
                onClick={() => {
                    // Initialize an empty array to hold each row of the grid
                    const grid = [];

                    // Loop through the deck in steps of `gridSize` to create rows
                    for (
                        let i = 0;            // Start at the first index
                        i < deck.length;      // Continue while i is less than deck length
                        i += gridSize         // Increment i by the number of columns per row
                    ) {
                        // Slice a row of `gridSize` items from the deck
                        const row = deck.slice(i, i + gridSize);

                        // Add the row to the grid array
                        grid.push(row);
                    }

                    // Log a label for the deck grid with its size
                    console.log(`🧩 Deck Grid (${gridSize}x${gridSize}):`)

                    // Loop through each row and log it as a string of icons
                    grid.forEach((row, idx) =>
                        console.log(`Row ${idx + 1}:`, row.join(""))
                    );
                }}
                className="px-3 py-1 bg-blue-500 text-white rounded shadow"
            >
                Log Deck
            </button>
            <button
                onClick={() => console.log(gridSize, moves, matches, resetCounter)}
                className="px-3 py-1 bg-green-500 text-white rounded shadow"
            >
                Log State
            </button>

            {/* Increment Moves Button */}
            <button
                onClick={() => setMoves((prev) => prev + 1)}
                className="px-3 py-1 bg-yellow-500 text-white rounded shadow"
            >
                +1 Move
            </button>

            {/* Increment Matches Button */}
            <button
                onClick={() => setMatches((prev) => prev + 1)}
                className="px-3 py-1 bg-pink-500 text-white rounded shadow"
            >
                +1 Match
            </button>
        </div>
    );
};

export default TempComponent;