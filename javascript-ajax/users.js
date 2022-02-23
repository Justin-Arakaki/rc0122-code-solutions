getUsers();

function getUsers() {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    populateUsers(xhr.response);
  });
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.send();
}

function renderUser(userName) {
  const elItem = document.createElement('li');
  elItem.textContent = userName;
  return elItem;
}

function populateUsers(userArray) { // takes in array of users (xhr.response)
  const elUserList = document.querySelector('#user-list');
  for (let i = 0; i < userArray.length; i++) {
    const elUserName = renderUser(userArray[i].name);
    elUserList.appendChild(elUserName);
  }
}
