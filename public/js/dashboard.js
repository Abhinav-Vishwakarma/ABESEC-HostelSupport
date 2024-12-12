document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const optionCards = document.querySelectorAll('.option_card');
    const contentOverlay = document.getElementById("content_overlay");
    const overlayContent = document.getElementById("overlay_content");
    const closeOverlay = document.getElementById("close_overlay");
    const contentArea = document.getElementById("content_area");

    // Theme toggle functionality
    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-theme");
    });

    // Handle option card clicks for both desktop and mobile
    optionCards.forEach(card => {
        card.addEventListener('click', function() {
            const cardId = this.id;
            let contentUrl = '';

            // Map the card ID to a content page
            switch(cardId) {
                case 'leave_application':
                    contentUrl = '/content/leave_application';
                    break;
                case 'qr_gate_pass':
                    contentUrl = '/content/qr_gate_pass';
                    break;
                case 'complaints':
                    contentUrl = '/content/complaints';
                    break;
                case 'monthly_spent':
                    contentUrl = '/content/monthly_spent';
                    break;
                case 'update_profile':
                    contentUrl = '/content/update_profile';
                    break;
                default:
                    contentUrl = '/content/default';
            }

            // Fetch the content dynamically from the server
            fetch(contentUrl)
                .then(response => response.text())
                .then(html => {
                    if (window.innerWidth <= 768) {
                        overlayContent.innerHTML = html; // Inject HTML into overlay
                        contentOverlay.style.display = "flex";
                        initUpdateProfileForm(); // Initialize the form functionality for mobile
                    } else {
                        contentArea.innerHTML = html; // Inject HTML into content area
                        initUpdateProfileForm(); // Initialize the form functionality for desktop
                    }
                })
                .catch(error => console.error('Error fetching content:', error));
        });
    });

    // Close overlay for mobile view
    closeOverlay.addEventListener('click', function() {
        contentOverlay.style.display = "none";
    });

    // Function to initialize the "Update Profile" form after it is loaded
    function initUpdateProfileForm() {
        const updateProfileForm = document.getElementById("update_profile_form");

        if (updateProfileForm) {
            const submitButton = updateProfileForm.querySelector("#submit_button");
            
            // Add event listener for form submission
            if (submitButton) {
                submitButton.addEventListener('click', function(event) {
                    event.preventDefault(); // Prevent default form submission behavior
                    
                    // Handle form submission logic (e.g., validation, AJAX request)
                    const formData = new FormData(updateProfileForm);
                    console.log('Form data:', formData);

                    // You can add AJAX submission logic here, e.g., using fetch() or XMLHttpRequest
                    // fetch('/submit_form', { method: 'POST', body: formData })
                    //     .then(response => response.json())
                    //     .then(data => console.log(data))
                    //     .catch(error => console.error('Error submitting form:', error));
                });
            }

            // Add any additional form-related event listeners (e.g., input validation) here
            const inputs = updateProfileForm.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.addEventListener('focus', function() {
                    input.classList.remove('error'); // Remove error styles on focus
                });
            });
        }s
    }
});
