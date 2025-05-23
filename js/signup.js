function validateSignup(event) {
    event.preventDefault();

    const email = document.querySelector('.email').value.trim();
    const nameInput = document.querySelectorAll('.password')[0].value.trim();
    const passwordInput = document.querySelectorAll('.password')[1].value.trim();
    const phone = document.querySelector('.number').value.trim();
    const errorMessage = document.querySelector('.error-message');

    let error = "";

    // Email checks
    if (email.length < 10) {
        error = "❌ Email must be at least 10 characters long.";
    } else if (!email.endsWith("@gmail.com") && !email.endsWith("@yahoo.com")) {
        error = "❌ Only Gmail or Yahoo emails are allowed.";
    } else if (!/^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/.test(email)) {
        error = "❌ Invalid email format.";
    }

    // Name check
    else if (!/^[A-Za-z\s]{3,}$/.test(nameInput)) {
        error = "❌ Name must be at least 3 letters and contain only letters.";
    }

    // Password check
    else if (passwordInput.length < 6) {
        error = "❌ Password must be at least 6 characters long.";
    }

    // Phone number check
    else if (!/^\d{10,13}$/.test(phone)) {
        error = "❌ Phone number must be between 10 and 13 digits.";
    }

    // Show error or save to localStorage
    if (error) {
        errorMessage.textContent = error;
        errorMessage.style.color = "red";
    } else {
        const user = {
            email,
            name: nameInput,
            phone,
            password: passwordInput
        };
        localStorage.setItem("signupData", JSON.stringify(user));

        errorMessage.textContent = "✅ Signup successful! Redirecting...";
        errorMessage.style.color = "green";

        setTimeout(() => {
            window.location.href = "login.html";
        }, 1500);
    }
}
