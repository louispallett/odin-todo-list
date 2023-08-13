import { HighItem, MediumItem, LowItem } from "./classes";
export { addToStorage, addItemCount }

const addToStorage = ((item) => {
    localStorage.setItem(item.itemCount, JSON.stringify(item));
});

const addItemCount = ((itemCount) => {
    localStorage.setItem("itemCount", itemCount);
});

const getLocalStorage =(() => {
    window.addEventListener("load", () => {
        for(let i = 1; i < localStorage.length; i++) {
            const newItem = JSON.parse(localStorage.getItem(i));

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
    });
})();