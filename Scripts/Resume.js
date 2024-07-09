// Script to run the Resume page to give functionality for the resume timeline
var cards = document.querySelectorAll('.card');
console.log("There are " + cards.length + " cards on the page.");
var jobDetails = document.querySelectorAll('.jobDetail');
console.log("There are " + jobDetails.length + " job details on the page.");

// Hide all of the job details on the page
function hideAllDetails() {
    jobDetails.forEach(detail =>
    {
        detail.style.display = 'none';
    });
}

// Show the job details for the selected job
function showDetails(id) {
    var detail = document.querySelector('#' + id + 'Details');
    console.log("Showing details for " + id + ".")
    if(detail){
        detail.style.display = 'block';
    }
}

// Add the on mouse click event to each card
cards.forEach(function(card, index){
    card.addEventListener('click', function()
    {   
        hideAllDetails();
        showDetails(card.id);
    });
});

// Execute necessary functions
hideAllDetails();