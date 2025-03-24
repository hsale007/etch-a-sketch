let columns = 16;
let rows = 16;

const container = document.querySelector(".container");

for (let i = 0; i < columns; i++) {
  const column = document.createElement("div");
  column.className = "columns";
  for (let j = 0; j < rows; j++) {
    const row = document.createElement("div");
    row.className = "row";
    column.appendChild(row);
  }
  container.appendChild(column);
}
