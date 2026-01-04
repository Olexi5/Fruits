(() => {
  const refs = {
    openBurgerBtn: document.querySelector('[burger-modal-open]'),
    closeBurgerBtn: document.querySelector('[burger-modal-close]'),
    burger: document.querySelector('[burger-modal]'),
  };

  refs.openBurgerBtn.addEventListener('click', toggleBurger);
  refs.closeBurgerBtn.addEventListener('click', toggleBurger);

  function toggleBurger() {
    refs.burger.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();

//You don't need to understand it right not, maybe later.
