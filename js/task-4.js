const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const inputEmail = event.currentTarget.elements.email;
    const inputPassword = event.currentTarget.elements.password;
    if (inputEmail.value === '' || inputPassword.value === '' ) {
        alert('All form fields must be filled in')
    }
    const info = {
        email: inputEmail.value.trim(),
        password: inputPassword.value.trim(),
    }
    console.log(info);
    event.currentTarget.reset();
});
