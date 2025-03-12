function showImages(walkId) {
    // Hide all the images first
    const allWalks = document.querySelectorAll('.walk-images');
    allWalks.forEach(walk => walk.style.display = 'none');

    // Show the selected walk images
    const selectedWalk = document.getElementById(walkId);
    selectedWalk.style.display = 'block';
}
