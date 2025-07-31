// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Define the addTask function
  function addTask() {
    const taskText = taskInput.value.trim(); // Get and trim input

    // Validate input
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new <li> for the task
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Assign remove behavior
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to li, and li to task list
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
  }

  // Add task on button click
  addButton.addEventListener("click", addTask);

  // Add task on Enter key press
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
