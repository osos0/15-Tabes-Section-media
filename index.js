const stepsEl = document.querySelectorAll("h3");
const h1El = document.querySelector("h1");

const pEl = document.querySelectorAll(".par");
const printEl = document.querySelector(".print");

// console.log();

stepsEl.forEach((step) => {
  step.onclick = () => {
    stepsEl.forEach((step) => {
      // first forEach to active classto from All steps
      step.classList.remove("active");
    });
    h1El.innerHTML = `Step ${step.innerText.slice(4, 7)}`;
    // second for Each to add active class to target step
    step.classList.add("active");
    printEl.innerHTML = ``;
    if (step.innerHTML.charAt(5) === h1El.innerHTML.charAt(6)) {
      pEl.forEach((pp) => {
        pp.classList.add("display");
        pp.classList.add("print");
        pp.classList.remove("par");
      });
    }
    pEl[+step.innerHTML.charAt(5) - 1].classList.remove("display");
  };
});
