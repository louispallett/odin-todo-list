export {Item, HighItem, MediumItem, LowItem};

let items = [];

class Item {
    constructor(title, description, deadline) {
        this.title = title;
        this.description = description;
        this.deadline = deadline;

        this.addItem();
        this.pushItem(title, description, deadline);
    }

    addItem = () => {
        items.push(this);
    }
}

Item.prototype.pushItem = function() {
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
    const descriptionElement = document.createElement("input");
    descriptionElement.classList.add("form-control");
    descriptionElement.setAttribute("type", "text");
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
    editIcon.setAttribute("id", "edit-icon");
    editIcon.addEventListener("click", () => {
        // // descriptionElement.removeAttribute("id", "description-locked");
        // descriptionElement.setAttribute("id", "description-unlocked");
        // descriptionElement.disabled = false;
        // // Doing it this way only works once...
        // editIcon.addEventListener("click", () => {
        //     descriptionElement.disabled = true;
        //     descriptionElement.setAttribute("id", "description-locked");
        // });
        editItem(editIcon, descriptionElement);
    });
    const deleteIcon = document.createElement("div");
    deleteIcon.setAttribute("id", "delete-icon");
    deleteIcon.addEventListener("click", () => {
        accordionItem.remove();
        const index = items.indexOf(this);
        items.splice(index, 1);        
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

        this.setPriority(itemPriority);
    }

    setPriority = () => {
        const priorityBtn = document.getElementById(this.title+1);
        priorityBtn.checked = true;
    }
}

function editItem(edit, description) {
    description.setAttribute("id", "description-unlocked");
    description.disabled = false;
    edit.addEventListener("click", () => {
        description.disabled = true;
        description.setAttribute("id", "description-locked");
    });
    edit.onclick = editItem();
}