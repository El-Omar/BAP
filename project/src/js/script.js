import screens from './screens/index';
let $chapters;

const init = () => {
  create();
  draw();
};

const create = () => {
  $chapters = document.querySelectorAll(`.chapter`);
  $chapters.forEach(c => {
    screens().get(c.dataset.name)();
  });

  window.addEventListener(`scroll`, () => {
    screens().get(`ivf`)();
  });

  // const wheelparts = document.querySelectorAll(`.wheel-part`);
  // wheelparts.forEach(p => p.addEventListener(`click`, wheelClicked));
};

// const wheelClicked = ({currentTarget: tar}) => {
//   console.log(`tar:`, tar);
// };

const draw = () => {
  requestAnimationFrame(draw);
};

init();
