export {addToStorage}

const addToStorage = ((item) => {
    localStorage.setItem(item.title, JSON.stringify(item));
});