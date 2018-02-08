const steps = document.querySelectorAll(`.step`);
let lastYPos = 0;
let direction = ``;

export default () => {

  window.addEventListener(`scroll`, onScroll);

};

const onScroll = () => {

  steps.forEach(step => {
    const yStep = step.getBoundingClientRect().y;
    if (yStep > lastYPos) {
      direction = `forward`;
    } else {
      direction = `backward`;
    }

    console.log(`direction:`, direction);

    //reset
    step.classList.remove(`sticky`);

    //Stick
    if (yStep <= 0) {
      step.classList.add(`sticky`);
      step.classList.add(`step-show`);
    }

    lastYPos = yStep;
  });
};
