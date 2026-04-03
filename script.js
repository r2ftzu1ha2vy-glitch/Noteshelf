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
  // TRAILER POPUP
  // =====================================
  const trailerPopup = document.createElement("div");
  trailerPopup.id = "trailer-popup";
  Object.assign(trailerPopup.style, {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "24px",
    display: "none",
    zIndex: "9999",
    maxWidth: "90%",
    maxHeight: "80%",
    overflowY: "auto",
    transition: "0.3s",
  });

  const closeTrailerBtn = document.createElement("button");
  closeTrailerBtn.textContent = "✖  Close";
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
    { name: "HexAsteal",      trailer: "https://raw.githubusercontent.com/r2ftzu1ha2vy-glitch/Trailers/main/WhatsApp%20Video%202026-03-29%20at%2017.43.30.mp4" },
    { name: "8-Ball Billiards", trailer: "https://raw.githubusercontent.com/r2ftzu1ha2vy-glitch/Trailers/main/8-Ball%20Billiards%20(1).mp4" },
  ];

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

    // ── Create game card ──
    function createGameButton(game) {
      const btn = document.createElement("button");
      btn.className = "game-button";

      const img = document.createElement("img");
      img.src   = game.image || defaultImg;
      img.alt   = game.name;

      const label = document.createElement("div");
      label.textContent = game.name;

      btn.appendChild(img);
      btn.appendChild(label);

      btn.onclick = () => window.open(game.url, "_blank");
      return btn;
    }

    // ── Render ──
    function renderGames(filter = "") {
      gameListDiv.innerHTML = "";
      games
        .filter(g => g.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach(g => gameListDiv.appendChild(createGameButton(g)));
    }

    function renderGamesByCategory(category) {
      gameListDiv.innerHTML = "";
      games
        .filter(g => g.category.toLowerCase() === category.toLowerCase())
        .forEach(g => gameListDiv.appendChild(createGameButton(g)));
    }

    searchBar?.addEventListener("input", e => renderGames(e.target.value));

    // ── Category sidebar ──
    const categories = ["All Games", "Horror", "Puzzle", "Racing", "Action", "Rpg", "Sports", "Chill", "Timing", "Defense", "Reflex", "Annoying"];
    const letters = {
      "All Games": "🖳", Horror: "🕸", Puzzle: "𖡎", Racing: "🏎",
      Action: "⚔", Sports: "⚽︎", Rpg: "🗡", Chill: "☕︎",
      Timing: "⏱︎", Defense: "⛊", Reflex: "👁", Annoying: "☠︎︎",
    };

    categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = "category-button";

      const abbr = document.createElement("span");
      abbr.className = "category-abbr";
      abbr.textContent = letters[cat];

      const text = document.createElement("span");
      text.className = "category-text";
      text.textContent = cat;

      btn.appendChild(abbr);
      btn.appendChild(text);

      btn.onclick = () => cat === "All Games" ? renderGames() : renderGamesByCategory(cat);
      categorySidebar.appendChild(btn);
    });

    renderGames();

    // ── Trailers ──
    document.getElementById("trailer-btn")?.addEventListener("click", () => {
      trailerPopup.innerHTML = "";
      trailerPopup.appendChild(closeTrailerBtn);

      newGameTrailers.forEach(game => {
        const title = document.createElement("h3");
        title.textContent = game.name;
        Object.assign(title.style, { margin: "10px 0 6px", textAlign: "center" });

        const video = document.createElement("video");
        video.src      = game.trailer;
        video.controls = true;
        video.preload  = "metadata";
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
        avatarPreview.style.display = "inline-block";
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
        users[username] = { password, isAdmin: adminUsers.includes(username) };
        localStorage.setItem(usersKey, JSON.stringify(users));
        localStorage.setItem("username", username);
        if (localStorage.getItem("userAvatar"))
          localStorage.setItem("avatar_" + username, localStorage.getItem("userAvatar"));
        authPopup.style.display = "none";
        updateUIAfterLogin(username);
        return;
      }

      if (authTitle.textContent === "Log In") {
        if (!users[username])                   { authMessage.textContent = "❌ Username does not exist"; return; }
        if (users[username].password !== password) { authMessage.textContent = "❌ Wrong password"; return; }
        localStorage.setItem("username", username);
        authPopup.style.display = "none";
        updateUIAfterLogin(username);
      }
    });

    function updateUIAfterLogin(username) {
      logoutBtn.style.display       = "inline-block";
      usernameDisplay.style.display = "inline-block";
      usernameDisplay.textContent   = username;
      signupBtn.style.display = loginBtn.style.display = "none";

      const savedAvatar = localStorage.getItem("userAvatar");
      if (savedAvatar) { userAvatar.src = savedAvatar; userAvatar.style.display = "inline-block"; }
      else { userAvatar.style.display = "none"; }

      users = JSON.parse(localStorage.getItem(usersKey) || "{}");
      adminPanel.style.display = users[username]?.isAdmin ? "block" : "none";
    }

    logoutBtn?.addEventListener("click", () => {
      localStorage.removeItem("username");
      usernameDisplay.style.display = userAvatar.style.display = "none";
      logoutBtn.style.display = "none";
      signupBtn.style.display = loginBtn.style.display = "inline-block";
      adminPanel.style.display = "none";
    });

    // ── Global message ──
    function triggerGlobalMessage(message) {
      if (!globalMsgPopup) return;
      globalMsgPopup.textContent = message;
      globalMsgPopup.style.display = "block";
      setTimeout(() => {
        globalMsgPopup.style.opacity = "1";
        globalMsgPopup.style.transform = "translateX(-50%) translateY(10px)";
      }, 10);
      setTimeout(() => {
        globalMsgPopup.style.opacity = "0";
        globalMsgPopup.style.transform = "translateX(-50%) translateY(-50px)";
        setTimeout(() => { globalMsgPopup.style.display = "none"; }, 220);
      }, 3000);
    }

    document.getElementById("global-message-send")?.addEventListener("click", () => {
      const msg = prompt("Enter global message:");
      if (msg) triggerGlobalMessage(msg);
    });

    document.getElementById("close-admin")?.addEventListener("click", () => {
      adminPanel.style.display = "none";
    });

    const currentUser = localStorage.getItem("username");
    if (currentUser) updateUIAfterLogin(currentUser);
  });

  // =====================================
  // BACKGROUND CUSTOMIZATION
  // =====================================
  const bgColorPicker = document.getElementById("bg-color-picker");
  const bgImageInput  = document.getElementById("bg-image-input");
  const applyBgBtn    = document.getElementById("apply-bg");
  const resetBgBtn    = document.getElementById("reset-bg");

  function applyBackground() {
    const color  = bgColorPicker?.value;
    const imgUrl = bgImageInput?.value.trim();
    if (imgUrl) {
      document.body.style.background = `url('${imgUrl}') center/cover no-repeat`;
      localStorage.setItem("bgImage", imgUrl);
      localStorage.removeItem("bgColor");
    } else if (color) {
      document.body.style.background = color;
      localStorage.setItem("bgColor", color);
      localStorage.removeItem("bgImage");
    }
  }

  applyBgBtn?.addEventListener("click", applyBackground);
  resetBgBtn?.addEventListener("click", () => {
    localStorage.removeItem("bgColor");
    localStorage.removeItem("bgImage");
    document.body.style.background = "";
    if (bgImageInput) bgImageInput.value = "";
  });

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
  introOverlay.textContent = "🕮 NoteShelf";
  document.body.appendChild(introOverlay);

  setTimeout(() => {
    introOverlay.style.opacity = "0";
    introOverlay.style.pointerEvents = "none";
    setTimeout(() => introOverlay.remove(), 1000);
  }, 1200);

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

  const chatToggle  = document.getElementById("chat-toggle");
  const chatPanel   = document.getElementById("chat-panel");
  const chatClose   = document.getElementById("chat-close");
  const chatMessages= document.getElementById("chat-messages");
  const chatInput   = document.getElementById("chat-input");
  const chatSend    = document.getElementById("chat-send");
  const typingRef   = db.ref("typing");
  const typingIndicator = document.getElementById("typing-indicator");

  chatToggle.onclick = () => { chatPanel.style.display = "flex"; }
  chatClose.onclick  = () => { chatPanel.style.display = "none"; }

  // ── Bad word filter ──
  const badWords = ["nigger","nigga","fuck","shit","niga","sex","bitch"];
  function filterMessage(msg) {
    let clean = msg;
    badWords.forEach(w => { clean = clean.replace(new RegExp(w, "gi"), "****"); });
    return clean;
  }

  // ── Send ──
  function sendMessage() {
    const user = localStorage.getItem("username") || "Guest";
    let msg = chatInput.value.trim();
    if (!msg) return;
    msg = filterMessage(msg);
    db.ref("messages").push({
      user,
      text: msg,
      avatar: localStorage.getItem("avatar_" + user) || "",
      time: Date.now()
    });
    chatInput.value = "";
    typingRef.child(user).remove();
  }

  chatSend.onclick = sendMessage;
  chatInput.addEventListener("keypress", e => { if (e.key === "Enter") sendMessage(); });

  // ── Typing indicator ──
  chatInput.addEventListener("input", () => {
    const user = localStorage.getItem("username") || "Guest";
    if (chatInput.value.trim()) {
      typingRef.child(user).set(true);
      clearTimeout(chatInput._typingTimer);
      chatInput._typingTimer = setTimeout(() => typingRef.child(user).remove(), 2000);
    } else {
      typingRef.child(user).remove();
    }
  });

  typingRef.on("value", snap => {
    const data = snap.val();
    const me   = localStorage.getItem("username") || "Guest";
    if (!data) { typingIndicator.textContent = ""; return; }
    const others = Object.keys(data).filter(u => u !== me);
    typingIndicator.textContent = others.length ? `${others.join(", ")} typing…` : "";
  });

  // ── Message helpers ──
  function editMessage(msgKey, textEl) {
    const newText = prompt("Edit message:", textEl.textContent);
    if (newText && newText.trim()) {
      db.ref("messages/" + msgKey).update({ text: filterMessage(newText.trim()) });
      textEl.textContent = filterMessage(newText.trim());
    }
  }

  function deleteMessage(msgKey, rowEl) {
    if (confirm("Delete this message?")) {
      db.ref("messages/" + msgKey).remove();
      rowEl.remove();
    }
  }

  // ── Render messages ──
  const seenKeys = new Set();

  db.ref("messages").limitToLast(50).on("child_added", snap => {
    if (seenKeys.has(snap.key)) return;
    seenKeys.add(snap.key);

    const data        = snap.val();
    const msgKey      = snap.key;
    const currentUser = localStorage.getItem("username") || "Guest";
    const isMe        = data.user === currentUser;

    const row = document.createElement("div");
    row.classList.add("chat-row", isMe ? "me" : "other");

    const avatar = document.createElement("div");
    avatar.className = "chat-avatar";
    if (data.avatar) {
      avatar.style.backgroundImage = `url(${data.avatar})`;
      avatar.style.backgroundSize  = "cover";
    }

    const bubble = document.createElement("div");
    bubble.className = "chat-bubble";
    bubble.innerHTML = `
      <div class="chat-name">${data.user}</div>
      <div class="chat-text">${data.text}</div>
    `;

    if (isMe) {
      const btns = document.createElement("div");
      btns.className = "chat-btns";

      const editBtn = document.createElement("button");
      editBtn.textContent = "✎";
      editBtn.onclick = () => editMessage(msgKey, bubble.querySelector(".chat-text"));

      const delBtn = document.createElement("button");
      delBtn.textContent = "🗑";
      delBtn.onclick = () => deleteMessage(msgKey, row);

      btns.appendChild(editBtn);
      btns.appendChild(delBtn);
      bubble.appendChild(btns);
    }

    if (isMe) { row.appendChild(bubble); row.appendChild(avatar); }
    else       { row.appendChild(avatar); row.appendChild(bubble); }

    chatMessages.appendChild(row);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  });
