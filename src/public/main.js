// Vista del cliente

const socket = io(); // Se conecta al servidor socket.io

const noteForm = document.querySelector('#noteForm');
const titleInput = document.querySelector('#title');
const descriptionInput = document.querySelector('#description');
const notes = document.querySelector('#notes');

noteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    saveNote(titleInput.value, descriptionInput.value);
});


