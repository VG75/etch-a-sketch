const slider = document.querySelector("#myRange");
const output = document.querySelector("#demo");

output.innerHTML = `${slider.value } X ${slider.value}`;


// slider.oninput = function() {
//     output.innerHTML = `${slider.value } X ${slider.value}`;
// }

slider.addEventListener("input", (e) => {
    output.innerHTML = `${slider.value } X ${slider.value}`;
});


