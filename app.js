const input = document.querySelector(".input");
const todoLists = document.querySelector(".todo-lists");
const addTodoBtn = document.querySelector(".todo-btn")

addTodoBtn.addEventListener("click", () => {
    let inputRes = input.value.trim()
    if(inputRes == "") {
        alert("Invalid task")
        input.value = ""
    }
    else{
        addTodo(input.value);
        input.value = "";
    }
    
});

const addTodo = (item) => {
   const listItem = document.createElement("li");
   listItem.innerHTML = `
        <div class="listItem-div">
            <i class="fa-regular fa-square-check myCheck"></i>
            ${item}
        </div>
        <div class="dlt-div">
            <i class="fa-solid fa-trash-can dlt"></i>
        </div>
        `;

    const listItemDiv = listItem.querySelector(".listItem-div")
    listItemDiv.addEventListener("click", ()=> {
        listItemDiv.classList.toggle("done")
    })

    todoLists.prepend(listItem)

    const dltDiv = listItem.querySelector(".dlt-div")

    dltDiv.addEventListener("click", ()=> {
        listItem.remove()
    })
};