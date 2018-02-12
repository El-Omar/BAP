const steps = document.querySelectorAll(`.step`);
// let lastYPos = 0;
// let direction = ``;

export default () => {
  window.addEventListener(`scroll`, onScroll);
};

const onScroll = () => {

  // const winY = window.scrollY;
  //
  // if (winY > lastYPos) {
  //   direction = `forward`;
  // } else {
  //   direction = `backward`;
  // }

  // console.log(`direction:`, direction);

  steps.forEach(step => {
    const yStep = step.getBoundingClientRect().y;
    step.classList.remove(`sticky`);

    //Stick
    if (yStep <= 0) {
      step.classList.add(`sticky`);
      step.classList.add(`step-show`);
    }
  });

  // lastYPos = winY;
};
