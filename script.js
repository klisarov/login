document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  // vnes na user i psw
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // proverka na podatocite, tocen user e admin i tocen psw e password
  if (username === "admin" && password === "password") {
    // ako informaciite se tocni, nosi na https://www.klisarov.me
    window.location.href = "https://www.klisarov.me";
  } else {
    // vo slucaj da ne e tocen login, dava alert
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Invalid username or password. Please try again.";
    errorMessage.classList.add("error-message");
    document.getElementById("loginForm").appendChild(errorMessage);
  }
});
