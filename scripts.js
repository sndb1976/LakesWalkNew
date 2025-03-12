function showImages(walkId) {
    // Hide all walk images first
    const allWalks = document.querySelectorAll('.walk-images');
    allWalks.forEach(walk => walk.classList.remove('show'));

    // Show the selected walk images with transition
    const selectedWalk = document.getElementById(walkId);
    selectedWalk.classList.add('show');

    // Set the active walk link
    const allLinks = document.querySelectorAll('.sidebar a');
    allLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`.sidebar a[href='#${walkId}']`);
    activeLink.classList.add('active');
}

// Function for the image carousel
function changeImage(walkId, direction) {
    const carousel = document.querySelector(`#${walkId} .carousel`);
    const images = carousel.querySelectorAll('img');
    const totalImages = images.length;
    
    // Find the current image
    let currentIndex = Array.from(images).findIndex(image => image.style.transform === "translateX(0px)");
    if (currentIndex === -1) currentIndex = 0; // Set to 0 if no image has been translated.

    // Set the new image index
    currentIndex = (currentIndex + direction + totalImages) % totalImages;

    // Move all images to the left or right
    images.forEach((img, index) => {
        img.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

// Initially show the first walk images (Lakeview)
showImages('lakeview');
