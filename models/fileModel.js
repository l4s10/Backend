const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*Schema para los archivos, luego lo importamos en el esquema de mantenciones*/
const fileSchema = new mongoose.Schema({
    file1: {
        type: Buffer,
    },
    fileName1: {
        type: String,
    },
    file2: {
        type: Buffer,
    },
    fileName2: {
        type: String,
    },
    file3: {
        type: Buffer,
    },
    fileName3: {
        type: String,
    },
});
//Creamos el modelo de archivos
const File = mongoose.model('File',fileSchema);
module.exports = File;