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
  { name: "HexAsteal",        trailer: "https://raw.githubusercontent.com/r2ftzu1ha2vy-glitch/Trailers/main/WhatsApp%20Video%202026-03-29%20at%2017.43.30.mp4" },
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
// FIREBASE INIT
// =====================================
const firebaseConfig = {
  apiKey:      "AIzaSyDPHnqalZ-wV4XPtZi95yT-2pHsZ7gN1dI",
  authDomain:  "noteshelf-5cebe.firebaseapp.com",
  databaseURL: "https://noteshelf-5cebe-default-rtdb.firebaseio.com/",
  projectId:   "noteshelf-5cebe",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// =====================================
// SESSION STATE
// =====================================
let _sessionUser   = sessionStorage.getItem("ns_user")   || null;
let _sessionAvatar = sessionStorage.getItem("ns_avatar")  || "";

function me()       { return _sessionUser; }
function myAvatar() { return _sessionAvatar; }

function setSession(username, avatar) {
  _sessionUser   = username;
  _sessionAvatar = avatar || "";
  sessionStorage.setItem("ns_user",   username);
  sessionStorage.setItem("ns_avatar", _sessionAvatar);
}

function clearSession() {
  _sessionUser   = null;
  _sessionAvatar = "";
  sessionStorage.removeItem("ns_user");
  sessionStorage.removeItem("ns_avatar");
}

// =====================================
// ADMIN USERS
// =====================================
const adminUsers = ["R2FtZU1ha2Vy", "GDFlame05"];

// =====================================
// IMAGE URL DETECTION & MESSAGE CONTENT BUILDER
// =====================================
function isImageUrl(text) {
  return /^https?:\/\/.+\.(png|jpg|jpeg|gif|webp|svg)(\?.*)?$/i.test(text.trim());
}

function buildMessageContent(text) {
  if (isImageUrl(text)) {
    const wrap = document.createElement("div");
    wrap.style.cssText = "margin-top:4px;";

    const img = document.createElement("img");
    img.src = text.trim();
    img.alt = "Image";
    img.style.cssText = [
      "max-width:200px",
      "max-height:180px",
      "border-radius:10px",
      "display:block",
      "border:1px solid var(--ink-border)",
      "cursor:pointer",
      "transition:opacity 0.2s, transform 0.2s",
      "object-fit:cover",
    ].join(";");

    img.onmouseover = () => { img.style.opacity = "0.85"; img.style.transform = "scale(1.02)"; };
    img.onmouseout  = () => { img.style.opacity = "1";    img.style.transform = "scale(1)"; };
    img.onclick     = () => window.open(text.trim(), "_blank");

    // If image fails to load, fall back to showing the raw URL as text
    img.onerror = () => {
      wrap.innerHTML = "";
      const t = document.createElement("div");
      t.className   = "chat-text";
      t.textContent = text;
      wrap.appendChild(t);
    };

    wrap.appendChild(img);
    return wrap;
  }

  // Plain text
  const el = document.createElement("div");
  el.className   = "chat-text";
  el.textContent = text;
  return el;
}

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

  function renderGames(filter) {
    filter = filter || "";
    gameListDiv.innerHTML = "";
    games.filter(g => g.name.toLowerCase().includes(filter.toLowerCase()))
         .forEach(g => gameListDiv.appendChild(createGameButton(g)));
  }

  function renderGamesByCategory(category) {
    gameListDiv.innerHTML = "";
    games.filter(g => g.category.toLowerCase() === category.toLowerCase())
         .forEach(g => gameListDiv.appendChild(createGameButton(g)));
  }

  searchBar && searchBar.addEventListener("input", e => renderGames(e.target.value));

  // ── Category sidebar ──
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

  if (categorySidebar.firstChild) {
    categorySidebar.firstChild.classList.add("active");
    activeBtn = categorySidebar.firstChild;
  }
  renderGames();

  // ── Trailers ──
  const trailerBtnEl = document.getElementById("trailer-btn");
  if (trailerBtnEl) {
    trailerBtnEl.addEventListener("click", () => {
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
  }

  // ── Pending avatar base64 during signup ──
  let pendingAvatarB64 = "";

  avatarInput && avatarInput.addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      pendingAvatarB64 = reader.result;
      avatarPreview.src = pendingAvatarB64;
      avatarPreview.style.display = "block";
    };
    reader.readAsDataURL(file);
  });

  // ── Open auth popup ──
  function openAuth(mode) {
    authTitle.textContent = mode;
    authPopup.style.display = "flex";
    authUsername.value = authPassword.value = authMessage.textContent = "";
    pendingAvatarB64 = "";
    avatarPreview.style.display = "none";
    avatarPreview.src = "";
  }

  signupBtn && signupBtn.addEventListener("click", () => openAuth("Sign Up"));
  loginBtn  && loginBtn.addEventListener("click",  () => openAuth("Log In"));
  closeAuthBtn && closeAuthBtn.addEventListener("click", () => { authPopup.style.display = "none"; });

  // Double-click to reveal password
  authPassword.dataset.visible = "false";
  authPassword.addEventListener("dblclick", () => {
    const v = authPassword.dataset.visible === "true";
    authPassword.dataset.visible = String(!v);
    authPassword.type = v ? "password" : "text";
  });

  // ── Simple hash ──
  function simpleHash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) { h = (Math.imul(31, h) + str.charCodeAt(i)) | 0; }
    return h.toString(36);
  }

  // ── Auth submit ──
  authSubmit && authSubmit.addEventListener("click", async () => {
    const username = authUsername.value.trim();
    const password = authPassword.value.trim();
    if (username.length < 5) { authMessage.textContent = "❌ Username must be at least 5 characters"; return; }
    if (!password)            { authMessage.textContent = "❌ Password is required"; return; }

    const userRef  = db.ref("users/" + username);
    const snap     = await userRef.once("value");
    const userData = snap.val();

    if (authTitle.textContent === "Sign Up") {
      if (userData) { authMessage.textContent = "❌ Username already taken"; return; }
      const newUser = {
        passwordHash: simpleHash(password),
        isAdmin:      adminUsers.includes(username),
        avatar:       pendingAvatarB64,
        createdAt:    Date.now(),
      };
      await userRef.set(newUser);
      authPopup.style.display = "none";
      setSession(username, pendingAvatarB64);
      updateUIAfterLogin(username, pendingAvatarB64, newUser.isAdmin);
      return;
    }

    if (authTitle.textContent === "Log In") {
      if (!userData) { authMessage.textContent = "❌ Username does not exist"; return; }
      if (userData.passwordHash !== simpleHash(password)) { authMessage.textContent = "❌ Wrong password"; return; }
      authPopup.style.display = "none";
      setSession(username, userData.avatar || "");
      updateUIAfterLogin(username, userData.avatar || "", userData.isAdmin);
    }
  });

  // ── Update UI after login ──
  function updateUIAfterLogin(username, avatar, isAdmin) {
    logoutBtn.style.display      = "inline-flex";
    usernameDisplay.style.display = "inline-block";
    usernameDisplay.textContent   = username;
    signupBtn.style.display = loginBtn.style.display = "none";

    if (avatar) {
      userAvatar.src           = avatar;
      userAvatar.style.display = "inline-block";
    } else {
      userAvatar.style.display = "none";
    }

    adminPanel.style.display = isAdmin ? "block" : "none";

    window.dispatchEvent(new CustomEvent("ns_login", { detail: { username, avatar } }));
  }

  logoutBtn && logoutBtn.addEventListener("click", () => {
    clearSession();
    usernameDisplay.style.display = userAvatar.style.display = "none";
    logoutBtn.style.display       = "none";
    signupBtn.style.display = loginBtn.style.display = "inline-flex";
    adminPanel.style.display = "none";
    window.dispatchEvent(new CustomEvent("ns_logout"));
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

  const globalMsgSend = document.getElementById("global-message-send");
  globalMsgSend && globalMsgSend.addEventListener("click", () => {
    const msg = prompt("Enter global message:");
    if (msg) triggerGlobalMessage(msg);
  });

  const closeAdminBtn = document.getElementById("close-admin");
  closeAdminBtn && closeAdminBtn.addEventListener("click", () => { adminPanel.style.display = "none"; });

  // ── Restore session ──
  if (me()) {
    db.ref("users/" + me()).once("value").then(snap => {
      const data = snap.val();
      if (data) {
        setSession(me(), data.avatar || "");
        updateUIAfterLogin(me(), data.avatar || "", data.isAdmin);
      } else {
        clearSession();
      }
    });
  }
});

