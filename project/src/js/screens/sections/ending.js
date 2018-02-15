import html2canvas from 'html2canvas';
import onScreen from '../../lib/onScreen';
let section;
let removed = false;

export default s => {
  section = s;
  window.addEventListener(`scroll`, () => {
    const isOnScreen = onScreen(section, window.innerHeight * .6);
    const {y} = section.getBoundingClientRect();

    if (isOnScreen) {
      const $baby = document.querySelector(`.baby-container`);
      $baby.classList.remove(`hidden`);
      $baby.style.top = `19rem`;
      $baby.style.marginLeft = `1rem`;
      $baby.classList.add(`baby-hat`);

      if (y <= window.innerHeight * .15) {
        $baby.classList.remove(`baby-container-done`);

        if (!removed) {

          setTimeout(() => {
            document.querySelector(`.share-wrap`).classList.remove(`hidden`);
            removed = true;
          }, 3500);

        }

      }
    }
  });

  const $shareBtn = document.querySelector(`.share-btn`);
  $shareBtn.addEventListener(`click`, onShareClicked);
};

const onShareClicked = e => {
  e.preventDefault();
  const target = e.currentTarget;
  const parent = target.parentNode;

  console.log(`parent, target:`, parent, target);
  parent.classList.add(`hidden`);

  const babyContainer = document.querySelector(`.baby-wrap`);
  babyContainer.parentNode.removeChild(babyContainer);
  section.appendChild(babyContainer);
  babyContainer.style.margin = `0 auto`;

  html2canvas(section).then(canvas => {
    const a = document.createElement(`a`);
    a.href = canvas.toDataURL(`image/jpeg`).replace(`image/jpeg`, `image/octet-stream`);
    a.download = `educatedbaby.jpg`;
    a.click();
  });

  parent.classList.add(`hidden`);


};
