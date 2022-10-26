const express  = require ('express')
const app = express ()
const PORT = 8080
const cors = require('cors')

app.use(cors())
app.use(express.json()) 


let todoList = [
    {task: 'mow lawn', priority: 'Light'},
    {task: 'groceries', priority: 'Medium'},
    {task: 'wash my car', priority: 'Extreme'},
]

let deleteList = []
/*
let oneTask = {task: "clean a house", priority: 'Medium'}
*/
//make a route for GET
app.get('/todoList', (req,res)=> {
  
    console.log("Working")
    res.json(todoList)
})

app.post ('/todoList', (req,res) => {
    console.log ("Just Posted")
    let task = req.body.task
    let priority = req.body.priority
    const newTask = {task: req.body.task, priority: req.body.priority}
    todoList.push(newTask)
    deleteList.push(newTask)
    console.log ("Just Posted")
    res.json({message: 'New movie has been added!'})
    


})

app.listen(PORT, function(){
    console.log('Server is runnnig...')
})