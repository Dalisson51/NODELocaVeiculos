import { realizaRegistro } from './registro.js';

const btRegistrar = document.querySelector('form button');
btRegistrar.addEventListener('click', (e) => {
    e.preventDefault();
    realizaRegistro();
});
