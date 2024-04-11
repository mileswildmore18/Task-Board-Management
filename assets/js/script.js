// Retrieve tasks and nextId from localStorage
// Inputs imported from the HTML
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const addTaskButton = $('.btn-success');
const modal = $('.modal');
const taskTitleInput = document.querySelector("task-title");
const dueDateInput = document.querySelector("date");
const descriptionInput = document.querySelector("description");

// Todo: create a function to generate a unique task id
//Give the tasks a unique ID
function generateTaskId() {
    const id = Math.random().toString(36).substr(2, 9);
    console.log(id);
}

// Todo: create a function to create a task card
// Create a task card with the information
function createTaskCard(task) {
    let div = $('<div>');
    div.addClass('card draggable').attr("style", "width: 18rem");
    let title = $("div").addClass("task-title").text("task-title");
    let cardBody = $("div").addClass("modal-form");
    let cardDate = $("due-date").addClass("date").text('date');
    let cardInfo = $("description").addClass("task").text("description");

    div.append(title);
    div.append(cardBody);
    cardBody.append(cardDate);
    cardBody.append(cardInfo);

    return task;

}

// Todo: create a function to render the task list and make cards draggable
// Make the tasks draggable
function renderTaskList() {
    $( function() {
        $( "#draggable" ).draggable();
      } );
}

// Todo: create a function to handle adding a new task
// Adds a new task
function handleAddTask(event){
    let task = document.querySelector("modal-content");
  let inputVal = document.getElementsByClassName("modal-form").value;
  task.innerHTML = inputVal;
}

// Todo: create a function to handle deleting a task
// This function will delete the task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
//Makes the task droppable to the given box
function handleDrop(event, ui) {
    $( function() {
        $( "#draggable" ).draggable();
        $( "#droppable" ).droppable({
          drop: function( event, ui ) {
            $( this )
              .addClass( "ui-state-highlight" )
              .find( "p" )
                .html( "Dropped!" );
          }
        });
      } );

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

    //Clears the Modal when "Add Task" is clicked
$(".btn-success").on("click", function (){
    const chosenTask = JSON.parse(localStorage.getItem ("tasks")) || [];
    const newTask = {
        //Adds the values of information put in the Modal task box
        title:taskTitleInput.val(),
        date:dueDateInput.val(),
        description:descriptionInput.val()
    }
    chosenTask.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(chosenTask));
})

});