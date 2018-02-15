// import onScreen from '../../lib/onScreen';

export default section => {
  console.log(`section:`, section);
  window.addEventListener(`scroll`, () => {

    // const isOnScreen = onScreen(section, window.innerHeight * .3);
    //
    // if (isOnScreen) {
    //   // const $ovumWrap = document.querySelector(`.fridge-ovum-wrap`);
    //   // const $outro = document.querySelector(`.outro`);
    //   // const {y} = $outro.getBoundingClientRect();
    //   // console.log(`y:`, y);
    // }


  });
};
