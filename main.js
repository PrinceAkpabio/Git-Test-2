// Get DOM elements to be modified

const openBtn = document.getElementsByClassName('modalBtn')[0];
const modal = document.getElementById('modal');
const exitModal = document.getElementById('modalEnd')



// Add event listeners to DOM elements

openBtn.addEventListener('click', openModal);

exitModal.addEventListener('click', closeModal);

window.addEventListener('click', endModal);

document.addEventListener('DOMContentLoaded', () => {
 let stars = document.querySelectorAll('.transperant');

 stars.forEach(star => {
  star.addEventListener('click', setRating);
 })

 let starsArr = document.querySelector('.stars');

 let rating = parseInt(starsArr.getAttribute('data-rating'));
 let target = stars[rating - 1];
 target.dispatchEvent(new MouseEvent('click'))


})



// Create openmodal, closeModal, endModalBtn and star rating functions

function openModal() {
 modal.style.display = 'block';
}

function closeModal() {
 modal.style.display = 'none';
}

function endModal(e) {
 if (e.target == modal) { modal.style.display = 'none'; }
}

function setRating(ev, index) {

 let link = ev.currentTarget;
 let stars = document.querySelectorAll('.transperant');
 let match = false;
 let num = 0;

 stars.forEach(star => {
  if (match) {
   star.classList.remove('current');
  } else {
   star.classList.add('current');
  }

  if (star == link) {
   match = true;
   num = index + 1;
  }

 })
 document.querySelector('.stars').setAttribute('data-rating', num)

}
