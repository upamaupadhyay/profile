# Upama Upadhyay — Portfolio Website

A stunning, interactive portfolio website built with pure HTML, CSS, and JavaScript — no build tools or dependencies required. Fully optimised for GitHub Pages deployment.

---

## ✨ Features

- **Editorial magazine aesthetic** — dark ink + warm cream palette, Cormorant Garamond serif display font
- **Custom cursor** with smooth follower animation
- **Scroll-triggered reveal animations** using IntersectionObserver
- **Typing effect** in the hero section
- **3D card tilt** on project and skill cards
- **Animated skill progress bars**
- **Responsive** — fully mobile-optimised with hamburger nav
- **Contact form** using native mailto
- **No build step** — deploy as-is

---

## 📁 File Structure

```
portfolio/
├── index.html          ← Main entry point
├── css/
│   └── style.css       ← All styles (CSS custom properties, animations)
├── js/
│   └── main.js         ← All interactivity (cursor, scroll, form, etc.)
├── images/             ← Add your images here
└── README.md           ← You are here
```

---

## 🚀 Deploying to GitHub Pages

### Option A — New Repository (Recommended)

1. **Create a new GitHub repository**
   - Go to [github.com/new](https://github.com/new)
   - Name it `your-username.github.io` (for a user site) **or** any name (for a project site)
   - Set visibility to **Public**
   - Do **not** initialise with a README (you'll push your own)

2. **Upload the files**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repo → **Settings** → **Pages**
   - Under *Source*, select **Deploy from a branch**
   - Branch: `main` | Folder: `/ (root)`
   - Click **Save**

4. **Your site will be live at:**
   - `https://YOUR_USERNAME.github.io` (user site)
   - `https://YOUR_USERNAME.github.io/REPO_NAME` (project site)

---

### Option B — Drag & Drop (No Terminal)

1. Create a new public repo on GitHub
2. Click **Add file → Upload files**
3. Drag the entire portfolio folder contents
4. Commit directly to `main`
5. Enable GitHub Pages as in Step 3 above

---

## 🎨 Customisation

### Update Personal Details
Edit `index.html` — find and replace:
- `Upama Upadhyay` → your name
- `upamaupadhyay@gmail.com` → your email
- `+91-7906777129` → your phone
- `linkedin.com/in/upamaupadhyay` → your LinkedIn
- All job/project descriptions in the relevant sections

### Change Colour Scheme
In `css/style.css`, update the `:root` block:
```css
:root {
  --ink:   #0d0d0d;   /* dark background */
  --cream: #f5f0e8;   /* light background */
  --gold:  #c9a84c;   /* accent colour    */
}
```

### Add a Profile Photo
1. Add your image to the `images/` folder (e.g., `images/profile.jpg`)
2. In `index.html`, replace the `.about-initials` block with:
```html
<img src="images/profile.jpg" alt="Upama Upadhyay" class="about-photo" />
```
3. Add to `css/style.css`:
```css
.about-photo { width: 100%; border-radius: 4px; object-fit: cover; }
```

### Add Real Projects with Links
Find each `.project-card` in `index.html` and add a link button inside `.project-body`:
```html
<a href="https://github.com/yourrepo" target="_blank" class="inline-link" style="margin-top:12px; display:inline-block;">
  View Project →
</a>
```

---

## 🛠 Technical Notes

- **Fonts**: Loaded from Google Fonts (Cormorant Garamond + DM Sans + DM Mono). Requires internet connection.
- **No frameworks**: Pure HTML/CSS/JS — zero npm, zero build step.
- **Browser support**: All modern browsers. Custom cursor hidden on touch devices.
- **Performance**: Lazy-loading via IntersectionObserver. Animations use CSS transforms (GPU-accelerated).
- **Contact form**: Uses `mailto:` — opens the user's default email client. For a server-side form, integrate [Formspree](https://formspree.io) or [EmailJS](https://emailjs.com).

---

## 📬 Contact Integration (Optional Upgrade)

To make the contact form send emails without opening a mail client, use **Formspree**:

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a form and copy your form ID
3. Update the form in `index.html`:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
4. Remove the form's JavaScript event handler from `main.js`

---

## 📄 Licence

This portfolio is for personal use. Feel free to adapt the structure and design for your own portfolio.
