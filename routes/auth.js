const express = require('express');
const { getmydata } = require('../controller/auth');
const router = express.Router()


router.route('/').post(getmydata)


module.exports = router;
