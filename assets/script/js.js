'use strict';

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
const sidebarIcon = sidebarBtn.querySelector("i");

sidebarBtn.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    sidebarIcon.classList.remove("fa-chevron-down");
    sidebarIcon.classList.add("fa-chevron-up");
  } else {
    sidebarIcon.classList.remove("fa-chevron-up");
    sidebarIcon.classList.add("fa-chevron-down");
  }
});

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link, idx) => {
  link.addEventListener("click", function () {
    pages.forEach((page, j) => {
      if (link.innerHTML.toLowerCase() === page.dataset.page) {
        page.classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0,0);
      } else {
        page.classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    });
  });
});