// create a hover effect so that the grid div changes color when mouse passes over it
// change color by adding a class to the new div
// change the div's background color using javascript

const container = document.getElementById("container");

function makeRows (rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        // cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-class";
    };
};

makeRows(16, 16);
const gridItemsNodeList = container.children; // array like object (nodelist)
const gridItemsArray = Array.prototype.slice.call(gridItemsNodeList); // convert nodelist to array so we can add event listeners to each item

gridItemsArray.forEach(gridItemsArray => gridItemsArray.addEventListener('mouseover', changeGridColor)); //this only works with arrays

function changeGridColor (e) {
    console.log(e.target);
    // gridItemsNodeList.className = "new-grid-color"; How do I make the event listener change the corresponding node color? Can I try if this. operator works?
    this.style.backgroundColor = "red"; // this binds to the event in this instance, returning all values. this.style looks for the style property within the event. Second question is, is it appropriate to use "this" in this situation or should I find another way to change the background colour?

}

function resetGrid () {
    let userInput = window.prompt("Please enter the number of squares to create the grid")
    removeElementsByClass("grid-class");
    makeRows(userInput, userInput);
    var gridItemsNodeList = container.children; // array like object (nodelist)
    var gridItemsArray = Array.prototype.slice.call(gridItemsNodeList);
    gridItemsArray.forEach(gridItemsArray => gridItemsArray.addEventListener('mouseover', changeGridColor));
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



