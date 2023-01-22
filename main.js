const addTaskForm = document.querySelector("#add-task-form")
const incompleteTasks = document.querySelector("#incomplete-tasks")
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

function updateTask(taskIndex) {
  // Get the task data from the form
  const title = document.querySelector("#title").value
  const description = document.querySelector("#description").value
  const date = document.querySelector("#date").value

  // Update the task
  tasks[taskIndex].title = title
  tasks[taskIndex].description = description
  tasks[taskIndex].date = date

  // Clear the form
  addTaskForm.reset()

  // Display the tasks
  displayTasks()
}

function deleteTask(taskIndex) {
  // Confirm before deleting task
  if (confirm("Are you sure you want to delete this task?")) {
    tasks.splice(taskIndex, 1)
    displayTasks()
  }
}

function markAsCompleted(taskIndex) {
  tasks[taskIndex].completed = true
  displayTasks()
}

function displayTasks() {
  incompleteTasks.innerHTML = ""
  completedTasks.innerHTML = ""
  lateTasks.innerHTML = ""

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i]

    // Create the task list item
    const taskItem = document
  }
}