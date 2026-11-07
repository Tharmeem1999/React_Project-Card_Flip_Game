// Flag to prevent multiple overlapping flip sounds from playing at once
let soundQueued = false;

// Function to play a flip sound once, with optional custom audio file
const playFlipSoundOnce = (audioFile = "/sounds/flip.wav") => {
    // If a sound is already queued to play, exit early to avoid overlap
    if (soundQueued) return;

    // set the flag to true so no other sound can be queued simultaneously
    soundQueued = true;

    // use requestAnimationFrame so that the sound plays in sync with the next frame
    requestAnimationFrame(() => {
        // create a new audio object usin the specified or default file
        const audio = new Audio(audioFile);

        // play the audio
        audio.play();

        // reset the flag after the sound its queued to allow future sounds
        soundQueued = false;
    });
}

export default playFlipSoundOnce;