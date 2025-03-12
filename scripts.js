// Function to display images for the selected year
function showImages(year) {
    // Define image paths for each year
    const imagesByYear = {
        '2017': [
            'images/2017/walk1.jpg',
            'images/2017/walk1-2.jpg',
            'images/2017/walk1-3.jpg',
        ],
        '2018': [
            'images/2018/walk1.jpg',
            'images/2018/walk1-2.jpg',
            'images/2018/walk2-2.jpg',
            'images/2018/walk3-2.jpg',
        ],
        '2019': [
            'images/2019/walk1.jpg',
            'images/2019/walk1-2.jpg',
            'images/2019/walk2-3.jpg',
            'images/2019/walk3-3.jpg',
        ],
        '2020': [
            'images/2020/walk1.jpg',
            'images/2020/walk1-2.jpg',
            'images/2020/walk2-4.jpg',
            'images/2020/walk3-4.jpg',
        ],
        '2021': [
            'images/2021/walk1.jpg',
            'images/2021/walk1-2.jpg',
            'images/2021/walk2-5.jpg',
            'images/2021/walk3-5.jpg',
        ],
        '2022': [
            'images/2022/walk1.jpg',
            'images/2022/walk1-2.jpg',
            'images/2022/walk2-6.jpg',
            'images/2022/walk3-6.jpg',
        ],
        '2023': [
            'images/2023/walk1.jpg',
            'images/2023/walk1-2.jpg',
            'images/2023/walk2-7.jpg',
            'images/2023/walk3-7.jpg',
        ],
        '2024': [
            'images/2024/walk1.jpg',
            'images/2024/walk1-2.jpg',
            'images/2024/walk2-8.jpg',
            'images/2024/walk3-8.jpg',
        ]
    };

    // Get the div where images will be injected
    const walkImagesDiv = document.getElementById('walkImages');
    walkImagesDiv.innerHTML = ''; // Clear any existing images

    // Get the images for the selected year
    const imagesForYear = imagesByYear[year];

    // Dynamically create image elements and append to the walkImages div
    imagesForYear.forEach(imageSrc => {
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imgElement.alt = imageSrc;
        imgElement.onclick = function() { openModal(imgElement); };
        walkImagesDiv.appendChild(imgElement);
    });
}

// Function to open the modal to view the clicked image
function openModal(imgElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const caption = document.getElementById("modalCaption");

    // Set the source of the modal image to the clicked image's source
    modal.style.display = "block";
    modalImg.src = imgElement.src;
    caption.innerHTML = imgElement.alt; // Optional: use alt as caption

    // Disable scrolling in the body when modal is open
    document.body.style.overflow = "hidden";
}

// Close the modal when the "X" button is clicked
document.querySelector(".close").addEventListener("click", function() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling when modal is closed
});

// Close the modal if the user clicks outside the modal image
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Enable scrolling when modal is closed
    }
}
