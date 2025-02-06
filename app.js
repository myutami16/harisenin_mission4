// Avatar Dropdown
const arrowDown = document.querySelector(".arrow-down");
const dropdownMenu = document.querySelector(".dropdown-menu");

arrowDown.addEventListener("click", function (event) {
	event.stopPropagation();
	dropdownMenu.style.display =
		dropdownMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", function () {
	dropdownMenu.style.display = "none";
});

// Date
document.addEventListener("DOMContentLoaded", function () {
	const dateDisplay = document.getElementById("date-display");

	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	const today = new Date();
	const dayName = days[today.getDay()];
	const day = today.getDate().toString().padStart(2, "0");
	const month = (today.getMonth() + 1).toString().padStart(2, "0");
	const year = today.getFullYear();

	const formattedDate = `${dayName}, ${day}-${month}-${year}`;

	dateDisplay.textContent = formattedDate;
});

// Sidebar
document.getElementById("hamburger").addEventListener("click", function () {
	document.getElementById("sidebar").classList.toggle("active");
});

// Arrow wrapper
function toggleArrow() {
	let downArrow = document.getElementById("down");
	let upArrow = document.getElementById("up");
	let sidebarList = document.getElementById("sidebar-list");

	if (downArrow.style.display !== "none") {
		downArrow.style.display = "none";
		upArrow.style.display = "inline";
		sidebarList.style.display = "block";
	} else {
		downArrow.style.display = "inline";
		upArrow.style.display = "none";
		sidebarList.style.display = "none";
	}
}

// Checkbox list
document.addEventListener("DOMContentLoaded", function () {
	const checkboxSidebar = document.querySelector(".checkbox-sidebar");
	const mainContentWrapper = document.getElementById("mainContent-wrapper");

	// Atur tampilan awal berdasarkan status checkbox
	mainContentWrapper.style.display = checkboxSidebar.checked ? "block" : "none";

	// Tambahkan event listener untuk perubahan status checkbox
	checkboxSidebar.addEventListener("change", function () {
		mainContentWrapper.style.display = this.checked ? "block" : "none";
	});
});

// Arrow Task-List wrapper
function toggleArrowTask(event) {
	let taskHeader = event.currentTarget;
	let rightArrow = taskHeader.querySelector(".right");
	let downArrow = taskHeader.querySelector(".down-hidden");
	let taskList = [];

	let currentElement = taskHeader.nextElementSibling;
	while (currentElement) {
		taskList.push(currentElement);
		currentElement = currentElement.nextElementSibling;
	}

	if (rightArrow.style.display !== "none") {
		rightArrow.style.display = "none";
		downArrow.style.display = "inline";
		taskList.forEach((element) => {
			element.style.display = "block";
		});
	} else {
		rightArrow.style.display = "inline";
		downArrow.style.display = "none";
		taskList.forEach((element) => {
			element.style.display = "none";
		});
	}
}

document.querySelectorAll(".task-list-header").forEach((header) => {
	header.addEventListener("click", toggleArrowTask);
});

// addTask wrapper
document.addEventListener("DOMContentLoaded", function () {
	const taskTitle = document.querySelector(".add-task-title");
	const addTaskWrapper = document.querySelector(".addTask-wrapper");

	addTaskWrapper.style.display = "none";

	taskTitle.addEventListener("click", function () {
		if (
			addTaskWrapper.style.display === "none" ||
			addTaskWrapper.style.display === ""
		) {
			addTaskWrapper.style.display = "block";
			localStorage.setItem("isAddTaskVisible", "true");
		} else {
			addTaskWrapper.style.display = "none";
			localStorage.setItem("isAddTaskVisible", "false");
		}
	});
});

// Pop up untuk menambah list baru
document.addEventListener("DOMContentLoaded", function () {
	const modal = document.getElementById("popupModal");
	const sidebarAdd = document.querySelector(".sidebar-add");
	const cancelButton = document.getElementById("cancel");

	function openModal() {
		modal.style.display = "flex";
	}

	function closeModal() {
		modal.style.display = "none";
	}

	if (sidebarAdd) {
		sidebarAdd.addEventListener("click", openModal);
	}

	if (cancelButton) {
		cancelButton.addEventListener("click", closeModal);
	}

	window.addEventListener("click", function (event) {
		if (event.target === modal) {
			closeModal();
		}
	});
});

