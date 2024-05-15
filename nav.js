function openMenu() {
    const sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0"; // Adjust as per your CSS
    sidemenu.classList.add("active"); // Adds 'active' class
}

function closeMenu() {
    const sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-100%"; // Adjust as per your CSS
    sidemenu.classList.remove("active"); // Removes 'active' class
}
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('nav ul li a');
    const currentUrl = window.location.href;

    links.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
