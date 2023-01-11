const express = require("express");
const router = express.Router();
const Task = require ("../models/task")



router.get ("/", async (req,res)=>{
    const tasks = await Task.find()
    res.json(tasks)
})

router.get("/:id", async (req,res)=>{
    const id = req.params.id
    const task = await Task.findById(id);
    res.json(task)
})

router.post ("/", async(req,res)=>{
    const {title, description} = req.body;
    const task = new Task({
        title : title,
        description : description})
    await task.save();
    res.send({status: "task Added"})
})

router.put("/:id", async (req,res)=>{
    const id = req.params.id
    const {title, description} = req.body;
    const task =({
        title : title,
        description : description})
    await Task.findByIdAndUpdate(id, task);
    res.send({status: "task Updated"})
})

router.delete("/:id", async (req,res)=>{
    const id = req.params.id
    await Task.findByIdAndDelete(id);
    res.send({status: "task Deleted"})
})


module.exports = router;