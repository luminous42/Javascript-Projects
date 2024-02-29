const taskList = document.getElementById("taskList");
const inputTask = document.getElementById("inputTask");

function addtask() {
  if (inputTask.value === "") {
    alert("please enter a task!");
  } else {
    //created new li element for task
    const latest_task = document.createElement("li");

    //enter input box value to the li element
    latest_task.textContent = inputTask.value;

    //adding new li to ul element
    taskList.appendChild(latest_task);

    let span = document.createElement("span");
    span.innerHTML = "\u00D7"; //cross icon

    latest_task.appendChild(span);
    reorderTasks();

    //clearing input box
    document.getElementById("inputTask").value = "";

    cache();
  }
}

taskList.addEventListener(
  "click",
  function (e) {
    console.log(e.target);
    console.log(e.target.tagName);
    console.log(e.target.classList);

    console.log(e.target.parentElement);
    if (e.target && e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      cache();

      reorderTasks();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      cache();
    }
  },
  false
);

// Function to reorder tasks based on checked status
function reorderTasks() {
  const tasks = Array.from(taskList.getElementsByTagName("li"));
  const uncheckedTasks = tasks.filter(
    (task) => !task.classList.contains("checked")
  );
  const checkedTasks = tasks.filter((task) =>
    task.classList.contains("checked")
  );

  // Remove all tasks from the task list
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // Append unchecked tasks first
  uncheckedTasks.forEach((task) => taskList.appendChild(task));

  // Append checked tasks last
  checkedTasks.forEach((task) => taskList.appendChild(task));
}

function cache() {
  localStorage.setItem("savedtasks", taskList.innerHTML);
}

function getData() {
  taskList.innerHTML = localStorage.getItem("savedtasks");
}

getData();

const button = document.getElementById("filter");
const hide = document.getElementById("hidden");
button.addEventListener("click", function (e) {
  hide.classList.toggle("hide");
});
