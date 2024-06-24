import { taskList } from "./components/list.js";
import { createTask, getAllTask } from "./module/app.js";

// Selección de elementos del DOM
const taskListItems = document.querySelector(".task__list__items");
const addTaskButton = document.querySelector(".add__task__button");
const taskInput = document.querySelector("#task__input");

// Evento personalizado
const taskUpdatedEvent = new Event('taskUpdated');

// Función para actualizar la lista de tareas
let updateTaskList= async () =>{
  const data = await getAllTask();
  taskListItems.innerHTML = await taskList(data);
}

// Inicialización
updateTaskList();

// Evento click del botón "Agregar tarea"
addTaskButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const newTask = { task: taskInput.value, status: "On hold" };
  taskInput.value = null;
  await createTask(newTask);
  document.dispatchEvent(taskUpdatedEvent);
});

// Listener para el evento taskUpdated
document.addEventListener('taskUpdated', updateTaskList);