# User Guide — CGV Cinemas Vietnam (Frontend)

**Student:** Huy (MSSV: 2374802010778)  
**GitHub repository:** https://github.com/Biidayy/CGV_WebsiteFE  
**Published website:** https://biidayy.github.io/CGV_WebsiteFE/

---

## 1. Introduction

This project is a front-end clone of the CGV Cinemas Vietnam website. It lets users browse movies and cinemas, open movie details with trailers, add favorites, and complete a mocked ticket-booking flow (seat selection) stored in the browser.

The site is built with HTML, CSS, and JavaScript only. There is no real login, payment gateway, or backend API.

---

## 2. System Requirements

| Item | Requirement |
|------|-------------|
| Device | Desktop, laptop, or mobile phone |
| Browser | Chrome, Edge, Firefox, or Safari (latest 2 versions recommended) |
| JavaScript | Must be enabled |
| Network | Required for images/CDN assets and the published GitHub Pages URL |
| Storage | `localStorage` enabled (used for favorites and tickets) |

No special software install is needed to use the published site.

---

## 3. How to Access the Website

### Option A — Published site (recommended for grading)

1. Open a browser.
2. Go to: **https://biidayy.github.io/CGV_WebsiteFE/**
3. You will be redirected to the home page under `/cgv/`.

Direct home URL: **https://biidayy.github.io/CGV_WebsiteFE/cgv/**

### Option B — GitHub repository

1. Open: **https://github.com/Biidayy/CGV_WebsiteFE**
2. Confirm the repository is **Public**.
3. Browse source files in the `cgv/` folder.

### Option C — Run locally

1. Clone or download the repository.
2. Open `cgv/index.html` with a local static server (recommended), for example:

```bash
cd cgv
npx --yes serve .
```

3. Open the URL shown in the terminal (usually `http://localhost:3000`).

---

## 4. Features Overview

### Main browsing pages

- **Home (`index.html`)** — hero banner, movie selection carousel, events
- **Now showing / Coming soon** — movie lists with search & filters
- **Cinemas** — all cinemas, special formats, 3D formats
- **Movie detail** — info, formats, trailer, link to book tickets
- **Book tickets (mock)** — choose session & seats, save ticket locally
- **My tickets / Favorites** — view saved tickets and favorite movies

### Extra features (beyond basic static pages)

- Search and filter movies by title/genre/format/rating
- Favorite movies (heart button) via `localStorage`
- Mock seat booking and “My tickets”
- Toast notifications
- Back-to-top button
- Responsive header with mobile menu

---

## 5. Step-by-Step Instructions

### 5.1 Browse movies on the home page

1. Open the website URL.
2. On the home page, view the hero slider and the **Movie Selection** rail.
3. Click a movie poster to open **Movie detail**.

### 5.2 Search and filter movies

1. Open **PHIM → Phim Đang Chiếu** (or Phim Sắp Chiếu).
2. Type a title/genre in the search box.
3. Optionally choose Genre / Format / Rating filters.
4. Click **Reset** to clear filters if needed.

### 5.3 View movie details and trailer

1. From a listing or home carousel, open a movie.
2. Review synopsis, runtime, rating, and formats.
3. Play the trailer (when available).
4. Click the booking / buy-ticket action to continue.

### 5.4 Book a ticket (mock flow)

1. On the booking page, select city/cinema/session as available on the screen.
2. Choose one or more empty seats on the seat map.
3. Confirm booking.
4. The ticket is saved in browser storage (not a real payment).

### 5.5 Manage favorites and tickets

1. On a movie card/detail, click the favorite (heart) control.
2. Open **YÊU THÍCH** or **VÉ CỦA TÔI** from the top bar / menu.
3. Review saved favorites and booked tickets.
4. Clearing browser data / localStorage will reset these items.

### 5.6 Explore cinemas

1. Open **RẠP CGV → Tất Cả Các Rạp**.
2. Switch city/filter options if shown.
3. Visit **Rạp Đặc Biệt** and **Rạp 3D** for format information.

---

## 6. Screenshots

Place the following screenshots in this PDF (or attach them in the submission folder `docs/screenshots/`):

| # | File name | Description |
|---|-----------|-------------|
| 1 | `01-home.png` | Home page with hero and movie selection |
| 2 | `02-now-showing.png` | Now-showing list with filters |
| 3 | `03-movie-detail.png` | Movie detail + trailer area |
| 4 | `04-booking.png` | Seat selection / booking page |
| 5 | `05-my-tickets.png` | My tickets / Favorites page |

> Screenshots are generated into `docs/screenshots/` when preparing this submission.

---

## 7. Known Limitations

- Frontend-only mock: **no real login, payment, or server API**.
- Tickets and favorites are stored in **browser `localStorage`** only.
- Some menu items (Cultureplex, member login, etc.) are placeholders (`#`).
- Movie/cinema data is static demo data in `js/data.js`.
- External image/CDN assets need an internet connection.
- Not an official CGV product — for coursework/demo purposes only.

---

## 8. Submission Checklist

Before submitting, confirm:

- [x] The published website works: https://biidayy.github.io/CGV_WebsiteFE/
- [x] The GitHub repository is **Public**: https://github.com/Biidayy/CGV_WebsiteFE
- [x] Main navigation links under `cgv/` are accessible
- [x] This User Guide PDF includes all required sections and is readable
- [x] Screenshots are included (section 6)
- [x] Student identity / MSSV is stated on the cover of this guide

---

## Quick links for markers

| Item | URL |
|------|-----|
| Published site | https://biidayy.github.io/CGV_WebsiteFE/ |
| Home (direct) | https://biidayy.github.io/CGV_WebsiteFE/cgv/ |
| Repository | https://github.com/Biidayy/CGV_WebsiteFE |
| Source folder | `cgv/` |
