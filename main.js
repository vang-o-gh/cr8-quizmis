document.addEventListener("DOMContentLoaded", () => {
  const hoverSound = document.getElementById("hover-sound");
  const clickSound = document.getElementById("click-sound");

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
});
