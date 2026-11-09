"use strict";
// Navigation and content remain usable without JavaScript.
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());
const navigationLinks = [...document.querySelectorAll('nav a[href^="#"]')];
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      navigationLinks.forEach((link) => {
        if (link.hash === "#" + entry.target.id) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }
  }, { rootMargin: "-10% 0px -55% 0px", threshold: 0 });
  document.querySelectorAll("#work, #about, #contact").forEach((section) => observer.observe(section));
}
