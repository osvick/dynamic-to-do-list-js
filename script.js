// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
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
    li.classList.add("task-item"); // 🟢 Add this class

    // Create a remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.classList.add("remove-btn"); // 🟢 Add this class

    // Assign remove behavior
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to li, and li to task list
    li.appendChild(removeBtn);
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
