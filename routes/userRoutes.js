const express = require('express');

//Router handler for users

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: "error",
    messgage: "route not yet defined"
  })
}

const createUSer = (req, res) => {
  res.status(500).json({
    status: "error",
    messgage: "route not yet defined"
  })
}

const getUser = (req, res) => {
  res.status(500).json({
    status: "error",
    messgage: "route not yet defined"
  })
}

const updateUser = (req, res) => {
  res.status(500).json({
    status: "error",
    messgage: "route not yet defined"
  })
}

const deleteUser = (req, res) => {
  res.status(500).json({
    status: "error",
    messgage: "route not yet defined"
  })
}

//User Routes
const router = express.Router()
router
  .route('/')
  .get(getAllUsers)
  .post(createUSer)

router
  .route('/:id')
  .get(getUser).patch(updateUser)
  .delete(deleteUser)


module.exports = router;
