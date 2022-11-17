const mantention = require('../models/mantention');
//Importamos una libreria que nos permitirá ingresar la fecha en la que se crea la mantención
var moment = require('moment');

/*Funcionalidad Francisco*/
const createMantention = (req, res) =>{
    const {title, cost, description, fecha} = req.body;
    const newMantention = new mantention({
        title,
        cost,
        description,
        fecha: moment().format()
    });
    newMantention.save((err,mantention) => {
        if(err){
            return res.status(400).send({message: 'Error al crear la mantención'})
        }
        return res.status(201).send(mantention)
    });
}

/*Funcionalidad Jorge*/
const deleteMantention = (req, res) =>{
    const {id} = req.params;
    mantention.findByIdAndDelete(id, (err, mantentions) =>{
        if(err){
            return res.status(400).send({message: "Error al eliminar la mantencion"})
        }
        if(!mantentions){
            return res.status(404).send({message: "ERROR: No se ha encontrado la mantención solicitada"})
        }
        return res.status(200).send(mantentions)
    });
}

/* Funcionalidad Valter */
const getMantention = (req, res) => {
    mantention.find({}, (err, mantentions) => {
    if (err) {
        return res.status(400).send({ message: "Error al obtener las mantenciones" })
    }
    return res.status(200).send(mantentions)
})}

module.exports = {
    createMantention,
    deleteMantention,
    getMantention
}
