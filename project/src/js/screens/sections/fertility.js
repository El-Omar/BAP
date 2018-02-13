// import velocity from 'velocity-animate';

const wheelparts = document.querySelectorAll(`.wheel-part`);
let pos = ``;
let angle = 0;
let currAngle = 0;
let section = undefined;
let HEIGHT;

export default s => {
  section = s;
  HEIGHT = window.innerHeight;
  wheelparts.forEach(p => p.addEventListener(`click`, wheelClicked));

  console.log(`HEIGHT:`, HEIGHT);
  console.log(`section:`, section);
  // window.addEventListener(`scroll`, showWheel);

  draw();
};

const wheelClicked = ({currentTarget: tar}) => {
  pos = tar.dataset.position;

  wheelparts.forEach(p => p.classList.remove(`wheel-part-active`));
  tar.classList.add(`wheel-part-active`);
};

// const showWheel = () => {
//   const $wheelWrap = document.querySelector(`.wheel-wrap`);
//
//   const {y} = section.getBoundingClientRect();
//
//   if (y < HEIGHT * .2) {
//     velocity($wheelWrap, {opacity: 1, translateY: `0%`}, {duration: 1700, easing: [300, 16]});
//   }
// };

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
