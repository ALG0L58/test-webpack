const Router = require('express')
const router = new Router()
const controller = require('./authController')

router.get('/allTodos', controller.getTodos);
router.post('/addTodo', controller.addTodo);
router.post('/remuveTodo', controller.removeTodo);
router.post('/changeTodo', controller.changeTodo);

module.exports = router