// =====================================
// CHAT SYSTEM
// =====================================
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

let isPanelOpen = false;
let unreadCount = 0;
let lastDate    = null;

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

chatInput.addEventListener("input", () => {
  const remaining = 300 - chatInput.value.length;
  chatCharCount.textContent = remaining;
  chatCharCount.style.color = remaining < 30 ? "#ff6b6b" : "";

  const user = me() || "Guest";
  if (chatInput.value.trim()) {
    typingRef.child(user).set(true);
    clearTimeout(chatInput._typingTimer);
    chatInput._typingTimer = setTimeout(() => typingRef.child(user).remove(), 2200);
  } else {
    typingRef.child(user).remove();
  }
});

typingRef.on("value", snap => {
  const data = snap.val();
  const user = me() || "Guest";
  if (!data) { typingIndicator.innerHTML = ""; return; }
  const others = Object.keys(data).filter(u => u !== user);
  if (others.length) {
    typingIndicator.innerHTML = `<span>${others.join(", ")} typing</span><span class="typing-dots"><span></span><span></span><span></span></span>`;
  } else {
    typingIndicator.innerHTML = "";
  }
});

// ── Presence ──
function goOnline() {
  const user = me() || "Guest";
  const ref  = presenceRef.child(user);
  ref.set(true);
  ref.onDisconnect().remove();
}
goOnline();
window.addEventListener("ns_login",  () => goOnline());
window.addEventListener("ns_logout", () => {
  presenceRef.child("Guest").remove();
});

