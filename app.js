(function () {
  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".nav-toggle");
  var header = document.querySelector(".site-header");
  var hero = document.querySelector(".hero");

  if (header && hero && "IntersectionObserver" in window) {
    var heroObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          header.classList.toggle("site-header--past-hero", !entry.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "-72px 0px 0px 0px" }
    );
    heroObserver.observe(hero);
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  window.addEventListener(
    "scroll",
    function () {
      if (header) {
        header.classList.toggle("is-scrolled", window.scrollY > 40);
      }
    },
    { passive: true }
  );
})();
