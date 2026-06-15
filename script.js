let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask() {
    let input = document.getElementById("taskInput");

    if(input.value.trim() === "")
        return;

    tasks.push({
        text: input.value,
        completed: false
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";

    displayTasks();
}

function displayTasks() {

    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach((task,index) => {

        let li = document.createElement("li");

        li.innerHTML = `
            <span onclick="toggleTask(${index})"
            class="${task.completed ? 'completed' : ''}">
            ${task.text}
            </span>

            <button onclick="deleteTask(${index})">
            Delete
            </button>
        `;

        taskList.appendChild(li);
    });
}

function toggleTask(index){
    tasks[index].completed =
    !tasks[index].completed;

    localStorage.setItem(
    "tasks",
    JSON.stringify(tasks));

    displayTasks();
}

function deleteTask(index){

    tasks.splice(index,1);

    localStorage.setItem(
    "tasks",
    JSON.stringify(tasks));

    displayTasks();
}