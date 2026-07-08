document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});
