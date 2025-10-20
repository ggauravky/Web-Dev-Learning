const addTodo = document.getElementById("addTodoBtn");
const inputTag=document.getElementById("todoInput")
let todoText;
let todoString = localStorage.getItem("todos");
if(todoString){
    todos = JSON.parse(todoString);
}
let todos=[];

addTodo.addEventListener("click", ()=>{
    console.log("Hey i just pressed the btn , so it is perfectly working")
    todoText = inputTag.value
    console.log(todoText)
    inputTag.value = "";
    let todo={
        title: todoText,
        isCompleted: false
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
});