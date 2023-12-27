
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  nombre : String,
  apellido : String,
  password : String,
  genero :String,
  nacimiento : Date,
  nombreTutor :String,
  telefono : String,
  email : String,
  nivel : String,
 
});

const User = mongoose.model('usuarios', userSchema);
export default User
