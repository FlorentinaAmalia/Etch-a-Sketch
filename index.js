// input size
let sizeElement = document.getElementById("sketch-size");
// default size
let size = 1;

let color = document.getElementById("sketch-color");

let sketchContainer = document.getElementById("sketch-container");

let sketchChild = document.querySelectorAll("#sketch-container div");
sketchChild.forEach(elem => {
    elem.addEventListener("mouseover", () => {
        elem.style.backgroundColor = color.value;
    })
})

// change the dimension of sketch
sizeElement.addEventListener("keyup", () => {

    // deletes the content of sketch container
    sketchContainer.innerHTML = "";

    if (sizeElement.value > -1 && sizeElement.value <= 100) {
        size = sizeElement.value;

        // change the grid template for costum size
        sketchContainer.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
        sketchContainer.style.gridTemplateRows = "repeat(" + size + ", 1fr)";
    
        for (let i = 0; i < size**2; i++) {
            const newDiv = document.createElement("div");
            sketchContainer.appendChild(newDiv);
            newDiv.addEventListener("mouseover", () => {
                newDiv.style.backgroundColor = color.value;
            });
        }
    }
    else {
        alert("Choose a number between 1 and 100!");
    }
})
