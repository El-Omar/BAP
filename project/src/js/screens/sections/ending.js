import onScreen from '../../lib/onScreen';

export default section => {
  window.addEventListener(`scroll`, () => {
    const isOnScreen = onScreen(section, window.innerHeight * .6);

    if (isOnScreen) {
      const $baby = document.querySelector(`.baby-container`);
      $baby.classList.remove(`hidden`);
      $baby.style.transform = `rotate(180deg)`;
    }
  });
};
