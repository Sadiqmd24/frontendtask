document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Perform form validation
    if (validateForm()) {
        var formData = new FormData(this);

        // Convert FormData to URL-encoded format
        var encodedData = new URLSearchParams(formData).toString();

        // Make the API request
        fetch('http://formz.in/api/task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: encodedData
            })
            .then(function(response) {
                if (response.status === 201) {
                    alert('Message sent successfully!');
                    resetForm();
                } else if (response.status === 400) {
                    alert('Error: Bad Request');
                } else {
                    alert('Error: Something went wrong');
                }
            })
            .catch(function(error) {
                console.error('Error:', error);
            });
    }
});

// Rest of the code remains the same...