presenceRef.on("value", snap => {
  const count = snap.numChildren();
  onlineCount.textContent = count > 0 ? `${count} online` : "0 online";
});

// ── Profanity filter ──
const badWords = ["nigger","nigga","fuck","shit","niga","sex","bitch"];
function filterMessage(msg) {
  // Don't filter image URLs — they contain no readable words
  if (isImageUrl(msg)) return msg;
  let clean = msg;
  badWords.forEach(w => { clean = clean.replace(new RegExp(w, "gi"), "****"); });
  return clean;
}

// ── Helpers ──
function formatTime(ts) {
  return new Date(ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function formatDate(ts) {
  const d   = new Date(ts);
  const now = new Date();
  if (d.toDateString() === now.toDateString()) return "Today";
  const yest = new Date(now); yest.setDate(now.getDate() - 1);
  if (d.toDateString() === yest.toDateString()) return "Yesterday";
  return d.toLocaleDateString([], { month: "short", day: "numeric" });
}
function getInitials(name) { return name ? name.charAt(0).toUpperCase() : "?"; }

function buildAvatar(username, avatarUrl) {
  const el = document.createElement("div");
  el.className = "chat-avatar";
  if (avatarUrl) {
    const img = document.createElement("img");
    img.src = avatarUrl;
    img.onerror = () => { el.removeChild(img); el.textContent = getInitials(username); };
    el.appendChild(img);
  } else {
    el.textContent = getInitials(username);
  }
  return el;
}

function editMessage(msgKey, bubbleEl) {
  // Find the current text — could be plain text node or image URL
  const textEl = bubbleEl.querySelector(".chat-text");
  const currentText = textEl ? textEl.textContent : bubbleEl.querySelector("img") ? bubbleEl.querySelector("img").src : "";
  const newText = prompt("Edit message:", currentText);
  if (newText && newText.trim()) {
    const filtered = filterMessage(newText.trim());
    db.ref("messages/" + msgKey).update({ text: filtered });
    // Rebuild the content element in place
    const oldContent = bubbleEl.querySelector(".chat-text") || bubbleEl.querySelector("div");
    const newContent = buildMessageContent(filtered);
    if (oldContent) {
      bubbleEl.replaceChild(newContent, oldContent);
    }
  }
}

function deleteMessage(msgKey, rowEl) {
  if (confirm("Delete this message?")) {
    db.ref("messages/" + msgKey).remove();
    rowEl.remove();
  }
}

function sendMessage() {
  const user = me() || "Guest";
  let msg = chatInput.value.trim();
  if (!msg) return;
  msg = filterMessage(msg);

  db.ref("messages").push({
    user,
    text:   msg,
    avatar: myAvatar(),
    time:   Date.now(),
  });

  chatInput.value = "";
  chatCharCount.textContent = "300";
  typingRef.child(user).remove();
}

chatSend.onclick = sendMessage;
chatInput.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } });

const seenKeys = new Set();

