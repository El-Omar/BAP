const HEIGHT = window.innerHeight;
let endScalePos = 0;
let beginScalePos = 0;
let currY;
let factor = 0;

export default () => {
  window.addEventListener(`scroll`, () => {
    currY = window.scrollY;
    faceSwapAndFocus();
    scaleFace();
  });
};

const scaleFace = () => {
  const $wrap = document.querySelector(`.cell-face-wrap`);
  const {y} = $wrap.getBoundingClientRect();
  const $firstArt = document.querySelectorAll(`.aging-art`)[0];

  if (y <= HEIGHT * .3) {

    if (beginScalePos <= 0) {
      beginScalePos = currY;
    }

    const edgesFirstArt = $firstArt.getBoundingClientRect();
    const yArticle = edgesFirstArt.y;

    if (endScalePos <= 0) {
      //-- If the endScalePos hasn't been initialised yet
      //-- currY is the current scroll Y
      //-- Because I'm initialising this position when the element I'm looking at
      //is down, I need to calculate add the distance between the current
      //position and when I reach that element.
      //-- Because I have margin on the top that's equal to 20% of the screen inner
      //height PLUS 125px (200px is the size of the faces), I need to subtract
      //these as well.
      endScalePos = Math.round(currY + (yArticle - (HEIGHT * .2) - 125));
    }

    const ratio = endScalePos - beginScalePos;
    factor = currY - beginScalePos;

    //Round to 2 decimals
    const progress = Math.round((factor / ratio) * 100) / 100;

    if (progress <= 1 && progress >= .15) {
      const $face = document.querySelector(`.cell-face-container`);
      $face.style.transform = `scale(${progress})`;
    }

  }

};

const faceSwapAndFocus = () => {
  const $articles = document.querySelectorAll(`.aging-art`);
  const $faces = document.querySelectorAll(`.cell-face`);
  const focused = [];

  $articles.forEach((art, i) => {

    const {y} = art.getBoundingClientRect();
    const face = $faces[i];

    //RESET
    if (i !== 0) {
      face.classList.add(`hidden`);
    }
    art.classList.remove(`clear`);

    //FOCUS
    if (y <= (HEIGHT * .2) + 125) {
      face.classList.remove(`hidden`);

      art.classList.add(`clear`);
      focused.push(art);

      if (i === 0) {
        if (endScalePos <= 0) endScalePos = currY;
      }
    }
  }); //-- foreach articles

  //RESET
  focused.forEach((a, i) => {
    if (i === focused.length - 1) return;
    a.classList.remove(`clear`);
  });
};
