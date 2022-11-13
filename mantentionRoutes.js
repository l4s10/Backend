const express = require('express');
const api = express.Router();
const mantentionController = require('../controllers/mantentionController');

//Enlace insomnia localhost:3001/api/create-mantention
api.post('/Mantention', mantentionController.createMantention);
api.delete('/Mantention/delete/:id', mantentionController.deleteMantention);

module.exports = api;