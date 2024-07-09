// Scripts that will be run throughout the entire site and are not page specific

// Add the Navbar html doc to the page with a div id of navbar
document.addEventListener("DOMContentLoaded", function(){
    fetch('Navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });
});