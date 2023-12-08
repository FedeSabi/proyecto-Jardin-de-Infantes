
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  nombre : String,
  apellido : String,
  genero :String,
  nacimiento : Date,
  nivel : String,
  telefono : String,
  email : String,
  password: String
});

const User = mongoose.model('usuarios', userSchema);
export default User
