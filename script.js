let a = "";
let b = "";
let sing = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const action = ["-", "+", "X", "/", "%"];

const out = document.querySelector(".calc-screen p");

function clearAll() {
  a = "";
  b = "";
  sing = "";
  finish = "";
  out.textContent = 0;
}

document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
  if (event.target.classList.contains("ac")) return;
  out.textContent = "";

  let key = event.target.textContent;

  if (digit.includes(key)) {
    if (b === "" && sing === "") {
      a += key;

      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
      console.log(a);
    } else {
      b += key;

      out.textContent = b;
      console.log(b);
    }
    return;
  }
  if (action.includes(key)) {
    sing = key;
    out.textContent = sing;
    console.log(sing);
    return;
  }

  if (key === "=") {
    if (b === "") b = a;
  }
  switch (sing) {
    case "%":
      a = (a * b) / 100;
      break;
    case "+":
      a = +a + +b;
      break;
    case "-":
      a = a - b;
      break;
    case "X":
      a = a * b;
      break;
    case "/":
      if (b === "0") {
        out.textContent = "∞Infinity∞";
        a = "";
        b = "";
        sing = "";
        return;
      }
      a = a / b;
      break;
  }
  finish = true;
  out.textContent = a;
  console.table(a, b, sing);
};
document.addEventListener("keyup", function (e) {
  if (
    e.key == 1 ||
    e.key == 2 ||
    e.key == 3 ||
    e.key == 4 ||
    e.key == 5 ||
    e.key == 6 ||
    e.key == 7 ||
    e.key == 8 ||
    e.key == 9 ||
    e.key == 0
  )
    if (b === "" && sing === "") {
      //  e.key  == '+' || e.key == '-')
      a += e.key;
      out.textContent = a;
      console.log(out.textContent);
    } else if (a !== "" && b !== "" && finish) {
      b = e.key;
      finish = false;
      out.textContent = b;
      console.log(a);
    } else {
      b += e.key;

      out.textContent = b;
      console.log(b);

      return;
    }
  if (action.includes(e.key)) {
    sing = e.key;
    out.textContent = sing;
    console.log(sing);
    return;
  }
  if (e.key === "=") {
    if (b === "") b = a;
  }
  switch (sing) {
    case "%":
      a = (a * b) / 100;
      break;
    case "+":
      a = +a + +b;
      break;
    case "-":
      a = a - b;
      break;
    case "X":
      a = a * b;
      break;
    case "/":
      if (b === "0") {
        out.textContent = "∞Infinity∞";
        a = "";
        b = "";
        sing = "";
        return;
      }
      a = a / b;
      break;
  }

  out.textContent = a;
  console.table(a, b, sing);
});
document.addEventListener("keyup", function (e) {
  if (e.key == "Backspace") {
    a = "";
    b = "";
    sing = "";
    finish = "";
    out.textContent = 0;
  }
});
