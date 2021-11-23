// create a hover effect so that the grid div changes color when mouse passes over it
// change color by adding a class to the new div
// change the div's background color using javascript

const container = document.getElementById("container");

function makeRows (rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-class";
        cell.backgroundColor = "blue";
    };
};

makeRows(16, 16);
const gridItemsNodeList = container.children; // array like object (nodelist)
const gridItemsArray = Array.prototype.slice.call(gridItemsNodeList);
console.log(gridItemsArray);

gridItemsArray.forEach(gridItemsArray => gridItemsArray.addEventListener('mouseover', changeGridColor)); //this only works with arrays

function changeGridColor (e) {
    console.log(e.target);
    gridItemsNodeList.append.className = "new-grid-color";
    // add a new class to this class to change background color
}


// function changeGridColor (e) {
//     var attribute = this.getAttribute("data-myattribute");
//     console.log('event type: '+ attribute);
// }

// for (let i = 0; i < gridItem.length; i++) {
//     gridItem[i].addEventListener('mouseenter', changeGridColor, false);
// }

