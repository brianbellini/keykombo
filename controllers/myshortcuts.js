const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET

module.exports = {
    create,
    update: updateShortcut,
    delete: deleteOne,
}

async function create(req, res) {
    try{
        const user = await User.findById(req.user._id);
        user.myList.push(req.body)
        user.save();
        const token =  createJWT(user)
        res.status(200).json({token});
    }
    catch(err){
        res.status(500).json(err);
    }
}

async function updateShortcut(req, res) {
    const user = await User.findById(req.user._id)
    const shortcutIdx = user.myList.findIndex(shortcut => shortcut._id.toString() === req.params.id)
    user.myList[shortcutIdx].application = req.body.application;
    user.myList[shortcutIdx].combo = req.body.combo;
    user.myList[shortcutIdx].description = req.body.description;
    user.myList[shortcutIdx].func = req.body.func;
    user.myList[shortcutIdx].menu = req.body.menu;
    user.save();
    const token = createJWT(user);
    res.status(200).json({token});
}

async function deleteOne(req, res) {
    try{
        await User.update({_id:req.user._id}, {$pull:{myList:{_id:req.params.id}}})
        const user = await User.findById(req.user._id)
        const token =  createJWT(user)
        res.status(200).json({token});
    }
    catch(err){
        res.status(500).json(err);
    }
}

function createJWT(user) {
    return jwt.sign(
        {user},
        SECRET,
        {expiresIn: '24h'}
    );
}