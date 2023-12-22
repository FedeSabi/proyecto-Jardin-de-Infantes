import User from '../models/User.js'
// creacion de los usuarios de todos los niveles

export const autenticacion = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && user.password === password) {
      // Usuario autenticado correctamente
      res.json({ success: true });
    } else {
      // Usuario no encontrado o contraseña incorrecta
      res.json({ success: false, message: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
};




export const createUser = async (req, res) => {
  try {
    const { nombre, apellido, genero, nacimiento, nombreTutor, telefono, email ,nivel , aceptoPoliticaPrivacidad ,password } = req.body;
    const newUser = new User({
      nombre,
      apellido,
      genero,
      nacimiento,
      nombreTutor,
      telefono,
      email,
      nivel,
      aceptoPoliticaPrivacidad,
      password
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudo crear el usuario' });
  }
};
// mostramos los usuarios depende el nivel,---- hay que crear botones para cada nivel de parte del front(avisar a rodrigo o quien se encargue)
export const getUsersByNivel = async (req, res) => {
  const { nivel } = req.params;
  console.log('Nivel:', nivel); 
  try {
    const users = await User.find({ nivel });
    console.log(users); 
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener usuarios por nivel' });
  }
};

// actualizacion de los usuarios
export const updateUserDetails = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body; 

  try {
    const updatedUser = await User.findByIdAndUpdate(id, updatedData, { new: true });

    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el usuario' });
  }
};


//eliminacion del usuario
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  console.log('Intentando eliminar usuario con ID:', id);

  const user = await User.findById(id);
  if (!user) {
    console.log('Usuario no encontrado');
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  try {
    await User.findByIdAndRemove(id);
    console.log('Usuario eliminado exitosamente');
    res.json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.status(500).json({ message: 'Error al eliminar usuario' });
  }
};




