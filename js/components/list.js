export const taskList = async (res) =>{
    let plantilla = "";
    res.forEach(element => {
        plantilla +=/*html*/`
        <li class="tasks" data-id="1">
            <span class="todo__item">${element.task} </span>
            <div class="buttons">
                <a href="" onclick="return false;" class="check-btn">
                    <img src="storage/img/check-svgrepo-com.svg" alt="check">
                </a>
                <a href="" onclick="return false;" class="delete-btn">
                    <img src="storage/img/trash-svgrepo-com.svg" alt="trash">
                </a>
            </div>
        </li>
        `;
    });
    return plantilla;
}