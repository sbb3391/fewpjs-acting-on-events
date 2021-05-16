// Your code here 
dodger.style.right = "180px"

function moveDodgerRight() {
  let rightNumbers = dodger.style.right.replace("px", "");
  let leftNumbers = dodger.style.left.replace("px", "");
  let right = parseInt(rightNumbers, 10);
  let left = parseInt(leftNumbers, 10);

  if (right > 0) {
    dodger.style.right = `${right - 1}px`;
    dodger.style.left = `${left + 1}px`;
  }
} 

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

function moveDodgerLeft() {
  let rightNumbers = dodger.style.right.replace("px", "");
  let leftNumbers = dodger.style.left.replace("px", "");
  let right = parseInt(rightNumbers, 10);
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
    dodger.style.right = `${right + 1}px`;
  }
} 

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
}); 