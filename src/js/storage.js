import { HighItem, MediumItem, LowItem, titles } from "./classes";
export { addToStorage, addItemCount, removeFromStorage }

const addToStorage = ((title, item) => {
    localStorage.setItem(JSON.stringify(title), JSON.stringify(item));
});

// This can be removed as it's being replaced with addTitle()
const addItemCount = ((itemCount) => {
    localStorage.setItem("itemCount", itemCount);
});

const addTitle = (() => {
    titles.forEach(title => {
        localStorage.setItem(title)
    });
});

// BUG: currently (when function below is active), items, if removed in decending order, are removed
// from storage fine, but if done in any other order, the getLocalStorage() will fail to load properly
// thus the wrong items will load (removing items not deleted but including those which have been). 
// The issue here is that 'itemCount' is being set at it's highest value - a possible fix is to 
// decrement 'i' in getLocalStorage().
const removeFromStorage = ((itemCount) => {
    localStorage.removeItem(itemCount);
});

const getLocalStorage =(() => {
    window.addEventListener("load", () => {
        for(let i = 1; i < localStorage.length; i++) {
            const newItem = JSON.parse(localStorage.getItem(i));

            if(newItem === null) {
                i++;
            } else {
                switch (newItem.itemPriority) {
                    case "low":
                    new LowItem(newItem.title, newItem.description, newItem.deadline, newItem.itemPriority, newItem.itemCount);
                    break;
                    case "medium":
                    new MediumItem(newItem.title, newItem.description, newItem.deadline, newItem.itemPriority, newItem.itemCount);
                    break;
                    case "high":
                    new HighItem(newItem.title, newItem.description, newItem.deadline, newItem.itemPriority, newItem.itemCount);
                    break;
                }
            }

        }
    });
})();

/* On storage branch -
We've added it to the storage via it's title - this is coming through and the title is being named as a string.
This is through the function addToStorage().

However, we now need to add each title to an array - this can be done via the addTitle() function.

We can remove addItemCount(), as it will be made redundant.

Then, in getLocalStorage(), instead of looping through i, we need to loop through each title in the titles[] array,
which can be done via the forEach loop.

Hopefully, this should render through the titles in the storage... it may be ideal to just add titles to the titles[] 
array in this file (maybe in addToStorage()?), just because then we aren't exporting the array here - makes everything
a little cleaner.*/