export {addToStorage}

const addToStorage = ((title, description, priority, deadline) => {
    localStorage.setItem("title", title);
    localStorage.setItem("description", description);
    localStorage.setItem("priority", priority);
    localStorage.setItem("deadline", deadline);
});