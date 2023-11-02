import mongoose from "mongoose";

let jardinSchema = new mongoose.Schema({
    nombre : String,
    apellido : String,
    genero :String,
    nacimiento : Date,
    nivel : String,
    nombreYapellido :String,
    telefono : String,
    email : String,
    
})

export default mongoose.model('Jardin', jardinSchema);