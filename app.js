const express = require('express');
const fs = require('fs')
const { json } = require('express');

//Calling an instance of express
const app = express();

//Middleware used by the post method to handle data sent to the server
app.use(express.json())

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))



//Route Handler functions
const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'Success',
    results: tours.length,
    data: {
      tours
    }
  })
}
const  getTour = (req, res) => {
  console.log(req.params);

  const id = req.params.id * 1;

  const tour = tours.find(el => el.id === id)
  if (!tour){
    return res.status(404).json({
      status: "fail",
      message: "Invalid id"
    })
  }


  res.status(200).json({
    status: 'Success',
    data: {
      tour
    }
  })
}
const addTour = (req, res) => {
  // console.log(req.body);
  const newId = tours[tours.length-1].id + 1;
  const newTour = Object.assign({id: newId}, req.body)
  tours.push(newTour)
  fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
    res.status(201).json({
      status: "success",
      data: {
        tour: newTour
      }
    })
  })
}
const updateTour = (req, res) => {

  if (req.params.id * 1 > tours.length){
    return res.status(404).json({
      status: "fail",
      message: "Invalid id"
    })
  }
  return res.status(200).json({
    status: "success",
    data: {
      tour: '<Updated tour here.....>'
    }
  })
}
const deleteTour = (req, res) => {

  if (req.params.id * 1 > tours.length){
    return res.status(404).json({
      status: "fail",
      message: "Invalid id"
    })
  }
  return res.status(204).json({
    status: "success",
    data: null
  })
}


//Routes and there functions calling the route handlers
// app.get('/api/v1/tours', getAllTours)
app.get('/api/v1/tours/:id', getTour)
// app.post('/api/v1/tours', addTour)
app.patch('/api/v1/tours/:id', updateTour)
app.delete('/api/v1/tours/:id', deleteTour)

app
  .route('/api/v1/tours')
  .get(getAllTours)
  .post(addTour)

app
  .route('/api/v1/tours/:id')
  .get(getTour).patch(updateTour)
  .delete(deleteTour)


//start a server
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}.......`);
})
