const taskList = document.getElementById("taskList");

function addtask() {
  const inputTask = document.getElementById("inputTask").value;

  if (inputTask != "" && !istaskalreadyexist(inputTask)) {
    const latest_task = document.createElement("li");
    latest_task.textContent = inputTask;
    taskList.appendChild(latest_task);

    document.getElementById("inputTask").value = "";
  }
}

function istaskalreadyexist(newTask) {
  // Check if the newTask is already in the list
  const tasks = taskList.getElementsByTagName("li");
  for (const task of tasks) {
    if (task.textContent === newTask) {
      return true;
    }
  }
  return false;
}
