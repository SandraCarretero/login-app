const express = require('express');
const usersController = require('../controllers/users.controller');
const usersRoutes = express.Router();

usersRoutes.get('/', usersController.getUsers);
usersRoutes.patch('/:id', usersController.editUser);
usersRoutes.patch('/image/:id', usersController.editImage);
usersRoutes.delete('/:id', usersController.deleteUser);

module.exports = usersRoutes;
