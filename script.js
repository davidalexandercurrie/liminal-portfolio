function setup() {
  noCanvas();
  noLoop();
}

document.addEventListener('keydown', logKey);

function logKey(e) {
  if (e.key == 's') {
    window.scrollTo(0, window.scrollY + 20);
  }
  if (e.key == 'w') {
    window.scrollTo(0, window.scrollY - 20);
  }
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

let left = 2000;

setInterval(function () {
  window.scrollTo(window.scrollX + 1, 0);
  document.getElementById('container').style.left = left + 'px';
  const firstDiv = document.getElementsByClassName('works')[0];
  // console.log(getWindowPos(firstDiv));
  left -= 1;
}, 50);

function getWindowPos(htmlElement) {
  let element = htmlElement.getBoundingClientRect();
  let center = element.x + element.height / 2 - window.innerWidth / 2;
  return center;
}
