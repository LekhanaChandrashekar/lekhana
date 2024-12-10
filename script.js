document.getElementById('contact-form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    
    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Please fill in all fields before submitting.');
        event.preventDefault(); // Prevent form submission
    } else {
        // Add additional validation if necessary (e.g., check email format)
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
        }
    }
});
