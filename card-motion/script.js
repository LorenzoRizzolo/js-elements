
// card motions
const boxes = document.querySelectorAll('.card-motion');
let isScrolling = false;
boxes.forEach(function(box) {
  box.addEventListener('click', function() {
    this.classList.toggle('open');
  });
});