import { addToStorage, removeFromStorage, addTitle } from "./storage";
export { HighItem, MediumItem, LowItem };

let items = [];

class Item {
    constructor(title, description, deadline) {
        this.title = title;
        this.description = description;
        this.deadline = deadline;

        this.addItem();
        this.pushItem(title, description, deadline);
        addTitle(this.title);
    }

    addItem = () => {
        items.push(this);
    }
}

Item.prototype.pushItem = function() {
    const accordionContainer = document.getElementById("accordion-wrapper");

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
    titleElement.textContent = `${this.title}`;
    const dueDate = document.createElement("div");
    dueDate.setAttribute("id", "date");
    dueDate.textContent = `Complete by: ${this.deadline}`;
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
    const descriptionWrapper = document.createElement("div");
    descriptionWrapper.classList.add("accordion-body");
    descriptionWrapper.setAttribute("id", "description-wrapper")
    const descriptionElement = document.createElement("textarea");
    descriptionElement.classList.add("form-control");
    descriptionElement.setAttribute("rows", "2");
    descriptionElement.disabled = true;
    descriptionElement.setAttribute("id", "description-locked");
    descriptionElement.value = `${this.description}`;
    descriptionWrapper.appendChild(descriptionElement);
    collapseElement.appendChild(descriptionWrapper);

    // Body Priority
    const priorityElement = document.createElement("div");
    priorityElement.setAttribute("id", "priorities");

    // User buttons
    const iconWrapper = document.createElement("div");
    iconWrapper.setAttribute("id", "icon-wrapper");
    const editIcon = document.createElement("div");
    editIcon.innerHTML = 
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
        </svg>`
    editIcon.setAttribute("id", "edit-icon");
    editIcon.addEventListener("click", () => {
        if (descriptionElement.disabled) {
            // Enable editing
            descriptionElement.disabled = false;
            descriptionElement.setAttribute("id", "description-unlocked");  
            editIcon.innerHTML = 
            `<svg id="editGreen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
            </svg>` 
        } else {
            // Save changes and disable editing
            descriptionElement.disabled = true;
            descriptionElement.setAttribute("id", "description-locked");
            this.description = descriptionElement.value;
            this.addItemToStorage();
            editIcon.innerHTML = 
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
            </svg>`
        }
    });

    const deleteIcon = document.createElement("div");
    deleteIcon.innerHTML = 
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
        </svg>`;
    deleteIcon.addEventListener("click", () => {
        // Removes actual element
        accordionItem.remove();
        const index = items.indexOf(this);
        items.splice(index, 1); 

        // Removes from storage
        removeFromStorage(this.title);
    });
    iconWrapper.appendChild(editIcon);
    iconWrapper.appendChild(deleteIcon);
    priorityElement.appendChild(iconWrapper);

    // Priority
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

class HighItem extends Item {
    constructor(title, description, deadline, itemPriority) {
        super(title, description, deadline);
        this.itemPriority = itemPriority;

        this.setPriority(itemPriority);
        this.addItemToStorage();
    }

    setPriority = () => {
        const priorityBtn = document.getElementById(this.title+3);
        priorityBtn.checked = true;
    }

    addItemToStorage = () => {
        addToStorage(this.title, this);
    }
}

class MediumItem extends Item {
    constructor(title, description, deadline, itemPriority) {
        super(title, description, deadline);
        this.itemPriority = itemPriority;

        this.setPriority(itemPriority);
        this.addItemToStorage();
    }

    setPriority = () => {
        const priorityBtn = document.getElementById(this.title+2);
        priorityBtn.checked = true;
    }

    addItemToStorage = () => {
        addToStorage(this.title, this);
    }
}

class LowItem extends Item {
    constructor(title, description, deadline, itemPriority) {
        super(title, description, deadline);
        this.itemPriority = itemPriority;

        this.setPriority(itemPriority);
        this.addItemToStorage();
    }

    setPriority = () => {
        const priorityBtn = document.getElementById(this.title+1);
        priorityBtn.checked = true;
    }

    addItemToStorage = () => {
        addToStorage(this.title, this);
    }
}