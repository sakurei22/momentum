const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintTodo(newTodo);
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    li.appendChild(span);
    span.innerHTML = newTodo;
    toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", handleTodoSubmit);