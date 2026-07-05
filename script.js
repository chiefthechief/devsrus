const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");
const form = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
const sectionLinks = Array.from(document.querySelectorAll(".site-nav a[href^='#']:not(.nav-cta)"));
const sections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll("img").forEach((image) => {
  const markMissing = () => image.classList.add("image-missing");

  image.addEventListener("error", markMissing, { once: true });

  if (image.complete && image.naturalWidth === 0) {
    markMissing();
  }
});

function closeNav() {
  nav?.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  navToggle?.setAttribute("aria-expanded", "false");
}

navToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", Boolean(isOpen));
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNav();
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

window.setTimeout(() => {
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((element) => {
    element.classList.add("is-visible");
  });
}, 900);

// Initialize tech carousel: duplicate track contents for continuous single-line scroll
(function () {
  const techStrip = document.querySelector('.tech-strip');
  const carousel = techStrip?.querySelector('.tech-carousel');
  const track = carousel?.querySelector('.tech-track');
  if (!track) return;

  // collect original items, then append clones to the same track to create a seamless loop
  const originalItems = Array.from(track.children);
  originalItems.forEach((node) => track.appendChild(node.cloneNode(true)));

  // Set duration based on number of original items (keeps speed sensible)
  const itemCount = originalItems.length;
  const duration = Math.max(12, itemCount * 1.8); // seconds
  techStrip.style.setProperty('--scroll-duration', `${duration}s`);

  // Pause animation when user hovers (also respects reduced motion)
  carousel.addEventListener('mouseenter', () => {
    track.style.animationPlayState = 'paused';
  });
  carousel.addEventListener('mouseleave', () => {
    track.style.animationPlayState = '';
  });
})();

window.addEventListener("scroll", () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 20);
});

const activeObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) {
      return;
    }

    sectionLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  {
    rootMargin: "-35% 0px -50% 0px",
    threshold: [0.1, 0.25, 0.5],
  }
);

sections.forEach((section) => {
  activeObserver.observe(section);
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const data = new FormData(form);
  const firstName = String(data.get("name") || "there").trim().split(" ")[0];
  formStatus.textContent = `Thanks, ${firstName}. We will follow up within one business day.`;
  form.reset();
});
