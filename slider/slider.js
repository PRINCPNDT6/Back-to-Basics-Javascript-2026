const track = document.getElementById('myQueueSliderTrack');
let slides = Array.from(track.children);
const totalSlides = slides.length;

let currentIndex = 1;
let autoQueueInterval;

// Clone first and last for smooth queue
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

// Update slides after clone
slides = Array.from(track.children);

let slideWidth = slides[0].offsetWidth;

// Initialize position to first original slide
track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

// Slide function
function queueSlide(direction) {
  currentIndex += direction;
  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

  track.addEventListener('transitionend', handleTransitionEnd, { once: true });
}

// Handle transition for clone slides
function handleTransitionEnd() {
  if (currentIndex === 0) {
    track.style.transition = "none";
    currentIndex = totalSlides;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }
  if (currentIndex === totalSlides + 1) {
    track.style.transition = "none";
    currentIndex = 1;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }
}

// Manual arrow control
function manualQueueSlide(direction) {
  stopAutoQueue();
  queueSlide(direction);
  startAutoQueue();
}

// Auto slide
function startAutoQueue() {
  autoQueueInterval = setInterval(() => queueSlide(1), 3000);
}

function stopAutoQueue() {
  clearInterval(autoQueueInterval);
}

// Update slideWidth on resize
window.addEventListener('resize', () => {
  slideWidth = slides[0].offsetWidth;
  track.style.transition = "none";
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
});

// Start auto on page load
window.addEventListener('load', startAutoQueue);
