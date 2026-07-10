const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".fade").forEach(el => observer.observe(el));

const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".skill-bar-fill").forEach(bar => {
          bar.style.transform = "scaleX(1)";
        });
        barObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

const skillsCol = document.querySelector(".skill-bar-list");
if (skillsCol) barObserver.observe(skillsCol);

const navbar = document.querySelector(".navbar");

if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      navbar.style.background = "rgba(255,255,255,0.92)";
      navbar.style.boxShadow = "0 8px 40px rgba(175,115,80,0.12)";
    } else {
      navbar.style.background = "rgba(248,244,238,0.80)";
      navbar.style.boxShadow = "none";
    }
  });
}

const navToggle = document.querySelector(".nav-toggle");
const navLinksList = document.querySelector(".nav-links");

if (navToggle && navbar) {
  navToggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });

  navLinksList.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
