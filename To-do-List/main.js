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
    span.innerHTML = "\u00D7";

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
      savedataBase();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedataBase();
    }
  },
  false
);

function cache() {
  localStorage.setItem("savedtasks", taskList.innerHTML);
}

function getData() {
  taskList.innerHTML = localStorage.getItem("savedtasks");
}

getData();
