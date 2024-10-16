const express = require('express')
const router = express.Router()
const usersController = require('../Controller/usersController')

router.get('/users', usersController.getUser);
router.post('/users', usersController.createUser);
router.put('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);


module.exports = router;