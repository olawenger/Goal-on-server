const GOALS = require("../models/goalsmodel");

const getAllGoals = async (req, res)=>{
    try {
        const goals = await GOALS.find();
        res.status(200).json({ numberOfGoals: goals.length, goals, success: true});
    } catch (error) {
        res.json(error);
        console.log(error);
    }
}
const getAGoal = async (req, res)=>{
    const { goalId } = req.params;
    try {
        const goal = await GOALS.findById({_id: goalId})
        res.status(200).json({success: true, goal});
    } catch (error) {
        res.json(error)
        console.log(error)
    }
}
const createGoal = async (req, res)=>{
    const {title, description} = req.body;
       if(!title || !description){
        return res.status(400).json({message: "Please fill all fields"});
       }
    try {
       const goal = await GOALS.create(req.body)
       res.status(201).json({goal, success: true});
    } catch (error) {
        res.json(error)
        console.log(error)
    }
    
}
const updateGoal = async (req, res)=>{
    const { goalId } = req.params;
    try {
       const goal = await GOALS.findByIdAndUpdate({_id: goalId}, req.body, {new:true, runValidators: true,}) 
       res.status(200).json({goal, success: true})
    } catch (error) {
        res.json(error)
        console.log(error)
    }
}
const deleteGoal = async (req, res)=>{
    const { goalId} = req.params
    try {
        const goal = await GOALS.findByIdAndDelete({_id: goalId})
        res.status(200).json({message: "Goal Delected Successfully", goal, success: true})
    } catch (error) {
        res.json(error);
        console.log(error)
    }
}


module.exports = {getAllGoals, getAGoal, createGoal, updateGoal, deleteGoal}