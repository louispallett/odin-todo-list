// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap' 

let items = [];

// const newItem = (() => {
//     const container = document.getElementById("accordionExample");
//     console.log(container);
// });

const submitNewItem = (() => {
    const submitItem = document.getElementById("submitItem");

    submitItem.addEventListener("click", (event) => {
        event.preventDefault();

        // New item function
    });


})();

class Item {
    constructor(title, notes, priority, deadline) {
        this.title = title;
        this.notes = notes;
        this.priority = priority;
        this.deadline = deadline;
    }

    // Not loading function!
    addItem = () => {
        // items.push(this);
        console.log(this);
    }

    // pushItem = () => {
    //     // See odin-library (classes)
    //     for(let i = 0; i < )
    // }
}

const myItem = new Item("Clean Kitchen", "Clean the kitchen, bro", "High", "22/07/2023");
// items.push(myItem);

console.log(myItem);
console.log(items);



// const highPrio = document.getElementById("btnradio2");
// console.log(highPrio);

// // We can check whether a priority is checked like so
// if(highPrio.checked) {
//     console.log("Hey");
// } else {
//     console.log("Not hey");
// }