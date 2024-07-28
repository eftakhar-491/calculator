const result = document.querySelector("body > section > div.result > h1");
let num = [];
let show = [];
let ans1 = 0;
let special = [];
function value(x) {
  num.push(x);
  show.push(x);
  if (x == "ac" || x == "%" || x == "+" || x == "-" || x == "*" || x == "/") {
    num.pop();
  }
  result.innerText = show.join("");
  if (x == "ac") {
    num = [];
    show = [];
    ans1 = 0;
    special = [];
    result.innerText = Number(show.join(""));
  }
  if (x == "+") {
    if (num.length != 0) {
      special.push(Number(num.join("")));
    }
    num = [];
  }
  if (x == "-") {
    if (num.length != 0) {
      special.push(Number(num.join("")));
    }

    num = [];
  }
  if (x == "*") {
    if (num.length != 0) {
      special.push(Number(num.join("")));
    }
    num = [];
  }
  if (x == "/") {
    if (num.length != 0) {
      special.push(Number(num.join("")));
    }

    num = [];
  }
  if (x == "%") {
    if (num.length != 0) {
      special.push(Number(num.join("")));
    }
    num = [];
  }
  if (x == "%" || x == "+" || x == "-" || x == "*" || x == "/") {
    special.push(x);
  }
}
function equal() {
  result.innerText = eval();
  function eval() {
    if (num.length != 0) {
      special.push(Number(num.join("")));
      num = [];
    }
    special.forEach((item, i) => {
      if (item == "/") {
        ans1 = special[i - 1] / special[i + 1];
        special.splice(i - 1, 3, ans1);
        ans1 = 0;
      }
    });
    special.forEach((item, i) => {
      if (item == "%") {
        ans1 = special[i - 1] / 100;
        special.splice(i - 1, 2, ans1);
        ans1 = 0;
      }
    });
    special.forEach((item, i) => {
      if (item == "*") {
        ans1 = special[i - 1] * special[i + 1];
        special.splice(i - 1, 3, ans1);
        ans1 = 0;
      }
    });
    special.forEach((item, i) => {
      if (item == "+") {
        ans1 = special[i - 1] + special[i + 1];
        special.splice(i - 1, 3, ans1);
        ans1 = 0;
      }
    });
    special.forEach((item, i) => {
      if (item == "-") {
        ans1 = special[i - 1] - special[i + 1];
        special.splice(i - 1, 3, ans1);
        ans1 = 0;
      }
    });
    return Number(special.join(""));
  }
}
