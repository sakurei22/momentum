const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintTodo(newTodo);
}


function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = newTodo;
    const button = document.createElement("button");
    button.innerHTML = "❌";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


toDoForm.addEventListener("submit", handleTodoSubmit);