// Menambah List baru
const doneButton = document.getElementById("done");
const sidebarList = document.getElementById("sidebar-list");
const listNameInput = document.getElementById("listName");
const modal = document.getElementById("popupModal");
const mainContent = document.querySelector(".mainContent");

if (doneButton) {
	doneButton.addEventListener("click", function () {
		const listName = listNameInput.value.trim();
		if (listName) {
			const uniqueId = `list-${Date.now()}`;

			const li = document.createElement("li");
			li.innerHTML = `
                <div class="checkboxList">
                    <input type="checkbox" class="checkbox-sidebar" data-target="${uniqueId}" />
                    <span>${listName}</span>
                </div>
            `;
			sidebarList.appendChild(li);
			listNameInput.value = "";
			modal.style.display = "none";

			const newMainContent = document.createElement("div");
			newMainContent.className = "mainContent-wrapper";
			newMainContent.id = uniqueId;
			newMainContent.style.display = "none";
			newMainContent.innerHTML = `
					<div class="task-header">
						<div class="task-title">
							<p>${listName}</p>
							<div id="deleteAllButton">
								<span>Delete All</span>
							</div>
						</div>
						<div class="add-task-title">
							<img src="/assets/icons8-add-list-60.png" alt="add-task" />
							<p>Add New Task</p>
						</div>

						<div class="addTask-wrapper">
							<div class="form-container">
								<input
									id="taskInput"
									type="text"
									placeholder="Judul Tugas"
									class="input-field" />

								<textarea
									id="taskDescription"
									placeholder="Deskripsi"
									class="input-field"></textarea>

								<select id="prioritySelect" class="input-priority">
									<option value="Low">Prioritas Rendah</option>
									<option value="Medium">Prioritas Sedang</option>
									<option value="High">Prioritas Tinggi</option>
								</select>

								<input id="dateInput" type="date" class="input-field" />
							</div>
							<div class="add-button">
								<button id="addButton" class="custom-button">Add</button>
							</div>
						</div>
					</div>

					<!-- Task List -->
					<div class="task-list-container">
						<div class="task-list" id="todoList">
							<div class="task-list-header">
								<div class="taskList-arrow" onclick="toggleArrowTask(this)">
									<img
										src="/assets/icons8-arrow-right-60.png"
										alt="right"
										class="right" />
									<img
										src="./assets/icons8-arrow-down-90.png"
										alt="down"
										class="down-hidden" />
								</div>
								<p>To-do</p>
							</div>
						</div>

						<div class="task-list" id="doneList">
							<div class="task-list-header">
								<div class="taskList-arrow" onclick="toggleArrowTask(this)">
									<img
										src="/assets/icons8-arrow-right-60.png"
										alt="right"
										class="right" />
									<img
										src="./assets/icons8-arrow-down-90.png"
										alt="down"
										class="down-hidden" />
								</div>
								<p>Done</p>
							</div>
						</div>
					</div>
            `;
			mainContent.appendChild(newMainContent);
			attachCheckboxEvent(li.querySelector(".checkbox-sidebar"));
			attachTaskEvent(newMainContent);
		}
	});
}

function attachCheckboxEvent(checkbox) {
	checkbox.addEventListener("change", function () {
		const targetId = checkbox.getAttribute("data-target");
		const targetContent = document.getElementById(targetId);

		if (targetContent) {
			targetContent.style.display = checkbox.checked ? "block" : "none";
		}
	});
}

// Todo List yang menyimpan ke Localstorage
const taskInput = document.getElementById("taskInput");
const taskDescription = document.getElementById("taskDescription");
const prioritySelect = document.getElementById("prioritySelect");
const dateInput = document.getElementById("dateInput");
const addTaskButton = document.getElementById("addButton");
const deleteAllButton = document.getElementById("deleteAllButton");
const todoList = document.getElementById("todoList");
const doneList = document.getElementById("doneList");

window.addEventListener("DOMContentLoaded", () => {
	const today = new Date().toISOString().split("T")[0];
	dateInput.value = today;

	loadTasks();
});

function saveTasks() {
	const tasks = [];

	const todoTasks = Array.from(todoList.querySelectorAll("li"));
	const doneTasks = Array.from(doneList.querySelectorAll("li"));

	todoTasks.forEach((task) => {
		tasks.push(constructTaskObject(task, false));
	});
	doneTasks.forEach((task) => {
		tasks.push(constructTaskObject(task, true));
	});

	localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
	const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

	tasks.forEach((task) => {
		renderTask(task);
	});
}

