export {setDarkTheme, setNightlifeTheme};

const body = document.querySelector(".body");

const setDarkTheme = (() => {
    body.removeAttribute("id", "nightlife-set");
});

const setNightlifeTheme = (() => {
    body.setAttribute("id", "nightlife-set");
});