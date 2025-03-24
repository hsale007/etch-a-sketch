let columns = 16;
let rows = 16;

const container = document.querySelector(".container");

for (let i = 0; i < columns; i++) {
  const column = document.createElement("div");
  column.className = "columns";
  for (let j = 0; j < rows; j++) {
    const row = document.createElement("div");
    row.className = "row";
    row.addEventListener("mouseover", () => {
      row.classList.toggle("coloredBox");
    });
    column.appendChild(row);
  }
  container.appendChild(column);
}
