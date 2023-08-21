export {setDarkTheme, setLightTheme};

const body = document.querySelector(".body");
const html = document.querySelector("html");

const themeDetector = (() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.setAttribute("data-bs-theme", "dark");
    }
})();



const setDarkTheme = (() => {
    // body.removeAttribute("id", "nightlife-set");
    html.setAttribute("data-bs-theme", "dark");
});

const setLightTheme = (() => {
    html.setAttribute("data-bs-theme", "light");
});