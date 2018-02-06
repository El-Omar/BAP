import velocity from 'velocity-animate';
let started = false;

export default () => {
  const babyImgs = document.querySelectorAll(`.baby`);
  let imgIndex = 0;

  setInterval(() => {
    if (imgIndex % 6 === 0) {
      babyImgs[1].classList.add(`hidden`);
      babyImgs[0].classList.remove(`hidden`);
      imgIndex = 0;
    } else {
      babyImgs[1].classList.remove(`hidden`);
      babyImgs[0].classList.add(`hidden`);
    }
    imgIndex ++;

  }, 400);

  const $btn = document.querySelector(`.welcome-btn`);
  $btn.addEventListener(`click`, btnClicked);

  window.addEventListener(`scroll`, windowScroll);
};

const btnClicked = ({currentTarget: tar}) => {
  started = true;
  tar.style.visibility = `hidden`;
  document.body.style.overflowY = `auto`;

  const welcomeText = document.querySelectorAll(`.welcome-text`);

  velocity(welcomeText, {
    opacity: 0
  }, {
    duration: 760,
    easing: `swing`
  });

  const speech = document.querySelector(`.speech-balloon-text`);
  velocity(speech, {
    opacity: 0,
  }, {
    duration: 200,
    easing: [300, 20],
    complete: () => {
      speech.innerText = `Oh sh#t!`;
      velocity(speech, {
        opacity: 1
      }, {
        duration: 400,
        easing: [300, 20]
      });
    }
  });

  // const baby = document.querySelector(`.baby-container`);
  //
  // velocity(baby, {
  //   top: `-=100%`
  // }, {
  //   duration: 1200,
  //   easing: `ease-in-out`
  // });
};

const windowScroll = () => {
  const baby = document.querySelector(`.baby-container`);
  // const speech = document.querySelector(`.speech-balloon`);
  if (started) {
    const sc = Math.round(window.scrollY);
    baby.style.top = `${sc / 10}rem`;
    // speech.style.top = `${sc / 10}rem`;
  }
};
