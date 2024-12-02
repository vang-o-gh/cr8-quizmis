document.addEventListener("DOMContentLoaded", () => {
  const hoverSound = document.getElementById("hover-sound");
  const clickSound = document.getElementById("click-sound");
  const backgroundMusic = document.getElementById("background-music");

  // Ensure audio context is active for sound playback in modern browsers
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  document.body.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }
  }, { once: true });

  // Select all buttons that need sound effects
  const buttons = document.querySelectorAll(".button-1, .button-2, .button-yes");

  // Add hover and click sound functionality to buttons
  buttons.forEach((button) => {
    // Play hover sound when the button is hovered
    button.addEventListener("mouseenter", () => {
      hoverSound.currentTime = 0; // Reset the sound
      hoverSound.play().catch((err) => console.log("Hover sound blocked:", err));
    });

    // Play click sound when the button is clicked
    button.addEventListener("click", () => {
      clickSound.currentTime = 0; // Reset the sound
      clickSound.play().catch((err) => console.log("Click sound blocked:", err));
    });
  });

  // If music is not playing, play it and save the state in localStorage
  if (!localStorage.getItem("musicPlaying")) {
    localStorage.setItem("musicPlaying", "true");
    backgroundMusic.play().catch((err) => console.log("Background music play error:", err));
  }

  // If music is playing, resume from where it left off
  else {
    // Resume the music from the saved time if it was paused
    const currentTime = parseFloat(sessionStorage.getItem("musicCurrentTime") || "0");
    backgroundMusic.currentTime = currentTime;
    backgroundMusic.play().catch((err) => console.log("Background music play error:", err));
  }

  // Store the current time of the music when it's paused or ends
  backgroundMusic.addEventListener("pause", () => {
    sessionStorage.setItem("musicCurrentTime", backgroundMusic.currentTime);
  });

  backgroundMusic.addEventListener("ended", () => {
    localStorage.removeItem("musicPlaying");
    sessionStorage.removeItem("musicCurrentTime");
  });
});
