// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap' 


// const newItem = (() => {
//     const container = document.getElementById("accordionExample");
//     console.log(container);
// });

const submitNewItem = (() => {
    const submitItem = document.getElementById("submitItem");

    submitItem.addEventListener("click", (event) => {
        event.preventDefault();
    });
})();