const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
// const multer = require('../middleware/multer-config');
const dataCtrl = require('../controllers/data');

router.get('/', dataCtrl.getAllDatas);
router.get('/:id', dataCtrl.getOneData);
router.put('/', dataCtrl.updateOneData);
// router.put('/', dataCtrl.putOneSauce);
// router.put('/:id', auth, multer, dataCtrl.putOneSauce);
// router.delete('/:id', auth, multer, dataCtrl.deleteOneSauce);
// router.post('/:id/like', auth, dataCtrl.postOneSauceLike);


module.exports = router;
