# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

### Primary

- White: hsl(0, 0%, 100%)
- Black: hsl(0, 0%, 0%)
- Grey 200: hsl(0, 0%, 85%)

### Neutral

## Typography

### Body Copy

- Font size: 15px

### Fonts

- Family: [Alata](https://fonts.google.com/specimen/Alata)
- Weight: 400

- Family: [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans)
- Weight: 300

## Icons

We provide the required social icons. But, if you prefer, you can use a font icon library. Some suggestions can be found below:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)

> 💎 [Upgrade to Pro](https://www.frontendmentor.io/pro?ref=style-guide) for design file access to see all design details and get hands-on experience using a professional workflow with tools like Figma.


.creations-container {
  max-width: 1110px;
  margin: 0 auto;
  padding: 80px 20px;
}

.creations-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
}

.creations-header h2 {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 3rem;
  font-weight: 300;
  text-transform: uppercase;
}

.btn-see-all {
  background: transparent;
  border: 2px solid black;
  padding: 10px 40px;
  font-family: 'Alata', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-see-all:hover {
  background-color: black;
  color: white;
}

/* Responsive 4-column layout matching the design reference */
.creations-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* Gradient overlay to make text visible over cards */
.card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  transition: background 0.3s ease;
}

.card h3 {
  position: absolute;
  bottom: 30px;
  left: 30px;
  z-index: 2;
  color: white;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 2rem;
  font-weight: 300;
  line-height: 1;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

/* Hover effects */
.card:hover img {
  opacity: 0.4;
  transform: scale(1.05);
}

.card:hover h3 {
  color: black;
}

.card:hover::after {
  background: rgba(255, 255, 255, 0.6);
}