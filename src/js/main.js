// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap' 

let items = [];

// const newItem = (() => {

//     const addNewItem = () => {
//         const newTitle = document.getElementById("newTitle").value;
//         const newDescription = document.getElementById("newDescription").value;
//         const newPriority = document.getElementById("priority").value;
//         const newDeadline = document.getElementById("deadline").value;

//         const newItem = new Item(newTitle, newDescription, newPriority, newDeadline);
//     }

//     console.log(newItem);

//     return {addNewItem}
// })();




class Item {
    constructor(title, description, priority, deadline) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.deadline = deadline;

        this.addItem();
        this.pushItem(title, deadline)
    }

    addItem = () => {
        items.push(this);
        console.log(items);
    }

    pushItem = (title, deadline) => {
    
        const accordionContainer = document.getElementById("accordionExample");
        const accordionItem = document.createElement("div");
        accordionItem.classList.add("accordion-item");
        const accordionHeader = document.createElement("h2");
        accordionHeader.classList.add("accordion-header");
        const accordionButton = document.createElement("div");
        accordionButton.classList.add("accordion-button", "collapsed");
        const buttonWrapper = document.createElement("div");
        buttonWrapper.classList.add("button-wrapper");
        const titleElement = document.createElement("div");
        titleElement.classList.add("title");
        titleElement.textContent = `${title}`;
        const dueDate = document.createElement("div");
        dueDate.setAttribute("id", "date");
        dueDate.textContent = `${deadline}`;
        buttonWrapper.appendChild(titleElement);
        buttonWrapper.appendChild(dueDate);
        accordionButton.appendChild(buttonWrapper);
        accordionHeader.appendChild(accordionButton);
        accordionItem.appendChild(accordionHeader);
        accordionContainer.appendChild(accordionItem);

    }



    // addItem(title, description, priority, deadline);


    // pushItem = () => {
    //     // See odin-library (classes)
    //     for(let i = 0; i < )
    // }
}

const myItem = new Item("Clean Kitchen", "Clean the kitchen, bro", "High", "22/07/2023");
// console.log(myItem);
const myItem2 = new Item("Bills", "Pay the water, gas, and electricity bill", "High", "11/05/2023");




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
    //         newItem.addNewItem();
    //     });


    // })();