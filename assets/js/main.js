(() => {
  "use strict";
  const button = document.querySelector(".menu");
  const nav = document.querySelector("#nav");
  if (button && nav) {
    button.addEventListener("click", () => {
      const opened = nav.classList.toggle("open");
      button.setAttribute("aria-expanded", String(opened));
      button.setAttribute("aria-label", opened ? "بستن منو" : "باز کردن منو");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "باز کردن منو");
    }));
    const closeMenu = () => {
      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "باز کردن منو");
    };
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        closeMenu();
        button.focus();
      }
    });
    document.addEventListener("click", event => {
      if (nav.classList.contains("open") && !nav.contains(event.target) && !button.contains(event.target)) closeMenu();
    });
  }
  const year = document.querySelector("#year");
  if (year) year.textContent = new Intl.NumberFormat("fa-IR").format(new Date().getFullYear());
  const form = document.querySelector("#contact-form");
  const note = document.querySelector("#form-note");
  if (form && note) form.addEventListener("submit", event => {
    event.preventDefault();
    note.textContent = "این فرم در نسخه نمایشی به سرویس ارسال پیام متصل نیست؛ برای دریافت پیام‌ها باید آن را به بک‌اند یا سرویس فرم متصل کنید.";
  });

  const filters = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".work-grid article[data-category]");
  filters.forEach(filter => filter.addEventListener("click", () => {
    const category = filter.dataset.filter;
    filters.forEach(item => { const active = item === filter; item.classList.toggle("is-active", active); item.setAttribute("aria-pressed", String(active)); });
    projects.forEach(project => { project.hidden = category !== "all" && project.dataset.category !== category; });
  }));
  const lightbox = document.querySelector("#lightbox");
  if (lightbox && typeof lightbox.showModal === "function") {
    const lightboxImage = lightbox.querySelector("img");
    document.querySelectorAll(".image-open").forEach(button => button.addEventListener("click", () => {
      const image = button.querySelector("img"); lightboxImage.src = image.currentSrc || image.src; lightboxImage.alt = image.alt; lightbox.showModal();
    }));
    lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
    lightbox.addEventListener("click", event => { if (event.target === lightbox) lightbox.close(); });
  }
  const testimonialCards = [...document.querySelectorAll(".testimonial-card")];
  if (testimonialCards.length) {
    let index = 0; const count = document.querySelector("#testimonial-count");
    const show = next => { index = (next + testimonialCards.length) % testimonialCards.length; testimonialCards.forEach((card,i) => { card.classList.toggle("is-active",i===index); card.setAttribute("aria-hidden",String(i!==index)); }); if(count) count.textContent = new Intl.NumberFormat("fa-IR").format(index+1)+" از "+new Intl.NumberFormat("fa-IR").format(testimonialCards.length); };
    document.querySelector("#testimonial-prev")?.addEventListener("click",()=>show(index-1));
    document.querySelector("#testimonial-next")?.addEventListener("click",()=>show(index+1)); show(0);
  }
})();