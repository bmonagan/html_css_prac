const form = document.querySelector('.standard');
const email = document.querySelector('#email');

email.addEventListener('input', function (event) {
  if (email.validity.valueMissing) {
    email.setCustomValidity('You need to enter an e-mail address!');
  }
    else if (email.validity.typeMismatch) {
    email.setCustomValidity('Please enter a valid email address!'); 
  } else {
    email.setCustomValidity('');
}});

form.addEventListener('submit', function (event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    form.reportValidity();
  }
});

const postalCode = document.querySelector('#postal-code');

postalCode.addEventListener('input', function (event) {
    if (postalCode.validity.patternMismatch) {
    postalCode.setCustomValidity('Please enter a valid postal code!');
    } else {
    postalCode.setCustomValidity('');
    }});

const phoneNumber = document.querySelector('#phone-number');

phoneNumber.addEventListener('input', function (event) {
  if (phoneNumber.validity.patternMismatch) {
  phoneNumber.setCustomValidity('Please enter a valid phone number! Use 123-456-7890.');
  } else {
  phoneNumber.setCustomValidity('');
  }});