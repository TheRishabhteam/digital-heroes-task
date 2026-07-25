// load.js — Header aur Footer load karega

document.addEventListener('DOMContentLoaded', function() {
    
    // Header Load
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Header load failed:', error);
            document.getElementById('header-placeholder').innerHTML = '<p style="color:red;">Header not loaded</p>';
        });

    // Footer Load
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Footer load failed:', error);
            document.getElementById('footer-placeholder').innerHTML = '<p style="color:red;">Footer not loaded</p>';
        });

});