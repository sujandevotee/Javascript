let listContainer = document.getElementById("list-container");
let inputBox = document.getElementById("input-box");
let summaryContainer = document.getElementById("summary");

function addTask() {
  let inputValue = inputBox.value.trim();
  if (inputValue === "") {
    alert("Please enter the text.");
  } else {
    const task = document.createElement("li");
    task.textContent = inputValue;
    listContainer.appendChild(task);

    let editButton = document.createElement("span");
    editButton.textContent = "\u270E";
    editButton.classList.add("edit-btn");
    task.appendChild(editButton);

    let deleteButton = document.createElement("span");
    deleteButton.textContent = "\u00D7";
    deleteButton.classList.add("close-btn");
    task.appendChild(deleteButton);
  }
  inputBox.value = "";
  updateSummary();
  saveData();
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    updateSummary();
    saveData();
  } else if (e.target.classList.contains("close-btn")) {
    e.target.parentElement.remove();
    updateSummary();
    saveData();
  } else if (e.target.classList.contains("edit-btn")) {
    editTask(e.target.parentElement);
  }
});

function editTask(taskElement) {
  let currentText = taskElement.firstChild.textContent;
  let newText = prompt("Edit task:", currentText);
  if (newText !== null && newText !== "") {
    taskElement.firstChild.textContent = newText;
    saveData();
  }
}

function updateSummary() {
  let tasks = listContainer.querySelectorAll("li");
  let checkedCount = 0;
  let uncheckedCount = 0;

  tasks.forEach((task) => {
    if (task.classList.contains("checked")) {
      checkedCount++;
    } else {
      uncheckedCount++;
    }
  });

  summaryContainer.innerHTML = `
    <p>Complete Tasks: ${checkedCount}</p>
    <p>Pending  Tasks: ${uncheckedCount}</p>
  `;
}

function saveData() {
  localStorage.setItem("taskList", listContainer.innerHTML);
}

function loadTasks() {
  if (localStorage.getItem("taskList")) {
    listContainer.innerHTML = localStorage.getItem("taskList");
  }
  updateSummary();
}

loadTasks();
