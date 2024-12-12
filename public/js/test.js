document.addEventListener('DOMContentLoaded', () => {
    const formElements = document.querySelectorAll('.form_container input, .form_container textarea');
    const editButton = document.getElementById('editButton');
    const submitButton = document.getElementById('submitBtn');

    let formEdited = false;
s
    // Toggle edit mode on button click
    editButton.addEventListener('click', () => {
        if (editButton.textContent === 'Edit') {
            enableEditing();
        } else {
            disableEditing();
        }
    });

    // Function to enable form inputs
    function enableEditing() {
        formElements.forEach(input => input.removeAttribute('disabled')); // Enable inputs
        editButton.textContent = 'Done'; // Change button text to Done
        submitButton.disabled = true; // Keep submit button disabled initially
        submitButton.classList.remove('enabled'); // Remove enabled class

        formEdited = false; // Reset the formEdited flag
        formElements.forEach(input => {
            input.addEventListener('input', handleInputChange); // Add input event listener
        });
    }

    // Function to disable form inputs
    function disableEditing() {
        formElements.forEach(input => input.setAttribute('disabled', 'disabled')); // Disable inputs
        editButton.textContent = 'Edit'; // Change button text back to Edit

        submitButton.disabled = true; // Disable submit button
        submitButton.classList.remove('enabled'); // Remove enabled class
    }

    // Handle input changes and enable submit button
    function handleInputChange() {
        if (!formEdited) {
            submitButton.disabled = false; // Enable submit button
            submitButton.classList.add('enabled'); // Add enabled class
            formEdited = true; // Set formEdited flag to true
        }
    }
});