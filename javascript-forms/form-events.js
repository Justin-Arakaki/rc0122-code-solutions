const $name = document.querySelector('#user-name');
const $email = document.querySelector('#user-email');
const $message = document.querySelector('#user-message');
const $form = document.querySelector('#contact-form');
$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);
$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);
$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
$form.addEventListener('submit', handleSubmit);

function handleFocus(event) {
  console.log('focus event fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}

function handleSubmit(event) {
  event.preventDefault();
  const messageData = {};
  messageData.name = event.target.elements.name.value;
  messageData.email = event.target.elements.email.value;
  messageData.message = event.target.elements.message.value;
  console.log('submit event fired');
  console.log(messageData);
}
