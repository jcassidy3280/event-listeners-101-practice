// You now have a 3x3 grid. We want to configure this grid such that when the left 3 cells are clicked, the colors turn red, when the middle 3 cells are clicked, the color turns green, and when the last 3 cells are clicked, the color turns blue. 

// Write some JS code below such that event listeners are attached to all the correct elements following the specifications above.

// Hint: Some sort of loop may be helpful to you in this process!
let mainGrid = document.getElementById("main-grid")
mainGrid.style.flexDirection="column"

let leftBlocks = document.getElementsByClassName("green")
let middleBlocks = document.getElementsByClassName("red")
let rightBlocks = document.getElementsByClassName("blue")

for (let blockL of leftBlocks) {
  blockL.addEventListener('click', function() {
    blockL.style.backgroundColor = "red"
  })
}
for (let blockM of middleBlocks) {
  blockM.addEventListener('click', function() {
    blockM.style.backgroundColor = "green"
  })
}
for (let blockR of rightBlocks) {
  blockR.addEventListener('click', function() {
    blockR.style.backgroundColor = "blue"
  })
}