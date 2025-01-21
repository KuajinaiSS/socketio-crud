import express from 'express';
import { Server as WebSocketServer } from 'socket.io';
import http from 'http'
import {v4 as uuid} from 'uuid';

const notes = [];

const app = express();
const httpServer = http.createServer(app);
const io = new WebSocketServer(httpServer);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log('Nueva Conexion: ' + socket.id);

    /**
    * emit: Enviar un evento al cliente
    * on: Escuchar un evento del cliente
    * 
    */

    /* (1) Recivimos un evento del cliente */
    socket.on('client:newNote', (data) => {
        console.log('Nueva nota recibida: ' + data.title + ' ' + data.description);

        notes.push({
            uuid: uuid(),
            client_id: socket.id,
            ...data
        });

        /* (2) Enviamos un evento al cliente */
        socket.emit('server:newNote', {
            notes: notes
        });
    });
});

httpServer.listen(3000, () => {
    console.log('Servidor ejecutándose en el puerto 3000');
});
