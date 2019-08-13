const mongoose = require('mongoose');
const Schema=mongoose.Schema;


//definimos el modelo que va a tener nuestra base
const TaskSchema= new Schema({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
});

//para poder usar el esquema en otros docuemntos
modulo.exports= mongoose.model('task',TaskSchema);