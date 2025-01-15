const slider = document.querySelector("#myRange");
const output = document.querySelector("#demo");
const clear = document.querySelector(".reset");
const container = document.querySelector(".container");
output.innerHTML = `${slider.value } X ${slider.value}`;


// slider.oninput = function() {
//     output.innerHTML = `${slider.value } X ${slider.value}`;
// }

slider.addEventListener("input", (e) => {
    output.innerHTML = `${slider.value } X ${slider.value}`;
    let gridDimension = slider.value;
    createGrid(gridDimension);
});

clear.addEventListener("click", (e) => {
    slider.value = 4;
    console.log(e);
    output.innerHTML = `${slider.value } X ${slider.value}`;
    createGrid (4);
});

function createGrid (gridDimension) {
    container.innerHTML = "";
    const width = 480/gridDimension;
    const height = 480/gridDimension;
    
    for (let i = 0; i < gridDimension; i++) { // Outer loop for rows
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
    
        for (let j = 0; j < gridDimension; j++) { // Inner loop for columns
            const colDiv = document.createElement("div");
            colDiv.classList.add("col");
            colDiv.style.width = `${width}px`;
            colDiv.style.height = `${height}px`;
            rowDiv.appendChild(colDiv);
        }

        container.appendChild(rowDiv);
    }



}

