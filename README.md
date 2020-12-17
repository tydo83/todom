# ToDOM

Instructions in `main.js` as inline code to document your functions with.

### Stretch Goals

* [Bootstrap it up!](https://getbootstrap.com/) There are many elements that could be given the bootstrap treatment, whether it's the todo `li`, or the heading, or the input form and buttons. Alternately, pretty it up with [Semantic UI](https://semantic-ui.com/) or [Materialize](https://materializecss.com/) or the component system of your choice.
* Add persistence! We did this in [Todo Persistence](https://github.com/ci-wdi-900/todo-persistence), and you can follow the directions in that README with few changes. But you will want to:
    * Grab the `todos.json` from that repo, as we are now using JSON instead of straight JS.
    * Change the `complete` properties in our JavaScript to `isComplete` so that a) it's a better name, and b) it matches the JSON. Or do it the other way around, changing the JSON properties to `complete`. But it's a better property name, and one that we (oops) should've used for this project!
    * Put our front end code in a `front-end` folder, and the JSON file in a `back-end` folder. This is to prevent an issue with `live-server` where we reload our page when the JSON file is saved to, since that file is being watched for changes as well if it's in the same folder as everything else. **Make sure you run `code .` and activate `live-server` in the `front-end` folder to avoid this issue!**
    * Otherwise, the back end is fairly separate from the interface (an architecture known as "loose coupling", so that code can be removed and reattached to other code without too much issue), and we can just add our `saveTodos` to anywhere we're making a change to the `todos` array!
* Filter your todos! Add a button to the DOM for Delete Completed, and wire up a click event listener for it that filters the `todos` array by whether the item is complete or not. Reassign the `todos` array (you may need to change it to be `let`-declared) to hold that filtered array, and you've got it!
* Filter your todos NON-DESTRUCTIVELY. That means that there should be a button (in addition to the previous stretch goal's button?) called "Show Only Incomplete" that, rather than _delete_ the items, simply makes a NEW filtered array and displays only that one. Make sure you can still add new todos and have them display. You may also want another button for Show All Todos, when you can go back to displaying your larger set of data. This one's tricky, for sure, but if you walk through the logic (a flow-chart can DEFINITELY help here!) you can get it.

