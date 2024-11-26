// Elementos del DOM
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Función para agregar tareas
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    // Crear el elemento de la tarea
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    // Añadir el texto de la tarea
    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;

    // Crear los botones de la tarea
    const taskButtons = document.createElement("div");
    taskButtons.className = "task-buttons";

    const completeBtn = document.createElement("button");
    completeBtn.className = "complete-btn";
    completeBtn.textContent = "✔";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "✖";

    // Añadir funcionalidad a los botones
    completeBtn.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(taskItem);
    });

    taskButtons.appendChild(completeBtn);
    taskButtons.appendChild(deleteBtn);

    // Añadir el contenido y botones al elemento de la tarea
    taskItem.appendChild(taskContent);
    taskItem.appendChild(taskButtons);

    // Añadir la tarea a la lista
    taskList.appendChild(taskItem);

    // Limpiar el campo de entrada
    taskInput.value = "";
}

// Evento para agregar tareas al hacer clic
addTaskBtn.addEventListener("click", addTask);

// Evento para agregar tareas al presionar "Enter"
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
