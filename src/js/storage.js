import { HighItem, MediumItem, LowItem } from "./classes";
export { addToStorage, addItemCount, removeFromStorage }

const addToStorage = ((item) => {
    localStorage.setItem(item.itemCount, JSON.stringify(item));
});

const addItemCount = ((itemCount) => {
    localStorage.setItem("itemCount", itemCount);
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