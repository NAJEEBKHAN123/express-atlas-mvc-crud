const express = require('express')
const router = express.Router()
const usersController = require('../Controller/usersController')

router.get('/', (req ,res)=>{
    res.send("hello from api/user");
});
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);


module.exports = router;