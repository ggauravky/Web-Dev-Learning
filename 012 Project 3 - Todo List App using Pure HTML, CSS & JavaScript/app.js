const addTodo = document.getElementById("addTodoBtn");
const inputTag=document.getElementById("todoInput")
let todoText;
let todos=[];

addTodo.addEventListener("click", ()=>{
    console.log("Hey i just pressed the btn , so it is perfectly working")
    todoText = inputTag.value
    console.log(todoText)
    inputTag.value = "";
});