const $form = document.querySelector('#contact-form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const messageData = {};
  messageData.name = event.target.elements.name.value;
  messageData.email = event.target.elements.email.value;
  messageData.message = event.target.elements.message.value;
  console.log('submit event fired');
  console.log(messageData);
  event.target.reset();
}
