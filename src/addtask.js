export class Task{
    constructor(text,priority,dueDate,dueTime,  completed =false){
        this._text = text;
        this._priority =priority;
        this._dueDate= dueDate ;
        this._dueTime = dueTime;   // in future add the time system
        this._completed =completed

    }
}



export class todoList{
    constructor(){
        this.tasks = this.loadTask();   //  first task that happen is load the previous data

        console.log("Data loaded from local storage:", this.tasks); // check if the data is loaded or not and check the type of data

        this.taskInput = document.getElementById("taskInput");
        this.priorityInput = document.getElementById("priorityInput");
        this.dueDateInput = document.getElementById("dueDate");
        this.dueTimeInput = document.getElementById("dueTime");

        this.addButton = document.getElementById("addButton");

        this.taskList = document.getElementById("taskList");


        this.calanderButton = document.getElementById("calendarButton");
        this.timeButton = document.getElementById("timeButton");


        this.attachEventListeners();
        this.renderTasks(); // render the task that are already present in the local storage




    }


    loadTask(){
        return JSON.parse(localStorage.getItem("tasks")) || [];

    }

    upadteLocalStorage(){
        localStorage.setItem("tasks",JSON.stringify(this.tasks));
        console.log("local storage updated");
        console.log( typeof this.tasks);
          console.log("check if the data is array or not");
        console.log(Array.isArray(this.tasks));

    }


    attachEventListeners(){
        this.addButton.addEventListener("click",() => this.addTask());  // add Task is a funtion which will be in action
        this.calanderButton.addEventListener("click",() => this.dueDateInput.showPicker()); ;
        this.timeButton.addEventListener("click",() => this.dueTimeInput.showPicker()); ;
        // I''ll add more event Listener  here later for  task interaction
    }

    renderTasks(){
        this.taskList.textContent= ""; // first clear the content for every new task

        // Create the header row
        const headerLi = document.createElement('li');

        headerLi.classList.add('taskListHeader');



        /// create span for task headers 
        //  create a span for the task name
        const task_name_Header = document.createElement('span');
        task_name_Header.classList.add('task_name');
        task_name_Header.textContent = "Task Name";
        headerLi.appendChild(task_name_Header);
        

        // create a span for the task priority
        const priorityHeader = document.createElement('span');
        priorityHeader.classList.add('task-priority');
        priorityHeader.textContent = "Priority";
        headerLi.appendChild(priorityHeader);




        // create a span for the task due date
        const dueDateHeader = document.createElement('span');
        dueDateHeader.classList.add('task-due-date');
        dueDateHeader.textContent = "Due Date";
        headerLi.appendChild(dueDateHeader);
        // create a span for the task due time
        const dueTimeHeader = document.createElement('span');
        dueTimeHeader.classList.add('task-due-time');
        dueTimeHeader.textContent = "Due Time";
        headerLi.appendChild(dueTimeHeader);
        // create a span for the task completed
        const completedHeader = document.createElement('span');
        completedHeader.classList.add('task-completed');
        completedHeader.textContent = "Did IT";
        headerLi.appendChild(completedHeader);
        // create a span for the task delete


        const deleteHeader = document.createElement('span');
        deleteHeader.classList.add('task-delete');
        deleteHeader.textContent = "Delete";
        headerLi.appendChild(deleteHeader);
        
        // Append the header row to the task list
        this.taskList.appendChild(headerLi);

        this.tasks.forEach((task, index)=>{
            const li  = document.createElement('li');
            li.setAttribute("data-index", index);
            li.classList.add('task-item');

            // Task Text
            const task_name = document.createElement('span');
            task_name.classList.add('task_name');
            task_name.textContent = task._text;
            li.appendChild(task_name);

            // Priority
            const prioritySpan = document.createElement('span');
            prioritySpan.classList.add('task-priority');
            prioritySpan.textContent = task._priority;
            li.appendChild(prioritySpan);

            // Due Date
            
            const dueDateValue = document.createElement('span');
            dueDateValue.textContent = task._dueDate;
            dueDateValue.classList.add('task-due-date-value');
            
            li.appendChild(dueDateValue);

            // Due Time

            const dueTimeValue = document.createElement('span');
            dueTimeValue.classList.add('task-due-time-value');
            dueTimeValue.textContent = task._dueTime;
            li.appendChild(dueTimeValue);

            // Completed
            const completedSpan = document.createElement('span');
            completedSpan.classList.add('task-completed');

            const completedButton = document.createElement('button');
            completedButton.classList.add('completed-button');
            completedButton.textContent = task._completed ? '✓' : '✗';

            completedButton.addEventListener("click", (event) => this.toggleButtonClick(event));
            completedSpan.appendChild(completedButton);
            li.appendChild(completedSpan);

            
            
            
            
            // Deleted Span
            const deleteSpan = document.createElement('span');// create a span for the delete button
            deleteSpan.classList.add('task-delete'); //


            const deleteButton = document.createElement('button');//
            deleteButton.classList.add('delete-button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener("click", (event) => this.deleteTask(event));
            deleteSpan.appendChild(deleteButton);

            

            li.appendChild(deleteSpan);
            // Toggle Button    
            this.taskList.appendChild(li);
        });
    }


    addTask(){
        const taskText = this.taskInput.value.trim();
        const taskPriority = this.priorityInput.value.trim();
        const taskDueDate= this.dueDateInput.value.trim();
        const taskDueTime = this.dueTimeInput.value.trim();

        console.log(taskText,taskPriority,taskDueDate,taskDueTime);



        if (taskText){
            const newTask = new Task(taskText,taskPriority, taskDueDate, taskDueTime);
            this.tasks.push(newTask);
            this.upadteLocalStorage();
            this.renderTasks();

            // now clean the values for new tasks ;

            this.taskInput.value= "";
            this.priorityInput.value = "High";
            this.dueDateInput.value ="";
            this.dueTimeInput.value = "";


        }
    }

   deleteTask(event){
        console.log("delete button clicked")//  check if the delete button is clicked or not
        const target = event.target; // get the target element

        console.log("Target  :  ",target); // check the target element
        const taskItem = target.closest('.task-item'); // Get the closest task item div
        
        
        const indexToDelete = taskItem.getAttribute("data-index");// get the index of the task to be deleted
        this.tasks.splice(indexToDelete,1); // remove the task from the array
        this.upadteLocalStorage();//update the local storage agin
        this.renderTasks();
   }

toggleButtonClick(event){
        console.log("toggle button clicked");
    const target = event.target;
    const taskItem = target.closest('.task-item');
    const indexToToggle = taskItem.getAttribute("data-index");

        console.log(this.tasks[indexToToggle]._completed);
    // toggle the completed status of the task
if (this.tasks[indexToToggle]._completed){
        this.tasks[indexToToggle]._completed = false;
        }

else {
        this.tasks[indexToToggle]._completed = true;


}

this.upadteLocalStorage();
this.renderTasks();


}

// i will add more functions for the task interaction later
// like edit task , sort task, and alarm system for the task


}