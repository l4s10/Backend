const express = require('express');
const api = express.Router();
const mantentionController = require('../controllers/mantentionController');

//Enlace insomnia localhost:3001/api/create-mantention
api.post('/Mantention/Create', mantentionController.createMantention);
api.delete('/Mantention/delete/:id', mantentionController.deleteMantention);
api.get('/Mantentions/view', mantentionController.getMantention);

module.exports = api;
