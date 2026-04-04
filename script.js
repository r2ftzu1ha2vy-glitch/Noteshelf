// =====================================
// GAMES
// =====================================
const games = [
  { name: "Merger",               url: "https://r2ftzu1ha2vy-glitch.github.io/Merger/",               category: "Puzzle",   image: "https://iili.io/f4j4SNp.png" },
  { name: "Shadow Boxing",        url: "https://r2ftzu1ha2vy-glitch.github.io/Shadow-Boxing/",        category: "Action",   image: "https://iili.io/f4wNzoG.png" },
  { name: "Highway Crash",        url: "https://r2ftzu1ha2vy-glitch.github.io/Highway-Crash/",        category: "Racing",   image: "https://iili.io/fP5pJLu.png" },
  { name: "Badminton Champion",   url: "https://r2ftzu1ha2vy-glitch.github.io/Badminton-Champion/",   category: "Sports",   image: "https://iili.io/ftXhakX.png" },
  { name: "Tetricks",             url: "https://r2ftzu1ha2vy-glitch.github.io/tetricks/",             category: "Puzzle",   image: "https://iili.io/qBzIIlR.png" },
  { name: "Meme Rng",             url: "https://r2ftzu1ha2vy-glitch.github.io/Meme-Rng/",             category: "Chill",    image: "https://iili.io/q24jm8u.png" },
  { name: "Build N Defend Tower", url: "https://r2ftzu1ha2vy-glitch.github.io/Build-N-Defend-Tower/", category: "Timing",   image: "https://iili.io/qCrIy6G.png" },
  { name: "Square Dodge",         url: "https://r2ftzu1ha2vy-glitch.github.io/Square-Dodge/",         category: "Reflex",   image: "https://iili.io/qT4a3QV.png" },
  { name: "RingBound",            url: "https://r2ftzu1ha2vy-glitch.github.io/RingBound/",            category: "Reflex",   image: "https://iili.io/qT45h6F.png" },
  { name: "Pizza Panic",          url: "https://r2ftzu1ha2vy-glitch.github.io/Pizza-Panic/",          category: "Defense",  image: "https://iili.io/qu12an4.png" },
  { name: "Tap Tempo",            url: "https://r2ftzu1ha2vy-glitch.github.io/Tap-Tempo/",            category: "Reflex",   image: "https://iili.io/qAyXAs1.png" },
  { name: "Meadow Farm",          url: "https://r2ftzu1ha2vy-glitch.github.io/Meadow-Farm/",          category: "Chill",    image: "https://iili.io/qcIGKox.png" },
  { name: "Cosmic Duel",          url: "https://r2ftzu1ha2vy-glitch.github.io/Cosmic-Duel/",          category: "Action",   image: "https://iili.io/qrW1NLB.png" },
  { name: "Star Runner",          url: "https://r2ftzu1ha2vy-glitch.github.io/Star-Runner/",          category: "Reflex",   image: "https://iili.io/qrhXT7I.png" },
  { name: "ADventure",            url: "https://r2ftzu1ha2vy-glitch.github.io/ADventure/",            category: "Annoying", image: "https://iili.io/qZT1JF1.png" },
];

const defaultImg = "https://iili.io/KUgv2G2.png";

// =====================================
// SVG ICONS for category sidebar
// =====================================
const categorySVGs = {
  "All Games": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  "Horror":    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
  "Puzzle":    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  "Racing":    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="9" width="15" height="7" rx="2"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/><path d="M16 9l2.65-4.42A1 1 0 0 1 19.5 4H21a1 1 0 0 1 1 1v4"/></svg>`,
  "Action":    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  "Rpg":       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/></svg>`,
  "Sports":    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M4.93 4.93l4.24 4.24"/><path d="M14.83 9.17l4.24-4.24"/><path d="M14.83 14.83l4.24 4.24"/><path d="M9.17 14.83l-4.24 4.24"/><circle cx="12" cy="12" r="4"/></svg>`,
  "Chill":     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>`,
  "Timing":    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  "Defense":   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  "Reflex":    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  "Annoying":  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>`,
};

