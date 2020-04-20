const router = require('express').Router();
const shortcutsCtrl = require('../../controllers/shortcuts');

/*---------- Public Routes ----------*/
router.get('/', shortcutsCtrl.indexAll);

/*---------- Protected Routes ----------*/
router.get('/:id', checkAuth, shortcutsCtrl.show);
router.post('/', checkAuth, shortcutsCtrl.create);
router.put('/:id', checkAuth, shortcutsCtrl.update);
router.delete('/:id', checkAuth, shortcutsCtrl.delete);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;