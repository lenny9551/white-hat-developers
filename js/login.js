// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('loginForm');
//     if (!form) return;

//     form.addEventListener('submit', function (e) {
//         e.preventDefault();

//         const username = form.elements['username'].value.trim();
//         const password = form.elements['password'].value;

//         let valid = true;
//         let message = '';

//         if (!username) {
//             valid = false;
//             message += 'Username is required.\n';
//         }
//         if (!password) {
//             valid = false;
//             message += 'Password is required.\n';
//         }

//         if (!valid) {
//             alert(message);
//             return;
//         }

        // Proceed with login (e.g., send to server)
        // Example:
        // fetch('/login', { method: 'POST', body: new FormData(form) })
        //   .then(...)
//         alert('Login successful (validation passed)');
//     });
// });
  function validatelogin() {
        event.preventDefault();
        const email = document.querySelector('.email').value.trim();
        const password = document.querySelector('.password').value.trim();
        const errorMessage = document.querySelector('.error-message');
        
        errorMessage.textContent = '';

        if (!email || !password) {
          errorMessage.textContent = 'Please enter both email and password.';
          return false;
        }

        // Simple email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
          errorMessage.textContent = 'Please enter a valid email address.';
          return false;
        }

        // // Example: check hardcoded credentials (for demo purposes)
        if (email === 'user@example.com' && password === 'password123') {
          errorMessage.style.color = 'green';
          errorMessage.textContent = 'Login successful!';
          // Redirect or further logic here
           window.location.href = "blog.html";
             localStorage.setItem("loggedUser", email);

        }
        
    //      else if (username === validUser && password === validPass) {
    //   // ✅ SUCCESS: Redirect to blogs.html
     
    // } 
        else {
          errorMessage.textContent = 'Invalid email or password.';
            errorMessage.style.color = 'red';
        }
        return false;
        
      }
//  function validateLogin() {
//       const email = document.getElementById("email").value.trim();
//       const password = document.getElementById("password").value.trim();
//       const message = document.getElementById("message");

//       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//       if (!emailPattern.test(email)) {
//         message.textContent = "Please enter a valid email address.";
//       } else if (password.length < 8) {
//         message.textContent = "Password must be at least 8 characters.";
//       } else {
//         // ✅ Save user email to localStorage
//         localStorage.setItem("loggedUser", email);

//         // ✅ Redirect to blogs page
//         window.location.href = "blogs.html";
//       }
//     }
// Handle login function
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (username === "admin" && password === "1234") {
    message.style.color = "green";
    message.textContent = "Login successful!";
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password.";
  }
}

// Listen for Enter key press
document.getElementById("loginForm").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault(); // Prevent default form submission
    login(); // Call login function
  }
});
