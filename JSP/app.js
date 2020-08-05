//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
//create a click event and add a function of addTodo
todoButton.addEventListener("click", addTodo);

//add the delete button
todoList.addEventListener("click", deleteCheck);

//the second part| adding the delete functionality
todoList.addEventListener("click", deleteCheck);

//fumctions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();

    //start generating the todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // start generating the li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");

    //stick the todo inside the div that we have created
    todoDiv.appendChild(newTodo);

    //now we need two buttons 1. a complete button like a checkmark and 2. a delete button

    //check mark
    const  completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class = "fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    //now our trash  button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class = " fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append all to the list
    todoList.appendChild(todoDiv);

    //now we  go to css and style the buttons

    //after styling the buttons in css

    //we clear the text from the input box
    todoInput.value = "";
}
    //now we start adding some functionality to the buttons

    //for the delete and check
    function deleteCheck(e){
        //cosole.log to check what we clicking on
        //console.log(e.target)

        //lets grab the item, i.e, whatever we are clicking on
        const item = e.target;
        //delete todo
        if (item.classList[0] == "trash-btn") {
            //item.remove();
            const todo = item.parentElement;
            todo.remove();
        }

        //check
        if (item.classList[0] == "complete-btn") {
            const todo = item.parentElement;
            todo.classList.toggle("completed");
        }
    }

    //for the delete button, go to line 15 and then come back here
    function deleteCheck(e)

