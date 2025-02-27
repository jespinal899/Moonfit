document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuBar = document.getElementById("menuBar");

    menuToggle.addEventListener("click", function () {
        menuBar.classList.toggle("active");
    });
});
