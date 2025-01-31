// Form Submission Handler
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('fileUpload');
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        // Handle file upload (e.g., send to server)
        console.log('File uploaded:', file.name);
    }
    alert('Thank you! Your inquiry has been submitted.');
    e.target.reset();
});
