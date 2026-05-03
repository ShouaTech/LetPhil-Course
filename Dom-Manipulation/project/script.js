// const taskInput = document.getElementById("taskInput");
// const taskList = document.getElementById("taskList");

// function addTask() {
//      const taskText = taskInput.value.trim(); // trim - cuts off white space from front and back
//      if (taskText === "") return;

//      const taskItem = document.createElement("li");
//      taskItem.textContent = taskText;
//      taskItem.classList.add("task")

//      // add a click event to remove task
//      taskItem.addEventListener("click", function() {
//         taskList.removeChild(taskItem);
//      });

//      taskList.appendChild(taskItem);

//      taskInput.value = "";
// }

// taskInput - the input element itself
// taskList - the < ul > or < ol > element that holds tasks
// taskText - the text the user typed
// taskItem - the new < li > that was created

const taskInput = document.getElementById("taskInput"); // These grab the HTML elements from the 
const taskList = document.getElementById("taskList"); // page and store it into variables

function addTask() { // adds a function named addTask, this is the button that says it
    const taskText = taskInput.value.trim(); // this gets what user types into the input , trim() removes spaces from beginning and end
    if (taskText === "") return; // if text is empty , stop function immediately

    const taskItem = document.createElement("li"); // Creates new < li > elements, not on page yet. like creating <li></li> with nothing in it
    taskItem.textContent = taskText; // puts text inside < li >
    taskItem.classList.add("task"); // adds class "task" to the new < li >

    taskItem.addEventListener("click", function() { // Listen for a click on that specific task item, function() {} the code that runs after click happens
        taskList.removeChild(taskItem); // tells list to remove the clicked item
    });

    taskList.appendChild(taskItem); // adds new < li > into task list

    taskInput.value = ""; // Empties text box after task is added
}