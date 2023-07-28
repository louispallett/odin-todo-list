// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap' 

let items = [];

const newItem = (() => {

    const addNewItem = () => {
        const newTitle = document.getElementById("newTitle").textContent;
        const newDescription = document.getElementById("newDescription").textContent;
        const newPriority = document.getElementById("priority").textContent;
        const newDeadline = document.getElementById("deadline").value;

        const newItem = new Item(newTitle, newDescription, newPriority, newDeadline);
    }

    return {newItem}
});



class Item {
    constructor(title, notes, priority, deadline) {
        this.title = title;
        this.notes = notes;
        this.priority = priority;
        this.deadline = deadline;

        this.addItem();
    }

    addItem = () => {
        items.push(this);
        console.log(items);
    }

    // pushItem = () => {
    //     // See odin-library (classes)
    //     for(let i = 0; i < )
    // }
}

const myItem = new Item("Clean Kitchen", "Clean the kitchen, bro", "High", "22/07/2023");
// console.log(myItem);



// CHECK VALUE OF PRIORITY
    // const highPrio = document.getElementById("btnradio2");
    // console.log(highPrio);

    // // We can check whether a priority is checked like so
    // if(highPrio.checked) {
    //     console.log("Hey");
    // } else {
    //     console.log("Not hey");
    // }


// SUBMIT BUTTON
    // const submitNewItem = (() => {
    //     const submitItem = document.getElementById("submitItem");

    //     submitItem.addEventListener("click", (event) => {
    //         event.preventDefault();

    //         // Class function
    //         newItem();
    //     });


    // })();