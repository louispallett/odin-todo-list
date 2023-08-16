import { HighItem, MediumItem, LowItem } from "./classes";
export { addToStorage, removeFromStorage, addTitle }

let titles = [];

const addTitle = ((title) => {
    titles.push(title);
    console.log(titles);
    localStorage.setItem("titles", JSON.stringify(titles));
});

const addToStorage = ((title, item) => {
    localStorage.setItem(JSON.stringify(title), JSON.stringify(item));
});

// BUG: currently (when function below is active), items, if removed in decending order, are removed
// from storage fine, but if done in any other order, the getLocalStorage() will fail to load properly
// thus the wrong items will load (removing items not deleted but including those which have been). 
// The issue here is that 'itemCount' is being set at it's highest value - a possible fix is to 
// decrement 'i' in getLocalStorage().
const removeFromStorage = (() => {
    // localStorage.removeItem(itemCount);
});

const getLocalStorage =(() => {
    window.addEventListener("load", () => {
        const titles = JSON.parse(localStorage.getItem("titles"));
        console.log(titles);
        titles.forEach(title => {
            const oldTitle = JSON.parse(localStorage.getItem(JSON.stringify(title)));
            console.log(oldTitle.itemPriority);
            switch (oldTitle.itemPriority) {
                case "low":
                new LowItem(oldTitle.title, oldTitle.description, oldTitle.deadline, oldTitle.itemPriority);
                break;
                case "medium":
                new MediumItem(oldTitle.title, oldTitle.description, oldTitle.deadline, oldTitle.itemPriority);
                break;
                case "high":
                new HighItem(oldTitle.title, oldTitle.description, oldTitle.deadline, oldTitle.itemPriority);
                break;
            }       

        });
    })
})();