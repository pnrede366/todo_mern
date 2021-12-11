const express = require('express');
const { createdata, getdata, setTodo, getTodo, updateTodo, deleteTodo, getMyTodo } = require('../controller/usercontroller');
const router = express.Router()


router.route('/register').get(getdata).post(createdata)
router.route('/todo').post(setTodo).get(getMyTodo)
router.route("/todo/:id").delete(deleteTodo).put(updateTodo)
router.route('/gettodo').post(getTodo)


module.exports = router;
