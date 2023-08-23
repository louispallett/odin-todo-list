export {setDarkTheme, setLightTheme};

const html = document.querySelector("html");

const themeDetector = (() => {
    // If user has already selected a theme, get it and apply it to conditional statement below
    const userTheme = localStorage.getItem("theme");
    if(userTheme === "user theme dark") {
        html.setAttribute("data-bs-theme", "dark");
    } else if (userTheme === "user theme light") {
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
    localStorage.setItem("theme", "user theme dark");
});

const setLightTheme = (() => {
    html.setAttribute("data-bs-theme", "light");
    localStorage.setItem("theme", "user theme light");
});