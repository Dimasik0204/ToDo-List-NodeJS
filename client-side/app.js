
const showAllTasks = document.getElementById('showAllTasks')
const displayAllTasks = document.getElementById('displayAllTasks')
const taskInput = document.getElementById('taskInput')
const priorityInput = document.getElementById('priorityInput')
const postTasks = document.getElementById('postTasks')
const deleteTasksDisplay = document.getElementById('deleteTasksDisplay')
const deleteTasksButton = document.getElementById('deleteTasksButton')
const deleteTextBox = document.getElementById('deleteTextBox')


showAllTasks.addEventListener ('click', async function () {
    displayItems()
})


postTasks.addEventListener ('click', () => {
    
    const newTasks = {
        task:taskInput.value,
        priority: priorityInput.value
    }
    
    fetch ('http://localhost:8080/todoList', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(newTasks)

    }) .then(response =>response.json())
    .then(result => displayItems())

    
})

async function displayItems () {
    const url = 'http://localhost:8080/todoList'
    let response = await fetch (url)
    let result = await response.json()
    console.log(result)
    
    const taskDisplay = result.map( mytask => {
        return `<ul>
                   <li>Task: ${mytask.task}</li>
                   <li>Priority: ${mytask.priority}</li>

               </ul>`
    })
    displayAllTasks.innerHTML = taskDisplay.join('')
}


deleteTasksButton.addEventListener ('click', async function () {
    const url = 'http://localhost:8080/todoList/delete'
    let response = await fetch (url)
    let result = await response.json()
    console.log(result)
    
    const taskDisplay = result.map( mytask => {
        return `<ul>
                   <li>Task: ${mytask.task}</li>
                   <li>Priority: ${mytask.priority}</li>

               </ul>`
    })
    deleteTasksDisplay.innerHTML = taskDisplay.join('')
})
    

    