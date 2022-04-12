const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveTodos() {
    //javascript object, array 어떤것이든 string으로 변경 : JSON.stringify()
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodayObj = {
        text : newTodo,
        id : Date.now()
    }
    toDos.push(newTodayObj);
    paintTodo(newTodayObj);
    saveTodos();
}


function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    //filter를 통해 삭제
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos(toDos);
}

function paintTodo(newTodayObj) {
    const li = document.createElement("li");
    li.id = newTodayObj.id;
    const span = document.createElement("span");
    span.innerHTML = newTodayObj.text;
    const button = document.createElement("button");
    button.innerHTML = "❌";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}