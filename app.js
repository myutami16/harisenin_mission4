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

// Adding new list
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

// Arrow Task-List wrapper
function toggleArrowTask(event) {
	let taskHeader = event.currentTarget;
	let rightArrow = taskHeader.querySelector(".right");
	let downArrow = taskHeader.querySelector(".down-hidden");
	let taskList = taskHeader.nextElementSibling;

	if (rightArrow.style.display !== "none") {
		rightArrow.style.display = "none";
		downArrow.style.display = "inline";
		taskList.style.display = "block";
	} else {
		rightArrow.style.display = "inline";
		downArrow.style.display = "none";
		taskList.style.display = "none";
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

// Todo List Localstorage

// const taskInput = document.getElementById("taskInput");
// const taskDescription = document.getElementById("taskDescription");
// const prioritySelect = document.getElementById("prioritySelect");
// const dateInput = document.getElementById("dateInput");
// const addTaskButton = document.getElementById("addButton");
// const deleteAllButton = document.getElementById("deleteAllButton");
// const overdueList = document.getElementById("overdueList");
// const todoList = document.getElementById("todoList");
// const doneList = document.getElementById("doneList");

// window.addEventListener("DOMContentLoaded", () => {
// 	const today = new Date().toISOString().split("T")[0];
// 	dateInput.value = today;

// 	loadTasks();
// });

// function saveTasks() {
// 	const tasks = [];

// 	const todoTasks = Array.from(todoList.querySelectorAll("li"));
// 	const doneTasks = Array.from(doneList.querySelectorAll("li"));

// 	todoTasks.forEach((task) => {
// 		tasks.push(constructTaskObject(task, false));
// 	});
// 	doneTasks.forEach((task) => {
// 		tasks.push(constructTaskObject(task, true));
// 	});
// 	localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function loadTasks() {
// 	const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// 	const today = new Date();

// 	tasks.forEach((task) => {
// 		const taskDate = new Date(task.date);
// 		// Jika tanggal tugas sudah lewat, pindahkan ke daftar overdue
// 		if (taskDate < today && !task.done) {
// 			moveToOverdueList(task);
// 		} else {
// 			renderTask(task);
// 		}
// 	});
// }

// function constructTaskObject(taskElement, doneStatus) {
// 	const taskObj = {
// 		text: taskElement.querySelector(".taskName").textContent,
// 		description: taskElement.querySelector(".desc-row span").textContent,
// 		priority: taskElement
// 			.querySelector(".date-row")
// 			.textContent.split("||")[0]
// 			.trim(),
// 		date: taskElement
// 			.querySelector(".date-row")
// 			.textContent.split("||")[1]
// 			.trim(),
// 		done: doneStatus,
// 	};
// 	return taskObj;
// }

// addButton.addEventListener("click", addTask);
// deleteAllButton.addEventListener("click", deleteAllTasks);

// function addTask() {
// 	const taskText = taskInput.value.trim();
// 	const descriptionText = taskDescription.value.trim();
// 	const priority = prioritySelect.value;
// 	const dateValue = dateInput.value;

// 	if (!taskText) {
// 		alert("Please write a task name before adding.");
// 		return;
// 	}

// 	if (!priority) {
// 		alert("Please select a priority before adding.");
// 		return;
// 	}

// 	if (!dateValue) {
// 		alert("Please select a date before adding.");
// 		return;
// 	}

// 	const formattedDate = formatDate(dateValue);

// 	const newTaskItem = {
// 		text: taskText,
// 		description: descriptionText,
// 		priority: priority,
// 		date: formattedDate,
// 		done: false,
// 	};

// 	renderTask(newTaskItem);
// 	saveTasks();

// 	taskInput.value = "";
// 	taskDescription.value = "";
// 	taskInput.focus();
// }

// function renderTask(taskObj) {
// 	const li = document.createElement("li");
// 	li.className = "text-list";
// 	li.style.listStyleType = "none";

// 	const topRow = document.createElement("div");
// 	topRow.className = "top-row";

// 	const checkbox = document.createElement("input");
// 	checkbox.type = "checkbox";
// 	checkbox.className = "checkbox-taskList";
// 	checkbox.checked = taskObj.done;
// 	checkbox.addEventListener("change", () => {
// 		if (checkbox.checked) {
// 			moveToDone(li, taskObj);
// 		} else {
// 			moveToTodo(li, taskObj);
// 		}
// 	});

// 	const nameSpan = document.createElement("span");
// 	nameSpan.className = "taskName";
// 	nameSpan.textContent = taskObj.text;
// 	if (taskObj.done) {
// 		nameSpan.classList.add("line-through");
// 	}

// 	topRow.appendChild(checkbox);
// 	topRow.appendChild(nameSpan);

// 	const descRow = document.createElement("div");
// 	descRow.className = "desc-row";

// 	const descSpan = document.createElement("span");
// 	descSpan.textContent = taskObj.description;
// 	descRow.appendChild(descSpan);

// 	const dateRow = document.createElement("div");
// 	dateRow.className = "date-row";
// 	dateRow.textContent = `(${taskObj.priority} || ${taskObj.date})`; // Use the formatted date here

// 	const bottomRow = document.createElement("div");
// 	bottomRow.className = "bottom-row";

// 	const deleteButton = document.createElement("button");
// 	deleteButton.textContent = "Delete";
// 	deleteButton.className = "delete-button";
// 	deleteButton.addEventListener("click", () => {
// 		li.remove();
// 		saveTasks();
// 	});

// 	const editButton = document.createElement("button");
// 	editButton.textContent = "Edit";
// 	editButton.className = "edit-button";
// 	editButton.addEventListener("click", () => {
// 		editTask(li, taskObj);
// 	});

// 	bottomRow.appendChild(deleteButton);
// 	bottomRow.appendChild(editButton);

// 	li.appendChild(topRow);
// 	li.appendChild(descRow);
// 	li.appendChild(dateRow);
// 	li.appendChild(bottomRow);

// 	moveToOverdueList(li, taskObj);

// 	if (taskObj.done) {
// 		doneList.appendChild(li);
// 	} else {
// 		todoList.appendChild(li);
// 	}

// 	updateTaskStyles(li, taskObj);
// }

// function updateTaskStyles(liElement, taskObj) {
// 	liElement.classList.remove(
// 		"high-priority",
// 		"medium-priority",
// 		"low-priority",
// 		"completed-task"
// 	);

// 	if (taskObj.done) {
// 		liElement.classList.add("completed-task");
// 	} else {
// 		switch (taskObj.priority) {
// 			case "High":
// 				liElement.classList.add("high-priority");
// 				break;
// 			case "Medium":
// 				liElement.classList.add("medium-priority");
// 				break;
// 			case "Low":
// 			default:
// 				liElement.classList.add("low-priority");
// 				break;
// 		}
// 	}
// }

// function moveToOverdueList(task) {
// 	const currentDate = new Date();
// 	const taskDate = new Date(task.dueDate);

// 	if (taskDate < currentDate) {
// 		// Pindahkan tugas ke overdue jika tanggal sudah lewat
// 		task.status = "overdue";
// 		moveToOverdueList(task); // Fungsi untuk menyimpan atau merender tugas
// 	}
// }

// function moveToDone(liElement, taskObj) {
// 	taskObj.done = true;

// 	const nameSpan = liElement.querySelector(".taskName");
// 	if (nameSpan) nameSpan.classList.add("line-through");

// 	if (todoList.contains(liElement)) {
// 		todoList.removeChild(liElement);
// 	}
// 	doneList.appendChild(liElement);

// 	const checkbox = liElement.querySelector('input[type="checkbox"]');
// 	checkbox.checked = true;

// 	updateTaskStyles(liElement, taskObj);

// 	saveTasks();
// }

// function moveToTodo(liElement, taskObj) {
// 	taskObj.done = false;

// 	const nameSpan = liElement.querySelector(".taskName");
// 	if (nameSpan) nameSpan.classList.remove("line-through");

// 	if (doneList.contains(liElement)) {
// 		doneList.removeChild(liElement);
// 	}

// 	todoList.appendChild(liElement);

// 	const checkbox = liElement.querySelector('input[type="checkbox"]');
// 	checkbox.checked = false;

// 	updateTaskStyles(liElement, taskObj);

// 	saveTasks();
// }

// function deleteAllTasks() {
// 	[overdueList, todoList, doneList].forEach((list) => {
// 		const taskItems = list.querySelectorAll("li");
// 		taskItems.forEach((task) => task.remove());
// 	});
// 	saveTasks();
// }

// function editTask(liElement, taskObj) {
// 	liElement.querySelectorAll("div").forEach((div) => {
// 		div.style.display = "none";
// 	});

// 	const editForm = document.createElement("div");
// 	editForm.className = "edit-form";

// 	const textInput = document.createElement("input");
// 	textInput.type = "text";
// 	textInput.value = taskObj.text;
// 	textInput.className = "text-input";

// 	const descriptionTextarea = document.createElement("textarea");
// 	descriptionTextarea.value = taskObj.description || "";
// 	descriptionTextarea.className = "text-description";

// 	const newPrioritySelect = document.createElement("select");
// 	newPrioritySelect.className = "edit-priority";
// 	["Low", "Medium", "High"].forEach((p) => {
// 		const opt = document.createElement("option");
// 		opt.value = p;
// 		opt.textContent = p + " Priority";
// 		if (p === taskObj.priority) opt.selected = true;
// 		newPrioritySelect.appendChild(opt);
// 	});

// 	const dateInput = document.createElement("input");
// 	dateInput.type = "date";
// 	dateInput.value = taskObj.date;
// 	dateInput.className = "date-input";

// 	const buttonRow = document.createElement("div");
// 	buttonRow.className = "button-row";

// 	const saveButton = document.createElement("button");
// 	saveButton.textContent = "Save";
// 	saveButton.className = "save-button";

// 	const cancelButton = document.createElement("button");
// 	cancelButton.textContent = "Cancel";
// 	cancelButton.className = "cancel-button";

// 	buttonRow.appendChild(saveButton);
// 	buttonRow.appendChild(cancelButton);

// 	editForm.appendChild(textInput);
// 	editForm.appendChild(descriptionTextarea);
// 	editForm.appendChild(newPrioritySelect);
// 	editForm.appendChild(dateInput);
// 	editForm.appendChild(buttonRow);

// 	liElement.appendChild(editForm);

// 	saveButton.addEventListener("click", () => {
// 		console.log("Description before save:", descriptionTextarea.value);
// 		taskObj.text = textInput.value.trim() || taskObj.text;
// 		taskObj.description = descriptionTextarea.value.trim();
// 		console.log("New Description:", taskObj.description);
// 		taskObj.priority = newPrioritySelect.value;
// 		taskObj.date = dateInput.value;

// 		editForm.remove();
// 		liElement.querySelectorAll("div").forEach((div) => {
// 			div.style.display = "";
// 		});

// 		const dateRow = liElement.querySelector(".date-row");
// 		if (dateRow) {
// 			dateRow.textContent = `(${taskObj.priority} | ${formatDate(
// 				taskObj.date
// 			)})`;
// 		}

// 		const nameSpan = liElement.querySelector(".taskName");
// 		if (nameSpan) {
// 			nameSpan.textContent = taskObj.text;
// 		}

// 		const descRow = liElement.querySelector(".desc-row");
// 		if (descRow) {
// 			const existingDescSpan = descRow.querySelector("span");
// 			if (existingDescSpan) {
// 				existingDescSpan.remove();
// 			}
// 		}

// 		let descriptionSpan = liElement.querySelector(".taskDescription");
// 		if (!descriptionSpan) {
// 			descriptionSpan = document.createElement("span");
// 			descriptionSpan.className = "taskDescription";
// 			liElement.querySelector(".desc-row").appendChild(descriptionSpan);
// 		}
// 		descriptionSpan.textContent = taskObj.description;

// 		updateTaskStyles(liElement, taskObj);

// 		const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// 		const taskIndex = tasks.findIndex((task) => task.id === taskObj.id);
// 		if (taskIndex !== -1) {
// 			tasks[taskIndex] = taskObj;
// 			localStorage.setItem("tasks", JSON.stringify(tasks));
// 		}

// 		saveTasks();
// 	});

// 	cancelButton.addEventListener("click", () => {
// 		editForm.remove();
// 		liElement.querySelectorAll("div").forEach((div) => {
// 			div.style.display = "";
// 		});
// 	});
// }

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
	const li = document.createElement("li");
	li.className = "text-list";
	li.style.listStyleType = "none";

	const topRow = document.createElement("div");
	topRow.className = "top-row";

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

	topRow.appendChild(checkbox);
	topRow.appendChild(nameSpan);

	const overdueIndicator = document.createElement("span");
	overdueIndicator.className = "overdue-indicator";
	const taskDate = new Date(taskObj.date);
	const today = new Date();

	today.setHours(0, 0, 0, 0);
	taskDate.setHours(0, 0, 0, 0);

	if (taskDate < today) {
		overdueIndicator.textContent = "Overdue!";
		overdueIndicator.style.color = "red";
		overdueIndicator.style.top = "0";
		overdueIndicator.style.right = "0";
	}
	topRow.appendChild(overdueIndicator);

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
