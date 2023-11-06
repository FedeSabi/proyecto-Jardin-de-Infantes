import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './config/db.js';
import userRoutes from './routes/aspiranteRoutes.js';
import cookieParser from 'cookie-parser'
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js'

//coneccion app y port
const app = express();
const port = process.env.PORT || 3000;



app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser())
app.use(morgan('dev'))

// rutas desde aspiranteRoutes.js
app.use('/', userRoutes);
app.use('/',authRoutes)

app.get('/', (req, res) => {
  console.log('Hola mundo');
  res.send('Hola mundo');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor Express en ejecución en el puerto ${PORT}`);
});


export default app