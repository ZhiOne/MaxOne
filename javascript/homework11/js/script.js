

const displayBtns = document.querySelectorAll(".btn");
console.log(displayBtns);

function scanBtns() {
    document.addEventListener("keypress", (event) => {
        displayBtns.forEach(element => {
            element.style.backgroundColor = "#33333a";
            if(event.key === element.textContent || event.key === (element.textContent).toLowerCase()) {
                element.style.backgroundColor = "teal";
            }
        })
    });
}
scanBtns();