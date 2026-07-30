/* localStorage helpers */
const STORAGE_KEYS = {
  favorites: "cgv_fe_favorites",
  tickets: "cgv_fe_tickets",
};

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFavorites() {
  return readJson(STORAGE_KEYS.favorites, []);
}

function isFavorite(id) {
  return getFavorites().includes(id);
}

function toggleFavorite(id) {
  const list = getFavorites();
  const i = list.indexOf(id);
  if (i >= 0) list.splice(i, 1);
  else list.push(id);
  writeJson(STORAGE_KEYS.favorites, list);
  return list.includes(id);
}

function getTickets() {
  return readJson(STORAGE_KEYS.tickets, []);
}

function saveTicket(ticket) {
  const list = getTickets();
  list.unshift(ticket);
  writeJson(STORAGE_KEYS.tickets, list);
  return list;
}

function removeTicket(ticketId) {
  const list = getTickets().filter((t) => t.id !== ticketId);
  writeJson(STORAGE_KEYS.tickets, list);
  return list;
}

function showToast(message) {
  let el = document.getElementById("fe-toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "fe-toast";
    el.className = "fe-toast";
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => el.classList.remove("show"), 2200);
}
