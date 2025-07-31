document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

    // Check if task is empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create new <li> element and set its text
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create "Remove" button and assign class
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Remove task on button click
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to li, then li to list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
  }

  // Add task on button click
  addButton.addEventListener("click", addTask);

  // Add task on Enter keypress
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
