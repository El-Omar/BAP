export default () => {

  // const step0 = document.querySelector(`.step[data-id='0']`);
  // if (step0.getBoundingClientRect().y <= 0) {
  //   step0.classList.add(`sticky`);
  //   step0.classList.add(`step-show`);
  // }
  //
  // const step1 = document.querySelector(`.step[data-id='1']`);
  // if (step1.getBoundingClientRect().y <= 0) {
  //   step0.classList.remove(`sticky`);
  //   step1.classList.add(`sticky`);
  //   step1.classList.add(`step-show`);
  // }
  //
  // const step2 = document.querySelector(`.step[data-id='2']`);
  // if (step2.getBoundingClientRect().y <= 0) {
  //   step1.classList.remove(`sticky`);
  //   step2.classList.add(`sticky`);
  //   step2.classList.add(`step-show`);
  // }
  //
  // const step3 = document.querySelector(`.step[data-id='3']`);
  // if (step3.getBoundingClientRect().y <= 0) {
  //   step1.classList.remove(`sticky`);
  //   step2.classList.remove(`sticky`);
  //   step3.classList.add(`sticky`);
  //   step3.classList.add(`step-show`);
  // }

  const steps = document.querySelectorAll(`.step`);

  // const fibonacci = num => ((num <= 1) ? 1 : fibonacci(num - 1) + fibonacci(num - 2));

  const focused = document.querySelectorAll(`.sticky`);
  console.log(`focused:`, focused);

  steps.forEach(step => {
    step.classList.remove(`sticky`);
    if (step.getBoundingClientRect().y <= 0) {
      step.classList.add(`sticky`);
      step.classList.add(`step-show`);

      // focused.forEach(y => if (y !== i))
      //
      // for (let y = 0;y < steps.length;y ++) {
      //   if (steps[i] !== steps[y]) {
      //     step.classList.remove(`sticky`);
      //   }
      // }
    }
  });

  // for (let i = 0;i < focused.length - 1;i ++) {
  //   focused[i].classList.remove(`sticky`);
  // }

};
