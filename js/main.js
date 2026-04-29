/* ── CURSOR ──────────────────────────────────────────────────── */
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
let mx = 0, my = 0, fx = 0, fy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  if (cursor) { cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; }
});

function animateFollower() {
  fx += (mx - fx) * 0.12;
  fy += (my - fy) * 0.12;
  if (follower) { follower.style.left = fx + 'px'; follower.style.top = fy + 'px'; }
  requestAnimationFrame(animateFollower);
}
animateFollower();

// Scale follower on hoverable elements
document.querySelectorAll('a, button, input, textarea').forEach(el => {
  el.addEventListener('mouseenter', () => {
    if (follower) { follower.style.transform = 'translate(-50%,-50%) scale(2)'; follower.style.borderColor = 'rgba(201,168,76,0.4)'; }
  });
  el.addEventListener('mouseleave', () => {
    if (follower) { follower.style.transform = 'translate(-50%,-50%) scale(1)'; follower.style.borderColor = 'var(--gold)'; }
  });
});

/* ── NAV ─────────────────────────────────────────────────────── */
const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

navToggle?.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

navLinks?.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

/* ── REVEAL ON SCROLL ────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── SKILL BARS ──────────────────────────────────────────────── */
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.bar-fill').forEach(bar => {
        const pct = bar.dataset.pct;
        bar.style.width = pct + '%';
      });
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const barsSection = document.querySelector('.proficiency-bars');
if (barsSection) barObserver.observe(barsSection);

/* ── ACTIVE NAV LINK ─────────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinkEls.forEach(link => link.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

/* ── CONTACT FORM ────────────────────────────────────────────── */
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    status.textContent = 'Please fill in all fields.';
    return;
  }

  // Build mailto link
  const subject = encodeURIComponent(`Portfolio Enquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:upamaupadhyay@gmail.com?subject=${subject}&body=${body}`;

  status.textContent = '✓ Opening your email client...';
  form.reset();
  setTimeout(() => { status.textContent = ''; }, 4000);
});

/* ── SMOOTH PARALLAX ON HERO ─────────────────────────────────── */
const heroContent = document.querySelector('.hero-content');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (heroContent && scrolled < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrolled * 0.25}px)`;
    heroContent.style.opacity = 1 - scrolled / (window.innerHeight * 0.8);
  }
}, { passive: true });

/* ── TYPED EFFECT IN HERO ────────────────────────────────────── */
const phrases = [
  'data-driven decisions.',
  'actionable insights.',
  'strategic clarity.',
  'measurable outcomes.',
];
const heroSub = document.querySelector('.hero-sub');
if (heroSub) {
  let phraseIdx = 0;
  let charIdx = 0;
  let deleting = false;
  const prefix = 'Bridging business strategy & ';

  function typeLoop() {
    const current = phrases[phraseIdx];
    if (!deleting) {
      heroSub.innerHTML = prefix + current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1800);
        return;
      }
    } else {
      heroSub.innerHTML = prefix + current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }
    setTimeout(typeLoop, deleting ? 45 : 65);
  }
  // Start after hero reveal
  setTimeout(typeLoop, 1200);
}

/* ── CARD TILT EFFECT ────────────────────────────────────────── */
document.querySelectorAll('.project-card, .skill-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const tiltX = (y / rect.height) * 6;
    const tiltY = -(x / rect.width) * 6;
    card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ── PAGE LOAD ANIMATION ─────────────────────────────────────── */
window.addEventListener('load', () => {
  document.body.style.opacity = 0;
  requestAnimationFrame(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = 1;
  });
});
