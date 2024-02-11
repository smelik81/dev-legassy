/*при підключенні в index.html працює*/

// document.addEventListener('DOMContentLoaded', function () {
//   const mobileMenuBtn = this.getElementById('mobileMenuBtn');
//   const modaleClose = this.getElementById('modaleClose');
//   const mobileWindow = this.getElementById('mobileWindow');

//   mobileMenuBtn.addEventListener('click', function () {
//     mobileWindow.classList.add('is-open');
//   });
//   modaleClose.addEventListener('click', function () {
//     mobileWindow.classList.remove('is-open');
//   });

//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault();

//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//         behavior: 'smooth',
//       });
//     });
//     document.querySelectorAll('#mobileWindow a').forEach(anchor => {
//       anchor.addEventListener('click', function (e) {
//         document.getElementById('mobileWindow').style.display = 'none';
//       });
//     });
//   });
// });

/*я не розумію цього підключення воно не працює і навіть в консоль нічого не виводить*/
/*(() => {
    const mobileMenuBtn = this.getElementById('mobileMenuBtn');
    const modaleClose = this.getElementById('modaleClose');
    const mobileWindow = this.getElementById('mobileWindow');

    mobileMenuBtn.addEventListener('click', function () {
        mobileWindow.classList.add('is-open');
    })
    modaleClose.addEventListener('click', function () {
      mobileWindow.classList.remove('is-open');
    });
})();*/
// Функция для открытия мобильного меню

document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const modaleClose = document.getElementById('modaleClose');
  const mobileWindow = document.getElementById('mobileWindow');

  function openMobileMenu() {
    mobileWindow.classList.add('is-open');
  }

  function closeMobileMenu() {
    mobileWindow.classList.remove('is-open');
  }

  mobileMenuBtn.addEventListener('click', openMobileMenu);
  modaleClose.addEventListener('click', closeMobileMenu);

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
        });
        closeMobileMenu(); // Закрываем мобильное меню после перехода по ссылке
      }
    });
  });

  document.querySelectorAll('#mobileWindow a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      closeMobileMenu(); // Закрываем мобильное меню после клика на ссылку внутри него
    });
  });
});
