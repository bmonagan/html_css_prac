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