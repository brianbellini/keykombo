const router = require('express').Router();
const myShortcutsCtrl = require('../../controllers/myshortcuts');

router.get('/', checkAuth, myShortcutsCtrl.indexAll);
router.get('/:id', checkAuth, myShortcutsCtrl.show);
router.post('/', checkAuth, myShortcutsCtrl.create);
router.put('/:id', checkAuth, myShortcutsCtrl.update);
router.delete('/:id', checkAuth, myShortcutsCtrl.delete);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;