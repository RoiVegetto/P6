const express = require('express');
var cors = require('cors')
const mongoose = require('mongoose');
const path = require('path');
const userRoutes = require('./routes/user')
const sauceRoutes = require('./routes/sauce')
const app = express();


mongoose.connect('mongodb+srv://RoiVegetto:Iphone3g62.@cluster0.yqatado.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Retirer les erreurs CORS (Cross Origin Resource Sharing)
app.use(cors());
app.use(express.json());

app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;