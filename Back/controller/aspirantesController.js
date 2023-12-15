import User from '../models/User.js'
// creacion de los usuarios de todos los niveles


export const createUser = async (req, res) => {
  try {
    const { nombre, apellido, genero, nacimiento, nivel, telefono, email,password } = req.body;
    const newUser = new User({
      nombre,
      apellido,
      genero,
      nacimiento,
      nivel,
      telefono,
      email,
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

 
  await User.findByIdAndRemove(id);

  res.json({ message: 'Usuario eliminado exitosamente' });
};


