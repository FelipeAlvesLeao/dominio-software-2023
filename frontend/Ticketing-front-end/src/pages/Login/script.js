const container = document.getElementById('container');
const registerBtn = document.getElementById('Registrar');
const loginBtn = document.getElementById('Login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
