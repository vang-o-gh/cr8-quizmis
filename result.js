const gameCompleteBgMusic = document.getElementById("game-complete-bg-music");

// Play the game complete background music
gameCompleteBgMusic.play().catch((err) => {
  console.error("Error playing background music:", err);
});

// Get the score from localStorage
let score = parseInt(localStorage.getItem('score'), 10) || 0;

// Define the total number of questions
const totalQuestions = 20;

// Update the score display in the HTML
const scoreDisplay = document.getElementById('score-display');
scoreDisplay.textContent = `${score}/${totalQuestions}`;

localStorage.setItem('score', 0);

function openShowAnswersPopUp() {
  document.getElementById('show-answers-pop-up').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closePopup() {
  document.getElementById('show-answers-pop-up').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  document.body.style.overflow = '';
}