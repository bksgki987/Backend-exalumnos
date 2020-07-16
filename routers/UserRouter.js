const express = require('express');

const router = express.Router();

const { UserValidator } = require('../validators');
const { UserController } = require('../controllers');
// eslint-disable-next-line no-unused-vars
const { verifyToken } = require('../middlwares');

router.post('/users',
  verifyToken,
  UserValidator.create, UserController.create);

router.get('/users',
  UserController.findAll);

router.get('/users/:id',
  UserValidator.findOne, UserController.findOne);

router.patch('/users/:id',
  UserValidator.updateOne, UserController.updateOne);

router.delete('/users/:id',
  UserValidator.deleteOne, UserController.deleteOne);

module.exports = router;