db.ref("messages").limitToLast(60).on("child_added", snap => {
  if (seenKeys.has(snap.key)) return;
  seenKeys.add(snap.key);

  const data   = snap.val();
  const msgKey = snap.key;
  const user   = me() || "Guest";
  const isMe   = data.user === user;

  const msgDate = formatDate(data.time);
  if (msgDate !== lastDate) {
    lastDate = msgDate;
    const divider = document.createElement("div");
    divider.className   = "chat-day-divider";
    divider.textContent = msgDate;
    chatMessages.appendChild(divider);
  }

  const row = document.createElement("div");
  row.classList.add("chat-row", isMe ? "me" : "other");

  const avatar = buildAvatar(data.user, data.avatar || "");
  const group  = document.createElement("div");
  group.className = "chat-bubble-group";

  if (!isMe) {
    const sender = document.createElement("div");
    sender.className   = "chat-sender";
    sender.textContent = data.user;
    group.appendChild(sender);
  }

  const bubble = document.createElement("div");
  bubble.className = "chat-bubble";

  // ── Use buildMessageContent for image URL detection ──
  const contentEl = buildMessageContent(data.text);
  bubble.appendChild(contentEl);

  if (isMe) {
    const actions = document.createElement("div");
    actions.className = "chat-actions";

    const editBtn = document.createElement("button");
    editBtn.className = "chat-action-btn";
    editBtn.title     = "Edit";
    editBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
    editBtn.onclick = () => editMessage(msgKey, bubble);

    const delBtn = document.createElement("button");
    delBtn.className = "chat-action-btn del";
    delBtn.title     = "Delete";
    delBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>`;
    delBtn.onclick = () => deleteMessage(msgKey, row);

    actions.appendChild(editBtn);
    actions.appendChild(delBtn);
    bubble.appendChild(actions);
  }

  group.appendChild(bubble);

  const timeEl = document.createElement("div");
  timeEl.className   = "chat-time";
  timeEl.textContent = formatTime(data.time);
  group.appendChild(timeEl);

  if (isMe) { row.appendChild(group); row.appendChild(avatar); }
  else       { row.appendChild(avatar); row.appendChild(group); }

  chatMessages.appendChild(row);

  if (!isPanelOpen) {
    unreadCount++;
    chatBadge.textContent    = unreadCount > 9 ? "9+" : unreadCount;
    chatBadge.style.display  = "flex";
  }

  const nearBottom = chatMessages.scrollHeight - chatMessages.scrollTop - chatMessages.clientHeight < 80;
  if (nearBottom || isMe) chatMessages.scrollTop = chatMessages.scrollHeight;
});

// =====================================
// DIRECT MESSAGES SYSTEM  (Firebase)
// =====================================
(function initDMSystem() {

  const dmBtnFloat    = document.getElementById("dm-btn-float");
  const dmPanel       = document.getElementById("dm-panel");
  const dmUnreadBadge = document.getElementById("dm-unread-badge");
  const dmAddInput    = document.getElementById("dm-add-input");
  const dmAddBtn      = document.getElementById("dm-add-btn");
  const dmFriendsList = document.getElementById("dm-friends-list");
  const dmNoConvo     = document.getElementById("dm-no-convo");
  const dmConvo       = document.getElementById("dm-convo");
  const dmChatWith    = document.getElementById("dm-chat-with");
  const dmMessages    = document.getElementById("dm-messages");
  const dmTypingEl    = document.getElementById("dm-typing");
  const dmInput       = document.getElementById("dm-input");
  const dmSend        = document.getElementById("dm-send");
  const dmCloseConvo  = document.getElementById("dm-close-convo");
  const dmToast       = document.getElementById("dm-toast");

  let isDMOpen          = false;
  let activeFriend      = null;
  let activeConvoId     = null;
  let dmUnreadTotal     = 0;
  let dmUnreadByUser    = {};
  let dmMsgListener     = null;
  let dmMsgListenerRef  = null;
  let dmTypingListener  = null;
  let dmTypingListRef   = null;
  let dmTypingTimer     = null;
  let friendsWatchers   = {};
  let localFriendsCache = [];
  let requestsListenerRef = null;

  // ── Helpers ──
  function convoId(a, b) {
    if (a === b) return a + "__self";
    return [a, b].sort().join("__");
  }

  function showToast(msg) {
    dmToast.textContent = msg;
    dmToast.classList.add("show");
    setTimeout(() => dmToast.classList.remove("show"), 2600);
  }

  function buildAvatarEl(username, avatarUrl, size) {
    size = size || 32;
    const el = document.createElement("div");
    el.className      = "dm-friend-avatar";
    el.style.width    = size + "px";
    el.style.height   = size + "px";
    if (avatarUrl) {
      const img = document.createElement("img");
      img.src      = avatarUrl;
      img.onerror  = () => { el.removeChild(img); el.textContent = getInitials(username); };
      el.appendChild(img);
    } else {
      el.textContent = getInitials(username);
    }
    return el;
  }

  function formatTimeShort(ts) {
    return new Date(ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  function refreshUnreadBadge() {
    // Separate message unreads from request count
    const msgUnread = Object.entries(dmUnreadByUser)
      .filter(([k]) => k !== "__requests__")
      .reduce((a, [, b]) => a + b, 0);
    const reqCount  = dmUnreadByUser["__requests__"] || 0;
    const total     = msgUnread + reqCount;

    if (total > 0) {
      dmUnreadBadge.textContent    = total > 9 ? "9+" : total;
      dmUnreadBadge.style.display  = "flex";
    } else {
      dmUnreadBadge.style.display  = "none";
    }
  }

  // ── Friends reference in Firebase ──
  function friendsRef(username) {
    return db.ref("friends/" + username);
  }

  // ── Open / Close panel ──
  dmBtnFloat.onclick = e => {
    e.stopPropagation();
    isDMOpen = !isDMOpen;
    dmPanel.style.display = isDMOpen ? "flex" : "none";
    if (isDMOpen && activeFriend) {
      dmUnreadByUser[activeFriend] = 0;
      refreshUnreadBadge();
      renderFriendsList(localFriendsCache);
    }
  };

  document.addEventListener("click", e => {
    if (isDMOpen && !dmPanel.contains(e.target) && e.target !== dmBtnFloat && !dmBtnFloat.contains(e.target)) {
      isDMOpen = false;
      dmPanel.style.display = "none";
    }
  });

  // ── Add friend (with existence check + friend request) ──
  async function addFriend() {
    const user = me();
    if (!user) { showToast("⚠ Log in first"); return; }

    const target = dmAddInput.value.trim();
    if (!target) return;
    dmAddInput.value = "";

    if (target === user) { showToast("⚠ Cannot add yourself"); return; }
    if (localFriendsCache.includes(target)) { showToast("Already friends"); return; }

    // Check the target user exists in Firebase
    const userSnap = await db.ref("users/" + target).once("value");
    if (!userSnap.exists()) { showToast("❌ User not found"); return; }

    // Check if a request was already sent
    const existingReq = await db.ref("friend_requests/" + target + "/" + user).once("value");
    if (existingReq.exists()) { showToast("Request already sent"); return; }

    // Check if they already sent us one — auto-accept if so
    const theirReq = await db.ref("friend_requests/" + user + "/" + target).once("value");
    if (theirReq.exists()) {
      await friendsRef(user).child(target).set({ addedAt: Date.now(), preview: "" });
      await friendsRef(target).child(user).set({ addedAt: Date.now(), preview: "" });
      await db.ref("friend_requests/" + user + "/" + target).remove();
      showToast("✓ Now friends with " + target);
      return;
    }

    // Send the friend request
    await db.ref("friend_requests/" + target + "/" + user).set({
      from:   user,
      avatar: myAvatar(),
      sentAt: Date.now(),
    });

    showToast("✓ Friend request sent to " + target);
  }

  dmAddBtn.onclick = addFriend;
  dmAddInput.addEventListener("keydown", e => { if (e.key === "Enter") addFriend(); });

  // ── Remove friend ──
  async function removeFriend(target) {
    const user = me();
    if (!user) return;
    await friendsRef(user).child(target).remove();
    if (activeFriend === target) closeConversation();
    delete dmUnreadByUser[target];
    refreshUnreadBadge();
    showToast("Removed " + target);
    if (friendsWatchers[target]) {
      friendsWatchers[target].ref.off("child_added", friendsWatchers[target].cb);
      delete friendsWatchers[target];
    }
  }

  // ── Listen for incoming friend requests ──
  function listenForFriendRequests(username) {
    if (requestsListenerRef) {
      requestsListenerRef.off();
      requestsListenerRef = null;
    }

    requestsListenerRef = db.ref("friend_requests/" + username);

    requestsListenerRef.on("value", snap => {
      const requests = snap.val() || {};
      const keys     = Object.keys(requests);

      // Remove old request section if it exists
      const old = document.getElementById("dm-requests-section");
      if (old) old.remove();

      // Clear the request badge slot
      dmUnreadByUser["__requests__"] = keys.length;
      refreshUnreadBadge();

      if (!keys.length) return;

      const section = document.createElement("div");
      section.id = "dm-requests-section";
      section.style.cssText = [
        "border-bottom:1px solid var(--ink-border)",
        "padding:6px 0 4px",
        "background:rgba(255,215,0,0.03)",
      ].join(";");

      const heading = document.createElement("div");
      heading.style.cssText = [
        "font-family:'Cinzel',serif",
        "font-size:9px",
        "letter-spacing:2px",
        "text-transform:uppercase",
        "color:var(--gold-dim)",
        "padding:4px 12px 6px",
        "opacity:0.75",
        "display:flex",
        "align-items:center",
        "gap:6px",
      ].join(";");
      heading.innerHTML = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg> Requests (${keys.length})`;
      section.appendChild(heading);

      keys.forEach(fromUser => {
        const req = requests[fromUser];
        const row = document.createElement("div");
        row.style.cssText = "display:flex;align-items:center;gap:8px;padding:5px 10px;";

        const av = buildAvatarEl(fromUser, req.avatar || "", 28);

        const name = document.createElement("div");
        name.style.cssText = "flex:1;font-family:'Cinzel',serif;font-size:10px;color:var(--gold);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";
        name.textContent   = fromUser;

        const acceptBtn = document.createElement("button");
        acceptBtn.style.cssText = [
          "padding:3px 9px",
          "border-radius:20px",
          "border:1px solid rgba(46,204,113,0.5)",
          "background:rgba(46,204,113,0.08)",
          "color:#2ecc71",
          "font-family:'Cinzel',serif",
          "font-size:9px",
          "letter-spacing:1px",
          "cursor:pointer",
          "transition:all 0.2s",
          "flex-shrink:0",
        ].join(";");
        acceptBtn.textContent = "Accept";
        acceptBtn.onmouseover = () => { acceptBtn.style.background = "rgba(46,204,113,0.18)"; };
        acceptBtn.onmouseout  = () => { acceptBtn.style.background = "rgba(46,204,113,0.08)"; };
        acceptBtn.onclick = async () => {
          const ts = Date.now();
          await friendsRef(username).child(fromUser).set({ addedAt: ts, preview: "" });
          await friendsRef(fromUser).child(username).set({ addedAt: ts, preview: "" });
          await db.ref("friend_requests/" + username + "/" + fromUser).remove();
          showToast("✓ Now friends with " + fromUser);
        };

        const declineBtn = document.createElement("button");
        declineBtn.style.cssText = [
          "padding:3px 9px",
          "border-radius:20px",
          "border:1px solid rgba(255,107,107,0.4)",
          "background:rgba(255,107,107,0.06)",
          "color:var(--red)",
          "font-family:'Cinzel',serif",
          "font-size:9px",
          "letter-spacing:1px",
          "cursor:pointer",
          "margin-left:4px",
          "transition:all 0.2s",
          "flex-shrink:0",
        ].join(";");
        declineBtn.textContent = "Decline";
        declineBtn.onmouseover = () => { declineBtn.style.background = "rgba(255,107,107,0.14)"; };
        declineBtn.onmouseout  = () => { declineBtn.style.background = "rgba(255,107,107,0.06)"; };
        declineBtn.onclick = async () => {
          await db.ref("friend_requests/" + username + "/" + fromUser).remove();
          showToast("Declined " + fromUser);
        };

        row.appendChild(av);
        row.appendChild(name);
        row.appendChild(acceptBtn);
        row.appendChild(declineBtn);
        section.appendChild(row);
      });

      // Insert above the friends list
      dmFriendsList.parentElement.insertBefore(section, dmFriendsList);
    });
  }

  // ── Listen to friends list in Firebase (real-time) ──
  let friendsListRef    = null;
  let friendsListenerOn = false;

  function startFriendsListener(username) {
    if (friendsListRef) {
      friendsListRef.off();
      friendsListenerOn = false;
    }
    friendsListRef = friendsRef(username);
    friendsListenerOn = true;

    friendsListRef.on("value", snap => {
      const data = snap.val() || {};
      localFriendsCache = Object.keys(data);
      renderFriendsList(localFriendsCache, data);
      localFriendsCache.forEach(f => {
        if (!friendsWatchers[f]) watchIncoming(f);
      });
    });

    // Also start listening for incoming friend requests
    listenForFriendRequests(username);
  }

  function stopFriendsListener() {
    if (friendsListRef) { friendsListRef.off(); friendsListRef = null; }
    friendsListenerOn = false;
    if (requestsListenerRef) { requestsListenerRef.off(); requestsListenerRef = null; }
    localFriendsCache = [];
    Object.values(friendsWatchers).forEach(w => w.ref.off("child_added", w.cb));
    friendsWatchers = {};
  }

  // ── Render friends list ──
  function renderFriendsList(friends, previewData) {
    friends     = friends     || localFriendsCache;
    previewData = previewData || {};
    dmFriendsList.innerHTML = "";

    if (!me()) {
      const empty = document.createElement("div");
      empty.className   = "dm-empty";
      empty.textContent = "Log in to use Direct Messages.";
      dmFriendsList.appendChild(empty);
      return;
    }

    if (!friends.length) {
      const empty = document.createElement("div");
      empty.className   = "dm-empty";
      empty.textContent = "Add a friend to start chatting privately.";
      dmFriendsList.appendChild(empty);
      return;
    }

    friends.forEach(friend => {
      const row = document.createElement("div");
      row.className = "dm-friend-row" + (friend === activeFriend ? " active" : "");

      const avatarEl = buildAvatarEl(friend, "", 32);
      db.ref("users/" + friend + "/avatar").once("value").then(s => {
        const av = s.val() || "";
        if (av) {
          avatarEl.innerHTML = "";
          const img       = document.createElement("img");
          img.src         = av;
          img.onerror     = () => { avatarEl.innerHTML = ""; avatarEl.textContent = getInitials(friend); };
          avatarEl.appendChild(img);
        } else {
          avatarEl.textContent = getInitials(friend);
        }
      });

      const info    = document.createElement("div");
      info.className = "dm-friend-info";

      const name    = document.createElement("div");
      name.className   = "dm-friend-name";
      name.textContent = friend === me() ? friend + " (You)" : friend;

      const rawPreview = (previewData[friend] && previewData[friend].preview) || "No messages yet";
      const preview = document.createElement("div");
      preview.className   = "dm-friend-preview";
      // Show a nicer label if the last message was an image
      preview.textContent = isImageUrl(rawPreview) ? "📷 Image" : rawPreview;

      info.appendChild(name);
      info.appendChild(preview);

      row.appendChild(avatarEl);
      row.appendChild(info);

      const unread = dmUnreadByUser[friend] || 0;
      if (unread > 0) {
        const badge         = document.createElement("div");
        badge.className     = "dm-friend-badge";
        badge.textContent   = unread > 9 ? "9+" : unread;
        row.appendChild(badge);
      }

      const removeBtn = document.createElement("button");
      removeBtn.className = "dm-remove-btn";
      removeBtn.title     = "Remove";
      removeBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
      removeBtn.onclick   = e => { e.stopPropagation(); removeFriend(friend); };
      row.appendChild(removeBtn);

      row.onclick = () => openConversation(friend);
      dmFriendsList.appendChild(row);
    });
  }

  // ── Open a conversation ──
  function openConversation(friend) {
    activeFriend  = friend;
    activeConvoId = convoId(me(), friend);

    if (dmMsgListenerRef && dmMsgListener) {
      dmMsgListenerRef.off("child_added", dmMsgListener);
      dmMsgListener    = null;
      dmMsgListenerRef = null;
    }
    if (dmTypingListRef && dmTypingListener) {
      dmTypingListRef.off("value", dmTypingListener);
      dmTypingListener = null;
      dmTypingListRef  = null;
    }

    dmUnreadByUser[friend] = 0;
    refreshUnreadBadge();

    dmNoConvo.style.display = "none";
    dmConvo.style.display   = "flex";
    dmChatWith.textContent  = friend === me() ? friend + " (You — Notes to self)" : friend;
    dmMessages.innerHTML    = "";

    renderFriendsList(localFriendsCache);

    const messagesRef = db.ref("dms/" + activeConvoId + "/messages");
    dmMsgListenerRef  = messagesRef;
    dmMsgListener     = messagesRef.limitToLast(60).on("child_added", snap => {
      const data = snap.val();
      appendDMMessage(data, snap.key);
      // Update preview — show "📷 Image" label in Firebase too
      const previewText = isImageUrl(data.text)
        ? "📷 Image"
        : (data.text || "").substring(0, 32) + ((data.text || "").length > 32 ? "…" : "");
      friendsRef(me()).child(friend).update({ preview: previewText });
      dmMessages.scrollTop = dmMessages.scrollHeight;
    });

    if (friend !== me()) {
      dmTypingListRef  = db.ref("dm_typing/" + activeConvoId + "/" + friend);
      dmTypingListener = dmTypingListRef.on("value", snap => {
        if (snap.val()) {
          dmTypingEl.innerHTML = `<span>${friend} typing</span><span class="typing-dots"><span></span><span></span><span></span></span>`;
        } else {
          dmTypingEl.innerHTML = "";
        }
      });
    } else {
      dmTypingEl.innerHTML = "";
    }

    dmInput.focus();
  }

  function closeConversation() {
    if (dmMsgListenerRef && dmMsgListener) {
      dmMsgListenerRef.off("child_added", dmMsgListener);
      dmMsgListener    = null;
      dmMsgListenerRef = null;
    }
    if (dmTypingListRef && dmTypingListener) {
      dmTypingListRef.off("value", dmTypingListener);
      dmTypingListener = null;
      dmTypingListRef  = null;
    }
    activeFriend   = null;
    activeConvoId  = null;
    dmNoConvo.style.display = "flex";
    dmConvo.style.display   = "none";
    renderFriendsList(localFriendsCache);
  }

  dmCloseConvo.onclick = closeConversation;

  // ── Append a DM message bubble ──
  function appendDMMessage(data, key) {
    const user = me();
    const isMe = data.sender === user;

    const row = document.createElement("div");
    row.classList.add("chat-row", isMe ? "me" : "other");

    const avatarEl = buildAvatarEl(data.sender, data.avatar || "", 28);

    const group = document.createElement("div");
    group.className = "chat-bubble-group";

    if (!isMe) {
      const sender       = document.createElement("div");
      sender.className   = "chat-sender";
      sender.textContent = data.sender;
      group.appendChild(sender);
    }

    const bubble      = document.createElement("div");
    bubble.className  = "chat-bubble";

    // ── Use buildMessageContent for image URL detection ──
    const contentEl = buildMessageContent(data.text);
    bubble.appendChild(contentEl);

if (isMe) {
      const actions  = document.createElement("div");
      actions.className = "chat-actions";

      const editBtn    = document.createElement("button");
      editBtn.className = "chat-action-btn";
      editBtn.title     = "Edit";
      editBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
      editBtn.onclick   = () => {
        const currentText = bubble.querySelector(".chat-text")
          ? bubble.querySelector(".chat-text").textContent
          : bubble.querySelector("img")
            ? bubble.querySelector("img").src
            : "";
        const newText = prompt("Edit message:", currentText);
        if (newText && newText.trim()) {
          const filtered = filterMessage(newText.trim());
          db.ref("dms/" + activeConvoId + "/messages/" + key).update({ text: filtered });
          const oldContent = bubble.querySelector(".chat-text, div:not(.chat-actions)");
          const newContent = buildMessageContent(filtered);
          if (oldContent) bubble.replaceChild(newContent, oldContent);
        }
      };

      const delBtn     = document.createElement("button");
      delBtn.className = "chat-action-btn del";
      delBtn.title     = "Delete";
      delBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>`;
      delBtn.onclick   = () => {
        if (confirm("Delete this message?")) {
          db.ref("dms/" + activeConvoId + "/messages/" + key).remove();
          row.remove();
        }
      };

      actions.appendChild(editBtn);
      actions.appendChild(delBtn);
      bubble.appendChild(actions);
    }

    group.appendChild(bubble);

    const timeEl      = document.createElement("div");
    timeEl.className  = "chat-time";
    timeEl.textContent = formatTimeShort(data.time);
    group.appendChild(timeEl);

    if (isMe) { row.appendChild(group); row.appendChild(avatarEl); }
    else       { row.appendChild(avatarEl); row.appendChild(group); }

    dmMessages.appendChild(row);
  }

  // ── Send DM ──
  function sendDM() {
    const user = me();
    if (!user)    { showToast("⚠ Log in to send messages"); return; }
    if (!activeFriend || !activeConvoId) return;
    const text = dmInput.value.trim();
    if (!text) return;

    const clean = filterMessage(text);

    db.ref("dms/" + activeConvoId + "/messages").push({
      sender: user,
      avatar: myAvatar(),
      text:   clean,
      time:   Date.now(),
    });

    if (activeFriend !== user) {
      db.ref("dm_typing/" + activeConvoId + "/" + user).remove();
    }
    clearTimeout(dmTypingTimer);
    dmInput.value = "";
  }

  dmSend.onclick = sendDM;
  dmInput.addEventListener("keydown", e => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendDM(); }
  });

  // ── Typing indicator ──
  dmInput.addEventListener("input", () => {
    if (!activeConvoId || activeFriend === me()) return;
    const user = me();
    if (!user) return;
    if (dmInput.value.trim()) {
      db.ref("dm_typing/" + activeConvoId + "/" + user).set(true);
      clearTimeout(dmTypingTimer);
      dmTypingTimer = setTimeout(() => db.ref("dm_typing/" + activeConvoId + "/" + user).remove(), 2200);
    } else {
      db.ref("dm_typing/" + activeConvoId + "/" + user).remove();
    }
  });

  // ── Watch for incoming messages from a friend (for unread badges) ──
  function watchIncoming(friend) {
    const user = me();
    if (!user || friendsWatchers[friend]) return;

    const cid = convoId(user, friend);
    const ref = db.ref("dms/" + cid + "/messages")
                  .orderByChild("time")
                  .startAt(Date.now() + 1);

    const cb = snap => {
      const data = snap.val();
      if (friend === user) return;
      if (data.sender === friend) {
        if (!isDMOpen || activeFriend !== friend) {
          dmUnreadByUser[friend] = (dmUnreadByUser[friend] || 0) + 1;
          refreshUnreadBadge();
          renderFriendsList(localFriendsCache);
        }
      }
    };

    ref.on("child_added", cb);
    friendsWatchers[friend] = { ref, cb };
  }

  // ── React to login / logout events ──
  window.addEventListener("ns_login", e => {
    const { username } = e.detail;
    dmUnreadByUser     = {};
    refreshUnreadBadge();
    startFriendsListener(username);
  });

  window.addEventListener("ns_logout", () => {
    stopFriendsListener();
    closeConversation();
    renderFriendsList([]);
    dmUnreadByUser = {};
    refreshUnreadBadge();
    const old = document.getElementById("dm-requests-section");
    if (old) old.remove();
  });

  // ── Init if already logged in ──
  if (me()) {
    startFriendsListener(me());
  } else {
    renderFriendsList([]);
  }

})();
