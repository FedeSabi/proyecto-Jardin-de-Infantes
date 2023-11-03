import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './config/db.js';
import userRoutes from './routes/aspiranteRoutes.js';



//coneccion app y port
const app = express();
const port = process.env.PORT || 3000;



app.use(bodyParser.json());
app.use(cors());

// rutas desde aspiranteRoutes.js
app.use('/', userRoutes);

app.get('/', (req, res) => {
  console.log('Hola mundo');
  res.send('Hola mundo');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor Express en ejecución en el puerto ${PORT}`);
});


