// footer.js
// Currently, no specific functionality is defined.
// This file can contain scripts related to footer behavior if needed in the future.
fetch('footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();
    })
    .then(html => {
        document.getElementById('footer-placeholder').innerHTML = html;
    })
    .catch(error => {
        console.error('Failed to load the footer:', error);
    });