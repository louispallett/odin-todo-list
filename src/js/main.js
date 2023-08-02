// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap' 

let items = [];

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
            dueDate.textContent = `Complete by: ${deadline}`;
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
            radioInput1.setAttribute("name", `${this.title}`);
            radioInput1.setAttribute("id", `${this.title+1}`);
            radioInput1.setAttribute("autocomplete", "off");
            const label1 = document.createElement("label");
            label1.setAttribute("class", "btn btn-outline-success");
            label1.setAttribute("for", `${this.title+1}`);
            label1.textContent = "Low";

            const radioInput2 = document.createElement("input");
            radioInput2.setAttribute("type", "radio");
            radioInput2.setAttribute("class", "btn-check");
            radioInput2.setAttribute("name", `${this.title}`);
            radioInput2.setAttribute("id", `${this.title+2}`);
            radioInput2.setAttribute("autocomplete", "off");
            const label2 = document.createElement("label");
            label2.setAttribute("class", "btn btn-outline-warning");
            label2.setAttribute("for", `${this.title+2}`);
            label2.textContent = "Medium";

            const radioInput3 = document.createElement("input");
            radioInput3.setAttribute("type", "radio");
            radioInput3.setAttribute("class", "btn-check");
            radioInput3.setAttribute("name", `${this.title}`);
            radioInput3.setAttribute("id", `${this.title+3}`);
            radioInput3.setAttribute("autocomplete", "off");
            const label3 = document.createElement("label");
            label3.setAttribute("class", "btn btn-outline-danger");
            label3.setAttribute("for", `${this.title+3}`);
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
        super(title, description, deadline);
        this.itemPriority = itemPriority;

        this.writePriority();
        this.setPriority(itemPriority);
    }

    setPriority = () => {
        const priorityBtn = document.getElementById(this.title+3);
        priorityBtn.checked = true;
    }
}

class MediumItem extends Item {
    constructor(title, description, deadline, itemPriority) {
        super(title, description, deadline);
        this.itemPriority = itemPriority;

        this.writePriority();
        this.setPriority(itemPriority);
    }

    setPriority = () => {
        const priorityBtn = document.getElementById(this.title+2);
        priorityBtn.checked = true;
    }
}

class LowItem extends Item {
    constructor(title, description, deadline, itemPriority) {
        super(title, description, deadline);
        this.itemPriority = itemPriority;

        this.writePriority();
        this.setPriority(itemPriority);
    }

    setPriority = () => {
        const priorityBtn = document.getElementById(this.title+1);
        priorityBtn.checked = true;
    }
}

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

        if(priorityValue == "low") {
            const newUserItem = new LowItem(titleValue, descriptionValue, deadlineValue, priorityValue);
        } else if(priorityValue == "medium") {
            const newUserItem = new MediumItem(titleValue, descriptionValue, deadlineValue, priorityValue);
        } else if (priorityValue == "high"){
            const newUserItem = new HighItem(titleValue, descriptionValue, deadlineValue, priorityValue);
        }
    });
})();

    // RADIO BUTTON TITLE ISSUE
    // Because the radio buttons are based on this.Title, it is possible for a bug to occur if the user sets
    // two or more items with the same title, as the for, name, and id of these two seperate items would be 
    // the same. A possible fix is that when each instance of a class is created, a unique number is created
    // (a random, say 6 digit number), and that is used instead of this.title. The chances of two being the 
    // same are therefore much less likely (and not caused by the user).