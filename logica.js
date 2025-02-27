document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuBar = document.querySelector(".menuBar");
    
    menuToggle.addEventListener("click", function () {
        menuBar.classList.toggle("active");
    });
});