function constructTaskObject(taskElement, doneStatus) {
	const taskObj = {
		text: taskElement.querySelector(".taskName").textContent,
		description: taskElement.querySelector(".desc-row span").textContent,
		priority: taskElement
			.querySelector(".date-row")
			.textContent.split("||")[0]
			.trim(),
		date: taskElement
			.querySelector(".date-row")
			.textContent.split("||")[1]
			.trim(),
		done: doneStatus,
	};
	return taskObj;
}

addButton.addEventListener("click", addTask);
deleteAllButton.addEventListener("click", deleteAllTasks);

function addTask() {
	const taskText = taskInput.value.trim();
	const descriptionText = taskDescription.value.trim();
	const priority = prioritySelect.value;
	const dateValue = dateInput.value;

	if (!taskText) {
		alert("Please write a task name before adding.");
		return;
	}

	if (!priority) {
		alert("Please select a priority before adding.");
		return;
	}

	if (!dateValue) {
		alert("Please select a date before adding.");
		return;
	}

	const formattedDate = formatDate(dateValue);

	const newTaskItem = {
		text: taskText,
		description: descriptionText,
		priority: priority,
		date: formattedDate,
		done: false,
	};

	renderTask(newTaskItem);
	saveTasks();

	taskInput.value = "";
	taskDescription.value = "";
	taskInput.focus();
}

function renderTask(taskObj) {
	const ul = document.getElementById("taskList");
	const li = document.createElement("li");
	li.className = "text-list";
	li.style.listStyleType = "none";

	const topRow = document.createElement("div");
	topRow.className = "top-row";

	const topRowLeft = document.createElement("div");
	topRowLeft.className = "top-row-left";

	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.className = "checkbox-taskList";
	checkbox.checked = taskObj.done;
	checkbox.addEventListener("change", () => {
		if (checkbox.checked) {
			moveToDone(li, taskObj);
		} else {
			moveToTodo(li, taskObj);
		}
	});

	const nameSpan = document.createElement("span");
	nameSpan.className = "taskName";
	nameSpan.textContent = taskObj.text;
	if (taskObj.done) {
		nameSpan.classList.add("line-through");
	}

	topRowLeft.appendChild(checkbox);
	topRowLeft.appendChild(nameSpan);
	topRow.appendChild(topRowLeft);

	const overdueIndicator = document.createElement("span");
	overdueIndicator.className = "overdue-indicator";
	const taskDate = new Date(taskObj.date);
	const today = new Date();

	today.setHours(0, 0, 0, 0);
	taskDate.setHours(0, 0, 0, 0);

	if (taskDate < today) {
		overdueIndicator.textContent = "Overdue!";
		overdueIndicator.style.top = "0";
		overdueIndicator.style.right = "0";
		topRow.appendChild(overdueIndicator);
	}

	const descRow = document.createElement("div");
	descRow.className = "desc-row";

	const descSpan = document.createElement("span");
	descSpan.textContent = taskObj.description;
	descRow.appendChild(descSpan);

	const dateRow = document.createElement("div");
	dateRow.className = "date-row";
	dateRow.textContent = `(${taskObj.priority} || ${taskObj.date})`;

	const bottomRow = document.createElement("div");
	bottomRow.className = "bottom-row";

	const deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";
	deleteButton.className = "delete-button";
	deleteButton.addEventListener("click", () => {
		li.remove();
		saveTasks();
	});

	const editButton = document.createElement("button");
	editButton.textContent = "Edit";
	editButton.className = "edit-button";
	editButton.addEventListener("click", () => {
		editTask(li, taskObj);
	});

	bottomRow.appendChild(deleteButton);
	bottomRow.appendChild(editButton);

	li.appendChild(topRow);
	li.appendChild(descRow);
	li.appendChild(dateRow);
	li.appendChild(bottomRow);

	if (taskObj.done) {
		doneList.appendChild(li);
	} else {
		todoList.appendChild(li);
	}

	updateTaskStyles(li, taskObj);
}

function updateTaskStyles(liElement, taskObj) {
	liElement.classList.remove(
		"high-priority",
		"medium-priority",
		"low-priority",
		"completed-task"
	);

	if (taskObj.done) {
		liElement.classList.add("completed-task");
	} else {
		switch (taskObj.priority) {
			case "High":
				liElement.classList.add("high-priority");
				break;
			case "Medium":
				liElement.classList.add("medium-priority");
				break;
			case "Low":
			default:
				liElement.classList.add("low-priority");
				break;
		}
	}
}

