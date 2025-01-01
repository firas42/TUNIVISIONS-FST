let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');

// Function to move slides
function moveSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    document.querySelector('.slider').style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Set interval for automatic slide change every 2 seconds
setInterval(moveSlide, 2000);

// Initial setup to show the first slide
window.onload = () => {
    if (slides.length > 0) {
        document.querySelector('.slider').style.transform = `translateX(${-slideIndex * 100}%)`;
    }
};
// Function to update the current date and time
function updateDateTime() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    document.getElementById("current-time").textContent = `${formattedDate} ${formattedTime}`;
}

// Call the function once when the page loads
window.onload = updateDateTime;

// Update the time every second
setInterval(updateDateTime, 1000);
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateTime, 1000); // Update every second
updateTime(); // Initial call