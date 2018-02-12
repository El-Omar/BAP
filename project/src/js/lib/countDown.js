const step = ({
  interval,
  val,
  count,
  resolve,
  $shutter,
  $beep
}) => {

  if (val < count) {
    $beep.play();
  } else {
    $shutter.play();
    clearInterval(interval);
    resolve();
  }

};

export default ({
  count = 4,
  intervalTime = 1000
} = {}) => {

  const $shutter = document.querySelector(`.shutter`);
  const $beep = document.querySelector(`.beep`);

  let val = 0;

  return new Promise(resolve => {

    const interval = setInterval(() => {

      val ++;
      step({
        interval,
        val,
        count,
        resolve,
        $shutter,
        $beep
      });

    }, intervalTime);

  });

};
