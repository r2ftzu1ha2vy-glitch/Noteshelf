// =====================================
// OPTIONAL: SUPABASE (DISABLED FOR CODEPEN)
// =====================================
// If you want Supabase later, uncomment and move this into a <script type="module">
// in the HTML, or use the UMD build. For now it's disabled to avoid "import" errors
// in CodePen's JS panel.

// import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// const supabaseUrl = 'https://infsmlhsldmsfhvphyck.supabase.co';
// const supabaseKey = '...YOUR KEY...';
// const supabase = createClient(supabaseUrl, supabaseKey);

// =====================================
// GAMES
// =====================================
const games = [
  { name: "Merger", url: "https://codepen.io/R2FtZU1ha2Vy/full/YPWxWGN", category: "Puzzle", image: "https://iili.io/f4j4SNp.png" },
  { name: "Shadow Boxing", url: "https://codepen.io/Z-Code-the-lessful/full/OPXxNGb", category: "Action", image: "https://iili.io/f4wNzoG.png" },
  { name: "Highway Crash", url: "https://codepen.io/Z-Code-the-lessful/full/emzGZqP", category: "Racing", image: "https://iili.io/fP5pJLu.png" },
  { name: "Badminton Champion", url: "https://codepen.io/Z-Code-the-lessful/full/KwMQvRr", category: "Sports", image: "https://iili.io/ftXhakX.png"},
  { name: "Tetricks", url: "https://codepen.io/R2FtZU1ha2Vy/full/RNRyqpB", category: "Puzzle", image: "https://iili.io/qBzIIlR.png"},
  { name: "Meme Rng", url: "https://codepen.io/R2FtZU1ha2Vy/full/zxBmypo", category: "Chill", image: "https://iili.io/q24jm8u.png"},
  { name: "Build N Defend Tower", url: "https://codepen.io/Z-Code-the-lessful/full/WbGQLqy", category: "Timing", image: "https://iili.io/qCrIy6G.png"},
  { name: "Square Dodge", url: "https://codepen.io/R2FtZU1ha2Vy/full/YPGWdNJ", category: "Timing", image: "https://iili.io/qT4a3QV.png"},
  { name: "RingBound", url: "https://codepen.io/R2FtZU1ha2Vy/full/OPRRyXQ", category: "Timing", image: "https://iili.io/qT45h6F.pngg"},
];

const defaultImg = "https://iili.io/KUgv2G2.png";

// =====================================
// TRAILER POPUP (UI ONLY)
// =====================================
const trailerPopup = document.createElement("div");
trailerPopup.id = "trailer-popup";
Object.assign(trailerPopup.style, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#111",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 0 25px rgba(0,0,0,0.7)",
  display: "none",
  zIndex: "9999",
  maxWidth: "90%",
  maxHeight: "80%",
  overflowY: "auto",
  color: "#fff",
  transition: "0.3s",
  fontFamily: "'Arial', sans-serif"
});

// Close button for trailer popup
const closeTrailerBtn = document.createElement("button");
closeTrailerBtn.textContent = "✖ Close";
Object.assign(closeTrailerBtn.style, {
  display: "block",
  marginBottom: "15px",
  padding: "6px 12px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  background: "#444",
  color: "#fff",
  fontWeight: "bold",
  transition: "0.3s"
});
closeTrailerBtn.addEventListener("mouseover", () => (closeTrailerBtn.style.background = "#666"));
closeTrailerBtn.addEventListener("mouseout", () => (closeTrailerBtn.style.background = "#444"));

trailerPopup.appendChild(closeTrailerBtn);
document.body.appendChild(trailerPopup);

// Trailer data
const newGameTrailers = [
  {
    name: "Meme Rng",
    trailer: "https://raw.githubusercontent.com/r2ftzu1ha2vy-glitch/Trailers/main/202602130944.mp4"
  }
];

// Close trailer popup helper
function closeTrailerPopup() {
  // Stop all videos
  const videos = trailerPopup.querySelectorAll("video");
  videos.forEach(video => {
    video.pause();
    video.currentTime = 0;
  });

  trailerPopup.style.display = "none";
}

// Close button
closeTrailerBtn.addEventListener("click", closeTrailerPopup);

// Close on outside click
window.addEventListener("click", (e) => {
  if (e.target === trailerPopup) closeTrailerPopup();
});

// Close with ESC key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && trailerPopup.style.display === "block") closeTrailerPopup();
});

