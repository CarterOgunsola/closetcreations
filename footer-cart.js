const footerBtns = document.querySelectorAll('[footer-cart-btn]'); // get all elements with the footer-cart-btn attribute
const cartBtn = document.querySelector('.cart-button');

footerBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    cartBtn.click(); // mirror the click event on the cart-button element
  });
});

console.log('test auto push')