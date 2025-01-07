// Select elements
const startBtn = document.getElementById('start-btn');
const imageContainer = document.getElementById('image-container');
const birthdaySong = document.getElementById('birthday-song');
const images = imageContainer.children;

// Advanced Animation Logic
function showImagesWithPowerfulAnimation() {
  imageContainer.classList.remove('hidden'); // Show the container
  [...images].forEach((img, index) => {
    setTimeout(() => {
      // Apply different powerful animations in sequence
      if (index % 3 === 0) {
        img.classList.add('super-zoom-spin');
      } else if (index % 2 === 0) {
        img.classList.add('flip-in');
      } else {
        img.classList.add('bounce-in');
      }
    }, index * 800); // Delay each image by 800ms
  });
}

// Event listener for the Start button
startBtn.addEventListener('click', () => {
  startBtn.classList.add('hidden'); // Hide the button
  birthdaySong.play(); // Start the song
  showImagesWithPowerfulAnimation(); // Start the advanced animation
});
