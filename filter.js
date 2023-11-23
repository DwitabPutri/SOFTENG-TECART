document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.input-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var userInput = document.getElementById('user-input').value;
        var errorElement = document.getElementById('error-message');

        var allowedDomains = ['yahoo.com', 'gmail.com', 'mail.com'];
        var emailRegex = /^[a-zA-Z0-9._-]+@(yahoo\.com|gmail\.com|mail\.com)$/;

        if (emailRegex.test(userInput)) {
            errorElement.textContent = '';
            window.location.href = 'success.html';
            console.log('Form submitted successfully!');
        } else {
            errorElement.textContent = 'Valid Email Required !';
        }
    });
});
