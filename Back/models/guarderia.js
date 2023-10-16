import mongoose from "mongoose";

let guarderiaSchema = new mongoose.Schema({
    nombre : String,
    apellido : String,
    genero :String,
    nacimiento : Date,
    nivel : String,
    nombreYapellido :String,
    telefono : String,
    email : String,
    
})

export default mongoose.model('guarderia', guarderiaSchema);