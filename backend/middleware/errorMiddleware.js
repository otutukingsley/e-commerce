//404 error creator: 
const notFound = (req, res, next) => { // no specified route meaning all the server requests will pass through this code, if the above code/route was not resolved
  const error = new Error(`Not Found - ${req.originalUrl}`) // req.originalUrl=> is the url the user entered
  res.status(404)
  next(error)
}


//error handling middleware: 
const errorHandler = (error, req, res, next) => { // this code will be fired off only when an error object exists in the app, hence the error params passed
    // the error params passed, catches the errors thrown from anywhere in our server
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode // sometimes, even errors could have a statuscode of 200 so we need to change them to the 500 server error relm.
  res.status(statusCode)
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? null : error.stack,
  })
}


export { notFound, errorHandler }