document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault();  

    const taskDescription = taskInput.value;

    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    taskItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", function() {
      taskItem.remove(); 
    });

    taskList.appendChild(taskItem);

    taskInput.value = "";  
  });
});