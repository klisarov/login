document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  // sobiranje informacii
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // proverka
  if (username === "admin" && password === "password") {
// redirect
    window.location.replace("https://www.klisarov.me");
  } else {
    // fail = alert
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Invalid username or password. Please try again.";
    errorMessage.classList.add("error-message");
    document.getElementById("loginForm").appendChild(errorMessage);
  }
});
