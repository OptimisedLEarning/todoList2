import { todoList } from "./addtask.js";

document.addEventListener("DOMContentLoaded", () => {
    const myTodoList = new todoList();

    console.log("App Initialized");

    // Debug logs
    console.log("Tasks:", myTodoList.tasks);
    console.log("Input Elements:", {
        taskInput: myTodoList.taskInput,
        priorityInput: myTodoList.priorityInput,
        dueDateInput: myTodoList.dueDateInput,
        dueTimeInput: myTodoList.dueTimeInput,
        addButton: myTodoList.addButton,
        taskList: myTodoList.taskList,
        calendarButton: myTodoList.calanderButton,
    });
});