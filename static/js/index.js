document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.navbar-burger');
  var menu = document.querySelector('.navbar-menu');

  if (burger && menu) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
      burger.setAttribute('aria-expanded', burger.classList.contains('is-active') ? 'true' : 'false');
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      var targetId = this.getAttribute('href');
      var target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      if (menu) {
        burger.classList.remove('is-active');
        menu.classList.remove('is-active');
      }
    });
  });

  var revealItems = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
    });

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add('is-visible');
    });
  }
});
