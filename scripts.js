// Array of images for each year (make sure these paths match your folder structure)
const imagesByYear = {
    "2017": [
        'images/2017/walk1.jpg',
        'images/2017/walk2.jpg',
        'images/2017/walk3.jpg'
    ],
    "2018": [
        'images/2018/walk1.jpg',
        'images/2018/walk2.jpg',
        'images/2018/walk3.jpg'
    ],
    "2019": [
        'images/2019/walk1.jpg',
        'images/2019/walk2.jpg',
        'images/2019/walk3.jpg'
    ],
    "2021": [
        'images/2021/walk1.jpg',
        'images/2021/walk2.jpg',
        'images/2021/walk3.jpg'
    ],
    "2023": [
        'images/2023/walk1.jpg',
        'images/2023/walk2.jpg',
        'images/2023/walk3.jpg'
    ],
    "2024": [
        'images/2024/walk1.jpg',
        'images/2024/walk2.jpg',
        'images/2024/walk3.jpg'
    ]
};

// Function to show images based on the clicked year
function showImages(year) {
    const walkImagesContainer = document.getElementById("walkImages");
    walkImagesContainer.innerHTML = '';  // Clear previous images

    const images = imagesByYear[year];

    if (images) {
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.alt = `Walk in ${year}`;
            imgElement.onclick = function () {
                openModal(image);  // Open modal on click
            };
            walkImagesContainer.appendChild(imgElement);
        });
    }
}

// Modal code to display the full-size image
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("modalCaption");

function openModal(imageSrc) {
    modal.style.display = "block";
    modalImg.src = imageSrc;
    captionText.innerHTML = imageSrc;
}

// Close the modal when the user clicks the close button
const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// Close the modal when the user clicks outside of the modal content
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
