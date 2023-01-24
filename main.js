const addTaskForm = document.querySelector("#add-task-form")
const incompleteTasks = document.querySelector("#incomplete-tasks")
const completedTasks = document.querySelector("#completed-tasks")
const lateTasks = document.querySelector("#late-tasks")
const taskIcon = document.querySelector("#task-icon")
const divTaskForm = document.querySelector(".task-form")
const divDeleteAll = document.querySelector(".delete-all")
const deleteAllBtn = document.querySelector("#delete-all-btn")

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
    title: title.value,
    description: description.value,
    date: date.value,
    completed: false
  }

  // Push task to the tasks array
  tasks.push(task)

  // Clear the form on submit
  addTaskForm.reset()

  divTaskForm.classList.add("hidden")
  taskIcon.classList.remove("hidden")

  // Display the tasks
  displayTasks()
}

function displayAddTaskForm(){
  divTaskForm.classList.remove("hidden")
  taskIcon.classList.add("hidden")
}

taskIcon.addEventListener("click", displayAddTaskForm)

function updateTask(taskIndex) {
  // Display task form
  displayAddTaskForm()

  // Fill form with task data
  document.querySelector("#title").value = tasks[taskIndex].title
  document.querySelector("#description").value = tasks[taskIndex].description
  document.querySelector("#date").value = tasks[taskIndex].date
  

  // // Get the task data from the form
  // const title = document.querySelector("#title").value
  // const description = document.querySelector("#description").value
  // const date = document.querySelector("#date").value

  // // Update the task
  // tasks[taskIndex].title = title
  // tasks[taskIndex].description = description
  // tasks[taskIndex].date = date
  // tasks[taskIndex].completed = false
  

  // Clear the form
  // addTaskForm.reset()

  // Display the tasks
  // displayTasks()
}

function deleteTask(taskIndex) {
  // Confirm before deleting task
  if (confirm("Are you sure you want to delete this task?")) {
    tasks.splice(taskIndex, 1)
    displayTasks()
  }
}

function deleteAll() {
  // Confirm before deleting task
  if (confirm("This action cannot be undone. Are you sure you want to continue?")) {
    tasks = []
    displayTasks()
  }
}

deleteAllBtn.addEventListener("click", deleteAll)

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
    const taskItem = document.createElement("li")
    taskItem.innerHTML = `
    <h3>${task.title}</h3>
    <p>${task.description}</p>
    <p>Expected Completion Date: ${task.date}</p>
    `

    // Create update and delete buttons
    const updateBtn = document.createElement("button")
    updateBtn.innerHTML = "Update"
    updateBtn.onclick = () => {
      updateTask(i)
    }
    taskItem.appendChild(updateBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "Delete"
    deleteBtn.onclick = () => {
      deleteTask(i)
    }
    taskItem.appendChild(deleteBtn)

    const completeBtn = document.createElement("button")
    task.completed ? completeBtn.innerHTML = `<strike>Completed</strike>` : completeBtn.innerHTML = "Mark as completed"

    taskItem.onclick = () => {
      markAsCompleted(i)
    }
    taskItem.appendChild(completeBtn)

    // Append the task item to the appropriate section
    if (!task.completed) {
      if (task.date < new Date().toISOString().slice(0, 10)) {
        lateTasks.appendChild(taskItem)
      } else {
        incompleteTasks.appendChild(taskItem)
      }
    } else {
      completedTasks.appendChild(taskItem)
    }
  }
  // End of for loop

  if (incompleteTasks.children.length === 0) {
    incompleteTasks.innerHTML = "<p>No Incomplete Tasks</p>"
  }

  if (completedTasks.children.length === 0) {
    completedTasks.innerHTML = "<p>No Completed Tasks</p>"
  }

  if (lateTasks.children.length === 0) {
    lateTasks.innerHTML = "<p>No Late Tasks</p>"
  }

  tasks.length === 0 ? divDeleteAll.classList.add("hidden"): divDeleteAll.classList.remove("hidden")

}

// Add the submit event to the form
addTaskForm.addEventListener("submit", addTask)

// Display the tasks when the page loads
displayTasks()