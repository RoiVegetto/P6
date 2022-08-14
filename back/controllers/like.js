const User = require('../models/User');

exports.likeSauce = (req, res, next) => {
  User
  .findOne({_id : req.params.id})
  .then((objet) => {
    if(!objet.usersLiked.includes(req.body.userId) && req.body.likes === 1){
// Mise a jour de l'objet BDD
    User.updateOne(
      {_id : req.params.id},
      {
        $inc: {likes: 1},
        $push: {usersLiked: req.body.userId}
      }
  )

.then(() => res.status(201).json({message: "User like +1"}))
.catch((error) => res.status(400).json({error}));
};

  if(!objet.usersLiked.includes(req.body.userId) && req.body.likes === 1){
// Mise a jour de l'objet BDD
  User.updateOne(
    {_id : req.params.id},
    {
      $inc: {likes: -1},
      $pull: {usersLiked: req.body.userId}
    }
  )

.then(() => res.status(201).json({message: "User like +1"}))
.catch((error) => res.status(400).json({error}));

};

if(!objet.usersDisLiked.includes(req.body.userId) && req.body.likes === -1){
  // Mise a jour de l'objet BDD
      User.updateOne(
        {_id : req.params.id},
        {
          $inc: {dislikes: 1},
          $push: {usersDisLiked: req.body.userId}
        }
    )
  
  .then(() => res.status(201).json({message: "User dislike +1"}))
  .catch((error) => res.status(400).json({error}));
  };

})
.catch((error) => res.status(404).json({error}));

}