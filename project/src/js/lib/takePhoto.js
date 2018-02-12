import velocity from 'velocity-animate';

const createFlash = () => {
  const $flash = document.createElement(`div`);
  $flash.classList.add(`flash`);
  document.body.appendChild($flash);

  return $flash;
};

export default ({video: $video, sound: $shutter}) => {

  const $flash = createFlash();
  velocity($flash, {opacity: 1}, {duration: 150, complete: () => {
    velocity($flash, {opacity: 0}, {duration: 100, delay: 40, complete: () => {
      $flash.parentNode.removeChild($flash);
    }});
  }});

  $video.pause();
  $shutter.play();
};
