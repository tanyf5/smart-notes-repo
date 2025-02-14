/* Partials imports */

fetch("./src/partials/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
    initScrolling();
    initMobileMenu();
  });
fetch("./src/partials/hero.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("hero").innerHTML = data));
fetch("./src/partials/logos.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("logos").innerHTML = data;
    initSlider();
  });
fetch("./src/partials/quote.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("quote").innerHTML = data));
fetch("./src/partials/benefits.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("benefits").innerHTML = data));
fetch("./src/partials/quote.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("quote-one").innerHTML = data));
fetch("./src/partials/film.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("film").innerHTML = data));
fetch("./src/partials/quote.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("quote-two").innerHTML = data));
fetch("./src/partials/pricing.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("pricing").innerHTML = data;
    initSale();
  });
fetch("./src/partials/quote.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("quote-three").innerHTML = data));
fetch("./src/partials/faq.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("faq").innerHTML = data;
    initAccordion();
  });
fetch("./src/partials/signup.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("signup").innerHTML = data));
fetch("./src/partials/footer.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("footer").innerHTML = data));

/* Mobile menu */

function initMobileMenu() {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  const closeMenuLinks = document.querySelectorAll(".mob-menu-item");
  const closeMenuSocs = document.querySelectorAll(".mob-socials-item");
  const body = document.body;

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute("aria-expanded") === "true";
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");
    body.classList.toggle(
      "no-scroll",
      mobileMenu.classList.contains("is-open")
    );
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);
  closeMenuLinks.forEach((item) => item.addEventListener("click", toggleMenu));
  closeMenuSocs.forEach((item) => item.addEventListener("click", toggleMenu));
}

/* Nav click */

function initScrolling() {
  document.querySelectorAll(".menu-item").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const headerHeight = document.querySelector("header").offsetHeight;
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const targetPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
        });
      }
    });
  });
}

/* Logos Slider */

function initSlider() {
  const logos = document.querySelector(".logos-container");

  const checkViewport = () => {
    const rect = logos.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      logos.style.animationPlayState = "running";
    } else {
      logos.style.animationPlayState = "paused";
    }
  };

  window.addEventListener("scroll", checkViewport);
  checkViewport();
}

/* Price change */

function initSale() {
  const slider = document.querySelector("#slider");
  const priceInd = document.querySelector(".pricing-price-span-one");
  const priceTeam = document.querySelector(".pricing-price-span-two");

  function updatePrice() {
    if (slider.checked) {
      priceInd.textContent = "$7.49";
      priceTeam.textContent = "$14.99";
    } else {
      priceInd.textContent = "$9.99";
      priceTeam.textContent = "$19.99";
    }
  }

  slider.addEventListener("change", updatePrice);
  updatePrice();
}

/* Accordion */

function initAccordion() {
  const accordion = document.querySelector(".accordion-container");

  new Accordion(accordion, {
    openOnInit: [0],
    duration: 500,
    showMultiple: true,
  });
}
