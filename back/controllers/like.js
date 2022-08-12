const User = require('../models/User');

exports.likeFicheUser = (req, res, next) => {
  User
  .findOne({_id : req.params.id})
  .then((objet) => {
    if(!objet.usersLiked.includes(req.body.userId) && req.body.like === 1)
    res.status(200).json(objet);
  })
  .catch((error) => res.status(404).json({error}));
}