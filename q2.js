const button1 = document.querySelector('.button-1');
const button2 = document.querySelector('.button-2');
const hoverSound = document.getElementById('hover-sound');
const clickSound = document.getElementById('click-sound');

// Function to play a sound effect
function playSound(sound) {
  sound.currentTime = 0; // Reset the sound to the beginning
  sound.play();
}

// Function to handle button hover
function handleHover(event) {
  playSound(hoverSound);
}

// Function to handle button click
function handleClick(event) {
    // Play click sound
    playSound(clickSound);
  
    // Define the correct answer
    const correctAnswer = "Hello Love, Again";
  
    // Get the selected answer's text
    const selectedAnswer = event.target.textContent.trim();
  
    // Retrieve the current score from localStorage or initialize it to 0
    let score = parseInt(localStorage.getItem('score'), 10) || 0;
  
    // Check if the selected answer matches the correct answer
    if (selectedAnswer === correctAnswer) {
      // Correct answer, increment the score
      score++;
      localStorage.setItem('score', score); // Save the updated score
      alert("Correct!");
    } else {
      // Incorrect answer, no score change
      alert("Wrong Answer!");
    }
  
    // Redirect to the next question
    window.location.href = 'question-02.html';
  }
  function playSound(audioElement) {
    audioElement.play();
  }
// Add event listeners to the buttons
button1.addEventListener('mouseover', handleHover);
button1.addEventListener('mouseout', handleHover);
button1.addEventListener('click', handleClick);

button2.addEventListener('mouseover', handleHover);
button2.addEventListener('mouseout', handleHover);
button2.addEventListener('click', handleClick);
