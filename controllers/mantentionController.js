const mantention = require('../models/mantention')

/*Funcionalidad Francisco*/
const createMantention = (req, res) =>{
    const {title, date, maintenceManager, cost, description} = req.body;
    //Creando el objeto
    const newMantention = new mantention({
        title,
        date,
        maintenceManager,
        cost,
        description
    });
    //Guarda la mantencion en la BDD
    newMantention.save((err,mantention) => {
        //Manejo de errores
        if(err){
            console.log(err);
            return res.status(400).send({message: 'Error al crear la mantención'})
        }
        return res.status(201).send(mantention)
    });
}
/*Update*/
const updateMantention = (req, res) => {
    const {id} = req.params;
    mantention.findByIdAndUpdate(id, req.body,(err,mantentions)=>{
        if(err){
            return res.status(400).send({message: "Error al actualizar la mantencion solicitada"})
        }
        if(!mantentions){
            return res.status(404).send({message: "Error al encontrar la mantencion solicitada"})
        }
        return res.status(200).send(mantentions)
    })
}

/*Funcionalidad Jorge*/
const deleteMantention = (req, res) =>{
    const {id} = req.params;
    mantention.findByIdAndDelete(id, (err, mantentions) =>{
        if(err){
            return res.status(400).send({message: "Error al eliminar la mantencion"})
        }
        if(!mantention){
            return res.status(404).send({message: "Error, no se ha encontrado la mantencion solicitada"})
        }
        return res.status(200).send(mantentions)
    });
}
/*Obtener producto especifico*/
const getSpecificMantention = (req, res) => {
    const {id} = req.params;
    mantention.findById(id, (err, mantentions)=>{
        if(err){
            return res.status(400).send({message: "Error ha habido un problema para encontrar la mantencion"})
        }
        if(!mantentions){
            return res.status(404).send({message: "Error, no se ha podido encontrar la mantención solicitada"})
        }
        return res.status(200).send(mantentions)
    })
}
/* Funcionalidad Valter */
const getMantention = (req, res) => {
    mantention.find({}, (err, mantentions) => {
    if (err) {
        return res.status(400).send({ message: "Error al obtener los productos" })
    }
    return res.status(200).send(mantentions)
})}

module.exports = {
    createMantention,
    updateMantention,
    deleteMantention,
    getSpecificMantention,
    getMantention
}
