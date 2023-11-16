
import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  nombre : String,
  apellido : String,
  genero :String,
  nacimiento : String,
  nivel : String,
  nombreYapellido :String,
  telefono : String,
  email : String,
  
});
const User= mongoose.model('UsuariosJardin', userSchema);
export default User
