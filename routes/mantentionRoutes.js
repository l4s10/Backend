const express = require('express');
const api = express.Router();
const mantentionController = require('../controllers/mantentionController');

/* Enlaces insomnia
    -> http://localhost:(env.PORT)/api/Mantention/Create : Crear mantencion
    -> http://localhost:(env.PORT)/api/Mantentions/view : Ver mantenciones
    -> http://localhost:(env.PORT)/api/Mantention/delete/(id) : Eliminar mantencion
*/
//Rutas para Get,Post y Delete.
api.get('/Mantention/view', mantentionController.getMantention);
api.post('/Mantention/Create', mantentionController.createMantention);
api.delete('/Mantention/delete/:id', mantentionController.deleteMantention);

module.exports = api;
