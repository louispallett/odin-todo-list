import '../scss/styles.scss'
import * as bootstrap from 'bootstrap' 

import { HighItem, MediumItem, LowItem } from "./classes";
import { setDarkTheme, setLightTheme } from "./themes";

const submitNewItem = (() => {
    const submitBtn = document.getElementById("submitItem");

    submitBtn.addEventListener("click", (event) => {
        event.preventDefault();

        const titleValue = document.getElementById("newTitle").value;
        const descriptionValue = document.getElementById("newDescription").value;
        const priorityValue = document.getElementById("priority").value;
        const deadlineValue = document.getElementById("deadline").value;

        if(titleValue == "" || deadlineValue == "") {
            alert("Title and Deadline required");
        } else {
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

            document.getElementById("newTitle").value = "";
            document.getElementById("newDescription").value = "";
            document.getElementById("priority").value = "low";
            document.getElementById("deadline").value = "";;
        }
    });
})();

const setThemes = (() => {
    const darkThemeBtn = document.getElementById("dark-mode");
    darkThemeBtn.addEventListener("click", () => {
        setDarkTheme();
    });

    const lightThemeBtn = document.getElementById("light-mode");
    lightThemeBtn.addEventListener("click", () => {
        setLightTheme();
    });
})();

const clearAll = (() => {
    const clearAllBtn = document.getElementById("clear-all-btn");
    const clearAllDialogue = document.getElementById("clear-all-form");

    clearAllBtn.addEventListener("click", () => {
        clearAllDialogue.showModal();
    });

    const confirmClearAll = document.getElementById("confirm-clear-all");
    confirmClearAll.addEventListener("click", (event) => {
        event.preventDefault();
    })
})();