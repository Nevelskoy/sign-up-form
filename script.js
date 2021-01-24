const form = document.getElementById('form')


form.addEventListener('submit', e => {
  e.preventDefault();

  const first = form['firstName'].value;
  const last = form['lastName'].value;
  const email = form['email'].value;
  const password = form['password'].value;

  if (first === '') {
    addErrorTo('firstName', 'First Name is required');
  } else {
    removeErrorFrom('firstName')
  }

  if (last === '') {
    addErrorTo('lastName', 'Last Name is required');
  } else {
    removeErrorFrom('lastName')
  }

  if (email === '') {
    addErrorTo('email', 'Email is required');
  } else if (!isValid(email)) {
    addErrorTo('email', 'Email is not valid');
  } else {
    removeErrorFrom('email')
  }

  if (password === '') {
    addErrorTo('password', 'Password is required');
  } else {
    removeErrorFrom('password')
  }

});

function addErrorTo(field, message) {
  const formControl = form[field].parentNode;
  formControl.classList.add('error')
  const small = form[field].parentNode.querySelector('small');
  small.innerText = message;
  small.style.opacity = '1';
}

function removeErrorFrom(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove('error')
  const small = formControl.querySelector('small');
  small.style.opacity = '0';
}

function isValid(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
