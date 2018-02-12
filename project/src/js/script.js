import screens from './screens/index';
let $chapters;

const init = () => {
  // window.location.href = `#start`;
  // window.location.replace(`index.html#start`);
  // window.location.reload();
  console.log(`window.location:`, window.location);
  create();
  draw();
};

const create = () => {
  $chapters = document.querySelectorAll(`.chapter`);
  $chapters.forEach(c => {
    screens().get(c.dataset.name)(c);
  });

  const start = document.querySelector(`.start-wrap`);
  const {x, y} = start.getBoundingClientRect();
  window.scrollTo(x, y);
};

const draw = () => {
  requestAnimationFrame(draw);
};

init();
