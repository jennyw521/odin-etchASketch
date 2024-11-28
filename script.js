const container = document.querySelector(".container");
const clearBtn = document.querySelector(".clear");
const blackBtn = document.querySelector(".black");
const colorBtn = document.querySelector(".color");
const resetBtn = document.querySelector(".reset");
const ORIGINAL_BACKGROUNDCOLOR = "#B3907A";
const FULL_OPACITY = 1;
let numberOfSquares = 16;
let penColor = "black";

function changeGrid(numberOfSquares) {
    const total = numberOfSquares ** 2;
    const height = container.clientHeight / numberOfSquares + "px";
    const width = container.clientWidth / numberOfSquares + "px";
    for (let i = 0; i < total; i++) {
        const div = document.createElement("div");
        div.style.height = height;
        div.style.width = width;
        div.classList.add("square");
        container.appendChild(div);
    }
}

changeGrid(numberOfSquares);

function changeColor(e) {
    const backgroundColor = e.target.style.backgroundColor;
    const opacity = e.target.style.opacity;
    
    if (penColor == "black") {
        e.target.style.backgroundColor = penColor;
    } else if (penColor == "color") {
        const r = Math.floor(Math.random() * 255) + 1;
        const g = Math.floor(Math.random() * 255) + 1;
        const b = Math.floor(Math.random() * 255) + 1;
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
    
    if (backgroundColor == ORIGINAL_BACKGROUNDCOLOR && opacity == FULL_OPACITY) {
        e.target.style.opacity = 0.1;
    } else {
        e.target.style.opacity = Number(opacity) + 0.1;
    }
}

function clear(){
    container.childNodes.forEach(square => {
        square.style.backgroundColor = ORIGINAL_BACKGROUNDCOLOR;
        square.style.opacity = FULL_OPACITY;
    });
}

container.addEventListener("mouseover", changeColor);

clearBtn.addEventListener("click", clear);

blackBtn.addEventListener("click", () => penColor = "black");

colorBtn.addEventListener("click", () => penColor = "color");

resetBtn.addEventListener("click", () => {
    numberOfSquares = prompt("Please enter a number within 1 to 100: ");
    if (numberOfSquares <= 0 || numberOfSquares > 100 || isNaN(numberOfSquares)) {
        alert("Please enter a valid number.");
    } else {
        while (container.firstElementChild) {
            container.removeChild(container.lastElementChild);
        }
        changeGrid(numberOfSquares);
    }
});