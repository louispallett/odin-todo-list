import '../scss/styles.scss'
import * as bootstrap from 'bootstrap' 

import {HighItem, MediumItem, LowItem} from "./classes";
import {setDarkTheme, setNightlifeTheme} from "./themes";

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
            document.getElementById("deadline").value = "";
        }
    });
})();

const setThemes = (() => {
    const darkThemeBtn = document.getElementById("dark-mode");
    darkThemeBtn.addEventListener("click", () => {
        setDarkTheme();
    });

    const nightlifeThemeBtn = document.getElementById("nightlife-mode");
    nightlifeThemeBtn.addEventListener("click", () => {
        setNightlifeTheme();
    });
})();

    // RADIO BUTTON TITLE ISSUE
    // Because the radio buttons are based on this.Title, it is possible for a bug to occur if the user sets
    // two or more items with the same title, as the for, name, and id of these two seperate items would be 
    // the same. A possible fix is that when each instance of a class is created, a unique number is created
    // (a random, say 6 digit number), and that is used instead of this.title. The chances of two being the 
    // same are therefore much less likely (and not caused by the user).