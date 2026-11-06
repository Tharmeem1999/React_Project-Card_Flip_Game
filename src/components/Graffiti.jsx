const Graffiti = () => {
    return (
        // Fullscreen fixed container with centered content and no pointer interaction
        <div className={
            // Fill entire screen and stay fixed
            "fixed inset-0 " +
            // Center content horizontally and vertically
            "flex items-center justify-center " +
            // Ensure it appears on top and doesn't block mouse events
            "z-50 pointer-events-none "
        }>
            <div className={
                "text-6xl sm:text-8xl font-black " +
                "bg-clip-text text-transparent " +
                "bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 " +
                "drop-shadow-lg shadow-black " +
                "animate-bounce "
            }>
                🎉 You Win! 🎉
            </div>
        </div>
    );
};

export default Graffiti;
