import screens from './screens/index';
let $chapters;

const init = () => {
  preload();
  create();
};

const preload = () => {
  const loadDiv = document.querySelector(`.loadDiv`);

  window.addEventListener(`load`, () => {
    console.log(`page loaded??`);
    loadDiv.classList.add(`hidden`);
  });
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

init();
