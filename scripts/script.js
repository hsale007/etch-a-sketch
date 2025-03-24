const container = document.querySelector(".container");

function createGrid(gridSize) {
  container.replaceChildren();
  for (let i = 0; i < gridSize; i++) {
    const column = document.createElement("div");
    column.className = "columns";
    for (let j = 0; j < gridSize; j++) {
      const row = document.createElement("div");
      row.className = "row";
      row.addEventListener("mouseover", () => {
        row.classList.toggle("coloredBox");
      });
      column.appendChild(row);
    }
    container.appendChild(column);
  }
}

function validateUserInput(userInput) {
  userInput = parseInt(userInput);
  return !isNaN(userInput) && userInput > 0 && userInput < 100;
}
const userInput = document.querySelector("input");

//default grid size
userInput.value = 16;
createGrid(userInput.value);

userInput.addEventListener("keyup", (e) => {
  console.log(validateUserInput(userInput.value));
  if (validateUserInput(userInput.value)) {
    userInput.setCustomValidity("");
    createGrid(userInput.value);
  } else {
    userInput.setCustomValidity("Yo this is wrong");
    container.replaceChildren();
  }
});
