const text = document.querySelector('.container-text');

function mouseMoveFunction(event) {
  let currentXPercentage = event.clientX / window.innerWidth;
  let currentYPercentage = event.clientY / window.innerHeight;

  text.style.top = -(currentYPercentage * 100) + 100 + '%';
  text.style.left = -(currentXPercentage * 100) + 100 + '%';
  console.log(-(currentYPercentage * 100) + 100);
  if (-(currentXPercentage * 100) + 100 < 15) {
    text.style.left = 15 + '%';
  }
  if (-(currentXPercentage * 100) + 100 > 85) {
    text.style.left = 85 + '%';
  }
  if (-(currentYPercentage * 100) + 100 < 10) {
    text.style.top = 10 + '%';
  }
  if (-(currentYPercentage * 100) + 100 > 90) {
    text.style.top = 90 + '%';
  }
}

window.addEventListener('mousemove', mouseMoveFunction);
