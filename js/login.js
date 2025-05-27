function validateLogin(event) {
  event.preventDefault();

  const inputEmail = document.querySelector('.email').value.trim();
  const inputPassword = document.querySelector('.password').value.trim();
  const errorMessage = document.querySelector('.error-message');

  const storedUser = JSON.parse(localStorage.getItem("signupData"));

  if (!storedUser) {
    errorMessage.textContent = "No user found. Please sign up first.";
    errorMessage.style.color = "red";
    return;
  }

  if (inputEmail !== storedUser.email || inputPassword !== storedUser.password) {
    errorMessage.textContent = "❌ Incorrect email or password.";
    errorMessage.style.color = "red";
    return;
  }

  // ✅ Mark user as logged in
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("loggedUser", inputEmail);

  errorMessage.textContent = "✅ Login successful! Redirecting...";
  errorMessage.style.color = "green";

  setTimeout(() => {
    window.location.href = "../index.html";
  }, 1500);
}
