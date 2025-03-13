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
        "Paterdale Helvellyn": [
            'images/2019/Helvellyn/walk1.jpg',
        ],
        "Coniston Old Man": [
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

async function showImages(year, location) {
    let container = document.getElementById("walkImages");
    container.innerHTML = "";

    try {
        let response = await fetch("images.json"); // Load pre-generated JSON file
        let data = await response.json();

        if (data[year] && data[year][location]) {
            data[year][location].forEach(file => {
                let img = document.createElement("img");
                img.src = `images/${year}/${location}/${file}`;
                img.alt = `Image from ${location}`;
                img.classList.add("walk-image");
                container.appendChild(img);
            });
        }
    } catch (error) {
        console.error("Error loading images:", error);
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
