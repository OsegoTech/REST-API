const express = require('express');
const { getAllUsers, createUSer, updateUser, deleteUser, getUser } = require('./../controllers/userController')


//User Routes
const router = express.Router()
router
  .route('/')
  .get(getAllUsers)
  .post(createUSer)

router
  .route('/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser)


module.exports = router;
