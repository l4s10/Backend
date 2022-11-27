const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*Actualmente las propiedades seran placeholders, debido a que trabajaremos con archivos mas adelante*/
const mantentionSchema = new Schema({
    title:{
        type: String,
        minLength:1,
        maxLength:100,
        required: true
    },
    cost:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        minLength:1,
        maxLength:1000,
        required: true
    }
});

module.exports = mongoose.model('mantention',mantentionSchema);