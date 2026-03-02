document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const showError = (input, errorElement, message) => {
        input.classList.add("invalid");
        errorElement.textContent = message;
    };

    const clearError = (input, errorElement) => {
        input.classList.remove("invalid");
        errorElement.textContent = "";
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;

        if (nameInput.value.trim() === "") {
            showError(nameInput, nameError, "Please enter your name.");
            isValid = false;
        } else {
            clearError(nameInput, nameError);
        }

        const emailValue = emailInput.value.trim();
        if (emailValue === "") {
            showError(emailInput, emailError, "Please enter your email.");
            isValid = false;
        } else if (!isValidEmail(emailValue)) {
            showError(
                emailInput,
                emailError,
                "Please enter a valid email address.",
            );
            isValid = false;
        } else {
            clearError(emailInput, emailError);
        }

        if (messageInput.value.trim() === "") {
            showError(messageInput, messageError, "Please enter a message.");
            isValid = false;
        } else {
            clearError(messageInput, messageError);
        }

        if (isValid) {
            console.log("Form validated successfully!", {
                name: nameInput.value.trim(),
                email: emailValue,
                message: messageInput.value.trim(),
            });

            form.reset();
            alert("Thanks for reaching out! I will get back to you soon.");
        }
    });
});
