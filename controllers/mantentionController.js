const mantention = require('../models/mantention')

/*Funcionalidad Francisco*/
const createMantention = (req, res) =>{
    const {title,cost , description} = req.body;
    const newMantention = new mantention({
        title,
        cost,
        description
    });
    newMantention.save((err,mantention) => {
        if(err){
            return res.status(400).send({message: 'Error al crear la mantención'})
        }
        return res.status(200).send(mantention)
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
            return res.status(404).send({message: "Error al eliminar la mantencion solicitada"})
        }
        return res.status(200).send(mantentions)
    });
}


module.exports = {
    createMantention,
    deleteMantention
}
