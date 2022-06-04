document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.querySelector('form');
  form.addEventListener('submit',(event) => {
    event.preventDefault();
    const input = document.getElementById('new-task-description').value;
    console.log(input);
    const listItem = document.createElement('li');
    console.log(listItem)
    listItem.textContent = input; 
    document.getElementById('tasks').append(listItem);
  });
});

// // refactored code (partially finished)
// // Step 1: Variables
// const textField = document.getElementById('new-task-description');
// const userInput = textField.value;
// const list = document.getElementById('tasks');
// const listItem = document.createElement('li'); // make helper function
// const form = document.querySelector('form'); 
// 
// 
// // Step 2: Change variable properties
// listItem.textContent = userInput;
// 
// // step 3: Action: apply & combine
// form.addEventListener('submit',(event) => {
//   event.preventDefault();
//   // input.value;
//   console.log(userInput);
//   console.log(textField.value);
//   
//   console.log(listItem)
// 
//   
//   list.append(listItem);
// });


// Deliverables
  // As a user, I should be able to type a task into the input field.
  // As a user, I should be able to click some form of a submit button.
  // As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

  // event.preventDefault()

  // listen for a submit event on the form element
  // x querySelector('form')
  // x addEventListener('submit')
    // event.preventDefault()

/*
  textbox.addEventListener('keypress', functionName); // ... fill out form, enter text content

  function functionName (evt) {};
*/

// Stretch Deliverables
  // A delete function that will remove tasks from your list
  // A priority value selected from a dropdown (Links to an external site.) that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
  // As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
  // An additional input field (e.g. user, duration, date due)
  // Ability to edit tasks
  // Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM