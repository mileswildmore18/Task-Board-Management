// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const addTaskButton = $('.btn-success');
const modal = $('.modal');

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const id = Math.random().toString(36).substr(2, 9);
    console.log(id);
}

// Todo: create a function to create a task card
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
    

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    $( function() {
        $( "#draggable" ).draggable();
      } );
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    let task = document.querySelector("modal-form");
  let inputVal = document.getElementById("task").value;
  task.innerHTML = inputVal;
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
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

});


{/* <div class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Task</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Task Title</p>
            <p>Task Due Date</p>
            <p>Task Description</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div> */}