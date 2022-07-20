import checkcomplet from "./assets/recursos/checkcomplet.js";
import deleteicon from "./assets/recursos/deleteIcon.js";
(() => {
    const btn = document.querySelector("[data-form-btn]");

    const creaTeTasg = (evento) => {
        evento.preventDefault();
        const input = document.querySelector("[data-form-input]");
        const value = input.value;    
        const list = document.querySelector("[data-list]");
        const task = document.createElement("li");
        input.value = "";
        task.classList.add("card");
        const taskContent = document.createElement("div");
        taskContent.appendChild(checkcomplet());
        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value
        taskContent.appendChild(titleTask)
        
     

    task.appendChild(taskContent);
    task.appendChild(deleteicon());
    list.appendChild(task);
        
    };



    btn.addEventListener("click", creaTeTasg); 


    
})();


