// // Get references to the main content area and option cards
// const contentArea = document.getElementById("content_area");
// const leaveRequestsCard = document.getElementById("view_leave_requests");
// const complaintsCard = document.getElementById("view_complaints");
// const manageRoomsCard = document.getElementById("manage_rooms");
// const studentRecordsCard = document.getElementById("student_records");

// // Function to display content in the content area
// function updateContentArea(content) {
//     contentArea.innerHTML = `<p>${content}</p>`;
//     contentArea.style.display = "block"; // Ensure it's visible for mobile
// }

// // Event listeners for dashboard cards
// leaveRequestsCard.addEventListener("click", () => {
//     updateContentArea("Leave Requests: Here are all the leave requests submitted by students.");
// });

// complaintsCard.addEventListener("click", () => {
//     updateContentArea("Complaints: View and address student complaints here.");
// });

// manageRoomsCard.addEventListener("click", () => {
//     updateContentArea("Manage Rooms: Allocate and manage room assignments.");
// });

// studentRecordsCard.addEventListener("click", () => {
//     updateContentArea("Student Records: Access and update student details.");
// });

// // Default message in the content area
// updateContentArea("Select an option to view content here.");


// document.addEventListener("DOMContentLoaded", function() {
//     const themeToggle = document.getElementById("theme-toggle");
//     const optionCards = document.querySelectorAll('.option_card');
//     const contentOverlay = document.getElementById("content_overlay");
//     const overlayContent = document.getElementById("overlay_content");
//     const closeOverlay = document.getElementById("close_overlay");
//     // const contentArea = document.getElementById("content_area");
//     const contentArea = document.getElementById("content_area");
//     const leaveRequestsCard = document.getElementById("view_leave_requests");
//     const complaintsCard = document.getElementById("view_complaints");
//     const manageRoomsCard = document.getElementById("manage_rooms");
//     const studentRecordsCard = document.getElementById("student_records");

//     // Theme toggle functionality
//     themeToggle.addEventListener("click", function() {
//         document.body.classList.toggle("dark-theme");
//     });

//     // Handle option card clicks for both desktop and mobile
//     optionCards.forEach(card => {
//         card.addEventListener('click', function() {
//             const cardId = this.id;
//             let contentUrl = '';

//             // Map the card ID to a content page
//             switch(cardId) {
//                 case 'view_leave_requests':
//                     contentUrl = './view_leave_requests.html';
//                     break;
//                 case 'view_complaints':
//                     contentUrl = './view_complaints.html';
//                     break;
//                 case 'manage_rooms':
//                     contentUrl = './manage_rooms.html';
//                     break;
//                 case 'student_records':
//                     contentUrl = './student_records.html';
//                     break;
//                 // case 'update_profile':
//                 //     contentUrl = '/content/update_profile';
//                 //     break;
//                 default:
//                     contentUrl = '/content/default';
//             }

//             // Fetch the content dynamically from the server
//             fetch(contentUrl)
//                 .then(response => response.text())
//                 .then(html => {
//                     if (window.innerWidth <= 768) {
//                         overlayContent.innerHTML = html; // Inject HTML into overlay
//                         contentOverlay.style.display = "flex";
//                         initUpdateProfileForm(); // Initialize the form functionality for mobile
//                     } else {
//                         contentArea.innerHTML = html; // Inject HTML into content area
//                         initUpdateProfileForm(); // Initialize the form functionality for desktop
//                     }
//                 })
//                 .catch(error => console.error('Error fetching content:', error));
//         });
//     });

//     // Close overlay for mobile view
//     closeOverlay.addEventListener('click', function() {
//         contentOverlay.style.display = "none";
//     });

//     // Function to initialize the "Update Profile" form after it is loaded
//     function initUpdateProfileForm() {
//         const updateProfileForm = document.getElementById("update_profile_form");

//         if (updateProfileForm) {
//             const submitButton = updateProfileForm.querySelector("#submit_button");
            
//             // Add event listener for form submission
//             if (submitButton) {
//                 submitButton.addEventListener('click', function(event) {
//                     event.preventDefault(); // Prevent default form submission behavior
                    
//                     // Handle form submission logic (e.g., validation, AJAX request)
//                     const formData = new FormData(updateProfileForm);
//                     console.log('Form data:', formData);

//                     // You can add AJAX submission logic here, e.g., using fetch() or XMLHttpRequest
//                     // fetch('/submit_form', { method: 'POST', body: formData })
//                     //     .then(response => response.json())
//                     //     .then(data => console.log(data))
//                     //     .catch(error => console.error('Error submitting form:', error));
//                 });
//             }

//             // Add any additional form-related event listeners (e.g., input validation) here
//             const inputs = updateProfileForm.querySelectorAll('input, textarea');
//             inputs.forEach(input => {
//                 input.addEventListener('focus', function() {
//                     input.classList.remove('error'); // Remove error styles on focus
//                 });
//             });
//         }s
//     }
// });


document.addEventListener("DOMContentLoaded", function () {
    const optionCards = document.querySelectorAll('.option_card');
    const contentOverlay = document.getElementById("content_overlay");
    const overlayContent = document.getElementById("overlay_content");
    const closeOverlay = document.getElementById("close_overlay");
    const contentArea = document.getElementById("content_area");

    // Handle option card clicks
    optionCards.forEach(card => {
        card.addEventListener('click', function () {
            const cardId = this.id;
            let contentUrl = '';

            // Map the card ID to a content page
            switch (cardId) {
                case 'view_leave_requests':
                    contentUrl = './view_leave_requests.html';
                    break;
                case 'view_complaints':
                    contentUrl = './view_complaints.html';
                    break;
                case 'manage_rooms':
                    contentUrl = './manage_rooms.html';
                    break;
                case 'student_records':
                    contentUrl = './student_records.html';
                    break;
                default:
                    contentUrl = './default_content.html';
            }

            // Fetch the content dynamically from the server
            fetch(contentUrl)
                .then(response => response.text())
                .then(html => {
                    if (window.innerWidth <= 768) {
                        overlayContent.innerHTML = html; // Inject HTML into overlay
                        contentOverlay.style.display = "flex";
                    } else {
                        contentArea.innerHTML = html; // Inject HTML into content area
                    }

                    // Load any scripts in the dynamically fetched HTML
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = html;
                    const scripts = tempDiv.querySelectorAll('script');
                    scripts.forEach(script => {
                        const newScript = document.createElement('script');
                        if (script.src) {
                            newScript.src = script.src;
                        } else {
                            newScript.textContent = script.textContent;
                        }
                        document.body.appendChild(newScript);
                    });
                })
                .catch(error => console.error('Error fetching content:', error));
        });
    });

    // Close overlay for mobile view
    closeOverlay.addEventListener('click', function () {
        contentOverlay.style.display = "none";
    });
});