// =====================================
// TRAILER POPUP
// =====================================
const trailerPopup = document.createElement("div");
trailerPopup.id = "trailer-popup";
Object.assign(trailerPopup.style, {
  position: "fixed", top: "50%", left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "24px", display: "none", zIndex: "9999",
  maxWidth: "90%", maxHeight: "80%", overflowY: "auto",
});

const closeTrailerBtn = document.createElement("button");
closeTrailerBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> Close`;
closeTrailerBtn.style.marginBottom = "16px";

function closeTrailerPopup() {
  trailerPopup.querySelectorAll("video").forEach(v => { v.pause(); v.currentTime = 0; });
  trailerPopup.style.display = "none";
}
closeTrailerBtn.addEventListener("click", closeTrailerPopup);
trailerPopup.appendChild(closeTrailerBtn);
document.body.appendChild(trailerPopup);

window.addEventListener("keydown", e => {
  if (e.key === "Escape" && trailerPopup.style.display === "block") closeTrailerPopup();
});

const newGameTrailers = [
  { name: "HexAsteal",       trailer: "https://raw.githubusercontent.com/r2ftzu1ha2vy-glitch/Trailers/main/WhatsApp%20Video%202026-03-29%20at%2017.43.30.mp4" },
  { name: "8-Ball Billiards", trailer: "https://raw.githubusercontent.com/r2ftzu1ha2vy-glitch/Trailers/main/8-Ball%20Billiards%20(1).mp4" },
];

// =====================================
// BACKGROUND
// =====================================
(function loadBackground() {
  const savedImage = localStorage.getItem("bgImage");
  const savedColor = localStorage.getItem("bgColor");
  if (savedImage)      document.body.style.background = `url('${savedImage}') center/cover no-repeat`;
  else if (savedColor) document.body.style.background = savedColor;
})();

// =====================================
// INTRO ANIMATION
// =====================================
const introOverlay = document.createElement("div");
introOverlay.id = "intro-overlay";
introOverlay.textContent = "NoteShelf";
document.body.appendChild(introOverlay);
setTimeout(() => {
  introOverlay.style.opacity = "0";
  introOverlay.style.pointerEvents = "none";
  setTimeout(() => introOverlay.remove(), 1000);
}, 1200);

// =====================================
// DOM READY
// =====================================
document.addEventListener("DOMContentLoaded", () => {

  const gameListDiv     = document.getElementById("game-list");
  const searchBar       = document.getElementById("search-bar");
  const categorySidebar = document.getElementById("category-sidebar");
  const signupBtn       = document.getElementById("signup-btn");
  const loginBtn        = document.getElementById("login-btn");
  const logoutBtn       = document.getElementById("logout-btn");
  const authPopup       = document.getElementById("auth-popup");
  const authTitle       = document.getElementById("auth-title");
  const authUsername    = document.getElementById("auth-username");
  const authPassword    = document.getElementById("auth-password");
  const authSubmit      = document.getElementById("auth-submit");
  const authMessage     = document.getElementById("auth-message");
  const closeAuthBtn    = document.getElementById("close-auth");
  const userAvatar      = document.getElementById("user-avatar");
  const usernameDisplay = document.getElementById("username-display");
  const adminPanel      = document.getElementById("admin-panel");
  const avatarInput     = document.getElementById("auth-avatar");
  const avatarPreview   = document.getElementById("avatar-preview");
  const globalMsgPopup  = document.getElementById("global-message-popup");

  const usersKey   = "users";
  const adminUsers = ["R2FtZU1ha2Vy", "GDFlame05"];
  let users        = JSON.parse(localStorage.getItem(usersKey) || "{}");

  // ── Game card ──
  function createGameButton(game) {
    const btn = document.createElement("button");
    btn.className = "game-button";
    const img   = document.createElement("img");
    img.src     = game.image || defaultImg;
    img.alt     = game.name;
    const label = document.createElement("div");
    label.textContent = game.name;
    btn.appendChild(img);
    btn.appendChild(label);
    btn.onclick = () => window.open(game.url, "_blank");
    return btn;
  }

  function renderGames(filter = "") {
    gameListDiv.innerHTML = "";
    games.filter(g => g.name.toLowerCase().includes(filter.toLowerCase()))
         .forEach(g => gameListDiv.appendChild(createGameButton(g)));
  }

  function renderGamesByCategory(category) {
    gameListDiv.innerHTML = "";
    games.filter(g => g.category.toLowerCase() === category.toLowerCase())
         .forEach(g => gameListDiv.appendChild(createGameButton(g)));
  }

  searchBar?.addEventListener("input", e => renderGames(e.target.value));

  // ── Category sidebar with SVG icons ──
  const categories = ["All Games","Horror","Puzzle","Racing","Action","Rpg","Sports","Chill","Timing","Defense","Reflex","Annoying"];
  let activeBtn = null;

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "category-button";

    const iconWrap = document.createElement("span");
    iconWrap.className = "cat-icon";
    iconWrap.innerHTML = categorySVGs[cat] || "";

    const text = document.createElement("span");
    text.className = "category-text";
    text.textContent = cat;

    btn.appendChild(iconWrap);
    btn.appendChild(text);

    btn.onclick = () => {
      if (activeBtn) activeBtn.classList.remove("active");
      btn.classList.add("active");
      activeBtn = btn;
      cat === "All Games" ? renderGames() : renderGamesByCategory(cat);
    };

    categorySidebar.appendChild(btn);
  });

  // Set "All Games" as default active
  categorySidebar.firstChild?.classList.add("active");
  activeBtn = categorySidebar.firstChild;
  renderGames();

  // ── Trailers ──
  document.getElementById("trailer-btn")?.addEventListener("click", () => {
    trailerPopup.innerHTML = "";
    trailerPopup.appendChild(closeTrailerBtn);
    newGameTrailers.forEach(game => {
      const title = document.createElement("h3");
      title.textContent = game.name;
      Object.assign(title.style, { margin: "12px 0 6px", textAlign: "center" });
      const video = document.createElement("video");
      video.src = game.trailer; video.controls = true; video.preload = "metadata";
      Object.assign(video.style, { width: "100%", maxHeight: "300px", marginBottom: "16px" });
      trailerPopup.appendChild(title);
      trailerPopup.appendChild(video);
    });
    trailerPopup.style.display = "block";
  });

  // ── Auth ──
  signupBtn?.addEventListener("click", () => {
    authTitle.textContent = "Sign Up";
    authPopup.style.display = "flex";
    authUsername.value = authPassword.value = authMessage.textContent = "";
  });
  loginBtn?.addEventListener("click", () => {
    authTitle.textContent = "Log In";
    authPopup.style.display = "flex";
    authUsername.value = authPassword.value = authMessage.textContent = "";
  });
  closeAuthBtn?.addEventListener("click", () => { authPopup.style.display = "none"; });

  authPassword.dataset.visible = "false";
  authPassword.addEventListener("dblclick", () => {
    const v = authPassword.dataset.visible === "true";
    authPassword.dataset.visible = String(!v);
    authPassword.type = v ? "password" : "text";
  });

  avatarInput?.addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      avatarPreview.src = reader.result;
      avatarPreview.style.display = "block";
      localStorage.setItem("userAvatar", reader.result);
    };
    reader.readAsDataURL(file);
  });

  authSubmit?.addEventListener("click", () => {
    const username = authUsername.value.trim();
    const password = authPassword.value.trim();
    if (username.length < 5) { authMessage.textContent = "❌ Username must be at least 5 characters"; return; }

    if (authTitle.textContent === "Sign Up") {
      if (users[username]) { authMessage.textContent = "❌ Username already taken"; return; }
      const avatarData = localStorage.getItem("userAvatar") || "";
      users[username] = { password, isAdmin: adminUsers.includes(username), avatar: avatarData };
      localStorage.setItem(usersKey, JSON.stringify(users));
      localStorage.setItem("username", username);
      // Store avatar keyed to username so chat can fetch it
      if (avatarData) localStorage.setItem("avatar_" + username, avatarData);
      authPopup.style.display = "none";
      updateUIAfterLogin(username);
      return;
    }

    if (authTitle.textContent === "Log In") {
      if (!users[username])                      { authMessage.textContent = "❌ Username does not exist"; return; }
      if (users[username].password !== password)  { authMessage.textContent = "❌ Wrong password"; return; }
      localStorage.setItem("username", username);
      // Restore avatar from user record into avatar_ key for chat
      if (users[username].avatar) localStorage.setItem("avatar_" + username, users[username].avatar);
      authPopup.style.display = "none";
      updateUIAfterLogin(username);
    }
  });

  function updateUIAfterLogin(username) {
    logoutBtn.style.display = "inline-flex";
    usernameDisplay.style.display = "inline-block";
    usernameDisplay.textContent = username;
    signupBtn.style.display = loginBtn.style.display = "none";

    users = JSON.parse(localStorage.getItem(usersKey) || "{}");
    const savedAvatar = users[username]?.avatar || localStorage.getItem("userAvatar");
    if (savedAvatar) {
      userAvatar.src = savedAvatar;
      userAvatar.style.display = "inline-block";
      // Make sure avatar_ key is always current
      localStorage.setItem("avatar_" + username, savedAvatar);
    } else {
      userAvatar.style.display = "none";
    }

    adminPanel.style.display = users[username]?.isAdmin ? "block" : "none";
  }

  logoutBtn?.addEventListener("click", () => {
    localStorage.removeItem("username");
    usernameDisplay.style.display = userAvatar.style.display = "none";
    logoutBtn.style.display = "none";
    signupBtn.style.display = loginBtn.style.display = "inline-flex";
    adminPanel.style.display = "none";
  });

  // ── Global message ──
  function triggerGlobalMessage(message) {
    if (!globalMsgPopup) return;
    globalMsgPopup.textContent = message;
    globalMsgPopup.style.display = "block";
    setTimeout(() => { globalMsgPopup.style.opacity = "1"; globalMsgPopup.style.top = "18px"; }, 10);
    setTimeout(() => {
      globalMsgPopup.style.opacity = "0"; globalMsgPopup.style.top = "-60px";
      setTimeout(() => { globalMsgPopup.style.display = "none"; }, 380);
    }, 3200);
  }

  document.getElementById("global-message-send")?.addEventListener("click", () => {
    const msg = prompt("Enter global message:");
    if (msg) triggerGlobalMessage(msg);
  });
  document.getElementById("close-admin")?.addEventListener("click", () => { adminPanel.style.display = "none"; });

  const currentUser = localStorage.getItem("username");
  if (currentUser) updateUIAfterLogin(currentUser);
});

// =====================================
// FIREBASE + CHAT
// =====================================
const firebaseConfig = {
  apiKey:      "AIzaSyDPHnqalZ-wV4XPtZi95yT-2pHsZ7gN1dI",
  authDomain:  "noteshelf-5cebe.firebaseapp.com",
  databaseURL: "https://noteshelf-5cebe-default-rtdb.firebaseio.com/",
  projectId:   "noteshelf-5cebe",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ── DOM refs ──
const chatToggle      = document.getElementById("chat-toggle");
const chatPanel       = document.getElementById("chat-panel");
const chatCloseBtn    = document.getElementById("chat-close");
const chatMessages    = document.getElementById("chat-messages");
const chatInput       = document.getElementById("chat-input");
const chatSend        = document.getElementById("chat-send");
const chatCharCount   = document.getElementById("chat-char-count");
const typingIndicator = document.getElementById("typing-indicator");
const chatBadge       = document.getElementById("chat-unread-badge");
const onlineCount     = document.getElementById("chat-online-count");
const typingRef       = db.ref("typing");
const presenceRef     = db.ref("presence");

let isPanelOpen  = false;
let unreadCount  = 0;
let lastDate     = null;

// ── Open / Close ──
chatToggle.onclick = () => {
  isPanelOpen = true;
  chatPanel.style.display = "flex";
  unreadCount = 0;
  chatBadge.style.display = "none";
  chatMessages.scrollTop = chatMessages.scrollHeight;
};
chatCloseBtn.onclick = () => {
  isPanelOpen = false;
  chatPanel.style.display = "none";
};

// ── Char counter ──
chatInput.addEventListener("input", () => {
  const remaining = 300 - chatInput.value.length;
  chatCharCount.textContent = remaining;
  chatCharCount.style.color = remaining < 30 ? "#ff6b6b" : "";

  // Typing indicator in Firebase
  const user = localStorage.getItem("username") || "Guest";
  if (chatInput.value.trim()) {
    typingRef.child(user).set(true);
    clearTimeout(chatInput._typingTimer);
    chatInput._typingTimer = setTimeout(() => typingRef.child(user).remove(), 2200);
  } else {
    typingRef.child(user).remove();
  }
});

// ── Typing listener ──
typingRef.on("value", snap => {
  const data = snap.val();
  const me   = localStorage.getItem("username") || "Guest";
  if (!data) { typingIndicator.innerHTML = ""; return; }
  const others = Object.keys(data).filter(u => u !== me);
  if (others.length) {
    typingIndicator.innerHTML = `
      <span>${others.join(", ")} typing</span>
      <span class="typing-dots"><span></span><span></span><span></span></span>`;
  } else {
    typingIndicator.innerHTML = "";
  }
});

// ── Presence: track online users ──
const currentUser = () => localStorage.getItem("username") || "Guest";

function goOnline() {
  const ref = presenceRef.child(currentUser());
  ref.set(true);
  ref.onDisconnect().remove();
}
goOnline();

presenceRef.on("value", snap => {
  const count = snap.numChildren();
  onlineCount.textContent = count > 0 ? `${count} online` : "0 online";
});

// ── Bad word filter ──
const badWords = ["nigger","nigga","fuck","shit","niga","sex","bitch"];
function filterMessage(msg) {
  let clean = msg;
  badWords.forEach(w => { clean = clean.replace(new RegExp(w, "gi"), "****"); });
  return clean;
}

// ── Format timestamp ──
function formatTime(ts) {
  const d = new Date(ts);
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function formatDate(ts) {
  const d   = new Date(ts);
  const now = new Date();
  if (d.toDateString() === now.toDateString()) return "Today";
  const yest = new Date(now); yest.setDate(now.getDate() - 1);
  if (d.toDateString() === yest.toDateString()) return "Yesterday";
  return d.toLocaleDateString([], { month: "short", day: "numeric" });
}

// ── Get initials for avatar fallback ──
function getInitials(name) {
  return name ? name.charAt(0).toUpperCase() : "?";
}

// ── Build avatar element ──
function buildAvatar(username, avatarUrl) {
  const el = document.createElement("div");
  el.className = "chat-avatar";
  if (avatarUrl) {
    // Try using an img tag — works for both base64 and URL
    const img = document.createElement("img");
    img.src = avatarUrl;
    img.onerror = () => {
      el.removeChild(img);
      el.textContent = getInitials(username);
    };
    el.appendChild(img);
  } else {
    el.textContent = getInitials(username);
  }
  return el;
}

// ── Edit / Delete helpers ──
function editMessage(msgKey, textEl) {
  const newText = prompt("Edit message:", textEl.textContent);
  if (newText && newText.trim()) {
    const filtered = filterMessage(newText.trim());
    db.ref("messages/" + msgKey).update({ text: filtered });
    textEl.textContent = filtered;
  }
}
function deleteMessage(msgKey, rowEl) {
  if (confirm("Delete this message?")) {
    db.ref("messages/" + msgKey).remove();
    rowEl.remove();
  }
}

// ── Send message ──
function sendMessage() {
  const user = currentUser();
  let msg = chatInput.value.trim();
  if (!msg) return;
  msg = filterMessage(msg);

  // Get avatar: prioritise localStorage key for this username
  const avatar = localStorage.getItem("avatar_" + user) || "";

  db.ref("messages").push({
    user,
    text: msg,
    avatar,
    time: Date.now(),
  });

  chatInput.value = "";
  chatCharCount.textContent = "300";
  typingRef.child(user).remove();
}

chatSend.onclick = sendMessage;
chatInput.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } });

// ── Render messages ──
const seenKeys = new Set();

db.ref("messages").limitToLast(60).on("child_added", snap => {
  if (seenKeys.has(snap.key)) return;
  seenKeys.add(snap.key);

  const data         = snap.val();
  const msgKey       = snap.key;
  const me           = currentUser();
  const isMe         = data.user === me;

  // ── Day divider ──
  const msgDate = formatDate(data.time);
  if (msgDate !== lastDate) {
    lastDate = msgDate;
    const divider = document.createElement("div");
    divider.className = "chat-day-divider";
    divider.textContent = msgDate;
    chatMessages.appendChild(divider);
  }

  // ── Row ──
  const row = document.createElement("div");
  row.classList.add("chat-row", isMe ? "me" : "other");

  // ── Avatar: use stored avatar keyed by username ──
  // Prefer data.avatar (stored at send time), fallback to localStorage lookup
  const avatarSrc = data.avatar || localStorage.getItem("avatar_" + data.user) || "";
  const avatar    = buildAvatar(data.user, avatarSrc);

  // ── Bubble group ──
  const group = document.createElement("div");
  group.className = "chat-bubble-group";

  // Sender name (only for others)
  if (!isMe) {
    const sender = document.createElement("div");
    sender.className = "chat-sender";
    sender.textContent = data.user;
    group.appendChild(sender);
  }

  // Bubble
  const bubble = document.createElement("div");
  bubble.className = "chat-bubble";

  const textEl = document.createElement("div");
  textEl.className = "chat-text";
  textEl.textContent = data.text;
  bubble.appendChild(textEl);

  // Edit / Delete actions (own messages only)
  if (isMe) {
    const actions = document.createElement("div");
    actions.className = "chat-actions";

    const editBtn = document.createElement("button");
    editBtn.className = "chat-action-btn";
    editBtn.title = "Edit";
    editBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
    editBtn.onclick = () => editMessage(msgKey, textEl);

    const delBtn = document.createElement("button");
    delBtn.className = "chat-action-btn del";
    delBtn.title = "Delete";
    delBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>`;
    delBtn.onclick = () => deleteMessage(msgKey, row);

    actions.appendChild(editBtn);
    actions.appendChild(delBtn);
    bubble.appendChild(actions);
  }

  group.appendChild(bubble);

  // Timestamp
  const timeEl = document.createElement("div");
  timeEl.className = "chat-time";
  timeEl.textContent = formatTime(data.time);
  group.appendChild(timeEl);

  // Assemble
  if (isMe) {
    row.appendChild(group);
    row.appendChild(avatar);
  } else {
    row.appendChild(avatar);
    row.appendChild(group);
  }

  chatMessages.appendChild(row);

  // Unread badge when panel is closed
  if (!isPanelOpen) {
    unreadCount++;
    chatBadge.textContent = unreadCount > 9 ? "9+" : unreadCount;
    chatBadge.style.display = "flex";
  }

  // Auto-scroll only if near bottom
  const nearBottom = chatMessages.scrollHeight - chatMessages.scrollTop - chatMessages.clientHeight < 80;
  if (nearBottom || isMe) chatMessages.scrollTop = chatMessages.scrollHeight;
});
