/*при підключенні в index.html працює*/

document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuBtn = this.getElementById('mobileMenuBtn');
  const modaleClose = this.getElementById('modaleClose');
  const mobileWindow = this.getElementById('mobileWindow');

  mobileMenuBtn.addEventListener('click', function () {
    mobileWindow.classList.add('is-open');
  });
  modaleClose.addEventListener('click', function () {
    mobileWindow.classList.remove('is-open');
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
    document.querySelectorAll('#mobileWindow a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        document.getElementById('mobileWindow').style.display = 'none';
      });
    });
  });
});



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
