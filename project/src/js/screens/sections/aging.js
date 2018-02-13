export default () => {
  const HEIGHT = window.innerHeight;

  window.addEventListener(`scroll`, () => {
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
      }
    }); //-- foreach articles

    //RESET
    focused.forEach((a, i) => {
      if (i === focused.length - 1) return;
      a.classList.remove(`clear`);
    });
  }); //-- scroll event
};
