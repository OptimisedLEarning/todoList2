/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addtask.js":
/*!************************!*\
  !*** ./src/addtask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   todoList: () => (/* binding */ todoList)\n/* harmony export */ });\nclass Task{\n    constructor(text,priority,dueDate,dueTime,  completed =false){\n        this._text = text;\n        this._priority =priority;\n        this._dueDate= dueDate ;\n        this._dueTime = dueTime;   // in future add the time system\n        this._completed =completed\n\n    }\n}\n\n\n\nclass todoList{\n    constructor(){\n        this.tasks = this.loadTask();   //  first task that happen is load the previous data\n\n        console.log(\"Data loaded from local storage:\", this.tasks); // check if the data is loaded or not and check the type of data\n\n        this.taskInput = document.getElementById(\"taskInput\");\n        this.priorityInput = document.getElementById(\"priorityInput\");\n        this.dueDateInput = document.getElementById(\"dueDate\");\n        this.dueTimeInput = document.getElementById(\"dueTime\");\n\n        this.addButton = document.getElementById(\"addButton\");\n\n        this.taskList = document.getElementById(\"taskList\");\n\n\n        this.calanderButton = document.getElementById(\"calendarButton\");\n        this.timeButton = document.getElementById(\"timeButton\");\n\n\n        this.attachEventListeners();\n        this.renderTasks(); // render the task that are already present in the local storage\n\n\n\n\n    }\n\n\n    loadTask(){\n        return JSON.parse(localStorage.getItem(\"tasks\")) || [];\n\n    }\n\n    upadteLocalStorage(){\n        localStorage.setItem(\"tasks\",JSON.stringify(this.tasks));\n        console.log(\"local storage updated\");\n        console.log( typeof this.tasks);\n          console.log(\"check if the data is array or not\");\n        console.log(Array.isArray(this.tasks));\n\n    }\n\n\n    attachEventListeners(){\n        this.addButton.addEventListener(\"click\",() => this.addTask());  // add Task is a funtion which will be in action\n        this.calanderButton.addEventListener(\"click\",() => this.dueDateInput.showPicker()); ;\n        this.timeButton.addEventListener(\"click\",() => this.dueTimeInput.showPicker()); ;\n        // I''ll add more event Listener  here later for  task interaction\n    }\n\n    renderTasks(){\n        this.taskList.textContent= \"\"; // first clear the content for every new task\n\n        // Create the header row\n        const headerLi = document.createElement('li');\n\n        headerLi.classList.add('taskListHeader');\n\n\n\n        /// create span for task headers \n        //  create a span for the task name\n        const task_name_Header = document.createElement('span');\n        task_name_Header.classList.add('task_name');\n        task_name_Header.textContent = \"Task Name\";\n        headerLi.appendChild(task_name_Header);\n        \n\n        // create a span for the task priority\n        const priorityHeader = document.createElement('span');\n        priorityHeader.classList.add('task-priority');\n        priorityHeader.textContent = \"Priority\";\n        headerLi.appendChild(priorityHeader);\n\n\n\n\n        // create a span for the task due date\n        const dueDateHeader = document.createElement('span');\n        dueDateHeader.classList.add('task-due-date');\n        dueDateHeader.textContent = \"Due Date\";\n        headerLi.appendChild(dueDateHeader);\n        // create a span for the task due time\n        const dueTimeHeader = document.createElement('span');\n        dueTimeHeader.classList.add('task-due-time');\n        dueTimeHeader.textContent = \"Due Time\";\n        headerLi.appendChild(dueTimeHeader);\n        // create a span for the task completed\n        const completedHeader = document.createElement('span');\n        completedHeader.classList.add('task-completed');\n        completedHeader.textContent = \"Did IT\";\n        headerLi.appendChild(completedHeader);\n        // create a span for the task delete\n\n\n        const deleteHeader = document.createElement('span');\n        deleteHeader.classList.add('task-delete');\n        deleteHeader.textContent = \"Delete\";\n        headerLi.appendChild(deleteHeader);\n        \n        // Append the header row to the task list\n        this.taskList.appendChild(headerLi);\n\n        this.tasks.forEach((task, index)=>{\n            const li  = document.createElement('li');\n            li.setAttribute(\"data-index\", index);\n            li.classList.add('task-item');\n\n            // Task Text\n            const task_name = document.createElement('span');\n            task_name.classList.add('task_name');\n            task_name.textContent = task._text;\n            li.appendChild(task_name);\n\n            // Priority\n            const prioritySpan = document.createElement('span');\n            prioritySpan.classList.add('task-priority');\n            prioritySpan.textContent = task._priority;\n            li.appendChild(prioritySpan);\n\n            // Due Date\n            \n            const dueDateValue = document.createElement('span');\n            dueDateValue.textContent = task._dueDate;\n            dueDateValue.classList.add('task-due-date-value');\n            \n            li.appendChild(dueDateValue);\n\n            // Due Time\n\n            const dueTimeValue = document.createElement('span');\n            dueTimeValue.classList.add('task-due-time-value');\n            dueTimeValue.textContent = task._dueTime;\n            li.appendChild(dueTimeValue);\n\n            // Completed\n            const completedSpan = document.createElement('span');\n            completedSpan.classList.add('task-completed');\n\n            const completedButton = document.createElement('button');\n            completedButton.classList.add('completed-button');\n            completedButton.textContent = task._completed ? '✓' : '✗';\n\n            completedButton.addEventListener(\"click\", (event) => this.toggleButtonClick(event));\n            completedSpan.appendChild(completedButton);\n            li.appendChild(completedSpan);\n\n            \n            \n            \n            \n            // Deleted Span\n            const deleteSpan = document.createElement('span');// create a span for the delete button\n            deleteSpan.classList.add('task-delete'); //\n\n\n            const deleteButton = document.createElement('button');//\n            deleteButton.classList.add('delete-button');\n            deleteButton.textContent = 'Delete';\n            deleteButton.addEventListener(\"click\", (event) => this.deleteTask(event));\n            deleteSpan.appendChild(deleteButton);\n\n            \n\n            li.appendChild(deleteSpan);\n            // Toggle Button    \n            this.taskList.appendChild(li);\n        });\n    }\n\n\n    addTask(){\n        const taskText = this.taskInput.value.trim();\n        const taskPriority = this.priorityInput.value.trim();\n        const taskDueDate= this.dueDateInput.value.trim();\n        const taskDueTime = this.dueTimeInput.value.trim();\n\n        console.log(taskText,taskPriority,taskDueDate,taskDueTime);\n\n\n\n        if (taskText){\n            const newTask = new Task(taskText,taskPriority, taskDueDate, taskDueTime);\n            this.tasks.push(newTask);\n            this.upadteLocalStorage();\n            this.renderTasks();\n\n            // now clean the values for new tasks ;\n\n            this.taskInput.value= \"\";\n            this.priorityInput.value = \"High\";\n            this.dueDateInput.value =\"\";\n            this.dueTimeInput.value = \"\";\n\n\n        }\n    }\n\n   deleteTask(event){\n        console.log(\"delete button clicked\")//  check if the delete button is clicked or not\n        const target = event.target; // get the target element\n\n        console.log(\"Target  :  \",target); // check the target element\n        const taskItem = target.closest('.task-item'); // Get the closest task item div\n        \n        \n        const indexToDelete = taskItem.getAttribute(\"data-index\");// get the index of the task to be deleted\n        this.tasks.splice(indexToDelete,1); // remove the task from the array\n        this.upadteLocalStorage();//update the local storage agin\n        this.renderTasks();\n   }\n\ntoggleButtonClick(event){\n        console.log(\"toggle button clicked\");\n    const target = event.target;\n    const taskItem = target.closest('.task-item');\n    const indexToToggle = taskItem.getAttribute(\"data-index\");\n\n        console.log(this.tasks[indexToToggle]._completed);\n    // toggle the completed status of the task\nif (this.tasks[indexToToggle]._completed){\n        this.tasks[indexToToggle]._completed = false;\n        }\n\nelse {\n        this.tasks[indexToToggle]._completed = true;\n\n\n}\n\nthis.upadteLocalStorage();\nthis.renderTasks();\n\n\n}\n\n// i will add more functions for the task interaction later\n// like edit task , sort task, and alarm system for the task\n\n\n}\n\n//# sourceURL=webpack://todo_le2/./src/addtask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addtask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addtask.js */ \"./src/addtask.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const myTodoList = new _addtask_js__WEBPACK_IMPORTED_MODULE_0__.todoList();\n    myTodoList.attachEventListeners();\n    myTodoList.renderTasks  ();\n    myTodoList.upadteLocalStorage();\n    \n    console.log(\"hello\");\n\n    console.log(myTodoList.tasks);\n    console.log(myTodoList.taskInput);\n    console.log(myTodoList.priorityInput);\n    console.log(myTodoList.dueDateInput);\n    console.log(myTodoList.addButton);\n    console.log(myTodoList.taskList);\n    console.log(myTodoList.calanderButton);\n    console.log(myTodoList.loadTask());\n    console.log(myTodoList.upadteLocalStorage());\n    console.log(myTodoList.attachEventListeners());\n    console.log(myTodoList.renderTasks());\n    console.log(myTodoList.addTask());\n    console.log(myTodoList.tasks);\n    console.log(myTodoList.taskInput);\n    console.log(myTodoList.priorityInput);\n    console.log(myTodoList.dueDateInput);\n    console.log(myTodoList.addButton);\n    console.log(myTodoList.taskList);\n    console.log(myTodoList.calanderButton);\n    console.log(myTodoList.loadTask());\n    console.log(myTodoList.upadteLocalStorage());\n    console.log(myTodoList.attachEventListeners());\n    console.log(myTodoList.renderTasks());\n    console.log(myTodoList.addTask());\n    console.log(myTodoList.tasks);\n    console.log(myTodoList.taskInput);\n    console.log(myTodoList.priorityInput);\n    console.log(myTodoList.dueDateInput);\n    console.log(myTodoList.addButton);})\n\n//# sourceURL=webpack://todo_le2/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;