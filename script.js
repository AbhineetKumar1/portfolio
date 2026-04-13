document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // CANVAS BACKGROUND
  // =========================
  const canvas = document.getElementById("bg");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speed: Math.random() * 0.5
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#38bdf8";

    particles.forEach(p => {
      p.y -= p.speed;
      if (p.y < 0) p.y = canvas.height;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();

  // =========================
  // PROJECT CLICK
  // =========================
  window.openProject = function () {
    window.open("https://github.com/AbhineetKumar1", "_blank");
  };

  // =========================
  // EMAILJS INIT
  // =========================
  emailjs.init("MQg5ZdUpzZ2BL3BUT");

  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm(
        "service_tpk02q4",
        "template_27n0q8y",
        this
      )
      .then(() => {
        alert("Message sent successfully 🚀");
        form.reset();
      })
      .catch((error) => {
        alert("Failed to send message ❌");
        console.error("EmailJS Error:", error);
      });
    });
  } else {
    console.error("Contact form not found ❌");
  }
// SMOOTH SCROLL FIX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ACTIVE LINK ON SCROLL
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
const thoughts = [
  "Make your own mark \u2728",   // ✨
  "Walk like you own the place \u{1F525}", // 🔥
  "Build. Break. Repeat. \u{1F680}", // 🚀
  "Think different. Code smarter. \u{1F4A1}", // 💡
  "Stay hungry. Stay foolish. \u{1F60E}" // 😎
];

let index = 0;
const thoughtEl = document.getElementById("thought-text");

function changeThought() {
  thoughtEl.classList.remove("show");

  setTimeout(() => {
    thoughtEl.innerText = thoughts[index];
    thoughtEl.classList.add("show");
    index = (index + 1) % thoughts.length;
  }, 400);
}

// initial
changeThought();



// loop every 3 seconds
setInterval(changeThought, 3000);
  // =========================
  // SCROLL ANIMATION
  // =========================
  const elements = document.querySelectorAll(".fade-up");

  function revealOnScroll() {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();

      if (rect.top < window.innerHeight - 100) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // trigger once on load

});
const thoughts = [
  { text: "Make your own mark.", emoji: "✨" },
  { text: "Walk like you own the place.", emoji: "🔥" },
  { text: "Build. Break. Repeat..", emoji: "🚀" },
  { text: "Think different. Code smarter..", emoji: "💡" },
  { text: "Stay hungry. Stay foolish..", emoji: "😎" }
];

let index = 0;
let charIndex = 0;
let isDeleting = false;

const textEl = document.getElementById("typed-main");
const emojiEl = document.getElementById("typed-emoji");

function typeEffect() {
  let current = thoughts[index];

  if (!isDeleting) {
    textEl.textContent = current.text.substring(0, charIndex++);
  } else {
    textEl.textContent = current.text.substring(0, charIndex--);
  }

  emojiEl.textContent = current.emoji;

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === current.text.length) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % thoughts.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();