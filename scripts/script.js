const container = document.querySelector(".container");
let color = "red"; //default color
let isDarken = false;
let gridSize = 16; //default grid size

function createGrid(gridSize) {
  container.replaceChildren();
  for (let i = 0; i < gridSize; i++) {
    const column = document.createElement("div");
    column.className = "columns";
    for (let j = 0; j < gridSize; j++) {
      const row = document.createElement("div");
      row.className = "row";
      row.addEventListener("mouseover", () => {
        row.style.backgroundColor = color ? color : `rgb(${getSquareColor()})`;
        if (isDarken) {
          let currOpacity = +row.style.opacity;
          currOpacity = currOpacity === 1 ? 1 : currOpacity + 0.1;
          row.style.opacity = currOpacity;
        }
      });
      column.appendChild(row);
    }
    container.appendChild(column);
  }
}

function randomColor() {
  return Math.round((Math.random() * 10 * 255) / 10);
}

function getSquareColor() {
  const red = randomColor();
  const green = randomColor();
  const blue = randomColor();
  return [red, green, blue];
}

function validateUserInput(userInput) {
  userInput = parseInt(userInput);
  return !isNaN(userInput) && userInput > 0 && userInput < 100;
}

const userInput = document.querySelector("input");

//default grid
userInput.value = gridSize;
createGrid(userInput.value);

userInput.addEventListener("keyup", (e) => {
  console.log(validateUserInput(userInput.value));
  const value = userInput.value;
  if (validateUserInput(value)) {
    userInput.setCustomValidity("");
    gridSize = value;
    createGrid(gridSize);
  } else {
    userInput.setCustomValidity("Yo this is wrong");
    container.replaceChildren();
  }
});

const buttons = document.querySelectorAll("button");
document.querySelector(".red").focus; //default state

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonClass = button.className;
    switch (buttonClass) {
      case "red":
      case "green":
      case "blue":
        color = button.className;
        break;
      case "eraser":
        color = "white";
        break;
      case "rainbow":
        color = "";
        break;
      case "darken":
        isDarken = true;
        break;
      case "reset":
        createGrid(gridSize);
        button.blur();
        break;
    }
  });
});
