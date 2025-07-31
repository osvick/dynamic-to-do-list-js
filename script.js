// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Select necessary DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a list item and set its text content
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create a remove button for the task
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Set onclick event to remove the task
    removeBtn.onclick = function () {
      taskList.removeChild(listItem);
    };

    // Append the remove button and then the list item
    listItem.appendChild(removeBtn);
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
  }

  // Attach click event to "Add-Task-button
  addButton.addEventListener("click", addTask);

  // Attach keypress event to allow "Enter" key to add task
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Optionally call addTask initially if needed (e.g., preload default tasks)
  // addTask();  // Not typically required unless preloading
});
