# Anisha Baral | Professional Educator Portfolio

A modern, responsive, and highly interactive single-page portfolio website designed for a professional Science teacher and tutor. The design is trustworthy, academic, and student-friendly—perfect for showcasing teaching credentials, qualifications, skills, achievements, and testimonials.

---

## 🚀 Live Demo & Preview

To preview the website locally:
1. Clone or download this repository.
2. Open [index.html](file:///c:/Users/Anupam%20Baral/Desktop/anisha/index.html) directly in any modern web browser, or serve it using a local development server (such as VS Code's Live Server extension).

---

## 🎨 Key Features

* **Responsive Grid/Flexbox Layout**: Optimized for all screen sizes, including mobile phones, tablets, laptops, and 4K displays.
* **Non-Overlapping Portrait Badges**: Credential badges (`2+ Years Experience` and `+2 Science`) are grouped below the profile image, ensuring 100% portrait visibility on all viewports.
* **Light Mode by Default**: Opens in a clean, high-contrast academic light theme.
* **Interactive Theme Switcher**: A theme-toggle button allows users to manually switch to a premium dark theme. Selected theme preferences are saved in `localStorage` to persist after page refreshes.
* **Dynamic Testimonials Slider**: Reviews from students, parents, and colleagues are loaded dynamically from a JavaScript data array (`reviewsData`), featuring rating stars, transitions, and hover-paused autoplay.
* **Scroll-Reveal Animations**: Visual cards, timelines, and statistics fade and slide into view gracefully as the user scrolls.
* **Animated Skills Counter**: Interactive skill progress bars fill up dynamically only when scrolled into viewport range.
* **Validated Contact Form**: Full client-side inputs verification (name, subject, message, and standard email regex) with active error indicators and a simulated success popup state.

---

## 📂 Project Structure

```text
/ (Workspace Root)
├── index.html         # Main page markup with structured HTML5 elements
├── styles.css         # Custom layout rules, color tokens, and layout styles
├── script.js         # Interactive scroll events, sliders, validation, and theme switching
├── README.md          # Project documentation (this file)
└── assets/            # Directory containing media and document assets
    ├── profile.jpg    # Professional educator portrait (Place yours here!)
    ├── resume.pdf     # Downloadable teacher resume document (Place yours here!)
    └── README.md      # Local instructions for asset replacements
```

---

## 🔧 Personalization & Setup

You can easily customize the site content:

### 1. Adding Your Profile Photo & Resume
Save your custom files inside the `assets/` directory with the following exact names:
- **`profile.jpg`**: Your professional headshot (recommended size: `340px` wide by `380px` high).
- **`resume.pdf`**: Your educational resume/CV document.
*Note: If no profile photo is found, the webpage loads a high-quality fallback teacher photo from Unsplash.*

### 2. Updating Testimonials / Reviews
Open **[script.js](file:///c:/Users/Anupam%20Baral/Desktop/anisha/script.js#L151-L182)** and locate the `reviewsData` array. You can easily add, edit, or delete items inside this array:
```javascript
const reviewsData = [
  {
    name: "Reviewer Name",
    role: "Relationship (e.g., Student, Parent)",
    text: "Your feedback text goes here...",
    rating: 5, // Rating out of 5 stars
    image: ""  // Path to custom reviewer avatar (optional)
  }
];
```

### 3. Modifying General Content
All text content (bio, education milestones, teaching history, achievements, and contact details) can be edited directly inside the HTML sections of **[index.html](file:///c:/Users/Anupam%20Baral/Desktop/anisha/index.html)**.

---

## 🛠️ Technology Stack

* **Structure**: Semantic HTML5 markup
* **Styling**: Vanilla CSS3 (Custom Properties / CSS variables, Grid, Flexbox, Keyframes)
* **Interactivity**: Vanilla JavaScript (ES6+, Intersection Observer API, LocalStorage)
* **Icons**: [FontAwesome 6.4 (via CDN)](https://cdnjs.com/)
* **Typography**: Google Fonts ([Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) & [Lora Serif](https://fonts.google.com/specimen/Lora))

---

## 📄 License & Copyright

Designed with passion for academic and tutoring professionals. Feel free to use and customize this template for personal use.

&copy; 2026 Anisha Baral. All rights reserved.
