// Get references to the main content area and option cards
const contentArea = document.getElementById("content_area");
const leaveRequestsCard = document.getElementById("view_leave_requests");
const complaintsCard = document.getElementById("view_complaints");
const manageRoomsCard = document.getElementById("manage_rooms");
const studentRecordsCard = document.getElementById("student_records");

// Function to display content in the content area
function updateContentArea(content) {
    contentArea.innerHTML = `<p>${content}</p>`;
    contentArea.style.display = "block"; // Ensure it's visible for mobile
}

// Event listeners for dashboard cards
leaveRequestsCard.addEventListener("click", () => {
    updateContentArea("Leave Requests: Here are all the leave requests submitted by students.");
});

complaintsCard.addEventListener("click", () => {
    updateContentArea("Complaints: View and address student complaints here.");
});

manageRoomsCard.addEventListener("click", () => {
    updateContentArea("Manage Rooms: Allocate and manage room assignments.");
});

studentRecordsCard.addEventListener("click", () => {
    updateContentArea("Student Records: Access and update student details.");
});

// Default message in the content area
updateContentArea("Select an option to view content here.");
