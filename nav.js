function openMenu() {
    document.getElementById("sidemenu").style.right = "0";
}

function closeMenu() {
    document.getElementById("sidemenu").style.right = "-200px";
}

document.addEventListener("DOMContentLoaded", function () {
    // Highlight active link
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
