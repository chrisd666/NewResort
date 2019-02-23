// Get all images that are marked up to lazy load

const images = document.querySelectorAll("lazy-image");

const config = {
  // If image gets within 30px in the Y axis, start download

  rootMargin: "30px 0px",
  threshold: 0.01
};

// The observer for the images on the page

let observer = new IntersectionObserver(onIntersection, config);

images.forEach(image => {
  observer.observe(image);
});

const onIntersection = entries => {
  // Loop through the entries

  entries.forEach(entry => {
    // Are we in viewport?

    if (entry.intersectionRatio > 0) {
      // Stop watching and load the image

      observer.unobserve(entry.target);
      preloadImage(entry.target);
    }
  });
};
