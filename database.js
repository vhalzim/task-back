const mongoose = require("mongoose")
require ("dotenv").config()

const URI = process.env.DB_URI

mongoose.connect( URI , {useNewUrlParser : true})
    .then(db => {console.log("db sucessfully conected")})
    .catch(err=>{console.error(err)})

module.exports = mongoose;