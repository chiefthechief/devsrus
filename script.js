/* DevsRUs — site interactions (vanilla JS only) */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function setYear() {
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

function initStickyHeaderElevation() {
  const header = $(".site-header");
  if (!header) return;

  const update = () => {
    const elevates = window.scrollY > 6;
    header.setAttribute("data-elevates", elevates ? "true" : "false");
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function initMobileMenu() {
  const toggle = $(".nav-toggle");
  const menu = $("#navMenu");
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.setAttribute("data-open", open ? "true" : "false");
    document.documentElement.style.overflow = open ? "hidden" : "";
  };

  const isOpen = () => toggle.getAttribute("aria-expanded") === "true";

  toggle.addEventListener("click", () => setOpen(!isOpen()));

  // Close on link click
  $$(".nav-link", menu).forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) setOpen(false);
  });

  // Close on resize to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 720 && isOpen()) setOpen(false);
  });
}

function initSmoothScrolling() {
  // Keep native smooth scrolling, but fix header offset & avoid broken hashes.
  const header = $(".site-header");
  const headerOffset = header ? header.getBoundingClientRect().height : 0;

  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href") || "";
      if (href === "#" || href === "#top") return;

      const target = $(href);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset + 8;
      window.scrollTo({ top, behavior: "smooth" });
      history.pushState(null, "", href);
    });
  });
}

function initRevealOnScroll() {
  const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const candidates = $$([
    ".hero-content",
    ".hero-card",
    "#about .surface",
    "#services .service-card",
    "#projects .project",
    "#testimonials .quote",
    "#contact .surface",
    ".contact-aside .surface",
  ].join(","));

  candidates.forEach((el) => el.setAttribute("data-reveal", "out"));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.setAttribute("data-reveal", "in");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  candidates.forEach((el) => io.observe(el));
}

function initContactForm() {
  const form = $("#contactForm");
  const status = $("#formStatus");
  if (!form || !status) return;

  const name = $("#name");
  const email = $("#email");
  const message = $("#message");

  const setStatus = (text, tone) => {
    status.textContent = text;
    if (tone) status.setAttribute("data-tone", tone);
    else status.removeAttribute("data-tone");
  };

  const setInvalid = (rowEl, invalid) => {
    if (!rowEl) return;
    rowEl.setAttribute("data-invalid", invalid ? "true" : "false");
  };

  const rowFor = (field) => (field ? field.closest(".form-row") : null);

  const isValidEmail = (value) => {
    const v = String(value || "").trim();
    if (v.length < 3) return false;
    // Practical email check; avoids over-strict RFC patterns.
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  };

  const validate = () => {
    const n = String(name?.value || "").trim();
    const e = String(email?.value || "").trim();
    const m = String(message?.value || "").trim();

    const nameOk = n.length >= 2;
    const emailOk = isValidEmail(e);
    const msgOk = m.length >= 12;

    setInvalid(rowFor(name), !nameOk);
    setInvalid(rowFor(email), !emailOk);
    setInvalid(rowFor(message), !msgOk);

    if (!nameOk) name?.setAttribute("aria-invalid", "true"); else name?.removeAttribute("aria-invalid");
    if (!emailOk) email?.setAttribute("aria-invalid", "true"); else email?.removeAttribute("aria-invalid");
    if (!msgOk) message?.setAttribute("aria-invalid", "true"); else message?.removeAttribute("aria-invalid");

    return nameOk && emailOk && msgOk;
  };

  [name, email, message].forEach((field) => {
    if (!field) return;
    field.addEventListener("input", () => {
      validate();
      setStatus("", null);
    });
    field.addEventListener("blur", validate);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    setStatus("", null);

    const ok = validate();
    if (!ok) {
      setStatus("Please fix the highlighted fields and try again.", "error");
      const firstInvalid = $(".form-row[data-invalid=\"true\"] .input, .form-row[data-invalid=\"true\"] .textarea", form);
      firstInvalid?.focus();
      return;
    }

    setStatus("Message ready to send. (Demo form — no backend wired.)", "success");
    form.reset();
    // Clear invalid states after reset
    $$(".form-row", form).forEach((row) => row.removeAttribute("data-invalid"));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setYear();
  initStickyHeaderElevation();
  initMobileMenu();
  initSmoothScrolling();
  initRevealOnScroll();
  initContactForm();
});

