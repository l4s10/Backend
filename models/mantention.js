const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*Actualmente las propiedades seran placeholders, debido a que trabajaremos con archivos mas adelante*/
const mantentionSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    cost:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    fecha:{
        type:Date,
        required:false
    }
});

module.exports = mongoose.model('mantention',mantentionSchema);