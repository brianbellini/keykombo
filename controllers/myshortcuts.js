const User = require('../models/user');

module.exports = {
    create,
    update,
    delete: deleteOne,
}


async function create(req, res) {
    try{
        const user = await User.findById(req.user._id);
        user.myList.push(req.body)
        user.save();
 
        res.status(201).json(user);
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
        const user = await User.update({_id:req.user._id}, {$pull:{myList:{_id:req.params.id}}})
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }
}