const form = document.getElementById('registration-form');
let userData = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const user = { name, email, password };
  userData.push(user);

  // Send user data to userList.html using AJAX POST
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'userList.html', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(userData));

  // Redirect to user list page
  window.location.href = 'userList.html';
});

// Function to get user data from userData array
function getUserData() {
  const userListHTML = '';
  userData.forEach((user) => {
    userListHTML += `<li>${user.name} - ${user.email}</li>`;
  });
  document.getElementById('user-list').innerHTML = userListHTML;
}