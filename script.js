

// LOGIN
async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();

  if (data.success) {
    alert("Login Success");
    window.location = "home.html";   // better flow
  } else {
    alert("Invalid Login");
  }
}


// REGISTER COURSE
async function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const course = document.getElementById("course").value;

  const res = await fetch("http://localhost:5000/register-course", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, course })
  });

  const data = await res.text();

  alert("Course Registered Successfully");
}