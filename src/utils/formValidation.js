// aman-dental/src/utils/formValidation.js (UPDATED for Pure CSS)

/**
 * Validates an email address format.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates a phone number format (basic check, can be extended).
 * Allows for various formats including international.
 * @param {string} phone
 * @returns {boolean}
 */
function isValidPhone(phone) {
  if (!phone) return true; // Phone is optional, so empty is valid
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/; // Basic international phone regex
  return phoneRegex.test(phone);
}

/**
 * Displays or hides an error message for a given input field.
 * @param {string} elementId - The ID of the input field (e.g., 'name', 'email').
 * @param {boolean} isValid - Whether the input is valid.
 * @param {string} message - The error message to display if invalid.
 */
function displayError(elementId, isValid, message) {
  const errorElement = document.getElementById(`${elementId}Error`);
  if (errorElement) {
    if (isValid) {
      errorElement.classList.remove('show'); // Hide error
    } else {
      errorElement.textContent = message;
      errorElement.classList.add('show'); // Show error
    }
  }
}

/**
 * Validates the entire contact form.
 * @param {object} formData - Object containing form field values.
 * @returns {boolean} - True if form is valid, false otherwise.
 */
export function validateForm(formData) {
  let formIsValid = true;

  // Validate Name
  if (!formData.name.trim()) {
    displayError('name', false, 'Name is required.');
    formIsValid = false;
  } else {
    displayError('name', true);
  }

  // Validate Email
  if (!formData.email.trim() || !isValidEmail(formData.email)) {
    displayError('email', false, 'A valid email is required.');
    formIsValid = false;
  } else {
    displayError('email', true);
  }

  // Validate Phone (if provided)
  if (formData.phone && !isValidPhone(formData.phone)) {
    displayError('phone', false, 'Invalid phone number format.');
    formIsValid = false;
  } else {
    displayError('phone', true);
  }

  // Validate Message
  if (!formData.message.trim()) {
    displayError('message', false, 'Message is required.');
    formIsValid = false;
  } else {
    displayError('message', true);
  }

  return formIsValid;
}