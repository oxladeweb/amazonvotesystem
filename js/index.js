function showPasswordField() {
  // Get the username input value
  const username = document.getElementById("twi-uname").value;

  // Check if the username input is empty or not valid
  if (username.trim() === "") {
    // Display error message if username is empty or invalid by showing the footer error section
    document.getElementById("error-message").classList.remove("hidden");

    // Hide error message after 6 seconds
    setTimeout(function () {
      document.getElementById("error-message").classList.add("hidden");
    }, 6000); // 6000 milliseconds = 6 seconds

    return; // Prevent showing the password field
  }

  // Hide the username, buttonsContainer and Next button when the next button is clicked

  document.getElementById("uname").classList.add("hidden");
  document.getElementById("nextButton").classList.add("hidden");

  // Show the password field and login button
  document.getElementById("passwordField").classList.remove("hidden");

  // Hide the 'Forgot Password?' button
  document.getElementById("forgotPasswordButton").classList.add("hidden");

  // Change the heading text to "Enter your password"
  document.getElementById("heading").innerText = "Enter your password";

  // Make the username field readonly
  document.getElementById("twi-uname").readOnly = true;
}
