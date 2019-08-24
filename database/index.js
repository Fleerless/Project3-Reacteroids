//Connect to Mongo database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//your local database url
//27017 is the default mongoDB port
let mongo = null
if (process.env.NODE_ENV === "production"){
    mongo = 'mongodb://heroku_md6q82bl:eu2qk2mm8umutplepguqc6jtcm@ds147125.mlab.com:47125/heroku_md6q82bl' 
} else {
    mongo = 'mongodb://localhost:27017/asteroids' 
}
const uri = mongo
mongoose.connect(uri).then(
    () => { 
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
        console.log('Connected to Mongo');
        
    },
    err => {
         /** handle initial connection error */ 
         console.log('error connecting to Mongo: ')
         console.log(err);
         
        }
  );


module.exports = mongoose.connection