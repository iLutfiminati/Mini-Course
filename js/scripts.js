
 const FormValidator = (() => {
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validateNotEmpty = (input) => input.trim() !== "";

    return {
        validateEmail,
        validateNotEmpty,
    };
})();

const nameInput = document.getElementById('name');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const dobInput = document.getElementById('dob');
const genderInput = document.getElementById('gender');
const messageDiv = document.getElementById('message');


document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true; 

 
    if (!FormValidator.validateNotEmpty(nameInput.value)) {
        nameInput.classList.add('is-invalid');
        isValid = false;
    } else {
        nameInput.classList.remove('is-invalid');
    }

    if (!FormValidator.validateNotEmpty(usernameInput.value)) {
        usernameInput.classList.add('is-invalid');
        isValid = false;
    } else {
        usernameInput.classList.remove('is-invalid');
    }

    if (!FormValidator.validateEmail(emailInput.value)) {
        emailInput.classList.add('is-invalid');
        isValid = false;
    } else {
        emailInput.classList.remove('is-invalid');
    }

    if (!FormValidator.validateNotEmpty(phoneInput.value)) {
        phoneInput.classList.add('is-invalid');
        isValid = false;
    } else {
        phoneInput.classList.remove('is-invalid');
    }

    if (!FormValidator.validateNotEmpty(passwordInput.value)) {
        passwordInput.classList.add('is-invalid');
        isValid = false;
    } else {
        passwordInput.classList.remove('is-invalid');
    }

    if (!FormValidator.validateNotEmpty(dobInput.value)) {
        dobInput.classList.add('is-invalid');
        isValid = false;
    } else {
        dobInput.classList.remove('is-invalid');
    }

    if (genderInput.value === "") {
        genderInput.classList.add('is-invalid');
        isValid = false;
    } else {
        genderInput.classList.remove('is-invalid');
    }

    if (isValid) {
        messageDiv.innerHTML = "<div class='alert alert-success'>Form berhasil dikirim!</div>";
    } else {
        messageDiv.innerHTML = "<div class='alert alert-danger'>Mohon lengkapi semua field yang diperlukan.</div>";
    }
});