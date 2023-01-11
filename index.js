//jshint esversion:6
const express = require("express");
const app = express();
const morgan = require("morgan");
const { mongoose } = require("./database")
const taskRoutes = require ("./routes/task.routes")


//Settings
app.set("port", process.env.PORT || 3001)


//midelware
app.use(morgan("dev"));
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', "http://localhost:3000");
    res.append('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
    res.append('Access-Control-Allow-Headers', 'Content-Type, authorization');
    next();
});



//routes
app.use("/api/task", taskRoutes)

//app
app.get("/", (req,res)=>{
    res.send("API RUNNING AND READY TO TAKE DATA")
})


app.listen(app.get("port"), ()=>{console.log(`app succesfully runnint in port ${app.get("port")}`)})