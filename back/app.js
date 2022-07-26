const express = require('express');

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://RoiVegetto:Iphone3g62.@cluster0.yqatado.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res) => {
    res.json({ message: 'Votre message a bien été reçu !'});
});

module.exports = app;