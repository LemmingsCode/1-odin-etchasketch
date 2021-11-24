// create a hover effect so that the grid div changes color when mouse passes over it
// change color by adding a class to the new div
// change the div's background color using javascript

const container = document.getElementById("container");
initiateGrid()

function makeRows (rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        // cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-class";
    };
};

function changeGridColor (e) {
    this.style.backgroundColor = "red";
}

function changeGridColorEventListener(array) {
    array.forEach(array => array.addEventListener('mouseover', changeGridColor)); 
}


function initiateGrid() {
    makeRows(16, 16);
    const gridItemsNodeList = container.children; // array like object (nodelist)
    const gridItemsArray = Array.prototype.slice.call(gridItemsNodeList); // convert nodelist to array so we can add event listeners to each item
    changeGridColorEventListener(gridItemsArray);
}


function resetGrid () {
    let userInput = window.prompt("Please enter the number of squares to create the grid")
    removeElementsByClass("grid-class");
    makeRows(userInput, userInput);
    
    const gridItemsNodeList = container.children; // array like object (nodelist)
    const gridItemsArray = Array.prototype.slice.call(gridItemsNodeList);
    changeGridColorEventListener(gridItemsArray);
    gridItemsArray.forEach(gridItemsArray => {
        gridItemsArray.style.backgroundColor = "blue";
    });
}

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}



