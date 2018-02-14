/* eslint-disable */

import velocity from 'velocity-animate';

const wheelparts = document.querySelectorAll(`.wheel-part`);
let pos = ``;
let angle = 0;
let currAngle = 0;
let section = undefined;
let HEIGHT;
let parText = ``;
const $paragraph = document.querySelector(`.fertility-desc`);
const $cellFace = document.querySelector(`.cell-face-container`);
let rotateOffset = 0;
let imgRotateOffset = 0;
let currImage;

export default s => {
  section = s;
  HEIGHT = window.innerHeight;
  wheelparts.forEach(p => p.addEventListener(`click`, wheelClicked));

  console.log(`HEIGHT:`, HEIGHT);
  console.log(`section:`, section);

  currImage = document.querySelector(`.fertility-img[data-position="right-top"]`);
  // window.addEventListener(`scroll`, showWheel);

  draw();
};

const wheelClicked = ({currentTarget: tar}) => {
  pos = tar.dataset.position;

  currImage = document.querySelector(`.fertility-img[data-position="${pos}"]`);
  console.log(`currImage:`, currImage);

  wheelparts.forEach(p => p.classList.remove(`wheel-part-active`));
  tar.classList.add(`wheel-part-active`);

  setAngle();



};

const setAngle = () => {
  const $imgsFertility = document.querySelectorAll(`.fertility-img`);
  $imgsFertility.forEach(img => img.classList.add(`faded`));

  currImage.classList.remove(`faded`);

  if (pos === `right-top`) {
    //28 JAAR
    rotateOffset = - 45;
    angle = 360;
    imgRotateOffset = 45;

    parText = ` Op de 28ste is de Vlaamse populatie klaar om te beginnen met kinderen. Je hebt waarschijnlijk een mooie baan en een leuk sociaal leven. Je hebt veel kansen 'al gehad' en je bent meer dan ooit klaar voor een gezin.`;
  } else

  if (pos === `right-bottom`) {
    //30+ JAAR
    // rotateOffset = - 45;
    // imgRotateOffset = 45;
    currImage.classList.add(`faded`);

    angle = 90;

    parText = `Bekijk wat er gebeurt met je eicellen indien je te lang wacht met zwangerschap.`;
    velocity(wheelparts, `scroll`, {duration: 2000, easing: `ease-out`});
    velocity($cellFace, {opacity: 1}, {duration: 2000, easing: `ease-in-out`});
  } else

  if (pos === `left-bottom`) {
    //20 JAAR
    rotateOffset = 45;
    angle = 180;
    imgRotateOffset = -45;

    parText =
      `Lichamelijk zijn dit je topjaren om kinderen te krijgen. Je bent lichamelijk fitter en helemaal in orde om zwanger te worden. Maar de meesten zijn nog niet klaar omdat ze voorkeur geven aan hun carrière zoals studeren, uitgaan, vrienden.`;
  } else

  if (pos === `left-top`) {
    //25 JAAR
    rotateOffset = 315;
    angle = 270;
    imgRotateOffset = - 135;

    parText =
      `Lichamelijk is dit hét moment. Je zit in het midden van alles: van je carrière, je relatie, je leven. Waarschijnlijk zijn er nog een heleboel andere dingen die je 'even' wilt doen: reizen, uitgaan vooraleer je met kinderen begint.`;
  }

  $paragraph.innerText = parText;

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

  const dif = angle - currAngle;
  currAngle += dif * 0.09;

  const $bg = document.querySelector(`.wheel-wrap-bg`);
  $bg.style.background = `linear-gradient(${currAngle}deg, #582b42 85%, #ff406a 15%)`;

  const $imgWrap = document.querySelector(`.fertility-img-wrap`);
  $imgWrap.style.transform = `rotate(${currAngle}deg)`;

  const $imgCont = document.querySelector(`.fertility-img-container`);
  $imgCont.style.transform = `rotate(${currAngle + rotateOffset}deg)`;
  // $imgCont.style.transform = `rotate(${currAngle}deg)`;
  //
  currImage.style.transform = `rotate(${imgRotateOffset}deg)`;

  requestAnimationFrame(draw);
};
