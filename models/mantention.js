const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mantentionSchema = new Schema({
    title:{
        type: String,
        minLength: [1, 'El nombre es demaciado corto'],
        maxLength:[100, 'Máximo 100 caracteres'],
        required: [true, 'El título de la mantención es necesario'],
        //Para validar (solo numeros letras y espacios sin tildes')
        match: /^[a-zA-Z0-9 ]+$/
    },
    maintenceManager:{
        type: String,
        minLength:1,
        maxLength: [100, 'Máximo 100 caracteres permitidos'],
        required: [true, 'La mantención debe contar con el nombre de la empresa encargada'],
        //Para validar (solo numeros letras y espacios sin tildes')
        match: /^[a-zA-Z0-9 ]+$/
    },
    createdAt:{
        // type: Date,
        type: String,
        default: new Date().toLocaleDateString(),
        required:true,
    },
    cost:{
        type: Number,
        // required: [true, 'La mantención debe tener un coste declarado'],
    },
    description:{
        type: String,
        minLength:1,
        maxLength:3000,
        required: true,
        //Para validar (solo numeros letras y espacios sin tildes')
        match: /^[a-zA-Z0-9 ]+$/
    },
});

module.exports = mongoose.model('mantention',mantentionSchema);