// Select elements
const bouncingImage = document.getElementById('bouncing-image');
const popupContainer = document.getElementById('popup-container');
const closePopupButton = document.getElementById('close-popup');

// Add click event to the bouncing image
bouncingImage.addEventListener('click', () => {
    popupContainer.classList.remove('hidden'); // Show the popup
});

// Add click event to the close button
closePopupButton.addEventListener('click', () => {
    popupContainer.classList.add('hidden'); // Hide the popup
});
