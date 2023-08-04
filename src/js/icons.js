const editItem = (() => {
    const editBtn = document.getElementById("edit-icon");

    editBtn.addEventListener("click", () => {
        // Code which allows user to edit:
        // Title, date, and notes can be textfields, so this will just
        // remove 'disabled' tag (editBtn.disabled = false) and possibly
        // change their SCSS (via an ID change?) for the duration of the
        // edit

        const description = document.getElementById("description");

        description.disabled = false;
    })
}); // Not sure whether we need to call immediately with () here...

const deleteItem = (() => {
    const deleteBtn = document.getElementById("delete-icon");

    // deleteBtn.addEventListener("click", () => { // 'this' may have to go in the ()
    //     // Code which allows the user to delete an item:
    //     // The easiest way is that this just removed the item from items[], 
    //     // but this will involve refractoring the code so that the submit 
    //     // button only adds it to the array, and then the array puts in on the
    //     // page - this is how we did Odin-Library, so have a look there!
    // })

    // const removeItem = (accordionNode) => {
    //     accordionNode.remove();
    // }
})