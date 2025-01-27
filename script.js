const container = document.querySelector("#grid-container");
function createDiv(num) {
  const div = document.createElement("div");
  div.style.flexBasis = 100 / num + "%";
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = randomColor();
  });
  container.append(div);
}

function randomColor() {
  return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}

function generateGrid(num) {
  container.innerHTML = "";
  for (let i = 0; i < num * num; i++) {
    createDiv(num);
  }
}

const generateButton = document.querySelector("#generator");
generateButton.addEventListener("click", () => {
  const rows = document.querySelector("#rows");
  if (rows.value < 1 || rows.value > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }
  generateGrid(rows.value);
});
