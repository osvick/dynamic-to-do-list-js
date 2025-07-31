document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  let tasks = [];

  // Load tasks from local storage on page load
  function loadTasks() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      tasks = JSON.parse(storedTasks);
      tasks.forEach(task => displayTask(task));
    }
  }

  // Save tasks to local storage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Create task and add it to the DOM
  function displayTask(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
    li.classList.add("task-item");

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // Remove task from DOM and Local Storage
    removeButton.onclick = function () {
      taskList.removeChild(li);
      tasks = tasks.filter(t => t !== taskText);
      saveTasks();
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);
  }

  // Add new task
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    tasks.push(taskText);
    saveTasks();
    displayTask(taskText);
    taskInput.value = "";
  }

  // Event Listeners
  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  loadTasks(); // Load existing tasks from localStorage on startup
});
