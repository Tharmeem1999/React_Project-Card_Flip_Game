import { useRef } from "react";
import Card from "./Card";

const GameBoard = ({ gridSize, deck, setMoves, setMatches }) => {
    // Array of refs to access each card instance (to call flip/ unflip methods)
    const cardRefs = useRef([]);

    // Reference to the first card flipped (for matching logic)
    const firstCard = useRef(null);

    // Reference to the second card flipped
    const secondCard = useRef(null);

    // Prevent interaction while two cards are being compared
    const lockBoard = useRef(false);

    // Handles click on a card at the given index
    const handleCardClick = (index) => {
        // Get the card instance from the refs array
        const card = cardRefs.current[index];

        // If card is already flipped or board is locked, ignore the click
        if (!card || card.flipped || lockBoard.current) return;

        // Flip the clicked card
        card.flip();

        // If it's the first card being flipped, store it and return
        if (!firstCard.current) {
            firstCard.current = card;
            return
        }

        // If it's the second card, store it and proceed to match logic
        secondCard.current = card;

        // Lock the board to prevent other interaction during comparison
        lockBoard.current = true;

        // Increment move count
        setMoves((prev) => prev + 1)

        // If the icon match:
        if (firstCard.current.icon === secondCard.current.icon) {
            // Clear both card refs (they stay flipped)
            firstCard.current = null;
            secondCard.current = null;

            // Unlock the board
            lockBoard.current = false;

            // Increment match count
            setMatches((prev) => prev + 1);
        } else {
            // If theey don't match, wait 1 second then unflip both
            setTimeout(() => {
                firstCard.current.unflip();
                secondCard.current.unflip();

                // clear refs
                firstCard.current = null;
                secondCard.current = null;

                // Unlock the board
                lockBoard.current = false;
            }, 1000)
        }

    }

    return (
        <div
            className="grid gap-2 h-full"
            style={{
                gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${gridSize}, 1fr)`, // Makes square cells

            }}
        >
            {deck.map((icon, idx) => (
                <Card
                    key={idx}
                    icon={icon}
                    // Store reference to this card instance
                    ref={(el) => (cardRefs.current[idx] = el)}
                    onClick={() => handleCardClick(idx)}
                />
            ))}
        </div>
    );
};

export default GameBoard;