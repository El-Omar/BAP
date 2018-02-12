import velocity from 'velocity-animate';
import takePhoto from '../../lib/takePhoto';
let $video;

export default () => {
  blink();

  const $btn = document.querySelector(`.welcome-btn`);
  $btn.addEventListener(`click`, btnClicked);
};

const btnClicked = e => {
  e.preventDefault();

  e.currentTarget.classList.add(`hidden`);

  const btnTakePhoto = document.querySelector(`.photo-take`);
  const btnUploadPhoto = document.querySelector(`.photo-upload`);

  velocity(btnTakePhoto, {left: `-45%`, opacity: 1, scale: .8}, {duration: 500, easing: [300, 20]});
  velocity(btnUploadPhoto, {right: `-45%`, opacity: 1, scale: .8}, {duration: 500, easing: [300, 20]});

  btnTakePhoto.addEventListener(`click`, takePhotoHandler);
  btnUploadPhoto.addEventListener(`click`, goFurtherHandler);
};

const goFurtherHandler = e => {
  $video.srcObject.getTracks()[0].stop();
  e.preventDefault();
  const btnUploadPhoto = document.querySelector(`.photo-upload`);
  const btnTakePhoto = document.querySelector(`.photo-take`);

  velocity(btnUploadPhoto, {top: `-15%`, opacity: 0}, {duration: 300, easing: [300, 20],
    complete: () => {
      btnUploadPhoto.classList.add(`hidden`);
    }
  });
  velocity(btnTakePhoto, {top: `-15%`, opacity: 0}, {duration: 300, easing: [300, 20],
    complete: () => {
      btnTakePhoto.classList.add(`hidden`);
    }
  });

  const takeFrame = document.querySelector(`.photo-take-btn`);
  takeFrame.classList.add(`hidden`);

  const header = document.querySelector(`.welcome-header`);
  velocity(header, {scale: .7, opacity: 1, translateY: `0%`}, {duration: 400, easing: [300, 20]});

  const speech = document.querySelector(`.speech-balloon`);
  velocity(speech, {opacity: 0}, {duration: 500, easing: [300, 80]});

  const babyWrap = document.querySelector(`.baby-wrap`);
  const babyContainer = document.querySelector(`.baby-container`);

  babyWrap.style.position = `initial`;

  velocity(babyContainer, {top: `40%`, scale: 1, translateY: `0%`}, {duration: 1300, easing: [300, 20],
    complete: () => {
      babyContainer.style.position = `fixed`;
      document.body.style.overflowY = `scroll`;
    }
  });

};

const takePhotoHandler = e => {
  e.preventDefault();
  takePhotoAnimation();

  $video = document.querySelector(`.baby-video`);
  navigator.mediaDevices.getUserMedia({
    video: true
  }).then(stream => $video.srcObject = stream);

  console.log(`$video.srcObject:`, $video.srcObject);

  const takeFrame = document.querySelector(`.photo-take-btn`);
  velocity(takeFrame, {opacity: 1}, {duration: 400, easing: [300, 20]});
  takeFrame.addEventListener(`click`, smile);

  const btnTakePhoto = document.querySelector(`.photo-take`);
  const btnUploadPhoto = document.querySelector(`.photo-upload`);

  velocity(btnTakePhoto, {opacity: 0}, {duration: 500, easing: [300, 20],
    complete: () => {
      btnTakePhoto.classList.add(`hidden`);
    }
  });
  velocity(btnUploadPhoto, {opacity: 0}, {duration: 500, easing: [300, 20],
    complete: () => {
      btnUploadPhoto.classList.add(`hidden`);
    }
  });

  btnUploadPhoto.removeEventListener(`click`, goFurtherHandler);
};

const smile = e => {
  console.log(`smile: when pressed on the red button in middle of the baby`);
  e.preventDefault();

  const $shutter = document.querySelector(`.shutter`);
  takePhoto({video: $video, sound: $shutter});

  const takeFrame = document.querySelector(`.photo-take-btn`);
  takeFrame.removeEventListener(`click`, smile);

  takeFrame.removeEventListener(`click`, smile);
  velocity(takeFrame, {opacity: 0}, {duration: 150, complete: () => {
    takeFrame.classList.add(`photo-take-done`);
    takeFrame.innerText = `Goed?`;
    velocity(takeFrame, {opacity: 1}, {duration: 150});
  }});

  const btnTakePhoto = document.querySelector(`.photo-take`);
  const btnUploadPhoto = document.querySelector(`.photo-upload`);

  btnTakePhoto.removeEventListener(`click`, takePhotoHandler);

  btnUploadPhoto.addEventListener(`click`, () => {
    $video.play();

    takeFrame.addEventListener(`click`, smile);
    takeFrame.classList.remove(`photo-take-done`);
    takeFrame.innerText = `Neem foto`;

    velocity(btnTakePhoto, {top: `15%`, opacity: 0}, {duration: 300, easing: [300, 20],
      complete: () => {
        // removeEvent({el: btnTakePhoto, event: `click`, handler: takePhotoHandler});
        btnTakePhoto.classList.add(`hidden`);
      }
    });
    velocity(btnUploadPhoto, {top: `15%`, opacity: 0}, {duration: 300, easing: [300, 20],
      complete: () => {
        btnUploadPhoto.classList.add(`hidden`);
      }
    });
  });

  btnTakePhoto.classList.remove(`hidden`);
  btnUploadPhoto.classList.remove(`hidden`);

  velocity(btnTakePhoto, {top: `-15%`, opacity: 1}, {duration: 300, easing: [300, 20], delay: 500});
  velocity(btnUploadPhoto, {top: `-15%`, opacity: 1}, {duration: 300, easing: [300, 20], delay: 500});
  btnTakePhoto.innerText = `Ja`;
  btnUploadPhoto.innerText = `Opnieuw`;

  btnTakePhoto.addEventListener(`click`, goFurtherHandler);
};

// const removeEvent = ({el: el, event: event, handler: handler}) => {
//   el.removeEventListener(event, handler);
// };

const takePhotoAnimation = () => {
  const header = document.querySelector(`.welcome-header`);
  velocity(header, {scale: .8, opacity: 0, translateY: `-300%`}, {duration: 1400, easing: [300, 20]});

  const babyContainer = document.querySelector(`.baby-container`);
  velocity(babyContainer, {scale: 3, translateY: `-30%`}, {duration: 700, easing: [300, 20]});

  const speech = document.querySelector(`.speech-balloon`);
  velocity(speech, {opacity: 0}, {duration: 500, easing: [300, 80]});
};

const blink = () => {
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
};
