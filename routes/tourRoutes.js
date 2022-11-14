import tourController from './../controllers/tourController';
const express = require('express');
const router = express.Router()
//Tour routers
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.addTour)

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour)

module.exports = router;