// =====================================
// DOM RENDERING & EVENT HANDLERS
// =====================================
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded fired");

  const gameListDiv      = document.getElementById("game-list");
  const searchBar        = document.getElementById("search-bar");
  const categorySidebar  = document.getElementById("category-sidebar");
  const recommendedBtn   = document.getElementById("recommended-btn");

  const signupBtn        = document.getElementById("signup-btn");
  const loginBtn         = document.getElementById("login-btn");
  const logoutBtn        = document.getElementById("logout-btn");
  const authPopup        = document.getElementById("auth-popup");
  const authTitle        = document.getElementById("auth-title");
  const authUsername     = document.getElementById("auth-username");
  const authPassword     = document.getElementById("auth-password");
  const authSubmit       = document.getElementById("auth-submit");
  const authMessage      = document.getElementById("auth-message");
  const closeAuthBtn     = document.getElementById("close-auth");
  const userAvatar       = document.getElementById("user-avatar");
  const usernameDisplay  = document.getElementById("username-display");
  const adminPanel       = document.getElementById("admin-panel");
  const avatarInput      = document.getElementById("auth-avatar");
  const avatarPreview    = document.getElementById("avatar-preview");
  const globalMsgPopup   = document.getElementById("global-message-popup");

  const usersKey   = "users";
  const adminUsers = ["R2FtZU1ha2Vy", "GDFlame05"];
  let users        = JSON.parse(localStorage.getItem(usersKey) || "{}");

  console.log("Buttons found:", {
    signupBtn: !!signupBtn,
    loginBtn: !!loginBtn,
    logoutBtn: !!logoutBtn,
    trailerBtn: !!document.getElementById("trailer-btn")
  });

  // ---------- CREATE GAME BUTTON ----------
  function createGameButton(game) {
    const btn = document.createElement("button");
    btn.className = "game-button";
    Object.assign(btn.style, {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "140px",
      height: "160px",
      margin: "6px",
      padding: "8px",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      background: "#222",
      color: "#fff",
      transition: "0.3s"
    });

    btn.addEventListener("mouseover", () => (btn.style.background = "#444"));
    btn.addEventListener("mouseout", () => (btn.style.background = "#222"));

    const img = document.createElement("img");
    img.src = game.image || defaultImg;
    Object.assign(img.style, {
      width: "120px",
      height: "100px",
      objectFit: "cover",
      borderRadius: "8px"
    });

    const label = document.createElement("div");
    label.textContent = game.name;
    Object.assign(label.style, {
      marginTop: "5px",
      fontWeight: "bold",
      fontSize: "14px",
      textAlign: "center"
    });

    btn.appendChild(img);
    btn.appendChild(label);

    // Open game in new tab
    btn.onclick = () => {
      window.open(game.url, "_blank");
    };

    return btn;
  }

  // ---------- RENDERING ----------
  function renderGames(filter = "") {
    gameListDiv.innerHTML = "";
    games
      .filter(g => g.name.toLowerCase().includes(filter.toLowerCase()))
      .forEach(game => gameListDiv.appendChild(createGameButton(game)));
  }

  function renderGamesByCategory(category) {
    console.log("Filtering by category:", category);
    gameListDiv.innerHTML = "";
    games
      .filter(g => g.category.toLowerCase() === category.toLowerCase())
      .forEach(game => gameListDiv.appendChild(createGameButton(game)));
  }

  searchBar?.addEventListener("input", e => renderGames(e.target.value));

  recommendedBtn?.addEventListener("click", () => {
    const recommendedGames = ["Merger", "Shadow Boxing"]; // fixed names
    gameListDiv.innerHTML = "";
    games
      .filter(g => recommendedGames.includes(g.name))
      .forEach(game => gameListDiv.appendChild(createGameButton(g)));
  });

  // ---------- CATEGORY SIDEBAR ----------
  const categories = ["All Games", "Horror", "Puzzle", "Racing", "Action", "Rpg", "Sports", "Chill", "Timing"];

  const letters = {
    "All Games": "🖳",
    Horror: "🕸",
    Puzzle: "𖡎",
    Racing: "🏎",
    Action: "⚔",
    Sports: "⚽︎",
    Rpg: "⚔︎",
    Chill: "☕︎",
    Timing: "⏱︎"
  };

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = `${letters[cat]} ${cat}`;
    btn.className = "category-button";

    btn.onclick = () => {
      if (cat === "All Games") {
        renderGames();
      } else {
        renderGamesByCategory(cat);
      }
    };

    categorySidebar.appendChild(btn);
  });

  renderGames();

  // =====================================
  // GAME TRAILERS BUTTON
  // =====================================
  document.getElementById("trailer-btn")?.addEventListener("click", () => {
    console.log("Trailer button clicked");
    trailerPopup.innerHTML = "";
    trailerPopup.appendChild(closeTrailerBtn);

    newGameTrailers.forEach(game => {
      const title = document.createElement("h3");
      title.textContent = game.name;
      Object.assign(title.style, {
        margin: "10px 0 5px 0",
        fontSize: "18px",
        textAlign: "center",
        fontWeight: "bold"
      });

      const video = document.createElement("video");
      video.src = game.trailer;
      video.controls = true;
      video.autoplay = false;
      Object.assign(video.style, {
        width: "100%",
        maxHeight: "300px",
        borderRadius: "8px",
        marginBottom: "15px"
      });
      video.preload = "metadata";

      trailerPopup.appendChild(title);
      trailerPopup.appendChild(video);
    });

    trailerPopup.style.display = "block";
  });

  // =====================================
  // AUTH & AVATAR
  // =====================================
  signupBtn?.addEventListener("click", () => {
    console.log("Sign Up clicked");
    authTitle.textContent = "Sign Up";
    authPopup.style.display = "flex";
    authUsername.value = "";
    authPassword.value = "";
    authMessage.textContent = "";
  });

  loginBtn?.addEventListener("click", () => {
    console.log("Log In clicked");
    authTitle.textContent = "Log In";
    authPopup.style.display = "flex";
    authUsername.value = "";
    authPassword.value = "";
    authMessage.textContent = "";
  });

  closeAuthBtn?.addEventListener("click", () => {
    console.log("Auth close clicked");
    authPopup.style.display = "none";
  });

  authPassword.dataset.visible = "false";
  authPassword.addEventListener("dblclick", () => {
    authPassword.dataset.visible = authPassword.dataset.visible === "true" ? "false" : "true";
    authPassword.type = authPassword.dataset.visible === "true" ? "text" : "password";
  });

  avatarInput?.addEventListener("change", (e) => {
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

    if (username.length < 5) {
      authMessage.textContent = "❌ Username must be at least 5 characters";
      return;
    }

    // Sign Up
    if (authTitle.textContent === "Sign Up") {
      if (users[username]) {
        authMessage.textContent = "❌ Username already taken";
        return;
      }
      users[username] = { password, isAdmin: adminUsers.includes(username) };
      localStorage.setItem(usersKey, JSON.stringify(users));
      localStorage.setItem("username", username);
      authPopup.style.display = "none";
      updateUIAfterLogin(username);
      return;
    }

    // Log In
    if (authTitle.textContent === "Log In") {
      if (!users[username]) {
        authMessage.textContent = "❌ Username does not exist";
        return;
      }
      if (users[username].password !== password) {
        authMessage.textContent = "❌ Wrong password";
        return;
      }
      localStorage.setItem("username", username);
      authPopup.style.display = "none";
      updateUIAfterLogin(username);
    }
  });

  function updateUIAfterLogin(username) {
    logoutBtn.style.display = "inline-block";
    usernameDisplay.style.display = "inline-block";
    usernameDisplay.textContent = username;

    signupBtn.style.display = "none";
    loginBtn.style.display = "none";

    const savedAvatar = localStorage.getItem("userAvatar");
    if (savedAvatar) {
      userAvatar.src = savedAvatar;
      userAvatar.style.display = "inline-block";
    } else {
      userAvatar.style.display = "none";
    }

    users = JSON.parse(localStorage.getItem(usersKey) || "{}");
    adminPanel.style.display = users[username]?.isAdmin ? "block" : "none";
  }

  logoutBtn?.addEventListener("click", () => {
    console.log("Log Out clicked");
    localStorage.removeItem("username");
    usernameDisplay.style.display = "none";
    userAvatar.style.display = "none";
    logoutBtn.style.display = "none";

    signupBtn.style.display = "inline-block";
    loginBtn.style.display = "inline-block";
    adminPanel.style.display = "none";
  });

  // =====================================
  // GLOBAL MESSAGE (SUPABASE DISABLED VERSION)
  // =====================================
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
      setTimeout(() => {
        globalMsgPopup.style.display = "none";
      }, 200);
    }, 3000);
  }

  // For CodePen, just show local message
  document.getElementById("global-message-send")?.addEventListener("click", () => {
    const msg = prompt("Enter global message:");
    if (msg) {
      triggerGlobalMessage(msg);
      // If using Supabase, you would call emitGlobalMessage(msg) here.
    }
  });

  const currentUser = localStorage.getItem("username");
  if (currentUser) updateUIAfterLogin(currentUser);
});

// =====================================
// UPDATE DATA LOOP (DEBUG)
// =====================================
function updateData() {
  console.log("update tick", new Date().toISOString());
}
setInterval(updateData, 1000);

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
  document.body.style.background = "#100";
  if (bgImageInput) bgImageInput.value = "";
});

(function loadBackground() {
  const savedColor = localStorage.getItem("bgColor");
  const savedImage = localStorage.getItem("bgImage");
  if (savedImage) {
    document.body.style.background = `url('${savedImage}') center/cover no-repeat`;
    if (bgImageInput) bgImageInput.value = savedImage;
  } else if (savedColor) {
    document.body.style.background = savedColor;
    if (bgColorPicker) bgColorPicker.value = savedColor;
  }
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
  introOverlay.style.pointerEvents = "none"; // don’t block clicks
  setTimeout(() => {
    introOverlay.remove();
  }, 1000);
}, 1000);