import { HighItem, MediumItem, LowItem } from "./classes";
export { addToStorage, removeFromStorage, addTitle }

let titles = [];

const addTitle = ((title) => {
    titles.push(title);
    localStorage.setItem("titles", JSON.stringify(titles));
});

const addToStorage = ((title, item) => {
    localStorage.setItem(JSON.stringify(title), JSON.stringify(item));
});

const removeFromStorage = ((title) => {
    // Remove from titles ARRAY
    const titleItem = titles.indexOf(title);
    titles.splice(titleItem, 1);
    localStorage.setItem("titles", JSON.stringify(titles));

    localStorage.removeItem(JSON.stringify(title));
});

const getLocalStorage =(() => {
    window.addEventListener("load", () => {
        const titles = JSON.parse(localStorage.getItem("titles"));
        titles.forEach(title => {
            const oldTitle = JSON.parse(localStorage.getItem(JSON.stringify(title)));
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