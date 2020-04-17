const Shortcut = require('../models/shortcut');

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne,
    indexAll,
}

async function index(req, res) {
    try{
        const shortcuts = await Shortcut.find({});
        res.status(200).json(shortcuts);
    }
    catch(err){
        res.status(500).json(err);
    }
}

async function create(req, res) {
    req.body.user = req.user._id;
    try{
        const shortcut = await Shortcut.create(req.body);
        res.status(201).json(shortcut);
    }
    catch(err){
        res.status(500).json(err);
    }
}

async function show(req, res) {
    try{
        const shortcut = await Shortcut.findById(req.params.id).populate('user');
        res.status(200).json(shortcut);
    }
    catch(err){
        res.status(500).json(err);
    }
}

async function update(req, res) {
    try{
        const updatedShortcut = await Shortcut.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedShortcut);
    }
    catch(err){
        res.status(500).json(err);
    }
}

async function deleteOne(req, res) {
    try{
        const deletedShortcut = await Shortcut.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedShortcut);
    }
    catch(err){
        res.status(500).json(err);
    }
}

async function indexAll(req, res) {
    try{
        const shortcutsByUser = await Shortcut.find({});
        res.status(200).json(shortcutsByUser);
    }
    catch(err){
        res.status(500).json(err);
    }
}