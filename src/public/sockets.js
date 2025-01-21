
const saveNote = (title, description) => {
    /* Emitir un evento al servidor */
    socket.emit('client:newNote', {
        title: titleInput,
        description: descriptionInput
    });
};

/* Recivir un evento desde el servidor */
socket.on('server:newNote', notes => {
    console.log(notes);
    notes.innerHTML = 'new note';
});