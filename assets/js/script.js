// Retrieve tasks and nextId from localStorage
// Inputs imported from the HTML
let taskList = JSON.parse(localStorage.getItem("tasks")) || []; 
let nextId = JSON.parse(localStorage.getItem("nextId"));
const addTaskButton = $('.btn-success');
const modal = $('.modal');
const taskTitleInput = document.querySelector(".task-title");
const dueDateInput = document.querySelector(".date");
const descriptionInput = document.querySelector(".task");

// function formSubmit(){
//     const taskArray = JSON.parse(localStorage.getItem('strings')) || [];

//     const taskObject = {
//       //add generate task id function
//       objectTitle: title.value,
//       objectDate: date.value,
//       objectDescription: description.value.trim()
//     }

//     taskArray.push(taskObject);
//     localStorage.setItem('tasks', JSON.stringify(taskArray));
    
//     $("#todo-cards").append(createTaskCard(taskObject));
//}

// Todo: create a function to generate a unique task id
//Give the tasks a unique ID
function generateTaskId() {
  
    const id = Math.random().toString(36).substr(2, 9);
    console.log(id);
    
    return id;
}
//Add cards to the box

// Todo: create a function to create a task card
// Create a task card with the information
function createTaskCard(task) {
  console.log(task);
  const taskArray = [];
  task.forEach((taskEl)=>{

  
  //Add a button for deleting
  // When delete is clicked, it deletes the box
    const taskCard = $('<div>')
    .addClass('card project-card draggable my-3 task-card')
    .attr('data-project-id', `${taskEl.id}`);
  const cardHeader = $('<div>').addClass('card-header h4').text(taskEl.title);
  const cardBody = $('<div>').addClass('card-body');
  const cardDescription = $('<p>').addClass('card-text').text(taskEl.description);
  const cardDueDate = $('<p>').addClass('card-text').text(taskEl.date);
  const cardDeleteBtn = $('<button>')
    .addClass('btn btn-danger delete')
    .text('Delete')
    .attr('data-project-id', taskEl.id);
  cardDeleteBtn.on('click', handleDeleteTask);

  // ? Sets the card background color based on due date. Only apply the styles if the dueDate exists and the status is not done.
  //if (task.objectDate && project.status !== 'done') {
    const now = dayjs();
    const taskDueDate = dayjs(taskEl.date, 'DD/MM/YYYY');


  //If the task is due today, make the card yellow. If it is overdue, make it red.
  if (now.isSame(taskDueDate, 'day')) {
    taskCard.addClass('bg-warning text-white');
  } else if (now.isAfter(taskDueDate)) {
    taskCard.addClass('bg-danger text-white');
    cardDeleteBtn.addClass('border-light');
  }

 // Gather all the elements created above and append them to the correct elements.
cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
taskCard.append(cardHeader, cardBody);
taskArray.push(taskCard);
//Return the card so it can be appended to the correct lane.
console.log("Items entered");
})
    return taskArray;

}

// Todo: create a function to render the task list and make cards draggable
// Make the tasks draggable
function renderTaskList() {
  let taskData = JSON.parse(localStorage.getItem("tasks")) || []; 
  taskData.forEach((task)=>{
    const taskCard = createTaskCard([task])[0];
    switch(task.lane) {
      case 'to-do':
        $('#todo-cards').append(taskCard)
        break;
      case 'in-progress':
        $('#in-progress-cards').append(taskCard)
        break;
      case 'done':
        $('#done-cards').append(taskCard)
        break;
    }
  })
  
  $( ".draggable" ).draggable();
    
    //Calls Create the task card
    //Make it draggable and droppable
    
}

// Todo: create a function to handle adding a new task
// Adds a new task
function handleAddTask(event){
  const taskLane = 'to-do'
  const newTask = {
    id: generateTaskId(),
      //Adds the values of information put in the Modal task box
      title:$(".task-title").val(),
      date:$(".date").val(),
      description:$(".task").val(),
      lane: taskLane
  }
  taskList.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(taskList));
     $('#formModal').modal('hide');
     createTaskCard(taskList);
     renderTaskList();
    
   
}

// Todo: create a function to handle deleting a task
// This function will delete the task
function handleDeleteTask(event){
   const taskId = $(this).attr('data-task-id')
   taskArray = taskArray.filter(task => task.id !== parseInt(taskId));
   localStorage.setItem('taskArray', JSON.stringify(taskArray));
   renderTaskList()
  }


    //Delete the box when Delete is clicked
    //Rerender the box using the Render Task Card
    


// Todo: create a function to handle dropping a task into a new status lane
//Makes the task droppable to the given box
function handleDrop(event, ui) {
   
        
       

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

    //Clears the Modal when "Add Task" is clicked 
    //add LocalStorage
    //call the render task list
    
    
$("#add-task").on("click", function (event){
  event.preventDefault()
    console.log('I clicked the button');
    
   handleAddTask();

})
$('.lane').droppable({
  accept:'.draggable',
  drop:handleDrop
})
});