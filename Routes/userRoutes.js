const express = require('express')
const router = express.Router()
const usersController = require('../Controller/usersController')

router.get('/', usersController.getUser);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);


module.exports = router;