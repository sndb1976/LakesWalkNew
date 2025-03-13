document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded.");

    // Close modal on clicking the close button or outside the image
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");

    document.querySelector(".close").addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

/**
 * Function to dynamically load images from a selected folder.
 * @param {string} year - The year of the walk.
 * @param {string} location - The location (subfolder under the year).
 */
function showImages(year, location) {
    console.log(`Loading images for ${year}/${location}...`);
    const imageContainer = document.getElementById("walkImages");
    imageContainer.innerHTML = ""; // Clear previous images

    // Construct path to JSON file containing image filenames
    const jsonFilePath = `images/${year}/${location}/images.json`;

    fetch(jsonFilePath)
        .then(response => response.json())
        .then(imageFiles => {
            if (imageFiles.length === 0) {
                imageContainer.innerHTML = "<p>No images found.</p>";
                return;
            }

            imageFiles.forEach(filename => {
                const img = document.createElement("img");
                img.src = `images/${year}/${location}/${filename}`;
                img.alt = filename;
                img.addEventListener("click", () => openModal(img.src, filename));

                imageContainer.appendChild(img);
            });
        })
        .catch(error => {
            console.error("Error loading images:", error);
            imageContainer.innerHTML = "<p>Error loading images.</p>";
        });
}

/**
 * Opens a modal to display the full-size image.
 * @param {string} src - Image source URL.
 * @param {string} alt - Image description.
 */
function openModal(src, alt) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");

    modal.style.display = "flex";
    modalImage.src = src;
    modalCaption.innerText = alt;
}
