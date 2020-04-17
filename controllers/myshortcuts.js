const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET


module.exports = {
    create,
    update,
    delete: deleteOne,
}


async function create(req, res) {
    try{
        console.log("CREATE: ", req.body)
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

async function update(req, res) {
    try{
        const user = await User.findById(req.user._id);
        const updatedShortcut = await user.myList.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedShortcut);
    }
    catch(err){
        res.status(500).json(err);
    }
}

async function deleteOne(req, res) {
    try{
        await User.update({_id:req.user._id}, {$pull:{myList:{_id:req.params.id}}})
        const user = await User.findById(req.user._id)
        const token =  createJWT(user)
        console.log("CONTROLLER USER: ", user)
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