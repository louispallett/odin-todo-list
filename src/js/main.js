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
    constructor(title, description, deadline) {
        this.title = title;
        this.description = description;
        this.deadline = deadline;

        this.addItem();
        this.pushItem(title, description, deadline)
    }

    addItem = () => {
        items.push(this);
        console.log(items);
    }

    pushItem = (title, description, deadline) => {      
            const accordionContainer = document.getElementById("accordionExample");

        // New Accordion Item (whole wrapper)
            const accordionItem = document.createElement("div");
            accordionItem.classList.add("accordion-item");

        // Accordion Header
            const accordionHeader = document.createElement("h2");
            accordionHeader.classList.add("accordion-header");
            const accordionButton = document.createElement("button");
            accordionButton.classList.add("accordion-button", "collapsed");
            accordionButton.type = "button";
            accordionButton.setAttribute("data-bs-toggle", "collapse");
            accordionButton.setAttribute("data-bs-target", `#collapse${items.length}`);
            accordionButton.setAttribute("aria-expanded", "true");
            accordionButton.setAttribute("aria-controls", `collapse${items.length}`);            
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
        
        // Accordion Body
            // Body Description
            const collapseElement = document.createElement("div");
            collapseElement.classList.add("accordion-collapse", "collapse");
            collapseElement.setAttribute("id", `collapse${items.length}`);
            const bodyTitleWrapper = document.createElement("div");
            bodyTitleWrapper.classList.add("title-wrapper");
            const descriptionElement = document.createElement("div");
            descriptionElement.classList.add("accordion-body");
            descriptionElement.setAttribute("id", "description");
            descriptionElement.textContent = `${description}`;
            bodyTitleWrapper.appendChild(descriptionElement);
            collapseElement.appendChild(bodyTitleWrapper);
            
            // Body Priority
            const priorityElement = document.createElement("div");
            priorityElement.setAttribute("id", "priorities");
            const priorityTitle = document.createElement("div");
            priorityTitle.textContent = "Priority:"
            priorityElement.appendChild(priorityTitle);
            const priorityBtnGrp = document.createElement("div");
            priorityBtnGrp.classList.add("btn-group");
            priorityBtnGrp.setAttribute("role", "group");
            priorityBtnGrp.setAttribute("aria-label", "Basic radio toggle button group");
            priorityBtnGrp.setAttribute("id", "priorities-group");

            const radioInput1 = document.createElement("input");

            radioInput1.setAttribute("type", "radio");
            radioInput1.setAttribute("class", "btn-check");
            radioInput1.setAttribute("name", "btnradio");
            radioInput1.setAttribute("id", `btnradio1`);
            radioInput1.setAttribute("autocomplete", "off");
            const label1 = document.createElement("label");
            label1.setAttribute("class", "btn btn-outline-success");
            label1.setAttribute("for", `btnradio1`);
            label1.textContent = "Low";

            const radioInput2 = document.createElement("input");
            radioInput2.setAttribute("type", "radio");
            radioInput2.setAttribute("class", "btn-check");
            radioInput2.setAttribute("name", "btnradio");
            radioInput2.setAttribute("id", `btnradio2`);
            radioInput2.setAttribute("autocomplete", "off");
            const label2 = document.createElement("label");
            label2.setAttribute("class", "btn btn-outline-warning");
            label2.setAttribute("for", `btnradio2`);
            label2.textContent = "Medium";

            const radioInput3 = document.createElement("input");
            radioInput3.setAttribute("type", "radio");
            radioInput3.setAttribute("class", "btn-check");
            radioInput3.setAttribute("name", "btnradio");
            radioInput3.setAttribute("id", `btnradio3`);
            radioInput3.setAttribute("autocomplete", "off");
            const label3 = document.createElement("label");
            label3.setAttribute("class", "btn btn-outline-danger");
            label3.setAttribute("for", `btnradio3`);
            label3.textContent = "High";

            priorityBtnGrp.appendChild(radioInput1);
            priorityBtnGrp.appendChild(label1);
            priorityBtnGrp.appendChild(radioInput2);
            priorityBtnGrp.appendChild(label2);
            priorityBtnGrp.appendChild(radioInput3);
            priorityBtnGrp.appendChild(label3);

            priorityElement.appendChild(priorityBtnGrp);
            collapseElement.appendChild(priorityElement);
            
            accordionItem.appendChild(collapseElement);
        accordionContainer.appendChild(accordionItem);
    }
}

// Using Extended classes
    // May be an idea to do an extension for classes with certain priorities - such as 
    // 'class HighItem extends Item', which, if the priorityValue == 'high' will have 
    // radio3 checked?

class HighItem extends Item {
    constructor(title, description, deadline, itemPriority) {
        super(title, description, deadline, itemPriority);
        this.itemPriority = itemPriority;

        this.writePriority();
    }

    writePriority = () => {
        console.log(this.itemPriority);
    }
}

class MediumItem extends Item {
    constructor(title, description, deadline, itemPriority) {
        super(title, description, deadline, itemPriority);
        this.itemPriority = itemPriority;

        this.writePriority();
    }

    writePriority = () => {
        console.log(this.itemPriority);
    }
}

class LowItem extends Item {
    constructor(title, description, deadline, itemPriority) {
        super(title, description, deadline, itemPriority);
        this.itemPriority = itemPriority;

        this.writePriority();
    }

    writePriority = () => {
        console.log(this.itemPriority);
    }
}

// const myHighItem = new HighItem("High Item", "Clean the kitchen, bro", "22/07/2023", "high");
// const myMediumItem = new MediumItem("Medium Item", "Clean the kitchen, bro", "22/07/2023", "medium");
// const myLowItem = new LowItem("Low Item", "Clean the kitchen, bro", "22/07/2023", "low");

// SUBMIT BUTTON
    const submitNewItem = (() => {
        const submitItem = document.getElementById("submitItem");

        submitItem.addEventListener("click", (event) => {
            event.preventDefault();

            const titleValue = document.getElementById("newTitle").value;
            const descriptionValue = document.getElementById("newDescription").value;
            const priorityValue = document.getElementById("priority").value;
            const deadlineValue = document.getElementById("deadline").value;
            
            const newUserItem = new Item(titleValue, descriptionValue, deadlineValue, priorityValue);
        });
    })();



// Radio Button Issue
    // Because the radio buttons are all given the same 'for' and 'id' when each class is 
    // created, you can only select one - could fix this through items.length? Like with 
    // collapse${items.length}?