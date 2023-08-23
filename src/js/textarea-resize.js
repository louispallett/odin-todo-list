export { formTextareaResize }

const formTextareaResize = (() => {
    const txHeight = 16;
    const tx = document.getElementsByTagName("textarea");
    
    for (let i = 0; i < tx.length; i++) {
        if (tx[i].value == '') {
        tx[i].setAttribute("style", "height:" + txHeight + "px;overflow-y:hidden;");
        } else {
        tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
        }
        tx[i].addEventListener("input", OnInput, false);
    }
    
    function OnInput(e) {
        this.style.height = 0;
        this.style.height = (this.scrollHeight) + "px";
    }
})();