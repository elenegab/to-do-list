const input = document.querySelector('input');
const addButton = document.querySelector('button');
//add tasks
// Add event listener to the button 
addButton.addEventListener('click', function() {
  // Create a new task element with the input value
  const newTask = document.createElement('li');
  newTask.textContent = input.value;

  // Add two buttons to the new task element 
  const checkButton = document.createElement('button');
  checkButton.innerHTML = '<i class="fa fa-check"></i>';
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
  newTask.appendChild(checkButton);
  newTask.appendChild(deleteButton);

  
  // Add the new task element to the notCompleted list
  const notCompletedList = document.querySelector('.notCompleted');
  notCompletedList.appendChild(newTask);
  

  // Clear the input field
  input.value = '';

  checkButton.addEventListener('click', function(){
    const parent = this.parentNode;
    parent.remove();
    const completedist = document.querySelector('.completed');
    completedist.appendChild(parent);
    checkButton.style.display = "none"
    
})

  deleteButton.addEventListener('click', function(){
    const parent = this.parentNode;
    parent.remove();
    
  })
});

