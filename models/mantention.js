const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*Actualmente las propiedades seran placeholders, debido a que trabajaremos con archivos mas adelante*/
const mantentionSchema = new Schema({
    title:{
        type: String,
        minLength: [1, 'El nombre es demaciado corto'],
        maxLength:[100, 'Máximo 100 caracteres'],
        required: [true, 'El título de la mantención es necesario']
    },
    maintenceManager:{
        type: String,
        minLength:1,
        maxLength: [100, 'Máximo 100 caracteres permitidos'],
        required: [true, 'La mantención debe contar con el nombre de la empresa encargada']
    },
    createdAt:{
        // type: Date,
        type: String,
        default: new Date().toLocaleDateString(),
        required:true
    },
    cost:{
        type: Number,
        required: [true, 'La mantención debe tener un coste declarado']
    },
    description:{
        type: String,
        minLength:1,
        maxLength:3000,
        required: true
    }
});

module.exports = mongoose.model('mantention',mantentionSchema);