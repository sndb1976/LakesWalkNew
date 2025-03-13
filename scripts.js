// Object for images organized by year and subfolder
const imagesByYearAndSubfolder = {
    "2017": {
        "3 Peaks": [
            'images/2017/3 Peaks/walk1.jpg'
        ]
    },
    "2018": {
        "Not Sure": [
            'images/2018/Not Sure/walk1.jpg',
        ],
        "Paterdale": [
            'images/2018/Paterdale/walk1.jpg',
        ]
    },
    "2019": {
        "Paterdale - Helvellyn": [
            'images/2019/Helvellyn/walk1.jpg',
            'images/2019/Helvellyn/walk1-2.jpg'
        ],
        "Coniston - Old Man": [
            'images/2019/Old Man/walk1.jpg',
            'images/2019/Old Man/walk1-2.jpg',
        ]
    },
    // Add other years similarly
};

// Function to toggle the visibility of subfolders
function toggleSubfolders(year) {
    const subfolderList = document.getElementById(`subfolders-${year}`);
    const isVisible = subfolderList.style.display === "block";

    // Toggle display
    subfolderList.style.display = isVisible ? "none" : "block";
}

// Function to show images for the selected year and subfolder
function showImages(year, subfolder) {
    const walkImagesContainer = document.getElementById("walkImages");
    walkImagesContainer.innerHTML = '';  // Clear previous images

    const images = imagesByYearAndSubfolder[year][subfolder];
    if (images) {
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.alt = `${subfolder} walk in ${year}`;
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
