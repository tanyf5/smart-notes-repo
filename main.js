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
  .then((data) => {
    document.getElementById("hero").innerHTML = data;
    initHeroSbscrb();
  });
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
  .then((data) => {
    document.getElementById("signup").innerHTML = data;
    initScrolling();
  });
fetch("./src/partials/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
    initScrolling();
    initFooterSbscrb();
  });

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

/* Scroll + header height*/

function initScrolling() {
  const scrollToSection = (event) => {
    event.preventDefault();

    const headerHeight = document.querySelector("header").offsetHeight;
    const targetId = event.target.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const targetPosition = targetSection.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
      });
    }
  };

  document.querySelectorAll(".menu-item").forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });

  document.querySelectorAll(".mob-menu-item").forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });

  const getStrtdBtn = document.querySelector(".get-started-bnt");
  if (getStrtdBtn) {
    getStrtdBtn.addEventListener("click", scrollToSection);
  }

  const signUpBtn = document.querySelector(".signup-for-free");
  if (signUpBtn) {
    signUpBtn.addEventListener("click", scrollToSection);
  }
  console.log(signUpBtn);

  document.querySelectorAll(".footer-menu-item").forEach((link) => {
    link.addEventListener("click", scrollToSection);
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

/* Hero subscribe */

function initHeroSbscrb() {
  const emailInput = document.querySelector(".hero-form-input");
  const sbscrbBtn = document.querySelector(".hero-signup-btn");
  const heroContact = document.querySelector(".hero-contact");

  const modal = document.querySelector("#hero-signup-modal");
  const modalBackdrop = document.querySelector(".hero-modal-backdrop");
  const modalClose = document.querySelector(".hero-close-signup-modal-btn");

  const body = document.body;

  // Email validation function
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Email validation while input
  emailInput.addEventListener("input", () => {
    if (!validateEmail(emailInput.value)) {
      heroContact.classList.add("invalid");
    } else {
      heroContact.classList.remove("invalid");
    }
  });

  // "Subscribe" addEventListener
  sbscrbBtn.addEventListener("click", (event) => {
    event.preventDefault();

    if (!validateEmail(emailInput.value)) {
      event.preventDefault();
      heroContact.classList.add("invalid");
    } else {
      heroContact.classList.remove("invalid");
      console.log("Submitted email:", emailInput.value);

      modal.style.display = "flex";
      modalBackdrop.style.display = "block";
      body.classList.add("no-scroll");

      emailInput.value = "";
    }
  });

  // Close modal
  function closeModal() {
    modal.style.display = "none";
    modalBackdrop.style.display = "none";
    body.classList.remove("no-scroll");
  }

  modalClose.addEventListener("click", closeModal);

  modalBackdrop.addEventListener("click", closeModal);
}

/* Footer subscribe */

function initFooterSbscrb() {
  const emailInput = document.querySelector(".footer-form-input");
  const sbscrbBtn = document.querySelector(".footer-form-btn");

  const modal = document.querySelector("#signup-modal");
  const modalBackdrop = document.querySelector(".modal-backdrop");
  const modalClose = document.querySelector(".close-signup-modal-btn");

  const body = document.body;

  // Email validation function
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Email validation while input
  emailInput.addEventListener("input", () => {
    if (!validateEmail(emailInput.value)) {
      emailInput.classList.add("invalid");
    } else {
      emailInput.classList.remove("invalid");
    }
  });

  // "Subscribe" addEventListener
  sbscrbBtn.addEventListener("click", (event) => {
    event.preventDefault();

    if (!validateEmail(emailInput.value)) {
      event.preventDefault();
      emailInput.classList.add("invalid");
    } else {
      emailInput.classList.remove("invalid");
      console.log("Submitted email:", emailInput.value);

      modal.style.display = "flex";
      modalBackdrop.style.display = "block";
      body.classList.add("no-scroll");

      emailInput.value = "";
    }
  });

  // Close modal
  function closeModal() {
    modal.style.display = "none";
    modalBackdrop.style.display = "none";
    body.classList.remove("no-scroll");
  }

  modalClose.addEventListener("click", closeModal);

  modalBackdrop.addEventListener("click", closeModal);
}
