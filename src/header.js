document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuBtn = this.getElementById('mobileMenuBtn');
    const modaleClose = this.getElementById('modaleClose');
    const mobileWindow = this.getElementById('mobileWindow');

    mobileMenuBtn.addEventListener('click', function () {
        mobileWindow.classList.add('is-open');
    })
    modaleClose.addEventListener('click', function () {
      mobileWindow.classList.remove('is-open');
    });


});

