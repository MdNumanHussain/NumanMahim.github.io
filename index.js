// nav.js
function openMenu() {
    document.getElementById("sidemenu").style.right = "0";
}

function closeMenu() {
    document.getElementById("sidemenu").style.right = "-200px";
}

document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('movingCircles');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let circles = [];

    // Function to create circles
    function createCircles() {
        for (let i = 0; i < 20; i++) {
            let radius = Math.floor(Math.random() * 30) + 10;  // Radius between 10 and 40
            let x = Math.random() * (innerWidth - radius * 2) + radius;
            let y = Math.random() * (innerHeight - radius * 2) + radius;
            let dx = (Math.random() - 0.5) * 4;
            let dy = (Math.random() - 0.5) * 4;
            circles.push({ x, y, dx, dy, radius });
        }
    }

    // Draw circles on canvas
    function draw() {
        ctx.clearRect(0, 0, innerWidth, innerHeight);  // Clear the canvas
        for (let circle of circles) {
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = 'red';
            ctx.fill();
        }
    }

    // Update circle positions
    function update() {
        for (let circle of circles) {
            if (circle.x + circle.radius > innerWidth || circle.x - circle.radius < 0) {
                circle.dx = -circle.dx;
            }
            if (circle.y + circle.radius > innerHeight || circle.y - circle.radius < 0) {
                circle.dy = -circle.dy;
            }
            circle.x += circle.dx;
            circle.y += circle.dy;
        }
        draw();
        requestAnimationFrame(update);  // Create an animation loop
    }

    createCircles();
    update();

    // Handle resizing of the window
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        circles = [];
        createCircles();
    });
});

