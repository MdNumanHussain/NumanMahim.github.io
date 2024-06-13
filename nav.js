function openMenu() {
    const sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0";
    sidemenu.classList.add("active");
}

function closeMenu() {
    const sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-100%";
    sidemenu.classList.remove("active");
}

function toggleAccessibility() {
    const body = document.body;
    const modeSwitch = document.getElementById("mode-switch");
    const modeText = document.getElementById("mode-text");

    body.classList.toggle("accessibility-mode");

    if (body.classList.contains("accessibility-mode")) {
        modeSwitch.checked = true;
        modeText.innerHTML = "Daymode";
        modeText.classList.add("right");
        modeText.classList.remove("left");
    } else {
        modeSwitch.checked = false;
        modeText.innerHTML = "Nightmode";
        modeText.classList.add("left");
        modeText.classList.remove("right");
    }
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
