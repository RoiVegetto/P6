const User = require('../models/User');
const Sauce = require('../models/sauce');

exports.likeSauce = async (req, res, next) => {

    const userId = req.auth.userId;
    const sauce = await Sauce.findOne({_id : req.params.id})

    if(!sauce){
        return res.status(404).json({error : 'Ressources not found'});
    }

    // Dislike
    if(req.body.like === -1){

        if(!sauce.usersDisliked.includes(userId)){
            sauce.dislikes += 1;
            sauce.usersDisliked.push(userId);
        }

        sauce.save()

        return res.status(200).json({ dislike : true });

    }
    else if(req.body.like === 1){
        // Like
        if(!sauce.usersLiked.includes(userId)){
            sauce.likes += 1;
            sauce.usersLiked.push(userId);
        }

        sauce.save()

        return res.status(200).json({ liked : true });
    }
    else{
        if(sauce.usersLiked.includes(userId)){
            sauce.likes -= 1;
            sauce.usersLiked = sauce.usersLiked.filter(id => id !== userId);
        }

        if(sauce.usersDisliked.includes(userId)){
            sauce.dislikes -= 1;
            sauce.usersDisliked = sauce.usersDisliked.filter(id => id !== userId);
        }

        sauce.save()

        return res.status(200).json({ liked : false, dislikes : false });
    }
};