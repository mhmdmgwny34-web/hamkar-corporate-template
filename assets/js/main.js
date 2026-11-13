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
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        nav.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "باز کردن منو");
      }
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
})();