function moveToDone(liElement, taskObj) {
	taskObj.done = true;

	const nameSpan = liElement.querySelector(".taskName");
	if (nameSpan) nameSpan.classList.add("line-through");

	if (todoList.contains(liElement)) {
		todoList.removeChild(liElement);
	}
	doneList.appendChild(liElement);

	const checkbox = liElement.querySelector('input[type="checkbox"]');
	checkbox.checked = true;

	updateTaskStyles(liElement, taskObj);

	saveTasks();
}

function moveToTodo(liElement, taskObj) {
	taskObj.done = false;

	const nameSpan = liElement.querySelector(".taskName");
	if (nameSpan) nameSpan.classList.remove("line-through");

	if (doneList.contains(liElement)) {
		doneList.removeChild(liElement);
	}

	todoList.appendChild(liElement);

	const checkbox = liElement.querySelector('input[type="checkbox"]');
	checkbox.checked = false;

	updateTaskStyles(liElement, taskObj);

	saveTasks();
}

function deleteAllTasks() {
	[todoList, doneList].forEach((list) => {
		const taskItems = list.querySelectorAll("li");
		taskItems.forEach((task) => task.remove());
	});
	saveTasks();
}

function editTask(liElement, taskObj) {
	liElement.querySelectorAll("div").forEach((div) => {
		div.style.display = "none";
	});

	const editForm = document.createElement("div");
	editForm.className = "edit-form";

	const textInput = document.createElement("input");
	textInput.type = "text";
	textInput.value = taskObj.text;
	textInput.className = "text-input";

	const descriptionTextarea = document.createElement("textarea");
	descriptionTextarea.value = taskObj.description || "";
	descriptionTextarea.className = "text-description";

	const newPrioritySelect = document.createElement("select");
	newPrioritySelect.className = "edit-priority";
	["Low", "Medium", "High"].forEach((p) => {
		const opt = document.createElement("option");
		opt.value = p;
		opt.textContent = p + " Priority";
		if (p === taskObj.priority) opt.selected = true;
		newPrioritySelect.appendChild(opt);
	});

	const dateInput = document.createElement("input");
	dateInput.type = "date";
	dateInput.value = taskObj.date;
	dateInput.className = "date-input";

	const buttonRow = document.createElement("div");
	buttonRow.className = "button-row";

	const saveButton = document.createElement("button");
	saveButton.textContent = "Save";
	saveButton.className = "save-button";

	const cancelButton = document.createElement("button");
	cancelButton.textContent = "Cancel";
	cancelButton.className = "cancel-button";

	buttonRow.appendChild(saveButton);
	buttonRow.appendChild(cancelButton);

	editForm.appendChild(textInput);
	editForm.appendChild(descriptionTextarea);
	editForm.appendChild(newPrioritySelect);
	editForm.appendChild(dateInput);
	editForm.appendChild(buttonRow);

	liElement.appendChild(editForm);

	saveButton.addEventListener("click", () => {
		taskObj.text = textInput.value.trim() || taskObj.text;
		taskObj.description = descriptionTextarea.value.trim();
		taskObj.priority = newPrioritySelect.value;
		taskObj.date = dateInput.value;

		editForm.remove();
		liElement.querySelectorAll("div").forEach((div) => {
			div.style.display = "";
		});

		const dateRow = liElement.querySelector(".date-row");
		if (dateRow) {
			dateRow.textContent = `(${taskObj.priority} || ${taskObj.date})`;
		}

		const nameSpan = liElement.querySelector(".taskName");
		if (nameSpan) {
			nameSpan.textContent = taskObj.text;
		}

		const descRow = liElement.querySelector(".desc-row");
		if (descRow) {
			const existingDescSpan = descRow.querySelector("span");
			if (existingDescSpan) {
				existingDescSpan.textContent = taskObj.description;
			}
		}

		updateTaskStyles(liElement, taskObj);
		saveTasks();
	});

	cancelButton.addEventListener("click", () => {
		editForm.remove();
		liElement.querySelectorAll("div").forEach((div) => {
			div.style.display = "";
		});
	});
}

function formatDate(dateStr) {
	if (!dateStr) return "Invalid Date";
	const dateObj = new Date(dateStr);
	if (isNaN(dateObj.getTime())) return "Invalid Date";

	return dateObj.toLocaleDateString("en-GB", {
		weekday: "long",
		day: "numeric",
		month: "short",
		year: "numeric",
		timeZone: "UTC",
	});
}
