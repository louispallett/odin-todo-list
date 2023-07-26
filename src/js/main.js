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

// const highPrio = document.getElementById("btnradio2");
// console.log(highPrio);

// // We can check whether a priority is checked like so
// if(highPrio.checked) {
//     console.log("Hey");
// } else {
//     console.log("Not hey");
// }