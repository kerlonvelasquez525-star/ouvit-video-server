const express = require('express');
const Mux = require('@mux/mux-node');
const app = express();

app.use(express.json());

// Aquí el servidor usará tus llaves secretas de Mux que pondremos en Render
const { Video } = new Mux(process.env.MUX_TOKEN_ID, process.env.MUX_TOKEN_SECRET);

app.get('/', (req, res) => res.send('Servidor Ouvit Activo 🚀'));

// Esta es la ruta que pondremos en Mux Webhooks
app.post('/webhook', (req, res) => {
  const evento = req.body;
  console.log("Mux ha enviado un evento:", evento.type);
  
  // Aquí es donde más adelante conectaremos la IA para detectar desnudos
  res.status(200).send("OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
