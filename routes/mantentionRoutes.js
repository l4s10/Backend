const express = require('express');
const api = express.Router();
const mantentionController = require('../controllers/mantentionController');

/* Enlaces insomnia http://localhost:(env.PORT)/api/...
-> http://localhost:(env.PORT)/api/Mantention/Create : Crear mantencion
-> http://localhost:(env.PORT)/api/Mantention/delete/(id) : Eliminar mantencion
-> http://localhost:(env.PORT)/api/Mantentions/view : Ver mantenciones
*/

api.post('/Mantention/Create', mantentionController.createMantention);
api.put('/Mantention/Update/:id',mantentionController.updateMantention);
api.delete('/Mantention/delete/:id', mantentionController.deleteMantention);
api.get('/Mantentions/view/:id',mantentionController.getSpecificMantention);
api.get('/Mantentions/view', mantentionController.getMantention);

module.exports = api;
