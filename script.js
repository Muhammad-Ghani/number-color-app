document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the username value
    const username = document.getElementById('username').value;

    // Redirect based on the username
    if (username === "23") {
        window.location.href = "red-page.html"; // Redirect to the red page
    } else if(username==="25") {
        window.location.href = "blue-page.html"; // Redirect to the blue page
    }
    else(
        document.getElementById('feature-products').style.display='block'
    )
});