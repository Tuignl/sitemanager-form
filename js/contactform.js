// tutorial https://www.freecodecamp.org/news/build-and-validate-beautiful-forms-with-vanilla-html-css-js/


function validateEmail(email) {
  if (!email) return 'Email is required';
    
  const isValidEmail = /^\S+@\S+$/g
  if (!isValidEmail.test(email)) {
    return 'Please enter a valid email';
  }

  return '';
}

// error berichten weergeven

function handleSignupFormSubmit(e) {
  // prevent default browser behaviour
  e.preventDefault();

  const formDataEntries = new FormData(signupForm).entries();
  const { email, password } = Object.fromEntries(formDataEntries);

  const emailErrorMessage = validateEmail(email);
  const passowrdErrorMessage = validatePassword(password);

  if (!emailErrorMessage) {
		// select the email form field message element
    const emailErrorMessageElement = document.querySelector('.email .dkh-form-field__messages');
    // show email error message to user
    emailErrorMessageElement.innerText = emailErrorMessage;
  }

  if (passowrdErrorMessage) {
		// select the email form field message element
    const passwordErrorMessageElement = document.querySelector('.password .dkh-form-field__messages');
    // show password error message to user
    passwordErrorMessageElement.innerText = passowrdErrorMessage;
  }
}