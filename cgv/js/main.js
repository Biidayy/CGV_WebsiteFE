function rateClass(rating) {
  const key = String(rating || "P").toLowerCase();
  if (key === "p") return "rate-p";
  if (key === "k") return "rate-k";
  if (key === "t13") return "rate-t13";
  if (key === "t16") return "rate-t16";
  if (key === "t18") return "rate-t18";
  return "rate-p";
}

function renderHeader(active) {
  const ticketCount = typeof getTickets === "function" ? getTickets().length : 0;
  const favCount = typeof getFavorites === "function" ? getFavorites().length : 0;
  return `
  <div class="top-ad">
    <a href="#"><img src="${CGV_ASSETS.topAd}" alt="CGV khuyến mãi" onerror="this.parentElement.style.display='none'"></a>
  </div>
  <div class="utility-bar">
    <div class="utility-bar-inner">
      <a href="#">TIN MỚI & ƯU ĐÃI</a>
      <a href="ve-cua-toi.html">VÉ CỦA TÔI${ticketCount ? ` (${ticketCount})` : ""}</a>
      <a href="ve-cua-toi.html#favorites">YÊU THÍCH${favCount ? ` (${favCount})` : ""}</a>
      <a href="hosocanhan.html">HỒ SƠ</a>
      <a href="dangnhap.html">ĐĂNG NHẬP/ ĐĂNG KÝ</a>
      <div class="lang-switch"><span class="active">VN</span><span>EN</span></div>
    </div>
  </div>
  <header class="site-header">
    <div class="header-row">
      <a class="logo" href="index.html"><img src="${CGV_ASSETS.logo}" alt="CGV Cinemas"></a>
      <button class="menu-toggle" type="button" aria-label="Menu">☰</button>
      <ul class="main-nav">
        <li class="${active === "phim" ? "active" : ""}">
          <a href="phim-dang-chieu.html">PHIM</a>
          <div class="dropdown">
            <a href="phim-dang-chieu.html">Phim Đang Chiếu</a>
            <a href="phim-sap-chieu.html">Phim Sắp Chiếu</a>
          </div>
        </li>
        <li class="${active === "rap" ? "active" : ""}">
          <a href="tat-ca-cac-rap.html">RẠP CGV</a>
          <div class="dropdown">
            <a href="tat-ca-cac-rap.html">Tất Cả Các Rạp</a>
            <a href="rap-dac-biet.html">Rạp Đặc Biệt</a>
            <a href="rap-3d.html">Rạp 3D</a>
          </div>
        </li>
        <li class="${active === "account" ? "active" : ""}">
          <a href="ve-cua-toi.html">VÉ CỦA TÔI</a>
        </li>
        <li><a href="#">CULTUREPLEX</a>
          <div class="dropdown">
            <a href="#">Quầy Online</a>
            <a href="#">Thuê Rạp & Vé Nhóm</a>
            <a href="#">CGV eGift</a>
            <a href="#">CGV Rules</a>
          </div>
        </li>
      </ul>
      <a class="btn-buy-ticket" href="phim-dang-chieu.html">
        <img src="${CGV_ASSETS.buyTicket}" alt="Mua vé ngay">
      </a>
    </div>
  </header>`;
}

