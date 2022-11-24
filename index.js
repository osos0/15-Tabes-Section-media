const stepsEl = document.querySelectorAll("h3");
const h1El = document.querySelector("h1");

const pEl = document.querySelectorAll("p");

console.log();
stepsEl.forEach((step) => {
  step.onclick = () => {
    stepsEl.forEach((step) => {
      // first forEach to active classto from All steps
      step.classList.remove("active");
    });
    h1El.innerHTML = `Step ${step.innerText.slice(4, 7)}`;
    // second for Each to add active class to target step
    step.classList.add("active");
    console.log(step.innerHTML.charAt(5));
    console.log(h1El.innerHTML.charAt(6));
    // pEl.forEach((par) => {
    //   par.classList.add("display");
    // });
  };
});
