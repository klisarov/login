document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  // zemanje na podatoci
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "password") {
    // ako loginot e uspesen, prenasocuva na index fileot
    window.location.href = "index.html";
  } else {
    // ako e pogresen username ili psw, se dava alert
    alert("Invalid username or password. Please try again.");
  }
});
