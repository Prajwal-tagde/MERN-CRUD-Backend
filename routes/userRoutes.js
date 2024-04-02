const express = require('express');
const router = express.Router();
const controllers = require('../controllers/usersController');
const upload = require('../multerconfig/storageConfig');

router.post("/user/register", upload.single("user_profile"), controllers.userPost);

router.get("/user/details", controllers.userGet);

router.get('/user/:id', controllers.singleUserGet);

router.put('/user/edit/:id', upload.single("user_profile"), controllers.userEdit);

router.delete('/user/delete/:id', controllers.userDelete);

router.put("/user/status/:id", controllers.userStatus);

router.get("/userExport", controllers.userExport);



module.exports = router;
