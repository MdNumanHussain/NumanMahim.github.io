function openTab(tabName) {
    var i, tabcontents, tablinks;
    tabcontents = document.getElementsByClassName("tab-contents");
    for (i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active-link");
}

document.addEventListener("DOMContentLoaded", function() {
    const subtitle = document.querySelector('.sub-title');
    const fullText = "About Me";
    let i = 0;
    function typeWriter() {
        if (i < fullText.length) {
            subtitle.textContent += fullText.charAt(i);
            i++;
            setTimeout(typeWriter, 150); // Adjust timing for faster or slower typing
        } else {
            subtitle.style.borderRight = 'none'; // Remove the cursor after typing is complete
        }
    }

    typeWriter(); // Initiate the typewriter effect when the document is ready
});
