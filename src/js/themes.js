export {setDarkTheme, setLightTheme};

const html = document.querySelector("html");

const themeDetector = (() => {
    // If user has already selected a theme, get it and apply it to conditional statement below
    const userTheme = localStorage.getItem("1zUserTheme");
    if(userTheme === "dark") {
        html.setAttribute("data-bs-theme", "dark");
    } else if (userTheme === "light") {
        html.setAttribute("data-bs-theme", "light");
    } else { //Or, in other words, set to "null" (as in no theme originally chosen)
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            html.setAttribute("data-bs-theme", "dark");
        } else {
            html.setAttribute("data-bs-theme", "light");
        }
    }
})();

const setDarkTheme = (() => {
    html.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("1zUserTheme", "dark");
});

const setLightTheme = (() => {
    html.setAttribute("data-bs-theme", "light");
    localStorage.setItem("1zUserTheme", "light");
});