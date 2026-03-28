# GameDay Express 🏟️

**GameDay Express** is a high-performance, curated sports portal designed for enthusiasts, fantasy players, and bettors. It centralizes mission-critical links across major sports, analytics, and development tools into a single, lightning-fast interface.

## 🚀 Key Features

### 🛠️ Data-Driven Architecture
The site has transitioned from static HTML to a dynamic, data-driven system. All links and categories are managed in `links-data.js`, allowing for:
- **Instant Updates:** Modify one file to update the entire portal.
- **Dynamic Filtering:** Real-time search and category toggling without page reloads.
- **Code Protection:** Core data is separated from presentation logic.

### 👤 Personalized Experience
- **Onboarding Wizard:** New users are greeted with a "Personalize Your Feed" modal to select their preferred sports (NFL, MLB, NBA, NHL, etc.).
- **Smart Persistence:** Preferences are saved locally, ensuring the site remains clean and relevant on every return visit.
- **Manual Control:** A "Personalize" button in the navigation allows for easy preference updates at any time.

### 📱 Optimized for Mobile
- **Responsive Sticky Header:** A persistent brand presence with a search bar that automatically resizes to prevent overlap.
- **Dense Grid Flow:** Uses advanced CSS `grid-auto-flow: dense` to fill layout gaps, significantly reducing vertical scrolling.
- **Optimized Assets:** High-quality **WebP** banners optimized for both desktop (150KB) and mobile (33KB), reducing data usage by over 90%.

### 🔒 Security & Integrity
- **Domain Locking:** Built-in protection logic to prevent unauthorized mirrors of the source code.
- **Brand Integrity:** Automated checks to ensure core branding elements remain intact.

## 🛠️ Tech Stack
- **Frontend:** Vanilla JavaScript (ES6+), Modern CSS3 (Grid/Flexbox), HTML5.
- **Performance:** WebP Image Optimization via FFmpeg.
- **PWA:** Manifest and Service Worker support for offline capabilities and home-screen installation.
- **Deployment:** GitHub Pages.

## 📂 Maintenance Guide

To add or update links, simply edit the `links-data.js` file. The structure is as follows:

```javascript
{
  zone: "FANTASY",
  category: "Fantasy Baseball",
  icon: "⚾",
  tags: "baseball mlb rankings",
  links: [
    { name: "FanGraphs", url: "https://www.fangraphs.com", top: true },
    { name: "Pitcher List", url: "https://www.pitcherlist.com" }
  ]
}
```

## 📬 Contact
**Mathew Walls**  
[wallsmd70@yahoo.com](mailto:wallsmd70@yahoo.com)  
[LinkedIn Profile](https://linkedin.com/in/mathew-walls)

---
© 2026 GameDay Express — A curated sports portal.
