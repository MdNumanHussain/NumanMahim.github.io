// Function to check if dark mode is enabled
function isDarkModeEnabled() {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark" || storedTheme === null; // Returns true if dark mode, false if light mode
}

// Function to apply the stored theme
function applyStoredTheme() {
    const isDarkMode = isDarkModeEnabled();
    const body = document.body;
    const modeSwitch = document.getElementById("mode-switch");
    const modeText = document.getElementById("mode-text");

    if (isDarkMode) {
        body.classList.remove("accessibility-mode");
        if (modeSwitch) modeSwitch.checked = false;
        if (modeText) {
            modeText.innerHTML = "Nightmode";
            modeText.classList.add("left");
            modeText.classList.remove("right");
        }
    } else {
        body.classList.add("accessibility-mode");
        if (modeSwitch) modeSwitch.checked = true;
        if (modeText) {
            modeText.innerHTML = "Daymode";
            modeText.classList.add("right");
            modeText.classList.remove("left");
        }
    }
}

// Function to toggle the theme and save the state
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
        localStorage.setItem("theme", "light");
    } else {
        modeSwitch.checked = false;
        modeText.innerHTML = "Nightmode";
        modeText.classList.add("left");
        modeText.classList.remove("right");
        localStorage.setItem("theme", "dark");
    }
}

document.addEventListener("DOMContentLoaded", applyStoredTheme);
