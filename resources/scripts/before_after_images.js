/* ------------------------------------------
----------- BEFORE & AFTER IMAGES -----------
------------------------------------------ */

const b4AfContainers = document.querySelectorAll('.b4AftContainer');

b4AfContainers.forEach(b4AfContainer => {
  b4AfContainer.querySelector('.slider').addEventListener('input', (e) => {
    b4AfContainer.style.setProperty('--position', `${e.target.value}%`);
  })
})