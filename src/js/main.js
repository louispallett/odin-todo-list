// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap' 

import {HighItem, MediumItem, LowItem} from "./classes";

// const myHighItem = new HighItem("High Item", "Clean the kitchen, bro", "22/07/2023", "high");
// const myMediumItem = new MediumItem("Medium Item", "Clean the kitchen, bro", "22/07/2023", "medium");
// const myLowItem = new LowItem("Low Item", "Clean the kitchen, bro", "22/07/2023", "low");

const submitNewItem = (() => {
    const submitItem = document.getElementById("submitItem");

    submitItem.addEventListener("click", (event) => {
        event.preventDefault();

        const titleValue = document.getElementById("newTitle").value;
        const descriptionValue = document.getElementById("newDescription").value;
        const priorityValue = document.getElementById("priority").value;
        const deadlineValue = document.getElementById("deadline").value;


        switch (priorityValue) {
            case "low":
            new LowItem(titleValue, descriptionValue, deadlineValue, priorityValue);
            break;
            case "medium":
            new MediumItem(titleValue, descriptionValue, deadlineValue, priorityValue);
            break;
            case "high":
            new HighItem(titleValue, descriptionValue, deadlineValue, priorityValue);
            break;
        }
    });
})();

    // RADIO BUTTON TITLE ISSUE
    // Because the radio buttons are based on this.Title, it is possible for a bug to occur if the user sets
    // two or more items with the same title, as the for, name, and id of these two seperate items would be 
    // the same. A possible fix is that when each instance of a class is created, a unique number is created
    // (a random, say 6 digit number), and that is used instead of this.title. The chances of two being the 
    // same are therefore much less likely (and not caused by the user).