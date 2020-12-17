// Remember that our list is called `todos`, and it's in `todos.js`. It's not in this file, nor is it being `require`-d in, but it's available globally because its file is loaded in BEFORE this one in `index.html`.

// Write each function below its comment and you'll be doing pretty well.  The printTodo function has been begun for you so that we can drill down in the comments on its individual steps. Add the code for each part below its comment as well.
// Doing our code under its pre-written comment in this way will self-document your code and, more importantly, make it easier to follow along with the assignment!

// Remember that each function below is a helper function or an event listener function that runs when the user interacts with our page. So we should NOT be calling any functions or doing anythinmg in the global scope. Just functions functions functions!
// (With one big exception, which you'll see in the comments when we get there.)

// And now: code away.



// A function that, given a todo object, adds an item to our todo list array.
const addToDo = (todo) => {
  todos.push(todo)
}

// A function that removes an item at a given index from our todo list array. You can use splice!
const removeToDo = (id) => {
  todos.splice(id, 1);
}

// Given a todo object, put it on the DOM. This is a pretty big function, so we'll walk through the different parts of it.
const printTodo = function (todo) {
  // Use `document.createElement` to make an <li>, and set its text (preferably using `.innerText`) to be our given object's text field. Check out what a todo object looks like in `todos.js` if you need to!
  const toDoItem = document.createElement('li')
  toDoItem.innerText = todo.text;

  // Query the ol and save it in a variable.
  const toDoList = document.querySelector('ol')


  // Append the li we made to the ul as the last child using `.appendChild`. If this isn't working for you, check what is being appended to what!
  toDoList.appendChild(toDoItem)


  // Give our new li a `todo-item` class using `classList`. This will allow us to style it later if we want.
  toDoItem.classList.add("todo-item")


  // Give our new li an id that is the object's id. This is so that we have a matching relationship between todo _html elements_ and their corresponding _array objects_. Now we'll be able to find the corresponding array object when they click to toggle the completeness on a DOM element.
  toDoItem.id = todo.id


  // Give the li a `complete` class if the todo object indicates it was complete already. (Again, check the `todos.js` to see what the objects look like!)
  if (todo.complete === true) {
      toDoItem.classList.add("complete")
    }

    // Give the <p> with the todo's text in it an event listener to toggle that todo's completeness.
// This is quite a challenge, so feel free to come back to this one at the end!
// You'll want to add an event listener to the `li` you just made, and in that event listener function, toggle its completeness on both the DOM (using `classList.toggle`) and in our global array (toggling its completeness property).
// The hard part will be finding it on the DOM and finding it in our array. We can tell what `li` was clicked using the `event` property passed in to the event listener, and we can tell what object it goes to using the DOM element's id that we added above.







}

// A function that print ALL todos. It should loop through our todos array and call the above print-one-todo function on each one.
const printAllToDos = () => {
  for (const todo of todos) {
    printTodo(todo);
  }
}
// fancy way
// const printAllToDos = () => todos.forEach((todo) => printTodo(todo))


// Now here in the global code, call the above function, so our todos array gets printed out on page load (which is when global code is run). This is the only time we're calling a function ourselves; the rest is event listeners and helper functions that run when the user interacts with the DOM!
printAllToDos(todos);



// A function that clears all todos from the DOM. This is a great helper function for refreshing our todos.
// Test it in the console and see if your list disappears!

const clearAllToDos = () => { 
  const todos = document.querySelectorAll('.todo-item');
  for(const todo of todos) {
    todo.remove();
  }
}




// Refresh our page by calling each of the two above functions. Since printing all todos onto the DOM is based on our todos array, if we make a change to our todos array, we can simply call this function, which will make our DOM match our todos array by simply clearing the page and repopulating it according to our todos' new state.

const refreshToDos = () => {
  clearAllToDos();
  printAllToDos();
}




/*

Let's wire it all together. Add an event listener for the add todo button that will:
1. Queries the input box. We will need that node element again, so save it to a variable!
2. Create a todo object. Its text should be the text that was in the input box (you might have to research this!), its priority should be set to 2, and its completeness should be false, as we definitely haven't completed the todo yet.
3. Pass that object to your adding todos function to put it in our array.
4. Pass the object as well to your adding todos function to put it on the DOM.
5. Stretch goal: remove all text from the input box. Try adding multiple todos without this first, you'll see why we should do it!

*/

const userInput = document.querySelector("todo-input");
const addButton = document.querySelector(".add-todo");

addButton.addEventListener('click', () => {
const newToDo = {
  text: userInput.value,
  complete: false,
  priority: 2,
  id: todos.length,
};
  addToDo(newToDo);
  printTodo(newTodo);
});




/*

Wire up your clear todos button. Give it an event listener that clears all todos from the DOM (we have a function for that!) and removes all todo objects from the todos array as well.

*/



// And you're DONE with the best interface we've written yet for a todos app! 
