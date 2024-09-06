const container = document.querySelector("#container");

let numberOfSquares = [16, 16];
let squareSize = 16;
let borderStyle = "1px solid black";

createGrid(numberOfSquares, squareSize, borderStyle)


const button = document.querySelector("#squaresButton");
button.style.marginBottom = "8px";

button.addEventListener("click", () => {
    let squarePrompt = prompt("Please enter number of squares:");
    if (squarePrompt > 100) {
        numberOfSquares = [100, 100]
    } else {numberOfSquares = [squarePrompt, squarePrompt]}
    createGrid(numberOfSquares, squareSize, borderStyle)
});

function createGrid(numberOfSquares, squareSize, borderStyle) {
    // clear any existing board
    container.innerHTML = "";
    
    // create new board
    for (numberOfSquares[0]; numberOfSquares[0] > 0; numberOfSquares[0]--) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.setAttribute("style",
            "display: flex");
        container.appendChild(row);
        for (let columns = numberOfSquares[1]; columns > 0; columns--) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.setAttribute("style", 
                `width: ${squareSize}px; 
                height: ${squareSize}px;
                border-left: ${borderStyle};
                border-top: ${borderStyle}`)
            row.appendChild(square);
        }
    }
    let lastColumnSquares = document.querySelectorAll(".square:last-child");

    lastColumnSquares.forEach((square) => {
        square.style.borderRight = `${borderStyle}`;
    });

    let lastRowSquares = document.querySelector(".row:last-child").children;
    lastRowSquares = Array.from(lastRowSquares);

    lastRowSquares.forEach((square) => {
        square.style.borderBottom = `${borderStyle}`;
    });

    // mouseover coloring for board
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            let rgbRandom = [
                getRandomIntInclusive(0, 255),
                getRandomIntInclusive(0, 255),
                getRandomIntInclusive(0, 255),
            ];
            square.style.backgroundColor = `rgb(
                ${rgbRandom[0]},
                ${rgbRandom[1]},
                ${rgbRandom[2]})`;
        });
    });
}

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
  