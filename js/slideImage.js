// Get all the image elements with the class "slideshow-image"
const slideshowImages = document.querySelectorAll(".slideshow-image");

// Set the initial index and time interval
let currentIndex = 0;
const interval = 3000; // 1 second

// Function to change the image
function changeImage() {
  // Hide all images
  slideshowImages.forEach((image) => {
    image.style.display = "none";
  });

  // Show the next image in the array
  currentIndex = (currentIndex + 1) % slideshowImages.length;
  slideshowImages[currentIndex].style.display = "block";

  // Schedule the next image change
  setTimeout(changeImage, interval);
}

// Start the slideshow
changeImage();
