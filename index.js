
const numBank = [];
const sortOdds = [];
const sortEvens = [];


function addNumBank(num) {
  numBank.push(num);
}

function sortNumBank() {
  const num = numBank.shift(); 
  if (num % 2 === 0) {
    sortEvens.push(num);
  } else {
    sortOdds.push(num);
  }
}

function renderNumbers(numbers, $element) {
  const $nums = numbers.map((num) => {
    const $num = document.createElement("span");
    $num.textContent = num;
    return num;
  });
  $element.replaceChildren(...$nums);
}


function render() {
  const $numBank = document.querySelector("#numberBank output");
  renderNumbers(numBank, $numBank);
  const $sortOdds = document.querySelector("#odds output");
  renderNumbers(sortOdds, $sortOdds);
  const $sortEvens = document.querySelector("#evens output");
  renderNumbers(sortEvens, $sortEvens);
}


render(); 

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const $input = document.querySelector("#number");
  const input = $input.value;

  if (input.length === 0 || isNaN(input)) {
    console.error("Input must be a number");
    return;
  }

  $input.value = "";

  addNumBank(input);
  render();
});

const $sortOne = document.querySelector("#sortOne");
$sortOne.addEventListener("click", () => {
  sortNumBank();
  render();
});

const $sortAll = document.querySelector("#sortAll");
$sortAll.addEventListener("click", () => {
  while (numBank.length > 0) {
    sortNumBank();
  render();
  }
});