function renderQuickIcons() {
  return `<nav class="quick-icons">${QUICK_ICONS.map((i) => `
    <a href="${i.href}">
      <span class="quick-icon-emoji">${i.emoji}</span>
      <span><strong>${i.en}</strong><small>${i.vi}</small></span>
    </a>`).join("")}</nav>`;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="footer-brands">
      <a href="rap-dac-biet.html">4DX</a>
      <a href="rap-dac-biet.html">IMAX</a>
      <a href="rap-dac-biet.html">Starium</a>
      <a href="rap-dac-biet.html">Gold Class</a>
      <a href="rap-dac-biet.html">L'Amour</a>
      <a href="rap-dac-biet.html">Sweetbox</a>
      <a href="rap-dac-biet.html">Premium</a>
      <a href="rap-dac-biet.html">ScreenX</a>
      <a href="rap-dac-biet.html">Cine & Foret</a>
      <a href="rap-3d.html">Cine Suite</a>
    </div>
    <div class="footer-main">
      <div>
        <h4>CGV Việt Nam</h4>
        <ul>
          <li><a href="#">Giới Thiệu</a></li>
          <li><a href="#">Tiện Ích Online</a></li>
          <li><a href="#">Thẻ Quà Tặng</a></li>
          <li><a href="#">Tuyển Dụng</a></li>
          <li><a href="#">Liên Hệ Quảng Cáo CGV</a></li>
          <li><a href="#">Dành Cho Đối Tác</a></li>
        </ul>
      </div>
      <div>
        <h4>Điều khoản sử dụng</h4>
        <ul>
          <li><a href="#">Điều Khoản Chung</a></li>
          <li><a href="#">Điều Khoản Giao Dịch</a></li>
          <li><a href="#">Chính Sách Thanh Toán</a></li>
          <li><a href="#">Chính Sách Bảo Mật</a></li>
          <li><a href="#">Những Quy Định Tại Rạp Phim</a></li>
          <li><a href="#">Câu Hỏi Thường Gặp</a></li>
        </ul>
      </div>
      <div>
        <h4>Chăm sóc khách hàng</h4>
        <ul>
          <li>Hotline: 1900 6017</li>
          <li>Giờ làm việc: 8:00 - 22:00</li>
          <li>Email: hoidap@cgv.vn</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      CÔNG TY TNHH CJ CGV VIỆT NAM · Hotline 1900 6017 · COPYRIGHT CJ CGV VIETNAM
    </div>
  </footer>`;
}

function homeMovieCard(movie) {
  return `
  <article class="movie-card">
    <span class="movie-rating ${rateClass(movie.rating)}">${movie.rating}</span>
    <img class="poster" src="${movie.poster}" alt="${movie.title}" loading="lazy"
         onerror="this.src='https://placehold.co/240x388/222/e71a0f?text=CGV'">
    <div class="movie-hover">
      <h3>${movie.title}</h3>
      <a class="btn-detail" href="chi-tiet-phim.html?id=${movie.id}">Xem chi tiết</a>
      <a class="btn-book" href="dat-ve.html?id=${movie.id}">Mua vé</a>
    </div>
  </article>`;
}

function filmListCard(movie) {
  const formats = (movie.formats || []).map((f) => `<span>${f}</span>`).join("");
  const rank = movie.rank ? `<div class="film-rank">${movie.rank}</div>` : "";
  const liked = typeof isFavorite === "function" && isFavorite(movie.id);

  return `
  <article class="film-card" data-id="${movie.id}">
    <div class="film-poster-wrap">
      <span class="film-rating ${rateClass(movie.rating)}">${movie.rating}</span>
      ${rank}
      <button type="button" class="btn-fav ${liked ? "active" : ""}" data-fav="${movie.id}" title="Yêu thích">♥</button>
      <a href="chi-tiet-phim.html?id=${movie.id}">
        <img src="${movie.poster}" alt="${movie.title}" loading="lazy"
             onerror="this.src='https://placehold.co/190x260/222/e71a0f?text=CGV'">
      </a>
    </div>
    <div class="film-formats">${formats}</div>
    <h2 class="film-name"><a href="chi-tiet-phim.html?id=${movie.id}">${movie.title}</a></h2>
    <div class="film-info">
      <div class="film-info-row"><span class="label">Thể loại: </span><span class="value">${movie.genre}</span></div>
      <div class="film-info-row"><span class="label">Thời lượng: </span><span class="value">${movie.duration}</span></div>
      <div class="film-info-row"><span class="label">Khởi chiếu: </span><span class="value">${movie.release}</span></div>
    </div>
    <div class="film-actions">
      <a class="btn-mua-ve" href="dat-ve.html?id=${movie.id}">Mua vé</a>
    </div>
  </article>`;
}

function mountShell(active) {
  const headerHost = document.getElementById("site-header-host");
  const footerHost = document.getElementById("site-footer-host");
  if (headerHost) headerHost.innerHTML = renderHeader(active);
  if (footerHost) footerHost.innerHTML = renderFooter();
  const iconsHost = document.getElementById("quick-icons-host");
  if (iconsHost) iconsHost.innerHTML = renderQuickIcons();
  document.querySelector(".menu-toggle")?.addEventListener("click", () => {
    document.querySelector(".main-nav")?.classList.toggle("open");
  });
}

function initBackToTop() {
  let btn = document.getElementById("fe-back-top");
  if (!btn) {
    btn = document.createElement("button");
    btn.id = "fe-back-top";
    btn.type = "button";
    btn.className = "fe-back-top";
    btn.setAttribute("aria-label", "Cuộn lên đầu trang");
    btn.title = "Lên đầu trang";
    btn.innerHTML = "↑";
    document.body.appendChild(btn);
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  const toggle = () => {
    btn.classList.toggle("show", window.scrollY > 320);
  };
  window.addEventListener("scroll", toggle, { passive: true });
  toggle();
}

function initHero() {
  const track = document.getElementById("hero-track");
  const dots = document.getElementById("hero-dots");
  if (!track) return;
  track.innerHTML = HERO_SLIDES.map((src) => `<div class="hero-slide"><img src="${src}" alt="CGV banner"></div>`).join("");
  if (dots) {
    dots.innerHTML = HERO_SLIDES.map((_, i) =>
      `<button type="button" class="${i === 0 ? "active" : ""}" aria-label="Slide ${i + 1}"></button>`
    ).join("");
  }
  let index = 0;
  const go = (i) => {
    index = (i + HERO_SLIDES.length) % HERO_SLIDES.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots?.querySelectorAll("button").forEach((b, bi) => b.classList.toggle("active", bi === index));
  };
  document.querySelector(".hero-nav.next")?.addEventListener("click", () => go(index + 1));
  document.querySelector(".hero-nav.prev")?.addEventListener("click", () => go(index - 1));
  dots?.querySelectorAll("button").forEach((b, i) => b.addEventListener("click", () => go(i)));
  setInterval(() => go(index + 1), 4500);
}

function initRails() {
  document.querySelectorAll("[data-rail]").forEach((wrap) => {
    const rail = wrap.querySelector(".movie-rail, .event-rail");
    wrap.querySelector(".rail-btn.prev")?.addEventListener("click", () => rail.scrollBy({ left: -420, behavior: "smooth" }));
    wrap.querySelector(".rail-btn.next")?.addEventListener("click", () => rail.scrollBy({ left: 420, behavior: "smooth" }));
  });
}

function renderHomeMovies() {
  const el = document.getElementById("home-movies");
  if (!el) return;
  el.innerHTML = MOVIES_NOW.slice(0, 10).map(homeMovieCard).join("");
}

function renderEvents() {
  const el = document.getElementById("home-events");
  if (!el) return;
  el.innerHTML = EVENTS.map((e) => `
    <a class="event-card" href="#" title="${e.title}">
      <img src="${e.image}" alt="${e.title}" loading="lazy">
    </a>`).join("");
}

function getFilteredMovies() {
  const coming = document.body.dataset.movies === "coming";
  let list = coming ? [...MOVIES_COMING] : [...MOVIES_NOW];
  const q = (document.getElementById("filter-search")?.value || "").trim().toLowerCase();
  const genre = document.getElementById("filter-genre")?.value || "all";
  const format = document.getElementById("filter-format")?.value || "all";
  const rating = document.getElementById("filter-rating")?.value || "all";

  if (q) list = list.filter((m) => m.title.toLowerCase().includes(q) || m.genre.toLowerCase().includes(q));
  if (genre !== "all") list = list.filter((m) => m.genre.toLowerCase().includes(genre.toLowerCase()));
  if (format !== "all") list = list.filter((m) => (m.formats || []).includes(format));
  if (rating !== "all") list = list.filter((m) => m.rating === rating);
  return list;
}

function renderMovieGrid() {
  const el = document.getElementById("movie-grid");
  if (!el) return;
  const list = document.getElementById("filter-search") ? getFilteredMovies()
    : (document.body.dataset.movies === "coming" ? MOVIES_COMING : MOVIES_NOW);
  const empty = document.getElementById("filter-empty");
  if (!list.length) {
    el.innerHTML = "";
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;
  el.innerHTML = list.map((m) => filmListCard(m)).join("");
  bindFavoriteButtons(el);
}

function initMovieFilters() {
  const toolbar = document.getElementById("movie-toolbar");
  if (!toolbar) return;
  ["filter-search", "filter-genre", "filter-format", "filter-rating"].forEach((id) => {
    document.getElementById(id)?.addEventListener("input", renderMovieGrid);
    document.getElementById(id)?.addEventListener("change", renderMovieGrid);
  });
  document.getElementById("filter-reset")?.addEventListener("click", () => {
    toolbar.querySelectorAll("input, select").forEach((el) => {
      if (el.tagName === "SELECT") el.value = "all";
      else el.value = "";
    });
    renderMovieGrid();
  });
}

function bindFavoriteButtons(root = document) {
  root.querySelectorAll("[data-fav]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.dataset.fav;
      const on = toggleFavorite(id);
      btn.classList.toggle("active", on);
      showToast(on ? "Đã thêm vào Yêu thích" : "Đã bỏ khỏi Yêu thích");
      mountShell(document.body.dataset.active || "");
    });
  });
}

function initCities() {
  const box = document.getElementById("city-columns");
  const list = document.getElementById("theater-list");
  if (!box || !list) return;

  box.innerHTML = CITIES.map((c) => `<button type="button" data-city="${c}">${c}</button>`).join("");

  const show = (city) => {
    box.querySelectorAll("button").forEach((b) => b.classList.toggle("active", b.dataset.city === city));
    const theaters = THEATERS[city] || [`CGV ${city} (đang cập nhật địa điểm)`];
    list.innerHTML = `
      <div class="theater-result">
        <h3>Rạp CGV tại ${city}</h3>
        <div class="theater-result-list">${theaters.map((t) => `<a href="chi-tiet-rap.html">${t}</a>`).join("")}</div>
      </div>`;
  };

  box.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => show(btn.dataset.city));
  });
  show("Hồ Chí Minh");
}

function renderSpecialPage() {
  const tech = document.getElementById("special-tech");
  const style = document.getElementById("special-style");
  const card = (t) => `
    <a class="special-visual-card" href="#">
      <img src="${t.image}" alt="${t.tag}" loading="lazy">
      <div class="overlay"><strong>${t.tag}</strong><span>${t.desc}</span></div>
    </a>`;
  if (tech) tech.innerHTML = SPECIAL_TECH.map(card).join("");
  if (style) style.innerHTML = SPECIAL_STYLE.map(card).join("");
}

function initMovieDetail() {
  const host = document.getElementById("movie-detail");
  if (!host) return;
  const id = new URLSearchParams(location.search).get("id");
  const movie = findMovieById(id) || MOVIES_NOW[0];
  const liked = isFavorite(movie.id);
  const canBook = MOVIES_NOW.some((m) => m.id === movie.id);

  host.innerHTML = `
    <div class="detail-layout">
      <div class="detail-poster">
        <img src="${movie.poster}" alt="${movie.title}">
        <span class="film-rating ${rateClass(movie.rating)}">${movie.rating}</span>
      </div>
      <div class="detail-info">
        <h1>${movie.title}</h1>
        <div class="detail-meta">
          <span>${movie.genre}</span>
          <span>${movie.duration}</span>
          <span>KC: ${movie.release}</span>
        </div>
        <div class="film-formats">${(movie.formats || []).map((f) => `<span>${f}</span>`).join("") || "<span>2D</span>"}</div>
        <p class="detail-synopsis">${movie.synopsis || ""}</p>
        <div class="detail-actions">
          ${canBook ? `<a class="btn-primary" href="dat-ve.html?id=${movie.id}">Mua vé ngay</a>` : `<button class="btn-primary" type="button" disabled>Sắp chiếu</button>`}
          <button type="button" class="btn-secondary btn-fav-text ${liked ? "active" : ""}" data-fav="${movie.id}">
            ${liked ? "♥ Đã yêu thích" : "♡ Yêu thích"}
          </button>
        </div>
      </div>
    </div>
    <div class="detail-trailer">
      <h2>Trailer</h2>
      <div class="trailer-frame">
        <iframe src="https://www.youtube.com/embed/${movie.trailer || "dQw4w9WgXcQ"}" title="Trailer ${movie.title}" allowfullscreen loading="lazy"></iframe>
      </div>
    </div>`;

  const favBtn = host.querySelector("[data-fav]");
  favBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    const on = toggleFavorite(movie.id);
    favBtn.classList.toggle("active", on);
    favBtn.textContent = on ? "♥ Đã yêu thích" : "♡ Yêu thích";
    showToast(on ? "Đã thêm vào Yêu thích" : "Đã bỏ khỏi Yêu thích");
    mountShell(document.body.dataset.active || "");
  });
}

function initBooking() {
  const root = document.getElementById("booking-app");
  if (!root) return;

  const id = new URLSearchParams(location.search).get("id");
  const movie = findMovieById(id) || MOVIES_NOW[0];
  const cities = Object.keys(THEATERS);
  let state = {
    city: cities[0],
    theater: THEATERS[cities[0]][0],
    date: new Date().toISOString().slice(0, 10),
    time: SHOWTIMES[2],
    seats: [],
  };

  const occupied = new Set(["A3", "A4", "B7", "C2", "C3", "D8", "E5", "F1", "F2"]);
  const rows = ["A", "B", "C", "D", "E", "F"];

  function total() {
    return state.seats.length * TICKET_PRICE;
  }

  function render() {
    root.innerHTML = `
      <div class="booking-layout">
        <aside class="booking-side">
          <img src="${movie.poster}" alt="${movie.title}">
          <h2>${movie.title}</h2>
          <p>${movie.rating} · ${movie.duration}</p>
        </aside>
        <div class="booking-main">
          <div class="booking-step">
            <h3>1. Chọn rạp & suất chiếu</h3>
            <div class="booking-fields">
              <label>Tỉnh/thành
                <select id="bk-city">${cities.map((c) => `<option ${c === state.city ? "selected" : ""}>${c}</option>`).join("")}</select>
              </label>
              <label>Rạp
                <select id="bk-theater">${(THEATERS[state.city] || []).map((t) => `<option ${t === state.theater ? "selected" : ""}>${t}</option>`).join("")}</select>
              </label>
              <label>Ngày
                <input type="date" id="bk-date" value="${state.date}">
              </label>
            </div>
            <div class="showtime-list" id="bk-times">
              ${SHOWTIMES.map((t) => `<button type="button" class="time-chip ${t === state.time ? "active" : ""}" data-time="${t}">${t}</button>`).join("")}
            </div>
          </div>

          <div class="booking-step">
            <h3>2. Chọn ghế</h3>
            <div class="screen-label">MÀN HÌNH</div>
            <div class="seat-map" id="seat-map">
              ${rows.map((r) => `
                <div class="seat-row">
                  <span class="seat-row-label">${r}</span>
                  ${Array.from({ length: 10 }, (_, i) => {
                    const code = r + (i + 1);
                    const taken = occupied.has(code);
                    const selected = state.seats.includes(code);
                    return `<button type="button" class="seat ${taken ? "taken" : ""} ${selected ? "selected" : ""}" data-seat="${code}" ${taken ? "disabled" : ""}>${i + 1}</button>`;
                  }).join("")}
                </div>`).join("")}
            </div>
            <div class="seat-legend">
              <span><i class="seat"></i> Trống</span>
              <span><i class="seat selected"></i> Đang chọn</span>
              <span><i class="seat taken"></i> Đã bán</span>
            </div>
          </div>

          <div class="booking-summary">
            <div>
              <strong>Ghế:</strong> ${state.seats.length ? state.seats.join(", ") : "Chưa chọn"}<br>
              <strong>Suất:</strong> ${state.date} · ${state.time}<br>
              <strong>Rạp:</strong> ${state.theater}
            </div>
            <div class="summary-pay">
              <div class="price">${formatVnd(total())}</div>
              <button type="button" class="btn-primary" id="bk-confirm" ${state.seats.length ? "" : "disabled"}>Xác nhận đặt vé</button>
            </div>
          </div>
        </div>
      </div>`;

    document.getElementById("bk-city").onchange = (e) => {
      state.city = e.target.value;
      state.theater = (THEATERS[state.city] || [])[0];
      state.seats = [];
      render();
    };
    document.getElementById("bk-theater").onchange = (e) => {
      state.theater = e.target.value;
      state.seats = [];
      render();
    };
    document.getElementById("bk-date").onchange = (e) => {
      state.date = e.target.value;
      render();
    };
    document.getElementById("bk-times").onclick = (e) => {
      const t = e.target.closest("[data-time]")?.dataset.time;
      if (!t) return;
      state.time = t;
      state.seats = [];
      render();
    };
    document.getElementById("seat-map").onclick = (e) => {
      const btn = e.target.closest("[data-seat]");
      if (!btn || btn.disabled) return;
      const code = btn.dataset.seat;
      if (state.seats.includes(code)) state.seats = state.seats.filter((s) => s !== code);
      else state.seats.push(code);
      render();
    };
    document.getElementById("bk-confirm").onclick = () => {
      if (!state.seats.length) return;
      const ticket = {
        id: "T" + Date.now(),
        movieId: movie.id,
        movieTitle: movie.title,
        poster: movie.poster,
        city: state.city,
        theater: state.theater,
        date: state.date,
        time: state.time,
        seats: [...state.seats],
        total: total(),
        createdAt: new Date().toISOString(),
      };
      saveTicket(ticket);
      showToast("Đặt vé thành công!");
      setTimeout(() => { location.href = "ve-cua-toi.html"; }, 700);
    };
  }

  render();
}

function initMyPage() {
  const ticketsHost = document.getElementById("my-tickets");
  const favHost = document.getElementById("my-favorites");
  if (!ticketsHost && !favHost) return;

  if (ticketsHost) {
    const tickets = getTickets();
    ticketsHost.innerHTML = tickets.length ? tickets.map((t) => `
      <article class="ticket-card">
        <img src="${t.poster}" alt="${t.movieTitle}">
        <div>
          <h3>${t.movieTitle}</h3>
          <p>${t.theater}</p>
          <p>${t.date} · ${t.time}</p>
          <p>Ghế: <strong>${t.seats.join(", ")}</strong></p>
          <p class="price">${formatVnd(t.total)}</p>
          <button type="button" class="btn-secondary" data-del-ticket="${t.id}">Xóa vé</button>
        </div>
      </article>`).join("") : `<p class="empty-note">Chưa có vé nào. Hãy <a href="phim-dang-chieu.html">đặt vé</a>.</p>`;

    ticketsHost.querySelectorAll("[data-del-ticket]").forEach((btn) => {
      btn.addEventListener("click", () => {
        removeTicket(btn.dataset.delTicket);
        showToast("Đã xóa vé");
        initMyPage();
        mountShell(document.body.dataset.active || "");
      });
    });
  }

  if (favHost) {
    const favs = getFavorites().map(findMovieById).filter(Boolean);
    favHost.innerHTML = favs.length
      ? `<div class="movie-grid">${favs.map(filmListCard).join("")}</div>`
      : `<p class="empty-note">Chưa có phim yêu thích. Bấm ♥ trên poster để lưu.</p>`;
    bindFavoriteButtons(favHost);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  mountShell(document.body.dataset.active || "");
  initBackToTop();
  initHero();
  renderHomeMovies();
  renderEvents();
  initMovieFilters();
  renderMovieGrid();
  initCities();
  renderSpecialPage();
  initRails();
  initMovieDetail();
  initBooking();
  initMyPage();
});
