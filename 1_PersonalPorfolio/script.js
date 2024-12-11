// DOM Manipulation for Projects Section
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.backgroundColor = '#f0f8ff';
    });

    project.addEventListener('mouseleave', () => {
        project.style.backgroundColor = '#fff';
    });
});

// Form Submission Logic
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        this.reset(); // Clear the form
    } else {
        alert('Please fill out all fields.');
    }
});
