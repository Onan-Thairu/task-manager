const addTaskForm = document.querySelector("#add-task-form")
const uncompletedTasks = document.querySelector("#uncompleted-tasks")
const completedTasks = document.querySelector("#completed-tasks")
const lateTasks = document.querySelector("#late-tasks")

let tasks = []

// Add task function
function addTask(event) {
  event.preventDefault()

  // Get task data from the form
  const title = document.querySelector("#title")
  const description = document.querySelector("#description")
  const date = document.querySelector("#date")

  // Create task object with a default of completed: false
  const task = {
    title: title,
    description: description,
    date: date,
    completed: false
  }

  // Push task to the tasks array
  tasks.push(task)

  // Clear the form on submit
  addTaskForm.requestFullscreen()

  // Display the tasks
  // displayTasks()
  console.log(tasks)

}