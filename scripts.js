// Object for images organized by year and subfolder
const imagesByYearAndSubfolder = {
    "2017": {
        "Wales": [
            'images/2017/Wales/photo1.jpg',
            'images/2017/Wales/photo2.jpg'
        ],
        "UK": [
            'images/2017/UK/photo1.jpg',
            'images/2017/UK/photo2.jpg'
        ]
    },
    "2018": {
        "Wales": [
            'images/2018/Wales/photo1.jpg',
            'images/2018/Wales/photo2.jpg'
        ],
        "UK": [
            'images/2018/UK/photo1.jpg',
            'images/2018/UK/photo2.jpg'
        ]
    },
    "2019": {
        "Wales": [
            'images/2019/Wales/photo1.jpg',
            'images/2019/Wales/photo2.jpg'
        ],
        "UK": [
            'images/2019/UK/photo1.jpg',
            'images/2019/UK/photo2.jpg'
        ]
    },
    // Add other years similarly
};

// Function to show subfolders (Wales, UK) for the selected year
function showSubfolders(year) {
    const walkImagesContainer = document.getElementById("walkImages");
    walkImagesContainer.innerHTML = '';  // Clear previous images

    const subfolders = Object.keys(imagesByYearAndSubfolder[year]);
    if (subfolders) {
        subfolders.forEach(subfolder => {
            const subfolderLink = document.createElement('a');
            subfolderLink.href = '#';
            subfolderLink.innerHTML = subfolder;
            subfolderLink.onclick = function () {
                showImages(year, subfolder);  // Show images from the selected subfolder
            };

            // Add the subfolder link to the container
            walkImagesContainer.appendChild(subfolderLink);
            walkImagesContainer.appendChild(document.createElement('br'));  // Add a line break for separation
        });
    }
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
