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

module.exports = {
    createMantention
}
