// Retrieve tasks and nextId from localStorage
// Inputs imported from the HTML
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const addTaskButton = $('.btn-success');
const modal = $('.modal');
const taskTitleInput = document.querySelector(".task-title");
const dueDateInput = document.querySelector(".date");
const descriptionInput = document.querySelector(".task");

function formSubmit(){
    const taskArray = JSON.parse(localStorage.getItem('strings')) || [];

    const taskObject = {
      //add generate task id function
      objectTitle: title.value,
      objectDate: date.value,
      objectDescription: description.value.trim()
    }

    taskArray.push(taskObject);
    localStorage.setItem('tasks', JSON.stringify(taskArray));
    
    $("#todo-cards").append(createTaskCard(taskObject));
}

// Todo: create a function to generate a unique task id
//Give the tasks a unique ID
function generateTaskId() {
  
    const id = Math.random().toString(36).substr(2, 9);
    console.log(id);
}
//Add cards to the box

// Todo: create a function to create a task card
// Create a task card with the information
function createTaskCard(task) {
  console.log(task);
  //Add a button for deleting
  // When delete is clicked, it deletes the box
    const taskCard = $('<div>')
    .addClass('card project-card draggable my-3')
    .attr('data-project-id', project.id);
  const cardHeader = $('<div>').addClass('card-header h4').text(task.objectTitle);
  const cardBody = $('<div>').addClass('card-body');
  const cardDescription = $('<p>').addClass('card-text').text(task.objectDescription);
  const cardDueDate = $('<p>').addClass('card-text').text(task.objectDate);
  const cardDeleteBtn = $('<button>')
    .addClass('btn btn-danger delete')
    .text('Delete')
    .attr('data-project-id', task.id);
  cardDeleteBtn.on('click', handleDeleteTask);

  // ? Sets the card background color based on due date. Only apply the styles if the dueDate exists and the status is not done.
  //if (task.objectDate && project.status !== 'done') {
    const now = dayjs();
    const taskDueDate = dayjs(task.objectDate, 'DD/MM/YYYY');


  //If the task is due today, make the card yellow. If it is overdue, make it red.
  if (now.isSame(task.objectDate, 'day')) {
    taskCard.addClass('bg-warning text-white');
  } else if (now.isAfter(task.objectDate)) {
    taskCard.addClass('bg-danger text-white');
    cardDeleteBtn.addClass('border-light');
  }

 // Gather all the elements created above and append them to the correct elements.
cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
taskCard.append(cardHeader, cardBody);

//Return the card so it can be appended to the correct lane.
console.log("Items entered")
    return taskCard;

}

// Todo: create a function to render the task list and make cards draggable
// Make the tasks draggable
function renderTaskList() {
   createTaskCard();
    
    //Calls Create the task card
    //Make it draggable and droppable
    $( function() {
        $( "#draggable" ).draggable();
      } );
}

// Todo: create a function to handle adding a new task
// Adds a new task
function handleAddTask(event){
    renderTaskList();
    let task = document.querySelector("modal-content");
  let inputVal = document.getElementsByClassName("modal-form").value;
  task.innerHTML = inputVal;
}

// Todo: create a function to handle deleting a task
// This function will delete the task
function handleDeleteTask(event){
    
    //Delete the box when Delete is clicked
    //Rerender the box using the Render Task Card
    
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
    //add LocalStorage
    //call the render task list
    
$("#add-task").on("click", function (){
    console.log('I clicked the button');
    const chosenTask = JSON.parse(localStorage.getItem ("tasks")) || [];
    console.log($(".task-title").val());
    const newTask = {
        //Adds the values of information put in the Modal task box
        title:$(".task-title").val(),
        date:$(".date").val(),
        description:$(".task").val()
    }
    chosenTask.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(chosenTask));

})

});