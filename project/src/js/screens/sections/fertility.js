// import velocity from 'velocity-animate';

const wheelparts = document.querySelectorAll(`.wheel-part`);
let pos = ``;
let angle = 0;
// let resAngle = 0;
let currAngle = 0;

export default () => {
  wheelparts.forEach(p => p.addEventListener(`click`, wheelClicked));
  draw();
};

const wheelClicked = ({currentTarget: tar}) => {
  pos = tar.dataset.position;

  wheelparts.forEach(p => p.classList.remove(`wheel-part-active`));
  tar.classList.add(`wheel-part-active`);
};

const draw = () => {

  if (pos === `right-top`) {
    angle = 360;
  } else
  if (pos === `right-bottom`) {
    angle = 90;
  } else
  if (pos === `left-bottom`) {
    angle = 180;
  } else
  if (pos === `left-top`) {
    angle = 270;
  }

  const dif = angle - currAngle;
  currAngle += dif * 0.09;

  const $bg = document.querySelector(`.wheel-wrap-bg`);
  $bg.style.background = `linear-gradient(${currAngle}deg, #582b42 85%, #ff406a 15%)`;

  requestAnimationFrame(draw);
};
