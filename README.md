# 📸 Responsive Image Gallery

A modern and responsive **Image Gallery website** built using **HTML, CSS, and JavaScript**. The project allows users to browse images by category, open images in a full-screen lightbox, navigate between images, and switch between light and dark themes. Readme

## ✨ Features

- **Category Filtering** – Filter images by:
  - All
  - Nature
  - Architecture
  - People
- **Lightbox Preview** – Click any image to view it in a full-screen overlay.
- **Next/Previous Navigation** – Easily move between images while viewing them in the lightbox.
- **Light/Dark Mode** – Switch between light and dark themes.
- **Theme Persistence** – The selected theme is saved using `localStorage`, so it remains after refreshing the page.
- **Responsive Design** – Works smoothly on desktop, tablet, and mobile devices.
- **Image Hover Effect** – Images smoothly zoom when the user hovers over them.
- **Smooth Animations** – Includes transitions and lightbox fade-in effects. Readme

## 🛠️ Technologies Used

- **HTML5** – Used to create the structure of the gallery, filters, buttons, and lightbox. index
- **CSS3** – Used for styling, responsive layouts, hover effects, animations, lightbox design, and themes. style
- **JavaScript (ES6)** – Used for category filtering, lightbox functionality, image navigation, and theme management. script
- **LocalStorage** – Used to remember the user's selected light/dark theme. script

## 📁 Project Structure

```text
Image-Gallery/
│
├── index.html
├── style.css
├── script.js
│
└── images/
    ├── image1.jpg
    ├── image2.jpg
    ├── image3.jpg
    ├── image4.jpg
    ├── image6.jpg
    ├── image9.jpg
    ├── image10.jpg
    ├── image11.jpg
    ├── image13.jpg
    └── image15.jpg
```

The HTML assigns each image to a category such as `nature`, `architecture`, or `people`, which is then used by JavaScript for filtering. index

## 🚀 How to Run

1. Download or clone the project.
2. Make sure the `images` folder is present in the project directory.
3. Open `index.html` in any modern web browser.
4. Use the category buttons to filter images.
5. Click an image to open the lightbox.
6. Use the **Previous** and **Next** buttons to navigate.
7. Click **Dark Mode** to switch themes.

No backend or database is required.

## ⚙️ How It Works

### Category Filtering

When a category button is clicked, JavaScript checks each gallery item's `data-category` attribute and displays only matching images. script

### Lightbox

Clicking an image opens the selected image in a full-screen lightbox. The JavaScript dynamically updates the lightbox image source and provides Previous/Next navigation. script

### Dark Mode

The theme toggle adds or removes the `dark` class from the `<body>`. The selected theme is stored in `localStorage`, allowing the preference to remain after refreshing the page. script

### Responsive Layout

The gallery uses CSS Grid with responsive columns, allowing the layout to automatically adjust according to screen size. style

## 🎯 Learning Outcomes

Through this project, I learned how to:

- Build a responsive website using HTML and CSS.
- Create dynamic UI interactions using JavaScript.
- Implement category-based filtering.
- Build a functional image lightbox.
- Implement Previous/Next image navigation.
- Use `localStorage` for persistent user preferences.
- Apply responsive CSS Grid layouts.
- Add animations and interactive hover effects.
  


This project is created for **educational and portfolio purposes**.
