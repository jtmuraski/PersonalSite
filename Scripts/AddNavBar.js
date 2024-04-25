// Call this script to add the Navbar from navbar.html to the top of the page

document.addEventListenter('DOMContentLoaded', function(){
    fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav').innerHTML = data;    
    });
});