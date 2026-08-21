import { validateForm } from "./validation.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#signup-form");
  if (!form) {
    return;
  }

  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");

  const nameError = document.querySelector("#name-error");
  const emailError = document.querySelector("#email-error");
  const passwordError = document.querySelector("#password-error");

  const successMessage = document.querySelector("#form-success");

  function showError(element, message) {
    if (!element) {
      return;
    }
    element.textContent = message;
    element.hidden = message === "";
  }

  function runValidation() {
    const errors = validateForm(
      nameInput.value,
      emailInput.value,
      passwordInput.value
    );

    showError(nameError, errors.name);
    showError(emailError, errors.email);
    showError(passwordError, errors.password);

    return Object.values(errors).every((message) => message === "");
  }

  [nameInput, emailInput, passwordInput].forEach((input) => {
    input.addEventListener("input", runValidation);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isValid = runValidation();

    if (isValid) {
      successMessage.textContent = "¡Cuenta creada correctamente!";
      successMessage.hidden = false;
      form.reset();
      [nameError, emailError, passwordError].forEach((errorElement) => {
        showError(errorElement, "");
      });
    } else {
      successMessage.hidden = true;
    }
  });
});
