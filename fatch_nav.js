fetch('nav.html')
.then(response => response.text())
.then(html => {
    document.getElementById('nav-placeholder').innerHTML = html;
    const script = document.createElement('script');
    script.src = 'nav.js';
    document.body.appendChild(script);
})
.catch(error => console.error('Failed to load the navigation:', error));