export {addToStorage, getLocalStorage}

const addToStorage = ((item) => {
    localStorage.setItem(item.title, JSON.stringify(item));
});

const getLocalStorage =((item) => {
    window.addEventListener("load", () => {
        
    });
})();