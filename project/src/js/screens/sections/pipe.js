/* eslint-disable */

// import * as d3 from 'd3';

export default section => {

  window.addEventListener(`scroll`, () => {
    const {y} = section.getBoundingClientRect();
    if (y <= 150) {
      const $baby = document.querySelector(`.baby-container`);
      $baby.classList.add(`hidden`);
    }
  });
  // console.log(`d3:`, d3);
  // const wrap = document.querySelector(`.pipe-sub-right`);
  // const svg = document.querySelector(`.pipe-right-svg`);
  // console.log(`svg:`, svg);
  //
  // const x = d3.scale.linear().domain([0, 10]).range([0, 700]);
  // const y = d3.scale.linear().domain([0, 10]).range([10, 290]);
  //
  //
  // const line = d3.svg.line().
  //   interpolate(`cardinal`)
  //   .x(function(d, i) { return x(i); })
  //   .y(function(d) { return y(d); });
  //
  //
  // const path = document.querySelector(`.right-path`);
  //
  // const circle = svg.append(`circle`)
  //   .attr(`cx`, 100)
  //   .attr(`cy`, 350)
  //   .attr(`r`, 3)
  //   .attr(`fill`, `red`);
  //
  // const pathEl = path.node();
  // const pathLength = pathEl.getTotalLength();
  // const bBox = pathEl.getBBox();
  // const scale = pathLength / bBox.width;
  // let pos;
  //
  // const offsetLeft = wrap.offsetLeft;
  //
  // svg.on(`mousemove`, () => {
  //   const x = d3.event.pageX - offsetLeft;
  //   let begin = x;
  //   let end = pathLength;
  //   let target;
  //
  //   while (true) {
  //     target = Math.floor((begin + end) / 2);
  //     pos = pathEl.getPointAtLength(target);
  //
  //     if ((target === end || target === begin) && pos.x !== x) {
  //       break;
  //     }
  //
  //     if (pos.x > x) {
  //       end = target;
  //     } else if (pos.x < x) {
  //       begin = target;
  //     } else {
  //       break;
  //     }
  //   }
  //
  //   circle
  //     .attr(`opacity`, 1)
  //     .attr(`cx`, x)
  //     .attr(`cy`, pos.y);
  //
  // });

};
