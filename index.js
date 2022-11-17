const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const mantentionRoutes = require('./routes/mantentionRoutes');

app.use(cors());
app.use(express.json());
app.options('*',cors());
app.use('/api',mantentionRoutes);

//Seteamos el puerto
app.listen(process.env.PORT, () =>{
    console.log('Servidor corriendo en el puerto -> ', process.env.PORT);
})

//Configuraciones generales
mongoose.set('useFindAndModify',false);
mongoose.set('useNewUrlParser',true);
mongoose.set('useCreateIndex',true);
mongoose.set('useUnifiedTopology',true);

//Conectando a la base de datos
mongoose.connect(process.env.DB,(err) => {
    if(err){
        return console.log('<.............................>[Error al conectar conla base de datos]</.............................>:c');
    }
    return console.log('<>[Bienvenido '+ process.env.USER+'][Estas: CONECTADO a la base de datos]</>:D')
})