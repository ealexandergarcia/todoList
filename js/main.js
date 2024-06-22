import { taskList } from "./components/list.js";
import { getAllTask } from "./module/app.js";

let task__list__items = document.querySelector(".task__list__items")
let data =await getAllTask();
console.table(data);

task__list__items.innerHTML = await taskList(data)
