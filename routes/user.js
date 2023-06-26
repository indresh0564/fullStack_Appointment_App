const Express = require('express');

const user_controller=require('../controller/user');

const router = Express.Router();

router.post('/post_user', user_controller.addUser);

router.get('/get_user', user_controller.getUser);

router.delete('/delete_user/:id', user_controller.deleteUser);

module.exports=router;