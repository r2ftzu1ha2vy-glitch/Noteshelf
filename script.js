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
  { name: "HexAsteal",            url: "https://r2ftzu1ha2vy-glitch.github.io/HexAsteal/",            category: "Puzzle",   image: "https://iili.io/BTGB19a.jpg" },
  { name: "8-Ball Billiards",     url: "https://r2ftzu1ha2vy-glitch.github.io/8-Ball-Billiards/",     category: "Sports",   image: "https://iili.io/B5KquAx.png" },
];

const defaultImg = "https://iili.io/KUgv2G2.png";

const freeGames = new Set([
  "Merger", "Shadow Boxing", "Badminton Champion", "Tetricks", "Build N Defend Tower"
]);

// =====================================
// MOBILE / DESKTOP COMPATIBILITY
// =====================================
const mobileGames = new Set([
  "Merger", "Shadow Boxing", "Highway Crash", "Tetricks", "Meme Rng",
  "Pizza Panic", "Meadow Farm", "HexAsteal", "8-Ball Billiards"
]);
const desktopGames = new Set([
  "Badminton Champion", "Build N Defend Tower", "Square Dodge", "RingBound",
  "Tap Tempo", "Cosmic Duel", "Star Runner", "ADventure"
]);

// =====================================
// SVG ICONS for category sidebar
// =====================================
const categorySVGs = {
  "All Games": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  "Horror":    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M10 18V21M14 20V21M21 12V13C21 15.2091 19.2091 17 17 17V21H7V17C4.79086 17 3 15.2091 3 13V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM10 10.5C10 11.6046 9.10457 12.5 8 12.5C6.89543 12.5 6 11.6046 6 10.5C6 9.39543 6.89543 8.5 8 8.5C9.10457 8.5 10 9.39543 10 10.5ZM18 10.5C18 11.6046 17.1046 12.5 16 12.5C14.8954 12.5 14 11.6046 14 10.5C14 9.39543 14.8954 8.5 16 8.5C17.1046 8.5 18 9.39543 18 10.5Z"/></svg>`,
  "Puzzle":    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H17.8486C17.3511 7 17 6.49751 17 6C17 4.34315 15.6569 3 14 3C12.3431 3 11 4.34315 11 6C11 6.49751 10.6488 7 10.1513 7H8C7.44771 7 7 7.44772 7 8V10.1513C7 10.6488 6.49751 11 6 11C4.34315 11 3 12.3431 3 14C3 15.6569 4.34315 17 6 17C6.49751 17 7 17.3511 7 17.8486V20C7 20.5523 7.44771 21 8 21L20 21C20.5523 21 21 20.5523 21 20V17.8486C21 17.3511 20.4975 17 20 17C18.3431 17 17 15.6569 17 14C17 12.3431 18.3431 11 20 11C20.4975 11 21 10.6488 21 10.1513L21 8C21 7.44772 20.5523 7 20 7Z"/></svg>`,
  "Racing":    `<svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M376.25,34.76H327.58A100.16,100.16,0,0,0,267,55a102,102,0,0,0-36,51.17,20.46,20.46,0,0,1-19.54,14.14h-19.6A157.4,157.4,0,0,0,34.67,277.05c-.1,41.4,16.23,80.64,46,110.47a158.37,158.37,0,0,0,101.2,46.64,8,8,0,0,0,2.51.41h53.86v34.66a8,8,0,0,0,8,8h128a8,8,0,0,0,8-8V434.4a101.2,101.2,0,0,0,95.09-100.9V135.84A101.2,101.2,0,0,0,376.25,34.76Z"/></svg>`,
  "Action":    `<svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M349.112,72.597h-15.567L263.959,2.979c-2.181-2.182-5.104-3.16-7.957-2.952c-2.855-0.209-5.78,0.769-7.963,2.952 l-69.585,69.618h-15.566c-5.633,0-10.199,4.566-10.199,10.199v351.941c0,42.603,34.659,77.262,77.262,77.262h52.098 c42.603,0,77.262-34.659,77.262-77.262V82.796C359.311,77.163,354.744,72.597,349.112,72.597z"/></svg>`,
  "Rpg":       `<svg viewBox="0 0 452.022 452.022" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M440.761,380.351l-50.512-50.512l24.481-24.481c3.905-3.905,3.905-10.237,0-14.143c-3.905-3.904-10.237-3.904-14.143,0 l-9.494,9.494l-42.368-42.368c6.562-23.401,9.894-47.59,9.894-72l-0.001-153.69c0-4.777-3.379-8.887-8.065-9.811 c-113.629-22.402-228.859-22.402-342.488,0C3.379,23.764,0,27.875,0,32.652v153.69c0,55.105,16.721,108.08,48.356,153.2 c31.635,45.119,75.739,78.897,127.545,97.681c1.101,0.399,2.255,0.599,3.409,0.599c1.154,0,2.308-0.2,3.41-0.599 c40.392-14.651,76.722-38.923,105.694-70.5l18.334,18.334l-9.494,9.494c-3.905,3.905-3.905,10.237,0,14.143 c1.953,1.953,4.512,2.929,7.071,2.929c2.559,0,5.119-0.977,7.071-2.929l24.481-24.481l50.512,50.512 c7.262,7.261,16.917,11.26,27.187,11.26s19.924-3.999,27.186-11.26c7.262-7.262,11.261-16.917,11.261-27.186 C452.022,397.268,448.023,387.613,440.761,380.351z"/></svg>`,
  "Sports":    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>`,
  "Chill":     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>`,
  "Timing":    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  "Defense":   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  "Reflex":    `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.261 1.03462C12.6971 1.15253 13 1.54819 13 1.99997V8.99997H19C19.3581 8.99997 19.6888 9.19141 19.8671 9.50191C20.0455 9.8124 20.0442 10.1945 19.8638 10.5038L12.8638 22.5038C12.6361 22.8941 12.1751 23.0832 11.739 22.9653C11.3029 22.8474 11 22.4517 11 22V15H5C4.64193 15 4.3112 14.8085 4.13286 14.498C3.95452 14.1875 3.9558 13.8054 4.13622 13.4961L11.1362 1.4961C11.3639 1.10586 11.8249 0.916719 12.261 1.03462Z"/></svg>`,
  "Annoying":  `<svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M205.969,249.517c-12.261,0-22.236,9.975-22.236,22.236s9.975,22.236,22.236,22.236c12.257,0,22.232-9.973,22.236-22.236 C228.205,259.492,218.232,249.517,205.969,249.517z"/><circle cx="306.031" cy="271.753" r="22.236"/></svg>`,
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
  { name: "Quizix", trailer: "https://raw.githubusercontent.com/r2ftzu1ha2vy-glitch/Trailers/main/lv_0_20260423231300.mp4" },
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
  storageBucket: "noteshelf-5cebe.firebasestorage.app",
};

firebase.initializeApp(firebaseConfig);
const db   = firebase.database();
const auth = firebase.auth();

// FIX: Persist auth session in localStorage so token refresh doesn't kick users out
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

const actionCodeSettings = {
    url: 'https://r2ftzu1ha2vy-glitch.github.io/Noteshelf/',
    handleCodeInApp: false,
};

// =====================================
// SESSION STATE
// =====================================
let _sessionUser     = localStorage.getItem("ns_user")   || null;
let _sessionAvatar   = localStorage.getItem("ns_avatar") || "";
let _emailVerified   = localStorage.getItem("ns_verified") === "true";
let _firebaseUid     = localStorage.getItem("ns_uid")    || null;

function me()             { return _sessionUser; }
function myAvatar()       { return _sessionAvatar; }
function isEmailVerified(){ return _emailVerified; }

function setSession(username, avatar, verified, uid) {
  _sessionUser   = username;
  _sessionAvatar = avatar || "";
  _emailVerified = !!verified;
  _firebaseUid   = uid || null;
  localStorage.setItem("ns_user",     username);
  localStorage.setItem("ns_avatar",   _sessionAvatar);
  localStorage.setItem("ns_verified", _emailVerified ? "true" : "false");
  if (uid) localStorage.setItem("ns_uid", uid);
}

function clearSession() {
  _sessionUser   = null;
  _sessionAvatar = "";
  _emailVerified = false;
  _firebaseUid   = null;
  localStorage.removeItem("ns_user");
  localStorage.removeItem("ns_avatar");
  localStorage.removeItem("ns_verified");
  localStorage.removeItem("ns_uid");
}

// =====================================
// EMAIL VERIFICATION HELPERS
// =====================================
function showVerificationBanner() {
  const old = document.getElementById("verify-banner");
  if (old) old.remove();

  const banner = document.createElement("div");
  banner.id = "verify-banner";
  banner.innerHTML = `
    <div id="verify-banner-inner">
      <div id="verify-banner-left">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        <span id="verify-banner-text">Verify your email to unlock chat, friends &amp; DMs</span>
      </div>
      <div id="verify-banner-actions">
        <button id="verify-resend-btn" class="verify-btn-secondary">Resend Email</button>
        <button id="verify-check-btn" class="verify-btn-primary">I've Verified ✓</button>
        <button id="verify-dismiss-btn" class="verify-dismiss">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </div>
  `;

  const pageContent = document.querySelector(".page-content");
  pageContent.insertBefore(banner, pageContent.firstChild);

  let resendCooldown = false;

  document.getElementById("verify-resend-btn").onclick = async () => {
    if (resendCooldown) { showVerifyToast("⚠ Wait before resending"); return; }
    resendCooldown = true;
    setTimeout(() => resendCooldown = false, 60000);
    const user = auth.currentUser;
    if (user) {
      try {
        await user.sendEmailVerification(actionCodeSettings);
        showVerifyToast("✉ A verification email has been sent. Please check your inbox and spam folder.");
      } catch (e) {
        showVerifyToast("⚠ " + (e.message || "We were unable to send the email. Please try again later."));
      }
    } else {
      showVerifyToast("⚠ You are not signed in.");
    }
  };

  document.getElementById("verify-check-btn").onclick = async () => {
    await refreshVerificationStatus();
  };

  document.getElementById("verify-dismiss-btn").onclick = () => {
    banner.remove();
  };
}

function removeVerificationBanner() {
  const b = document.getElementById("verify-banner");
  if (b) {
    b.style.animation = "bannerSlideOut 0.3s ease forwards";
    setTimeout(() => b.remove(), 300);
  }
}

function showVerifyToast(msg) {
  let toast = document.getElementById("verify-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "verify-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 3000);
}

async function refreshVerificationStatus() {
  const user = auth.currentUser;
  if (!user) {
    showVerifyToast("⚠ Not signed in with Firebase Auth");
    return;
  }
  try {
    await user.reload();
    if (user.emailVerified) {
      _emailVerified = true;
      localStorage.setItem("ns_verified", "true");
      if (_sessionUser) {
        await db.ref("users/" + _sessionUser + "/emailVerified").set(true);
      }
      removeVerificationBanner();
      showVerifyToast("✓ Email verified! All features unlocked.");
      updateVerifiedBadge(true);
    } else {
      showVerifyToast("✗ Email not yet verified. Check your inbox.");
    }
  } catch (e) {
    showVerifyToast("⚠ " + (e.message || "Error checking status"));
  }
}

function updateVerifiedBadge(verified) {
  const badge = document.getElementById("verified-badge");
  if (badge) badge.style.display = verified ? "inline-flex" : "none";
}

function requireVerified(featureName) {
  if (_emailVerified) return true;
  showVerificationGate(featureName);
  return false;
}

function showVerificationGate(featureName) {
  const old = document.getElementById("verify-gate-overlay");
  if (old) old.remove();

  const overlay = document.createElement("div");
  overlay.id = "verify-gate-overlay";
  overlay.style.cssText = `
    position:fixed;inset:0;background:rgba(5,4,10,0.88);
    backdrop-filter:blur(8px);z-index:99999;
    display:flex;align-items:center;justify-content:center;
    animation:vgFadeIn 0.25s ease;
  `;

  overlay.innerHTML = `
    <style>
      @keyframes vgFadeIn { from{opacity:0;transform:scale(0.95)} to{opacity:1;transform:scale(1)} }
      #vg-box { background:linear-gradient(160deg,#141219,#0D0B12);border:1px solid rgba(184,150,12,0.45);border-radius:20px;padding:44px 40px 36px;max-width:420px;width:90%;text-align:center;position:relative; }
      #vg-close-btn { position:absolute;top:14px;right:14px;width:30px;height:30px;border-radius:50%;border:1px solid rgba(184,150,12,0.3);background:transparent;color:#B8960C;cursor:pointer;font-size:18px;display:flex;align-items:center;justify-content:center;transition:all 0.2s; }
      #vg-close-btn:hover { border-color:#FFD700;color:#FFD700; }
      .vg-icon { width:72px;height:72px;border-radius:50%;background:rgba(255,215,0,0.08);border:1px solid rgba(184,150,12,0.4);display:flex;align-items:center;justify-content:center;margin:0 auto 20px; }
      .vg-eyebrow { font-family:'Cinzel',serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#B8960C;margin-bottom:10px;opacity:0.8; }
      .vg-title { font-family:'Cinzel Decorative',serif;font-size:20px;font-weight:700;color:#FFD700;letter-spacing:1px;margin-bottom:12px;line-height:1.3; }
      .vg-body { font-family:'EB Garamond',serif;font-size:15px;color:#F0E6CA;line-height:1.7;margin-bottom:8px; }
      .vg-email-pill { font-family:'Cinzel',serif;font-size:12px;color:#FFD700;background:rgba(255,215,0,0.06);border:1px solid rgba(184,150,12,0.3);border-radius:8px;padding:7px 16px;margin:0 auto 18px;display:inline-block; }
      .vg-hint { font-family:'EB Garamond',serif;font-size:14px;color:rgba(240,230,202,0.6);line-height:1.6;margin-bottom:28px; }
      .vg-btn-primary { width:100%;padding:13px;background:linear-gradient(135deg,#FFD700,#D4A017);border:none;border-radius:30px;color:#07060A;font-family:'Cinzel',serif;font-weight:700;font-size:12px;letter-spacing:2.5px;text-transform:uppercase;cursor:pointer;transition:box-shadow 0.22s;margin-bottom:10px;display:block; }
      .vg-btn-primary:hover { box-shadow:0 0 24px rgba(255,215,0,0.35); }
      .vg-btn-secondary { width:100%;padding:12px;background:transparent;border:1px solid rgba(184,150,12,0.45);border-radius:30px;color:#B8960C;font-family:'Cinzel',serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;cursor:pointer;transition:all 0.22s;display:block; }
      .vg-btn-secondary:hover { border-color:#FFD700;color:#FFD700; }
      .vg-footer { font-family:'EB Garamond',serif;font-size:12px;color:rgba(184,150,12,0.45);margin-top:20px;font-style:italic; }
    </style>
    <div id="vg-box">
      <button id="vg-close-btn">✕</button>
      <div class="vg-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFD700" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      </div>
      <div class="vg-eyebrow">Action Required</div>
      <h2 class="vg-title">Verify Your Email</h2>
      <p class="vg-body"><strong>${featureName || "This feature"}</strong> requires a verified email.</p>
      <div class="vg-email-pill" id="vg-email-display">Check your inbox</div>
      <p class="vg-hint">Click the link we sent you to unlock all features. Check your spam folder if you don't see it.</p>
      <button class="vg-btn-primary" id="vg-check">I've Verified — Continue ✓</button>
      <button class="vg-btn-secondary" id="vg-resend">Resend Email</button>
      <p class="vg-footer">Wrong email? Log out and sign up again.</p>
    </div>
  `;

  document.body.appendChild(overlay);

  if (_sessionUser) {
    db.ref("users/" + _sessionUser + "/email").once("value").then(s => {
      const em = s.val();
      if (em) document.getElementById("vg-email-display").textContent = em;
    });
  }

  document.getElementById("vg-close-btn").onclick = () => overlay.remove();
  overlay.onclick = e => { if (e.target === overlay) overlay.remove(); };
  document.addEventListener("keydown", function esc(e) {
    if (e.key === "Escape") { overlay.remove(); document.removeEventListener("keydown", esc); }
  });

  let resendCooldown = false;

  document.getElementById("vg-resend").onclick = async () => {
    if (resendCooldown) { showVerifyToast("⚠ Wait before resending"); return; }
    resendCooldown = true;
    setTimeout(() => resendCooldown = false, 60000);
    const user = auth.currentUser;
    if (user) {
      try {
        await user.sendEmailVerification(actionCodeSettings);
        showVerifyToast("✉ Verification email sent!");
      } catch (e) {
        showVerifyToast("⚠ " + (e.message || "Could not send email"));
      }
    } else {
      showVerifyToast("⚠ Not signed in");
    }
  };

  document.getElementById("vg-check").onclick = async () => {
    await refreshVerificationStatus();
    if (_emailVerified) overlay.remove();
  };
}

// =====================================
// ADMIN / SUPER USERS
// =====================================
const adminUsers     = ["R2FtZU1ha2Vy", "GDFlame05", "BabyFounder"];
const banAdminUser   = "BabyFounder";
const nsfwExempt     = new Set(["BabyFounder", "Number1"]);

// =====================================
// PROFANITY FILTER
// =====================================
const leetMap = {
  '0': 'o', '1': 'i', '3': 'e', '4': 'a', '5': 's', '6': 'g',
  '7': 't', '8': 'b', '9': 'g', '@': 'a', '$': 's', '!': 'i',
  '+': 't', '#': 'h', '&': 'and', '%': 'percent',
  'ph': 'f',
};
const separatorPattern = /[\s.\-_*|\/\\,;:~`^'"!?+@#$%&()[\]{}<>]/g;

function normalise(text) {
  if (!text) return "";
  let s = text.toLowerCase();
  s = s.replace(/ph/g, 'f');
  s = s.split('').map(c => leetMap[c] || c).join('');
  const stripped  = s.replace(separatorPattern, '');
  const collapsed = stripped.replace(/(.)\1{2,}/g, '$1$1');
  return collapsed;
}

const badWords = [
  "nigger","nigga","niga","chink","spic","kike","wetback","gook","cracker","coon",
  "tranny","fag","faggot","dyke","retard",
  "fuck","fuk","fuq","sh1t","shit","bitch","ass","asshole","bastard",
  "cunt","cock","dick","pussy","piss","cum","cums","cumming","cuming",
  "penis","vagina","vulva","boob","boobs","tit","tits","titty","titties",
  "butt","butthole","anus","anal","porn","porno","sex","sexy",
  "masturbate","masturbation","masterbait","masterbaiter","masterbate",
  "blowjob","handjob","dildo","vibrator","orgasm","erection","ejaculate",
  "nude","nudes","naked","hentai","loli","lolita","nsfw",
  "rape","raping","rapist","molest","molesting","pedophile","pedo",
  "kill","murder","suicide",
  "whore","slut","skank","hooker","prostitute","whorehouse","crackhead",
  "methhead","heroin","cocaine","meth","weed","stoned","druggie",
];

const normalisedBadWords = badWords.map(w => normalise(w));

function containsBadWord(text) {
  const norm = normalise(text);
  return normalisedBadWords.some(bw => norm.includes(bw));
}

function filterMessage(text) {
  if (!text || typeof text !== "string") return text;
  if (containsBadWord(text)) return "[message removed]";
  return text;
}

// =====================================
// NSFW IMAGE DETECTION
// =====================================
const nsfwDomainPatterns = [
  /pornhub/i, /xvideos/i, /xnxx/i, /xhamster/i, /redtube/i,
  /youporn/i, /rule34/i, /gelbooru/i, /danbooru/i, /nhentai/i,
  /hentai/i,  /xxx/i,    /nsfw/i,    /lewd/i,     /onlyfans/i,
  /fapello/i, /erome/i,  /spankbang/i, /tnaflix/i, /4chan\.org\/b/i,
];
const nsfwPathPatterns = [
  /\/nsfw\//i, /\/adult\//i, /\/xxx\//i, /\/porn\//i,
  /\/hentai\//i, /\/nude/i, /\/naked/i,
];

function isNsfwUrl(url) {
  try {
    const u = new URL(url);
    const fullUrl = u.hostname + u.pathname;
    return (
      nsfwDomainPatterns.some(r => r.test(fullUrl)) ||
      nsfwPathPatterns.some(r => r.test(u.pathname))
    );
  } catch { return false; }
}

async function isNsfwImage(url) {
  if (isNsfwUrl(url)) return true;
  return false;
}

function nsfwExemptUser(username) {
  return username && nsfwExempt.has(username);
}

// =====================================
// IMAGE URL DETECTION & MESSAGE CONTENT
// =====================================
function isImageUrl(text) {
  return /^https?:\/\/.+\.(png|jpg|jpeg|gif|webp|svg)(\?.*)?$/i.test((text || "").trim());
}

function buildMessageContent(text) {
  if (isImageUrl(text)) {
    const wrap = document.createElement("div");
    wrap.style.cssText = "margin-top:4px;";
    const img = document.createElement("img");
    img.src = text.trim(); img.alt = "Image";
    img.style.cssText = [
      "max-width:200px","max-height:180px","border-radius:10px",
      "display:block","border:1px solid var(--ink-border)","cursor:pointer",
      "transition:opacity 0.2s, transform 0.2s","object-fit:cover",
    ].join(";");
    img.onmouseover = () => { img.style.opacity = "0.85"; img.style.transform = "scale(1.02)"; };
    img.onmouseout  = () => { img.style.opacity = "1";    img.style.transform = "scale(1)"; };
    img.onclick     = () => window.open(text.trim(), "_blank");
    img.onerror = () => {
      wrap.innerHTML = "";
      const t = document.createElement("div");
      t.className = "chat-text"; t.textContent = text;
      wrap.appendChild(t);
    };
    wrap.appendChild(img);
    return wrap;
  }
  const el = document.createElement("div");
  el.className = "chat-text"; el.textContent = text;
  return el;
}

// =====================================
// BAN SYSTEM
// =====================================
async function checkBanned(username) {
  const snap = await db.ref("bans/" + username).once("value");
  const ban  = snap.val();
  if (!ban) return null;
  if (ban.until && ban.until !== "permanent") {
    if (Date.now() > ban.until) {
      await db.ref("bans/" + username).remove();
      return null;
    }
    const remaining = ban.until - Date.now();
    const hours     = Math.ceil(remaining / 3600000);
    return { ...ban, remainingHours: hours };
  }
  return ban;
}

function formatBanDuration(ban) {
  if (!ban) return "";
  if (ban.until === "permanent") return "permanently";
  if (ban.remainingHours) {
    if (ban.remainingHours >= 24) {
      const days = Math.ceil(ban.remainingHours / 24);
      return `for ${days} day${days > 1 ? "s" : ""}`;
    }
    return `for ${ban.remainingHours} more hour${ban.remainingHours !== 1 ? "s" : ""}`;
  }
  return "";
}

function showBanPopup(ban) {
  const old = document.getElementById("ban-popup-overlay");
  if (old) old.remove();
  const overlay = document.createElement("div");
  overlay.id = "ban-popup-overlay";
  overlay.style.cssText = "position:fixed;inset:0;background:rgba(5,4,10,0.92);backdrop-filter:blur(8px);z-index:99999;display:flex;align-items:center;justify-content:center;";
  const box = document.createElement("div");
  box.style.cssText = "background:linear-gradient(160deg,#141219,#0D0B12);border:1px solid rgba(255,107,107,0.5);border-radius:20px;padding:40px 36px;max-width:420px;width:90%;text-align:center;box-shadow:0 28px 80px rgba(0,0,0,0.85),0 0 0 1px rgba(255,107,107,0.1);";
  box.innerHTML = `
    <div style="font-size:48px;margin-bottom:16px;">🔨</div>
    <h2 style="font-family:'Cinzel Decorative',serif;font-size:18px;color:#ff6b6b;letter-spacing:2px;margin-bottom:12px;">
      ${ban.until === "permanent" ? "You've been banned permanently" : `You've been banned ${formatBanDuration(ban)}`}
    </h2>
    <p style="font-family:'EB Garamond',serif;font-size:15px;color:#F0E6CA;margin-bottom:8px;line-height:1.6;">
      <strong style="font-family:'Cinzel',serif;color:#ff6b6b;font-size:12px;letter-spacing:2px;">REASON</strong><br>${ban.reason || "No reason provided"}
    </p>
    <p style="font-family:'Cinzel',serif;font-size:10px;letter-spacing:2px;color:rgba(255,107,107,0.5);margin-top:20px;text-transform:uppercase;">Contact an admin if you believe this is a mistake.</p>
  `;
  overlay.appendChild(box);
  document.body.appendChild(overlay);
}

// =====================================
// UI HELPER: hide/show floating buttons during game
// =====================================
function setGameModeUI(playing) {
  const els = ["chat-toggle","discord-btn-wrap","dm-btn-float"];
  els.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = playing ? "none" : "";
  });
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
  const authFileLabel   = document.querySelector(".auth-file-label");
  const globalMsgPopup  = document.getElementById("global-message-popup");

  // Expose for feature pack
  window.__ns_games        = games;
  window.__ns_mobileGames  = mobileGames;
  window.__ns_desktopGames = desktopGames;
  window.__ns_createGameButton = createGameButton;
  window.__ns_loadGame     = loadGameInViewer;

  // Email field
  const authEmailWrap = document.createElement("div");
  authEmailWrap.id = "auth-email-wrap";
  const authEmail = document.createElement("input");
  authEmail.id          = "auth-email";
  authEmail.type        = "email";
  authEmail.placeholder = "Email address";
  authEmail.style.cssText = "width:100%;padding:10px 14px;margin:6px 0;font-family:'EB Garamond',serif;font-size:15px;border-radius:5px;border:1px solid var(--ink-border);background:var(--ink);color:var(--cream);outline:none;display:block;transition:border-color 0.2s;box-sizing:border-box;";
  authEmailWrap.appendChild(authEmail);

  const authBox = document.getElementById("auth-box");
  authBox.insertBefore(authEmailWrap, authUsername);

  // Password toggle
  const pwToggleBtn = document.createElement("button");
  pwToggleBtn.type  = "button";
  pwToggleBtn.id    = "pw-toggle";
  pwToggleBtn.style.cssText = "position:absolute;right:12px;top:50%;transform:translateY(-50%);background:transparent;border:none;color:var(--gold-dim);cursor:pointer;display:flex;align-items:center;padding:0;transition:color 0.2s;";
  pwToggleBtn.innerHTML = `<svg id="pw-eye-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
  pwToggleBtn.title = "Show/hide password";

  const pwWrap = document.createElement("div");
  pwWrap.style.cssText = "position:relative;display:flex;align-items:center;";
  authPassword.style.paddingRight = "40px";
  authPassword.parentNode.insertBefore(pwWrap, authPassword);
  pwWrap.appendChild(authPassword);
  pwWrap.appendChild(pwToggleBtn);

  let pwVisible = false;
  pwToggleBtn.addEventListener("click", () => {
    pwVisible = !pwVisible;
    authPassword.type = pwVisible ? "text" : "password";
    pwToggleBtn.innerHTML = pwVisible
      ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`
      : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
    pwToggleBtn.style.color = pwVisible ? "var(--gold)" : "var(--gold-dim)";
  });

  // Compat icons
  const mobileSVG  = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`;
  const desktopSVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>`;

  let currentGameUrl  = "";
  let currentGameName = "";

  // Game viewer
  const gameViewer = document.createElement("div");
  gameViewer.id = "game-viewer";
  gameViewer.innerHTML = `
    <div id="game-viewer-main">
      <div id="game-viewer-topbar">
        <div id="game-viewer-title">—</div>
        <div id="game-viewer-btns">
          <button class="viewer-btn" id="viewer-fullscreen-btn">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/>
              <path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>
            </svg>
            Fullscreen
          </button>
          <button class="viewer-btn" id="viewer-close-btn">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
            Close
          </button>
        </div>
      </div>
      <iframe id="game-frame-main" src="" style="flex:1;border:none;width:100%;display:block;background:#000;"
        sandbox="allow-same-origin allow-scripts allow-forms allow-pointer-lock allow-popups allow-modals"
        referrerpolicy="no-referrer" allowfullscreen></iframe>
    </div>
    <div id="game-viewer-sidebar">
      <div id="game-viewer-sidebar-header">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
        All Games
      </div>
      <div id="game-viewer-grid"></div>
    </div>
  `;
  document.body.appendChild(gameViewer);

  const gameViewerTitle     = document.getElementById("game-viewer-title");
  const gameViewerGrid      = document.getElementById("game-viewer-grid");
  const viewerCloseBtn      = document.getElementById("viewer-close-btn");
  const viewerFullscreenBtn = document.getElementById("viewer-fullscreen-btn");
  const gameFrameMain       = document.getElementById("game-frame-main");
  gameFrameMain.style.flex  = "1";
  document.getElementById("game-viewer-main").style.overflow = "hidden";

  function buildViewerSidebar(activeName) {
    gameViewerGrid.innerHTML = "";
    games.forEach(g => {
      const locked = !me() && !freeGames.has(g.name);
      const btn    = document.createElement("button");
      btn.className = "sidebar-game-btn" + (g.name === activeName ? " active" : "") + (locked ? " sidebar-locked" : "");
      btn.style.position = "relative";

      const thumb = document.createElement("img");
      thumb.className = "sidebar-game-thumb";
      thumb.src = g.image || defaultImg;
      thumb.alt = g.name;
      if (locked) thumb.style.cssText = "filter:brightness(0.45) saturate(0.3);";

      const name  = document.createElement("div");
      name.className = "sidebar-game-name";
      name.textContent = g.name;

      btn.appendChild(thumb);
      btn.appendChild(name);

      if (locked) {
        const lockEl = document.createElement("div");
        lockEl.style.cssText = `
          position:absolute;top:50%;right:8px;transform:translateY(-50%);
          width:22px;height:22px;border-radius:50%;
          background:rgba(255,215,0,0.1);border:1px solid rgba(184,150,12,0.5);
          display:flex;align-items:center;justify-content:center;
          flex-shrink:0;
        `;
        lockEl.innerHTML = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#B8960C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;
        btn.appendChild(lockEl);
      }

      btn.onclick = () => loadGameInViewer(g);
      gameViewerGrid.appendChild(btn);
    });
  }

  function loadGameInViewer(game) {
    if (!me() && !freeGames.has(game.name)) {
      showLoginGate();
      return;
    }

    currentGameUrl  = game.url;
    currentGameName = game.name;
    gameViewerTitle.textContent = game.name;
    gameFrameMain.src = game.url;
    gameViewer.style.display = "flex";
    gameViewer.classList.remove("closing");
    buildViewerSidebar(game.name);
    const activeBtn = gameViewerGrid.querySelector(".sidebar-game-btn.active");
    if (activeBtn) activeBtn.scrollIntoView({ block: "nearest", behavior: "smooth" });
    setGameModeUI(true);
  }

  function closeViewer() {
    gameViewer.classList.add("closing");
    gameViewer.addEventListener("animationend", () => {
      gameViewer.style.display = "none";
      gameViewer.classList.remove("closing");
      gameFrameMain.src = "";
      currentGameUrl = currentGameName = "";
      setGameModeUI(false);
    }, { once: true });
  }

  viewerCloseBtn.onclick = closeViewer;
  viewerFullscreenBtn.onclick = () => {
    if (gameFrameMain.requestFullscreen)            gameFrameMain.requestFullscreen();
    else if (gameFrameMain.webkitRequestFullscreen) gameFrameMain.webkitRequestFullscreen();
    else if (gameFrameMain.mozRequestFullScreen)    gameFrameMain.mozRequestFullScreen();
    else if (gameFrameMain.msRequestFullscreen)     gameFrameMain.msRequestFullscreen();
  };
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && gameViewer.style.display === "flex") closeViewer();
  });

  // Game card
  function createGameButton(game) {
    const user   = me();
    const locked = !user && !freeGames.has(game.name);

    const btn   = document.createElement("button");
    btn.className = "game-button";
    const img   = document.createElement("img"); img.src = game.image || defaultImg; img.alt = game.name;
    const label = document.createElement("div"); label.textContent = game.name;
    btn.appendChild(img); btn.appendChild(label);

    if (locked) {
      const lockOverlay = document.createElement("div");
      lockOverlay.className = "game-lock-overlay";
      lockOverlay.innerHTML = `
        <div class="game-lock-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </div>
      `;
      btn.appendChild(lockOverlay);
      btn.classList.add("game-locked");
    }

    btn.onclick = () => {
      if (locked) {
        showLoginGate();
        return;
      }
      loadGameInViewer(game);
    };

    const isMobile  = mobileGames.has(game.name);
    const isDesktop = desktopGames.has(game.name);

    if ((isMobile || isDesktop) && !locked) {
      const tooltip  = document.createElement("div");
      tooltip.className = "compat-tooltip";
      let inner = "";
      if (isMobile && isDesktop) {
        inner = `<span class="compat-icon">${mobileSVG}</span><span class="compat-sep">+</span><span class="compat-icon">${desktopSVG}</span>`;
      } else if (isMobile) {
        inner = `<span class="compat-icon">${mobileSVG}</span><span class="compat-label">Mobile friendly</span>`;
      } else {
        inner = `<span class="compat-icon">${desktopSVG}</span><span class="compat-label">Desktop / PC</span>`;
      }
      tooltip.innerHTML = inner;
      document.body.appendChild(tooltip);
      let hoverTimer = null;
      btn.addEventListener("mouseenter", () => {
        hoverTimer = setTimeout(() => {
          const rect = btn.getBoundingClientRect();
          tooltip.style.left = (rect.left + rect.width / 2) + "px";
          tooltip.style.top  = (rect.top - 12) + "px";
          tooltip.style.transform = "translateX(-50%) translateY(-100%)";
          tooltip.classList.add("visible");
        }, 3000);
      });
      btn.addEventListener("mouseleave", () => {
        clearTimeout(hoverTimer);
        tooltip.classList.remove("visible");
      });
    }
    return btn;
  }

  function renderGames(filter) {
    filter = filter || "";
    gameListDiv.innerHTML = "";
    const f = filter.toLowerCase().trim();
    let filtered;
    if (["mobile","phone"].includes(f)) {
      filtered = games.filter(g => mobileGames.has(g.name));
    } else if (["computer","pc","mac","desktop"].includes(f)) {
      filtered = games.filter(g => desktopGames.has(g.name));
    } else {
      filtered = games.filter(g => g.name.toLowerCase().includes(f));
    }
    filtered.forEach(g => gameListDiv.appendChild(createGameButton(g)));
  }

  function renderGamesByCategory(category) {
    gameListDiv.innerHTML = "";
    games.filter(g => g.category.toLowerCase() === category.toLowerCase())
         .forEach(g => gameListDiv.appendChild(createGameButton(g)));
  }

  searchBar && searchBar.addEventListener("input", e => renderGames(e.target.value));

  // Category sidebar
  const categories = ["All Games","Horror","Puzzle","Racing","Action","Rpg","Sports","Chill","Timing","Defense","Reflex","Annoying"];
  let activeBtn = null;

  categories.forEach(cat => {
    const btn      = document.createElement("button");
    btn.className  = "category-button";
    const iconWrap = document.createElement("span"); iconWrap.className = "cat-icon"; iconWrap.innerHTML = categorySVGs[cat] || "";
    const text     = document.createElement("span"); text.className = "category-text"; text.textContent = cat;
    btn.appendChild(iconWrap); btn.appendChild(text);
    btn.onclick = () => {
      if (activeBtn) activeBtn.classList.remove("active");
      btn.classList.add("active");
      activeBtn = btn;
      if (cat === "All Games") { searchBar.value = ""; renderGames(); }
      else renderGamesByCategory(cat);
    };
    categorySidebar.appendChild(btn);
  });

  if (categorySidebar.firstChild) {
    categorySidebar.firstChild.classList.add("active");
    activeBtn = categorySidebar.firstChild;
  }
  renderGames();

  // Trailers
  const trailerBtnEl = document.getElementById("trailer-btn");
  if (trailerBtnEl) {
    trailerBtnEl.addEventListener("click", () => {
      trailerPopup.innerHTML = "";
      trailerPopup.appendChild(closeTrailerBtn);
      newGameTrailers.forEach(game => {
        const title = document.createElement("h3"); title.textContent = game.name;
        Object.assign(title.style, { margin: "12px 0 6px", textAlign: "center" });
        const video = document.createElement("video");
        video.src = game.trailer; video.controls = true; video.preload = "metadata";
        Object.assign(video.style, { width: "100%", maxHeight: "300px", marginBottom: "16px" });
        trailerPopup.appendChild(title); trailerPopup.appendChild(video);
      });
      trailerPopup.style.display = "block";
    });
  }

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

  function openAuth(mode) {
    authTitle.textContent = mode;
    authPopup.style.display = "flex";
    authUsername.value = authPassword.value = authEmail.value = authMessage.textContent = "";
    pendingAvatarB64 = "";
    avatarPreview.style.display = "none";
    avatarPreview.src = "";
    pwVisible = false;
    authPassword.type = "password";
    pwToggleBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
    pwToggleBtn.style.color = "var(--gold-dim)";

    const isLogin = mode === "Log In";
authEmailWrap.style.display = isLogin ? "none" : "block";
if (authFileLabel) authFileLabel.style.display = isLogin ? "none" : "inline-flex";

// Suggest password button
let suggestBtn = document.getElementById("suggest-password-btn");
if (!suggestBtn) {
  suggestBtn = document.createElement("button");
  suggestBtn.id = "suggest-password-btn";
  suggestBtn.type = "button";
  suggestBtn.style.cssText = `
    margin: 4px 0 8px;
    padding: 6px 14px;
    border-radius: 30px;
    border: 1px solid rgba(184,150,12,0.5);
    background: rgba(255,215,0,0.06);
    color: #B8960C;
    font-family: 'Cinzel', serif;
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: all 0.2s;
  `;
  suggestBtn.innerHTML = `
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
    Suggest Strong Password
  `;
  suggestBtn.onmouseover = () => { suggestBtn.style.borderColor = "#FFD700"; suggestBtn.style.color = "#FFD700"; };
  suggestBtn.onmouseout  = () => { suggestBtn.style.borderColor = "rgba(184,150,12,0.5)"; suggestBtn.style.color = "#B8960C"; };
  suggestBtn.onclick = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < 14; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    authPassword.value = password;
    // Make password visible so user can see/copy it
    pwVisible = true;
    authPassword.type = 'text';
    pwToggleBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
    pwToggleBtn.style.color = "var(--gold)";
    chatCharCount && (chatCharCount.textContent = "300");
  };
  pwWrap.parentNode.insertBefore(suggestBtn, pwWrap.nextSibling);
}
suggestBtn.style.display = isLogin ? "none" : "inline-flex";
  }

  signupBtn && signupBtn.addEventListener("click", () => openAuth("Sign Up"));
  loginBtn  && loginBtn.addEventListener("click",  () => openAuth("Log In"));
  closeAuthBtn && closeAuthBtn.addEventListener("click", () => { authPopup.style.display = "none"; });

  [authUsername, authPassword, authEmail].forEach(el => {
    el && el.addEventListener("keydown", e => {
      if (e.key === "Enter") { e.preventDefault(); authSubmit.click(); }
    });
  });

  function simpleHash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
    return h.toString(36);
  }

  // Auth submit
  authSubmit && authSubmit.addEventListener("click", async () => {
    const username = authUsername.value.trim();
    const password = authPassword.value.trim();
    const email    = authEmail.value.trim();

    if (username.length < 5) { authMessage.textContent = "❌ Username must be at least 5 characters"; return; }
    if (!password)            { authMessage.textContent = "❌ Password is required"; return; }

    const userRef  = db.ref("users/" + username);
    const snap     = await userRef.once("value");
    const userData = snap.val();

    // SIGN UP
    if (authTitle.textContent === "Sign Up") {
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        authMessage.textContent = "❌ Valid email address is required"; return;
      }
      if (userData) { authMessage.textContent = "❌ Username already taken"; return; }

      authMessage.textContent = "⏳ Creating account…";
      authSubmit.disabled = true;

      try {
        const cred = await auth.createUserWithEmailAndPassword(email, password);
        const fbUser = cred.user;
        await fbUser.sendEmailVerification();

        const newUser = {
          passwordHash:  simpleHash(password),
          isAdmin:       adminUsers.includes(username),
          isBanAdmin:    username === banAdminUser,
          avatar:        pendingAvatarB64,
          createdAt:     Date.now(),
          email:         email,
          firebaseUid:   fbUser.uid,
          emailVerified: false,
        };
        await userRef.set(newUser);

        authPopup.style.display = "none";
        authSubmit.disabled = false;

        setSession(username, pendingAvatarB64, false, fbUser.uid);
        updateUIAfterLogin(username, pendingAvatarB64, newUser.isAdmin, newUser.isBanAdmin);
        showVerificationBanner();
        showVerifyToast("✉ Verification email sent to " + email);

      } catch (err) {
        authSubmit.disabled = false;
        authMessage.textContent = "❌ " + (err.message || "Sign up failed");
      }
      return;
    }

    // LOG IN
    if (authTitle.textContent === "Log In") {
      if (!userData) { authMessage.textContent = "❌ Username does not exist"; return; }
      if (userData.passwordHash !== simpleHash(password)) { authMessage.textContent = "❌ Wrong password"; return; }

      const ban = await checkBanned(username);
      if (ban) { authPopup.style.display = "none"; showBanPopup(ban); return; }

      authMessage.textContent = "⏳ Signing in…";
      authSubmit.disabled = true;

      try {
        const storedEmail = userData.email || "";
        let fbVerified = userData.emailVerified || false;

        if (storedEmail) {
          const cred = await auth.signInWithEmailAndPassword(storedEmail, password);
          await cred.user.reload();
          fbVerified = cred.user.emailVerified;

          if (fbVerified && !userData.emailVerified) {
            await db.ref("users/" + username + "/emailVerified").set(true);
          }

          setSession(username, userData.avatar || "", fbVerified, cred.user.uid);
        } else {
          setSession(username, userData.avatar || "", false, null);
        }

        authPopup.style.display = "none";
        authSubmit.disabled = false;

        updateUIAfterLogin(username, userData.avatar || "", userData.isAdmin, userData.isBanAdmin || username === banAdminUser);

        if (!fbVerified) {
          showVerificationBanner();
        }

      } catch (err) {
        authSubmit.disabled = false;
        if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password" || err.code === "auth/invalid-credential") {
          authMessage.textContent = "";
          setSession(username, userData.avatar || "", false, null);
          authPopup.style.display = "none";
          updateUIAfterLogin(username, userData.avatar || "", userData.isAdmin, userData.isBanAdmin || username === banAdminUser);
        } else {
          authMessage.textContent = "❌ " + (err.message || "Login failed");
        }
      }
    }
  });

  function showLoginGate() {
    const old = document.getElementById("login-gate-overlay");
    if (old) old.remove();

    const overlay = document.createElement("div");
    overlay.id = "login-gate-overlay";
    overlay.style.cssText = `
      position:fixed;inset:0;background:rgba(5,4,10,0.92);
      backdrop-filter:blur(10px);z-index:99999;
      display:flex;align-items:center;justify-content:center;
      animation:lgFadeIn 0.25s cubic-bezier(0.4,0,0.2,1);
    `;

    overlay.innerHTML = `
      <style>
        @keyframes lgFadeIn { from{opacity:0;transform:scale(0.94)} to{opacity:1;transform:scale(1)} }
        @keyframes lgShimmer { 0%,100%{opacity:0.6} 50%{opacity:1} }
        #lg-box {
          background:linear-gradient(160deg,#141219,#0D0B12);
          border:1px solid rgba(184,150,12,0.5);
          border-radius:24px;padding:52px 44px 44px;
          max-width:440px;width:90%;text-align:center;
          position:relative;
          box-shadow:0 0 80px rgba(255,215,0,0.07),0 32px 80px rgba(0,0,0,0.9);
        }
        #lg-box::before {
          content:'';position:absolute;inset:0;
          background:radial-gradient(ellipse 80% 40% at 50% -10%,rgba(255,215,0,0.06) 0%,transparent 70%);
          border-radius:24px;pointer-events:none;
        }
        #lg-close {
          position:absolute;top:14px;right:14px;width:32px;height:32px;
          border-radius:50%;border:1px solid rgba(184,150,12,0.3);
          background:transparent;color:#B8960C;cursor:pointer;font-size:16px;
          display:flex;align-items:center;justify-content:center;transition:all 0.2s;
        }
        #lg-close:hover { border-color:#FFD700;color:#FFD700;background:rgba(255,215,0,0.06); }
        .lg-lock-ring {
          width:80px;height:80px;border-radius:50%;
          background:linear-gradient(135deg,rgba(255,215,0,0.1),rgba(255,215,0,0.04));
          border:1px solid rgba(184,150,12,0.5);
          display:flex;align-items:center;justify-content:center;
          margin:0 auto 24px;
          animation:lgShimmer 2.4s ease infinite;
          box-shadow:0 0 30px rgba(255,215,0,0.08);
        }
        .lg-eyebrow {
          font-family:'Cinzel',serif;font-size:10px;letter-spacing:4px;
          text-transform:uppercase;color:#B8960C;margin-bottom:10px;opacity:0.8;
        }
        .lg-title {
          font-family:'Cinzel Decorative',serif;font-size:22px;font-weight:700;
          color:#FFD700;letter-spacing:1px;margin-bottom:14px;line-height:1.3;
          text-shadow:0 0 40px rgba(255,215,0,0.3);
        }
        .lg-body {
          font-family:'EB Garamond',serif;font-size:16px;color:#F0E6CA;
          line-height:1.75;margin-bottom:32px;opacity:0.85;
        }
        .lg-body strong { color:#FFD700;font-style:italic; }
        .lg-buttons { display:flex;gap:12px;flex-direction:column; }
        .lg-btn-signup {
          width:100%;padding:14px;
          background:linear-gradient(135deg,#FFD700,#D4A017);
          border:none;border-radius:30px;color:#07060A;
          font-family:'Cinzel',serif;font-weight:700;font-size:12px;
          letter-spacing:3px;text-transform:uppercase;
          cursor:pointer;transition:all 0.25s;
          box-shadow:0 4px 20px rgba(255,215,0,0.2);
          display:flex;align-items:center;justify-content:center;gap:8px;
        }
        .lg-btn-signup:hover { box-shadow:0 0 32px rgba(255,215,0,0.4);transform:translateY(-2px); }
        .lg-btn-login {
          width:100%;padding:13px;
          background:transparent;
          border:1px solid rgba(184,150,12,0.5);
          border-radius:30px;color:#FFD700;
          font-family:'Cinzel',serif;font-size:12px;
          letter-spacing:3px;text-transform:uppercase;
          cursor:pointer;transition:all 0.25s;
          display:flex;align-items:center;justify-content:center;gap:8px;
        }
        .lg-btn-login:hover { border-color:#FFD700;background:rgba(255,215,0,0.06);transform:translateY(-1px); }
        .lg-free-note {
          margin-top:20px;
          font-family:'EB Garamond',serif;font-style:italic;
          font-size:13px;color:rgba(184,150,12,0.5);
          letter-spacing:0.3px;
        }
      </style>
      <div id="lg-box">
        <button id="lg-close">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div class="lg-lock-ring">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FFD700" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </div>
        <div class="lg-eyebrow">Members Only</div>
        <h2 class="lg-title">Unlock the Full Library</h2>
        <p class="lg-body">Create a <strong>free account</strong> to access every game in the NoteShelf collection — no subscription required.</p>
        <div class="lg-buttons">
          <button class="lg-btn-signup" id="lg-signup-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
            Create Free Account
          </button>
          <button class="lg-btn-login" id="lg-login-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10,17 15,12 10,7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
            Log In
          </button>
        </div>
        <p class="lg-free-note">5 games are free to play without an account.</p>
      </div>
    `;

    document.body.appendChild(overlay);

    document.getElementById("lg-close").onclick = () => overlay.remove();
    overlay.onclick = e => { if (e.target === overlay) overlay.remove(); };
    document.addEventListener("keydown", function esc(e) {
      if (e.key === "Escape") { overlay.remove(); document.removeEventListener("keydown", esc); }
    });

    document.getElementById("lg-signup-btn").onclick = () => {
      overlay.remove();
      document.getElementById("signup-btn").click();
    };
    document.getElementById("lg-login-btn").onclick = () => {
      overlay.remove();
      document.getElementById("login-btn").click();
    };
  }

  // Update UI after login
  function updateUIAfterLogin(username, avatar, isAdmin, isBanAdmin) {
    logoutBtn.style.display       = "inline-flex";
    usernameDisplay.style.display = "inline-block";
    usernameDisplay.textContent   = username;
    signupBtn.style.display = loginBtn.style.display = "none";

    if (avatar) {
      userAvatar.src           = avatar;
      userAvatar.style.display = "inline-block";
    } else {
      userAvatar.style.display = "none";
    }

    // Edit profile button
    const epBtn = document.getElementById("edit-profile-btn");
    if (epBtn) epBtn.style.display = "inline-flex";

    // Verified badge
    let badge = document.getElementById("verified-badge");
    if (!badge) {
      badge = document.createElement("span");
      badge.id = "verified-badge";
      badge.title = "Email Verified";
      badge.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
      usernameDisplay.insertAdjacentElement("afterend", badge);
    }
    badge.style.display = _emailVerified ? "inline-flex" : "none";

    adminPanel.style.display = isAdmin ? "block" : "none";

    if (isBanAdmin || username === banAdminUser) {
      buildBanAdminPanel();

      // FIX: Add Ban Manager toggle button
      let banToggleBtn = document.getElementById("ban-manager-toggle-btn");
      if (!banToggleBtn) {
        banToggleBtn = document.createElement("button");
        banToggleBtn.id = "ban-manager-toggle-btn";
        banToggleBtn.className = "top-btn";
        banToggleBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Admin Panel`;
        banToggleBtn.onclick = () => {
          const bp = document.getElementById("ban-admin-panel");
          if (bp) bp.style.display = (bp.style.display === "none" || bp.style.display === "") ? "block" : "none";
        };
        document.getElementById("top-buttons-auth").appendChild(banToggleBtn);
      }
    }

    renderGames(searchBar ? searchBar.value : "");
    if (gameViewer.style.display === "flex" && currentGameName) {
      buildViewerSidebar(currentGameName);
    }
    window.dispatchEvent(new CustomEvent("ns_login", { detail: { username, avatar } }));
  }

  logoutBtn && logoutBtn.addEventListener("click", async () => {
    try { await auth.signOut(); } catch (_) {}
    clearSession();
    usernameDisplay.style.display = userAvatar.style.display = "none";
    logoutBtn.style.display = "none";
    signupBtn.style.display = loginBtn.style.display = "inline-flex";
    adminPanel.style.display = "none";
    removeVerificationBanner();

    const epBtn = document.getElementById("edit-profile-btn");
    if (epBtn) epBtn.style.display = "none";

    const badge = document.getElementById("verified-badge");
    if (badge) badge.remove();

    const banPanel = document.getElementById("ban-admin-panel");
    if (banPanel) banPanel.style.display = "none";

    // FIX: Remove ban manager toggle button on logout
    const banToggle = document.getElementById("ban-manager-toggle-btn");
    if (banToggle) banToggle.remove();

    window.dispatchEvent(new CustomEvent("ns_logout"));
    renderGames(searchBar ? searchBar.value : "");
    if (gameViewer.style.display === "flex" && currentGameName) {
      buildViewerSidebar(currentGameName);
    }
  });

  // Global message
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

  // Restore session
  if (me()) {
    db.ref("users/" + me()).once("value").then(async snap => {
      const data = snap.val();
      if (data) {
        const ban = await checkBanned(me());
        if (ban) { clearSession(); showBanPopup(ban); return; }

        const currentFbUser = auth.currentUser;
        let verified = data.emailVerified || false;

        if (currentFbUser) {
          try {
            await currentFbUser.reload();
            verified = currentFbUser.emailVerified;
            if (verified && !data.emailVerified) {
              await db.ref("users/" + me() + "/emailVerified").set(true);
            }
          } catch (_) {}
        }

        setSession(me(), data.avatar || "", verified, currentFbUser ? currentFbUser.uid : _firebaseUid);
        updateUIAfterLogin(me(), data.avatar || "", data.isAdmin, data.isBanAdmin || me() === banAdminUser);

        if (!_emailVerified) showVerificationBanner();

      } else {
        clearSession();
      }
    });
  }

  // FIX: Firebase Auth state listener — only act on verified state changes, never clear session on null
  auth.onAuthStateChanged(async fbUser => {
    if (fbUser && me()) {
      try {
        await fbUser.reload();
        if (fbUser.emailVerified && !_emailVerified) {
          _emailVerified = true;
          localStorage.setItem("ns_verified", "true");
          await db.ref("users/" + me() + "/emailVerified").set(true);
          removeVerificationBanner();
          updateVerifiedBadge(true);
          showVerifyToast("✓ Email verified! All features unlocked.");
        }
      } catch(_) {}
    }
    // NOTE: We intentionally do NOT clear the session when fbUser is null.
    // Firebase fires null during token refresh, which would incorrectly log users out.
    // Users are only logged out via the explicit logoutBtn click.
  });

  // =====================================
  // BAN ADMIN PANEL
  // =====================================
  function buildBanAdminPanel() {
    const existing = document.getElementById("ban-admin-panel");
    if (existing) { existing.style.display = "block"; return; }

    const panel = document.createElement("div");
    panel.id = "ban-admin-panel";
    panel.style.cssText = "position:fixed;top:58px;left:0;width:300px;height:calc(100% - 68px);background:linear-gradient(180deg,#141219,#0D0B12);border-right:1px solid #2A2638;border-radius:0 12px 12px 0;padding:18px;overflow-y:auto;z-index:4500;font-family:'Cinzel',serif;color:#FFD700;";
    panel.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
        <h3 style="font-family:'Cinzel Decorative',serif;font-size:13px;letter-spacing:1px;display:flex;align-items:center;gap:7px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Ban Manager
        </h3>
        <button id="close-ban-panel" style="width:28px;height:28px;border-radius:50%;border:1px solid #2A2638;background:transparent;color:#B8960C;cursor:pointer;display:flex;align-items:center;justify-content:center;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <label style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#B8960C;opacity:0.75;display:block;margin-bottom:5px;">Ban Username</label>
      <input id="ban-username-input" type="text" placeholder="Username to ban…" style="width:100%;padding:9px 12px;border-radius:8px;border:1px solid #2A2638;background:#0D0B12;color:#F0E6CA;font-family:'EB Garamond',serif;font-size:14px;outline:none;margin-bottom:10px;display:block;box-sizing:border-box;"/>
      <label style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#B8960C;opacity:0.75;display:block;margin-bottom:5px;">Reason</label>
      <input id="ban-reason-input" type="text" placeholder="Reason for ban…" style="width:100%;padding:9px 12px;border-radius:8px;border:1px solid #2A2638;background:#0D0B12;color:#F0E6CA;font-family:'EB Garamond',serif;font-size:14px;outline:none;margin-bottom:10px;display:block;box-sizing:border-box;"/>
      <label style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#B8960C;opacity:0.75;display:block;margin-bottom:5px;">Duration</label>
      <div style="display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap;">
        <select id="ban-duration-select" style="flex:1;padding:9px 10px;border-radius:8px;border:1px solid #2A2638;background:#0D0B12;color:#F0E6CA;font-family:'Cinzel',serif;font-size:11px;outline:none;min-width:0;">
          <option value="1h">1 Hour</option><option value="6h">6 Hours</option>
          <option value="12h">12 Hours</option><option value="24h">24 Hours</option>
          <option value="3d">3 Days</option><option value="7d">7 Days</option>
          <option value="30d">30 Days</option><option value="permanent">Permanent ∞</option>
        </select>
      </div>
      <button id="ban-submit-btn" style="width:100%;padding:11px;background:linear-gradient(135deg,#ff6b6b,#c0392b);border:none;border-radius:8px;color:#fff;font-family:'Cinzel',serif;font-weight:700;font-size:12px;letter-spacing:2px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:18px;">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Issue Ban
      </button>
      <div style="border-top:1px solid #2A2638;padding-top:14px;">
        <label style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#B8960C;opacity:0.75;display:block;margin-bottom:8px;">Unban User</label>
        <div style="display:flex;gap:6px;">
          <input id="unban-username-input" type="text" placeholder="Username…" style="flex:1;padding:8px 10px;border-radius:8px;border:1px solid #2A2638;background:#0D0B12;color:#F0E6CA;font-family:'EB Garamond',serif;font-size:13px;outline:none;min-width:0;"/>
          <button id="unban-submit-btn" style="padding:8px 14px;border-radius:8px;border:1px solid rgba(46,204,113,0.5);background:rgba(46,204,113,0.1);color:#2ecc71;font-family:'Cinzel',serif;font-size:11px;letter-spacing:1px;cursor:pointer;white-space:nowrap;">Unban</button>
        </div>
      </div>
      <div style="border-top:1px solid #2A2638;padding-top:14px;margin-top:14px;">
        <label style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#B8960C;opacity:0.75;display:block;margin-bottom:8px;">Site Status</label>
        <button id="site-status-toggle-btn" style="width:100%;padding:11px;border-radius:8px;border:1px solid rgba(46,204,113,0.5);background:rgba(46,204,113,0.1);color:#2ecc71;font-family:'Cinzel',serif;font-weight:700;font-size:11px;letter-spacing:2px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;">
          🟢 SITE IS UP
        </button>
      </div>
      <div id="ban-feedback" style="margin-top:12px;font-family:'Cinzel',serif;font-size:11px;letter-spacing:1px;min-height:20px;"></div>
    `;
    document.body.appendChild(panel);

    document.getElementById("close-ban-panel").onclick = () => { panel.style.display = "none"; };

    const banFeedback = document.getElementById("ban-feedback");

    function showBanFeedback(msg, color) {
        banFeedback.textContent = msg;
        banFeedback.style.color = color || "#FFD700";
        setTimeout(() => { banFeedback.textContent = ""; }, 3000);
    }

    document.getElementById("ban-submit-btn").onclick = async () => {
        const target   = document.getElementById("ban-username-input").value.trim();
        const reason   = document.getElementById("ban-reason-input").value.trim() || "No reason provided";
        const duration = document.getElementById("ban-duration-select").value;
        if (!target) { showBanFeedback("❌ Enter a username", "#ff6b6b"); return; }
        if (target === banAdminUser) { showBanFeedback("❌ Cannot ban the admin", "#ff6b6b"); return; }
        const userSnap = await db.ref("users/" + target).once("value");
        if (!userSnap.exists()) { showBanFeedback("❌ User not found", "#ff6b6b"); return; }
        const durationMap = { "1h":3600000,"6h":21600000,"12h":43200000,"24h":86400000,"3d":259200000,"7d":604800000,"30d":2592000000 };
        const until = duration === "permanent" ? "permanent" : Date.now() + (durationMap[duration] || 86400000);
        await db.ref("bans/" + target).set({ reason, until, bannedBy: banAdminUser, bannedAt: Date.now() });
        showBanFeedback(`✓ Banned ${target} ${duration === "permanent" ? "permanently" : "for " + duration}`, "#2ecc71");
        document.getElementById("ban-username-input").value = "";
        document.getElementById("ban-reason-input").value   = "";
    };

    document.getElementById("unban-submit-btn").onclick = async () => {
        const target = document.getElementById("unban-username-input").value.trim();
        if (!target) { showBanFeedback("❌ Enter a username", "#ff6b6b"); return; }
        await db.ref("bans/" + target).remove();
        showBanFeedback(`✓ Unbanned ${target}`, "#2ecc71");
        document.getElementById("unban-username-input").value = "";
    };

    // ── Site Status Toggle ──
    const statusBtn = document.getElementById("site-status-toggle-btn");

    function updateStatusBtn(isDown) {
        if (isDown) {
            statusBtn.textContent = "🔴 SITE IS DOWN — Click to bring UP";
            statusBtn.style.borderColor = "rgba(255,107,107,0.5)";
            statusBtn.style.background  = "rgba(255,107,107,0.1)";
            statusBtn.style.color       = "#ff6b6b";
        } else {
            statusBtn.textContent = "🟢 SITE IS UP — Click to mark DOWN";
            statusBtn.style.borderColor = "rgba(46,204,113,0.5)";
            statusBtn.style.background  = "rgba(46,204,113,0.1)";
            statusBtn.style.color       = "#2ecc71";
        }
    }

    // Load initial state
    db.ref("siteStatus/isDown").once("value").then(snap => {
        updateStatusBtn(snap.val() === true);
    });

    // Keep in sync if another admin changes it
    db.ref("siteStatus/isDown").on("value", snap => {
        updateStatusBtn(snap.val() === true);
    });

    statusBtn.onclick = async () => {
        const snap   = await db.ref("siteStatus/isDown").once("value");
        const isDown = snap.val() === true;
        await db.ref("siteStatus").set({
            isDown: !isDown,
            updatedBy: banAdminUser,
            updatedAt: Date.now()
        });
    };

} // end buildBanAdminPanel
}); // end DOMContentLoaded

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
chatCloseBtn.onclick = () => { isPanelOpen = false; chatPanel.style.display = "none"; };

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

function goOnline() {
  const user = me() || "Guest";
  const ref  = presenceRef.child(user);
  ref.set(true);
  ref.onDisconnect().remove();
}
goOnline();
window.addEventListener("ns_login",  () => goOnline());
window.addEventListener("ns_logout", () => { presenceRef.child("Guest").remove(); });

presenceRef.on("value", snap => {
  const count = snap.numChildren();
  onlineCount.textContent = count > 0 ? `${count} online` : "0 online";
});

function formatTime(ts) { return new Date(ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }); }
function formatDate(ts) {
  const d = new Date(ts), now = new Date();
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
  const textEl = bubbleEl.querySelector(".chat-text");
  const currentText = textEl ? textEl.textContent : bubbleEl.querySelector("img") ? bubbleEl.querySelector("img").src : "";
  const newText = prompt("Edit message:", currentText);
  if (newText && newText.trim()) {
    const filtered = filterMessage(newText.trim());
    db.ref("messages/" + msgKey).update({ text: filtered });
    const oldContent = bubbleEl.querySelector(".chat-text") || bubbleEl.querySelector("div");
    const newContent = buildMessageContent(filtered);
    if (oldContent) bubbleEl.replaceChild(newContent, oldContent);
  }
}

function deleteMessage(msgKey, rowEl) {
  if (confirm("Delete this message?")) {
    db.ref("messages/" + msgKey).remove();
    rowEl.remove();
  }
}

async function sendMessage() {
  const user = me() || "Guest";

  if (!requireVerified("Global Chat")) return;

  let msg = chatInput.value.trim();
  if (!msg) return;

  if (isImageUrl(msg) && !nsfwExemptUser(user)) {
    const nsfw = await isNsfwImage(msg);
    if (nsfw) {
      chatInput.value = "";
      chatCharCount.textContent = "300";
      const warn = document.createElement("div");
      warn.style.cssText = "color:#ff6b6b;font-family:'Cinzel',serif;font-size:10px;letter-spacing:1px;padding:4px 14px;background:#0D0B12;";
      warn.textContent = "⚠ NSFW images are not allowed";
      chatMessages.appendChild(warn);
      setTimeout(() => warn.remove(), 3000);
      return;
    }
  }

  msg = filterMessage(msg);
  db.ref("messages").push({ user, text: msg, avatar: myAvatar(), time: Date.now() });
  chatInput.value = "";
  chatCharCount.textContent = "300";
  typingRef.child(user).remove();
}

chatSend.onclick = sendMessage;
chatInput.addEventListener("keydown", e => {
  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
});

chatInput.addEventListener("focus", () => {
  if (me() && !isEmailVerified()) {
    chatInput.blur();
    showVerificationGate("Global Chat");
  }
});

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
    divider.className = "chat-day-divider"; divider.textContent = msgDate;
    chatMessages.appendChild(divider);
  }

  const row    = document.createElement("div");
  row.classList.add("chat-row", isMe ? "me" : "other");
  const avatar = buildAvatar(data.user, data.avatar || "");
  const group  = document.createElement("div"); group.className = "chat-bubble-group";

  if (!isMe) {
    const sender = document.createElement("div");
    sender.className = "chat-sender"; sender.textContent = data.user;
    group.appendChild(sender);
  }

  const bubble = document.createElement("div"); bubble.className = "chat-bubble";
  bubble.appendChild(buildMessageContent(data.text));

  if (isMe) {
    const actions  = document.createElement("div"); actions.className = "chat-actions";
    const editBtn  = document.createElement("button"); editBtn.className = "chat-action-btn"; editBtn.title = "Edit";
    editBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
    editBtn.onclick = () => editMessage(msgKey, bubble);
    const delBtn = document.createElement("button"); delBtn.className = "chat-action-btn del"; delBtn.title = "Delete";
    delBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>`;
    delBtn.onclick = () => deleteMessage(msgKey, row);
    actions.appendChild(editBtn); actions.appendChild(delBtn);
    bubble.appendChild(actions);
  }

  group.appendChild(bubble);
  const timeEl = document.createElement("div"); timeEl.className = "chat-time"; timeEl.textContent = formatTime(data.time);
  group.appendChild(timeEl);

  if (isMe) { row.appendChild(group); row.appendChild(avatar); }
  else       { row.appendChild(avatar); row.appendChild(group); }

  chatMessages.appendChild(row);

  if (!isPanelOpen) {
    unreadCount++;
    chatBadge.textContent   = unreadCount > 9 ? "9+" : unreadCount;
    chatBadge.style.display = "flex";
  }

  const nearBottom = chatMessages.scrollHeight - chatMessages.scrollTop - chatMessages.clientHeight < 80;
  if (nearBottom || isMe) chatMessages.scrollTop = chatMessages.scrollHeight;
});

// =====================================
// DIRECT MESSAGES SYSTEM
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
    el.className = "dm-friend-avatar";
    el.style.width = size + "px"; el.style.height = size + "px";
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

  function formatTimeShort(ts) {
    return new Date(ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  function refreshUnreadBadge() {
    const msgUnread = Object.entries(dmUnreadByUser)
      .filter(([k]) => k !== "__requests__")
      .reduce((a, [, b]) => a + b, 0);
    const reqCount = dmUnreadByUser["__requests__"] || 0;
    const total    = msgUnread + reqCount;
    if (total > 0) {
      dmUnreadBadge.textContent   = total > 9 ? "9+" : total;
      dmUnreadBadge.style.display = "flex";
    } else {
      dmUnreadBadge.style.display = "none";
    }
  }

  function friendsRef(username) { return db.ref("friends/" + username); }

  dmBtnFloat.onclick = e => {
    e.stopPropagation();
    if (me() && !isEmailVerified()) {
      showVerificationGate("Direct Messages & Friends");
      return;
    }
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

  async function addFriend() {
    if (!requireVerified("Adding Friends")) return;

    const user = me();
    if (!user) { showToast("⚠ Log in first"); return; }
    const target = dmAddInput.value.trim();
    if (!target) return;
    dmAddInput.value = "";
    if (target === user) { showToast("⚠ Cannot add yourself"); return; }
    if (localFriendsCache.includes(target)) { showToast("Already friends"); return; }
    const userSnap = await db.ref("users/" + target).once("value");
    if (!userSnap.exists()) { showToast("❌ User not found"); return; }
    const existingReq = await db.ref("friend_requests/" + target + "/" + user).once("value");
    if (existingReq.exists()) { showToast("Request already sent"); return; }
    const theirReq = await db.ref("friend_requests/" + user + "/" + target).once("value");
    if (theirReq.exists()) {
      await friendsRef(user).child(target).set({ addedAt: Date.now(), preview: "" });
      await friendsRef(target).child(user).set({ addedAt: Date.now(), preview: "" });
      await db.ref("friend_requests/" + user + "/" + target).remove();
      showToast("✓ Now friends with " + target);
      return;
    }
    await db.ref("friend_requests/" + target + "/" + user).set({ from: user, avatar: myAvatar(), sentAt: Date.now() });
    showToast("✓ Friend request sent to " + target);
  }

  dmAddBtn.onclick = addFriend;
  dmAddInput.addEventListener("keydown", e => { if (e.key === "Enter") addFriend(); });

  dmAddInput.addEventListener("focus", () => {
    if (me() && !isEmailVerified()) {
      dmAddInput.blur();
      showVerificationGate("Adding Friends");
    }
  });

  async function removeFriend(target) {
    const user = me(); if (!user) return;
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

  function listenForFriendRequests(username) {
    if (requestsListenerRef) { requestsListenerRef.off(); requestsListenerRef = null; }
    requestsListenerRef = db.ref("friend_requests/" + username);
    requestsListenerRef.on("value", snap => {
      const requests = snap.val() || {};
      const keys     = Object.keys(requests);
      const old = document.getElementById("dm-requests-section");
      if (old) old.remove();
      dmUnreadByUser["__requests__"] = keys.length;
      refreshUnreadBadge();
      if (!keys.length) return;

      const section = document.createElement("div");
      section.id = "dm-requests-section";
      section.style.cssText = "border-bottom:1px solid var(--ink-border);padding:6px 0 4px;background:rgba(255,215,0,0.03);";
      const heading = document.createElement("div");
      heading.style.cssText = "font-family:'Cinzel',serif;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--gold-dim);padding:4px 12px 6px;opacity:0.75;display:flex;align-items:center;gap:6px;";
      heading.innerHTML = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg> Requests (${keys.length})`;
      section.appendChild(heading);

      keys.forEach(fromUser => {
        const req = requests[fromUser];
        const row = document.createElement("div");
        row.style.cssText = "display:flex;align-items:center;gap:8px;padding:5px 10px;";
        const av   = buildAvatarEl(fromUser, req.avatar || "", 28);
        const name = document.createElement("div");
        name.style.cssText = "flex:1;font-family:'Cinzel',serif;font-size:10px;color:var(--gold);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";
        name.textContent   = fromUser;
        const acceptBtn = document.createElement("button");
        acceptBtn.style.cssText = "padding:3px 9px;border-radius:20px;border:1px solid rgba(46,204,113,0.5);background:rgba(46,204,113,0.08);color:#2ecc71;font-family:'Cinzel',serif;font-size:9px;letter-spacing:1px;cursor:pointer;transition:all 0.2s;flex-shrink:0;";
        acceptBtn.textContent   = "Accept";
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
        declineBtn.style.cssText = "padding:3px 9px;border-radius:20px;border:1px solid rgba(255,107,107,0.4);background:rgba(255,107,107,0.06);color:var(--red);font-family:'Cinzel',serif;font-size:9px;letter-spacing:1px;cursor:pointer;margin-left:4px;transition:all 0.2s;flex-shrink:0;";
        declineBtn.textContent   = "Decline";
        declineBtn.onmouseover = () => { declineBtn.style.background = "rgba(255,107,107,0.14)"; };
        declineBtn.onmouseout  = () => { declineBtn.style.background = "rgba(255,107,107,0.06)"; };
        declineBtn.onclick = async () => {
          await db.ref("friend_requests/" + username + "/" + fromUser).remove();
          showToast("Declined " + fromUser);
        };
        row.appendChild(av); row.appendChild(name); row.appendChild(acceptBtn); row.appendChild(declineBtn);
        section.appendChild(row);
      });
      dmFriendsList.parentElement.insertBefore(section, dmFriendsList);
    });
  }

  let friendsListRef    = null;
  let friendsListenerOn = false;

  function startFriendsListener(username) {
    if (friendsListRef) { friendsListRef.off(); friendsListenerOn = false; }
    friendsListRef = friendsRef(username);
    friendsListenerOn = true;
    friendsListRef.on("value", snap => {
      const data = snap.val() || {};
      localFriendsCache = Object.keys(data);
      renderFriendsList(localFriendsCache, data);
      localFriendsCache.forEach(f => { if (!friendsWatchers[f]) watchIncoming(f); });
    });
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

  function renderFriendsList(friends, previewData) {
    friends     = friends     || localFriendsCache;
    previewData = previewData || {};
    dmFriendsList.innerHTML = "";

    if (!me()) {
      const empty = document.createElement("div");
      empty.className = "dm-empty"; empty.textContent = "Log in to use Direct Messages.";
      dmFriendsList.appendChild(empty); return;
    }

    if (!friends.length) {
      const empty = document.createElement("div");
      empty.className = "dm-empty"; empty.textContent = "Add a friend to start chatting privately.";
      dmFriendsList.appendChild(empty); return;
    }

    friends.forEach(friend => {
      const row = document.createElement("div");
      row.className = "dm-friend-row" + (friend === activeFriend ? " active" : "");
      const avatarEl = buildAvatarEl(friend, "", 32);
      db.ref("users/" + friend + "/avatar").once("value").then(s => {
        const av = s.val() || "";
        if (av) {
          avatarEl.innerHTML = "";
          const img = document.createElement("img");
          img.src = av;
          img.onerror = () => { avatarEl.innerHTML = ""; avatarEl.textContent = getInitials(friend); };
          avatarEl.appendChild(img);
        } else {
          avatarEl.textContent = getInitials(friend);
        }
      });

      const info    = document.createElement("div"); info.className = "dm-friend-info";
      const name    = document.createElement("div"); name.className = "dm-friend-name";
      name.textContent = friend === me() ? friend + " (You)" : friend;
      const rawPreview = (previewData[friend] && previewData[friend].preview) || "No messages yet";
      const preview = document.createElement("div"); preview.className = "dm-friend-preview";
      preview.textContent = isImageUrl(rawPreview) ? "📷 Image" : rawPreview;
      info.appendChild(name); info.appendChild(preview);
      row.appendChild(avatarEl); row.appendChild(info);

      const unread = dmUnreadByUser[friend] || 0;
      if (unread > 0) {
        const badge = document.createElement("div"); badge.className = "dm-friend-badge";
        badge.textContent = unread > 9 ? "9+" : unread; row.appendChild(badge);
      }

      const removeBtn = document.createElement("button"); removeBtn.className = "dm-remove-btn"; removeBtn.title = "Remove";
      removeBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
      removeBtn.onclick = e => { e.stopPropagation(); removeFriend(friend); };
      row.appendChild(removeBtn);

      row.onclick = () => openConversation(friend);
      dmFriendsList.appendChild(row);
    });
  }

  function openConversation(friend) {
    activeFriend  = friend;
    activeConvoId = convoId(me(), friend);
    if (dmMsgListenerRef && dmMsgListener) { dmMsgListenerRef.off("child_added", dmMsgListener); dmMsgListener = null; dmMsgListenerRef = null; }
    if (dmTypingListRef && dmTypingListener) { dmTypingListRef.off("value", dmTypingListener); dmTypingListener = null; dmTypingListRef = null; }
    dmUnreadByUser[friend] = 0; refreshUnreadBadge();
    dmNoConvo.style.display = "none"; dmConvo.style.display = "flex";
    dmChatWith.textContent  = friend === me() ? friend + " (You — Notes to self)" : friend;
    dmMessages.innerHTML    = "";
    renderFriendsList(localFriendsCache);

    const messagesRef = db.ref("dms/" + activeConvoId + "/messages");
    dmMsgListenerRef  = messagesRef;
    dmMsgListener     = messagesRef.limitToLast(60).on("child_added", snap => {
      const data = snap.val();
      appendDMMessage(data, snap.key);
      const previewText = isImageUrl(data.text) ? "📷 Image" : (data.text || "").substring(0, 32) + ((data.text || "").length > 32 ? "…" : "");
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
    if (dmMsgListenerRef && dmMsgListener) { dmMsgListenerRef.off("child_added", dmMsgListener); dmMsgListener = null; dmMsgListenerRef = null; }
    if (dmTypingListRef && dmTypingListener) { dmTypingListRef.off("value", dmTypingListener); dmTypingListener = null; dmTypingListRef = null; }
    activeFriend = null; activeConvoId = null;
    dmNoConvo.style.display = "flex"; dmConvo.style.display = "none";
    renderFriendsList(localFriendsCache);
  }

  dmCloseConvo.onclick = closeConversation;

  function appendDMMessage(data, key) {
    const user = me(), isMe = data.sender === user;
    const row  = document.createElement("div"); row.classList.add("chat-row", isMe ? "me" : "other");
    const avatarEl = buildAvatarEl(data.sender, data.avatar || "", 28);
    const group    = document.createElement("div"); group.className = "chat-bubble-group";
    if (!isMe) {
      const sender = document.createElement("div"); sender.className = "chat-sender"; sender.textContent = data.sender;
      group.appendChild(sender);
    }
    const bubble = document.createElement("div"); bubble.className = "chat-bubble";
    bubble.appendChild(buildMessageContent(data.text));

    if (isMe) {
      const actions = document.createElement("div"); actions.className = "chat-actions";
      const editBtn = document.createElement("button"); editBtn.className = "chat-action-btn"; editBtn.title = "Edit";
      editBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
      editBtn.onclick = () => {
        const currentText = bubble.querySelector(".chat-text") ? bubble.querySelector(".chat-text").textContent : bubble.querySelector("img") ? bubble.querySelector("img").src : "";
        const newText = prompt("Edit message:", currentText);
        if (newText && newText.trim()) {
          const filtered = filterMessage(newText.trim());
          db.ref("dms/" + activeConvoId + "/messages/" + key).update({ text: filtered });
          const oldContent = bubble.querySelector(".chat-text, div:not(.chat-actions)");
          const newContent = buildMessageContent(filtered);
          if (oldContent) bubble.replaceChild(newContent, oldContent);
        }
      };
      const delBtn = document.createElement("button"); delBtn.className = "chat-action-btn del"; delBtn.title = "Delete";
      delBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>`;
      delBtn.onclick = () => { if (confirm("Delete this message?")) { db.ref("dms/" + activeConvoId + "/messages/" + key).remove(); row.remove(); } };
      actions.appendChild(editBtn); actions.appendChild(delBtn); bubble.appendChild(actions);
    }

    group.appendChild(bubble);
    const timeEl = document.createElement("div"); timeEl.className = "chat-time"; timeEl.textContent = formatTimeShort(data.time);
    group.appendChild(timeEl);
    if (isMe) { row.appendChild(group); row.appendChild(avatarEl); }
    else       { row.appendChild(avatarEl); row.appendChild(group); }
    dmMessages.appendChild(row);
  }

  async function sendDM() {
    if (!requireVerified("Direct Messages")) return;

    const user = me();
    if (!user)    { showToast("⚠ Log in to send messages"); return; }
    if (!activeFriend || !activeConvoId) return;
    const text = dmInput.value.trim();
    if (!text) return;

    if (isImageUrl(text) && !nsfwExemptUser(user)) {
      const nsfw = await isNsfwImage(text);
      if (nsfw) { dmInput.value = ""; showToast("⚠ NSFW images are not allowed"); return; }
    }

    const clean = filterMessage(text);
    db.ref("dms/" + activeConvoId + "/messages").push({ sender: user, avatar: myAvatar(), text: clean, time: Date.now() });
    if (activeFriend !== user) db.ref("dm_typing/" + activeConvoId + "/" + user).remove();
    clearTimeout(dmTypingTimer);
    dmInput.value = "";
  }

  dmSend.onclick = sendDM;
  dmInput.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendDM(); } });

  dmInput.addEventListener("focus", () => {
    if (me() && !isEmailVerified()) {
      dmInput.blur();
      showVerificationGate("Direct Messages");
    }
  });

  dmInput.addEventListener("input", () => {
    if (!activeConvoId || activeFriend === me()) return;
    const user = me(); if (!user) return;
    if (dmInput.value.trim()) {
      db.ref("dm_typing/" + activeConvoId + "/" + user).set(true);
      clearTimeout(dmTypingTimer);
      dmTypingTimer = setTimeout(() => db.ref("dm_typing/" + activeConvoId + "/" + user).remove(), 2200);
    } else {
      db.ref("dm_typing/" + activeConvoId + "/" + user).remove();
    }
  });

  function watchIncoming(friend) {
    const user = me();
    if (!user || friendsWatchers[friend]) return;
    const cid = convoId(user, friend);
    const ref = db.ref("dms/" + cid + "/messages").orderByChild("time").startAt(Date.now() + 1);
    const cb  = snap => {
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

  if (me()) startFriendsListener(me());
  else       renderFriendsList([]);

})();

// =====================================
// EDIT PROFILE
// =====================================
(function initEditProfile() {
  const editBtn     = document.getElementById("edit-profile-btn");
  const popup       = document.getElementById("edit-profile-popup");
  const closeBtn    = document.getElementById("close-edit-profile");
  const epUsername  = document.getElementById("ep-username-display");
  const epEmail     = document.getElementById("ep-email");
  const epPassword  = document.getElementById("ep-password");
  const epAvatarIn  = document.getElementById("ep-avatar-input");
  const epAvatarPrev= document.getElementById("ep-avatar-preview");
  const epSubmit    = document.getElementById("ep-submit");
  const epMessage   = document.getElementById("ep-message");
  const epEmailStat = document.getElementById("ep-email-status");

  let newAvatarB64 = "";

  window.addEventListener("ns_login", () => { editBtn.style.display = "inline-flex"; });
  window.addEventListener("ns_logout", () => { editBtn.style.display = "none"; });
  if (me()) editBtn.style.display = "inline-flex";

  editBtn.onclick = async () => {
    const user = me(); if (!user) return;
    epUsername.textContent = user;
    epPassword.value = "";
    epMessage.textContent = "";
    epEmailStat.textContent = "";
    newAvatarB64 = "";

    const snap = await db.ref("users/" + user).once("value");
    const data = snap.val() || {};

    epEmail.value = data.email || "";
    if (data.avatar) {
      epAvatarPrev.src = data.avatar;
      epAvatarPrev.style.display = "block";
    } else {
      epAvatarPrev.style.display = "none";
    }

    if (data.email) {
      epEmailStat.style.color = data.emailVerified ? "#2ecc71" : "var(--gold-dim)";
      epEmailStat.textContent = data.emailVerified ? "✓ Verified" : "✗ Not verified";
    }

    popup.style.display = "flex";
  };

  closeBtn.onclick = () => { popup.style.display = "none"; };
  document.addEventListener("keydown", e => { if (e.key === "Escape") popup.style.display = "none"; });

  epAvatarIn.addEventListener("change", e => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      newAvatarB64 = reader.result;
      epAvatarPrev.src = newAvatarB64;
      epAvatarPrev.style.display = "block";
    };
    reader.readAsDataURL(file);
  });

  // FIX: Corrected epSubmit handler — was using undefined `fbUser`, now uses `currentFbUser`
  epSubmit.onclick = async () => {
    const user = me(); if (!user) return;
    epMessage.textContent = "";
    epSubmit.disabled = true;
    epMessage.style.color = "var(--red)";

    const snap = await db.ref("users/" + user).once("value");
    const data = snap.val() || {};

    const newEmail    = epEmail.value.trim();
    const newPassword = epPassword.value.trim();
    const updates     = {};

    if (newAvatarB64) {
      updates.avatar = newAvatarB64;
    }

    if (newEmail && newEmail !== data.email) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
        epMessage.textContent = "❌ Invalid email address";
        epSubmit.disabled = false; return;
      }
      updates.email = newEmail;
      updates.emailVerified = false;
    }

    try {
      // FIX: use currentFbUser instead of undefined fbUser
      const currentFbUser = auth.currentUser;

      if (newEmail && newEmail !== data.email) {
        if (currentFbUser) {
          await currentFbUser.updateEmail(newEmail);
          await currentFbUser.sendEmailVerification(actionCodeSettings);
          showVerifyToast("✉ Verification email sent to " + newEmail);
          _emailVerified = false;
          localStorage.setItem("ns_verified", "false");
          updates.emailVerified = false;
          showVerificationBanner();
          updateVerifiedBadge(false);
        } else {
          // Legacy user — create Firebase Auth account with new email
          if (!newPassword) {
            epMessage.textContent = "❌ Enter a password to link your email";
            epSubmit.disabled = false; return;
          }
          const cred = await auth.createUserWithEmailAndPassword(newEmail, newPassword);
          await cred.user.sendEmailVerification(actionCodeSettings);
          updates.firebaseUid   = cred.user.uid;
          updates.emailVerified = false;
          _firebaseUid = cred.user.uid;
          localStorage.setItem("ns_uid", cred.user.uid);
          showVerifyToast("✉ Verification email sent to " + newEmail);
          showVerificationBanner();
          updateVerifiedBadge(false);
        }
      }

      if (newPassword) {
        if (currentFbUser) {
          await currentFbUser.updatePassword(newPassword);
        }
        // Always update the hash in DB so login works
        updates.passwordHash = simpleHash(newPassword);
      }

      // Save all updates to DB
      if (Object.keys(updates).length) {
        await db.ref("users/" + user).update(updates);
      }

      // Update session avatar immediately without re-login
      if (newAvatarB64) {
        setSession(user, newAvatarB64, _emailVerified, _firebaseUid);
        const avatarEl = document.getElementById("user-avatar");
        if (avatarEl) { avatarEl.src = newAvatarB64; avatarEl.style.display = "inline-block"; }
      }

      // FIX: Refresh epEmailStat to reflect new email without requiring logout
      if (newEmail && newEmail !== data.email) {
        epEmailStat.style.color = "var(--gold-dim)";
        epEmailStat.textContent = "✗ Not verified (check inbox)";
      }

      epMessage.style.color = "#2ecc71";
      epMessage.textContent = "✓ Profile updated!";
      setTimeout(() => { popup.style.display = "none"; }, 1200);

    } catch (err) {
      epMessage.style.color = "var(--red)";
      if (err.code === "auth/requires-recent-login") {
        epMessage.textContent = "❌ Please log out and log back in first, then try again";
      } else {
        epMessage.textContent = "❌ " + (err.message || "Update failed");
      }
    }

    epSubmit.disabled = false;
  };
})();
// =====================================
// SITE STATUS OVERLAY
// =====================================
(function initSiteStatus() {
  const isFounder = () => localStorage.getItem('ns_user') === 'BabyFounder';

  const overlay = document.createElement('div');
  overlay.id = 'site-down-overlay';
  overlay.style.cssText = `
  position:fixed;inset:0;z-index:999999;
  background-color:#07060A;
  background-image:
    radial-gradient(ellipse 90% 55% at 50% -5%, rgba(255,215,0,0.07) 0%, transparent 65%),
    radial-gradient(ellipse 55% 40% at 90% 100%, rgba(255,215,0,0.04) 0%, transparent 60%),
    repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,215,0,0.022) 39px, rgba(255,215,0,0.022) 40px),
    repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,215,0,0.016) 39px, rgba(255,215,0,0.016) 40px);
  display:none;
  align-items:center;
  justify-content:center;
  overflow-y:auto;
  padding:20px 0;
  font-family:'EB Garamond',Georgia,serif;
  color:#FFD700;
`;
  overlay.innerHTML = `
  <div style="
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    gap:32px;
    width:95%;
    max-width:900px;
    flex-wrap:wrap;
  ">
    <!-- Left: Down message -->
    <div style="
      background:linear-gradient(160deg,#141219,#0D0B12);
      border:1px solid rgba(184,150,12,0.45);
      border-radius:24px;
      padding:52px 44px 48px;
      text-align:center;
      flex:1;
      min-width:260px;
      max-width:420px;
      box-shadow:0 40px 100px rgba(0,0,0,0.85);
      position:relative;
      overflow:hidden;
    ">
      <div style="position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(255,215,0,0.3),transparent);"></div>
      <img src="https://iili.io/BxXnFTX.png" style="height:100px;object-fit:contain;filter:drop-shadow(0 0 12px rgba(255,215,0,0.35));margin-bottom:20px;display:block;margin-left:auto;margin-right:auto;"/>
      <div style="font-family:'Cinzel Decorative',serif;font-size:clamp(18px,3vw,26px);font-weight:900;letter-spacing:4px;color:#FFD700;text-shadow:0 0 40px rgba(255,215,0,0.28),0 2px 6px rgba(0,0,0,0.9);margin-bottom:28px;">NoteShelf</div>
      <div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,rgba(255,215,0,0.1),rgba(255,215,0,0.03));border:1px solid rgba(184,150,12,0.5);display:flex;align-items:center;justify-content:center;margin:0 auto 24px;box-shadow:0 0 24px rgba(255,215,0,0.1);">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFD700" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      </div>
      <div style="font-family:'Cinzel',serif;font-size:10px;letter-spacing:5px;color:#B8960C;opacity:0.42;margin-bottom:20px;">◆ &nbsp;━━━&nbsp; ◆ &nbsp;━━━&nbsp; ◆</div>
      <div style="font-family:'Cinzel',serif;font-size:clamp(12px,2vw,15px);font-weight:600;letter-spacing:1.2px;color:#F0E6CA;line-height:1.75;margin-bottom:10px;">NoteShelf is temporarily unavailable.</div>
      <div style="font-family:'EB Garamond',serif;font-style:italic;font-size:15px;color:#B8960C;opacity:0.75;margin-bottom:32px;">Please try again in a few minutes.</div>
      <div style="display:flex;justify-content:center;gap:6px;">
        <span style="width:5px;height:5px;border-radius:50%;background:#B8960C;opacity:0.4;animation:dotBounce 1.4s ease infinite;display:inline-block;"></span>
        <span style="width:5px;height:5px;border-radius:50%;background:#B8960C;opacity:0.4;animation:dotBounce 1.4s ease 0.22s infinite;display:inline-block;"></span>
        <span style="width:5px;height:5px;border-radius:50%;background:#B8960C;opacity:0.4;animation:dotBounce 1.4s ease 0.44s infinite;display:inline-block;"></span>
      </div>
    </div>

    <!-- Right: Snake game -->
    <div style="
      background:linear-gradient(160deg,#141219,#0D0B12);
      border:1px solid rgba(184,150,12,0.35);
      border-radius:20px;
      padding:20px 24px 24px;
      text-align:center;
      flex:1;
      min-width:260px;
      max-width:380px;
      box-shadow:0 20px 60px rgba(0,0,0,0.7);
      position:relative;
    ">
      <div style="position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(255,215,0,0.2),transparent);"></div>
      <div style="font-family:'Cinzel',serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#B8960C;opacity:0.7;margin-bottom:12px;">While you wait</div>
      <canvas id="snake-canvas" width="300" height="300" style="border:1px solid rgba(184,150,12,0.3);border-radius:8px;display:block;margin:0 auto 14px;background:#07060A;"></canvas>
      <div style="display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:12px;">
        <div style="font-family:'Cinzel',serif;font-size:11px;letter-spacing:1px;color:#B8960C;">SCORE</div>
        <div id="snake-score" style="font-family:'Cinzel Decorative',serif;font-size:20px;color:#FFD700;min-width:40px;">0</div>
        <div style="font-family:'Cinzel',serif;font-size:11px;letter-spacing:1px;color:#B8960C;">BEST</div>
        <div id="snake-best" style="font-family:'Cinzel Decorative',serif;font-size:20px;color:#FFD700;min-width:40px;">0</div>
      </div>
      <button id="snake-start-btn" style="
        padding:9px 28px;
        border-radius:30px;
        border:1px solid rgba(184,150,12,0.55);
        background:rgba(255,215,0,0.08);
        color:#FFD700;
        font-family:'Cinzel',serif;
        font-size:11px;
        letter-spacing:2px;
        text-transform:uppercase;
        cursor:pointer;
        margin-bottom:10px;
      ">Start Game</button>
      <div style="font-family:'EB Garamond',serif;font-style:italic;font-size:12px;color:#B8960C;opacity:0.55;">Arrow keys or WASD to move</div>
      <div style="display:flex;justify-content:center;gap:4px;margin-top:14px;">
        <button id="snake-up" style="width:38px;height:38px;border-radius:8px;border:1px solid rgba(184,150,12,0.3);background:rgba(255,215,0,0.05);color:#B8960C;font-size:14px;cursor:pointer;">▲</button>
      </div>
      <div style="display:flex;justify-content:center;gap:4px;margin-top:4px;">
        <button id="snake-left"  style="width:38px;height:38px;border-radius:8px;border:1px solid rgba(184,150,12,0.3);background:rgba(255,215,0,0.05);color:#B8960C;font-size:14px;cursor:pointer;">◀</button>
        <button id="snake-down"  style="width:38px;height:38px;border-radius:8px;border:1px solid rgba(184,150,12,0.3);background:rgba(255,215,0,0.05);color:#B8960C;font-size:14px;cursor:pointer;">▼</button>
        <button id="snake-right" style="width:38px;height:38px;border-radius:8px;border:1px solid rgba(184,150,12,0.3);background:rgba(255,215,0,0.05);color:#B8960C;font-size:14px;cursor:pointer;">▶</button>
      </div>
    </div>
  </div>
`;
  document.body.appendChild(overlay);

  // ── Audio Engine ──
  let audioCtx = null;

  function getAudio() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }

  function playTone(freq, type, duration, volume, delay) {
    try {
      const ctx  = getAudio();
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type      = type || 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + (delay || 0));
      gain.gain.setValueAtTime(volume || 0.18, ctx.currentTime + (delay || 0));
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (delay || 0) + duration);
      osc.start(ctx.currentTime + (delay || 0));
      osc.stop(ctx.currentTime  + (delay || 0) + duration);
    } catch(_) {}
  }

  function soundEat() {
    // Bright gold chime
    playTone(880, 'sine',     0.12, 0.15);
    playTone(1320, 'sine',    0.10, 0.10, 0.06);
  }

  function soundMove() {
    // Very subtle tick
    playTone(200, 'square', 0.04, 0.04);
  }

  function soundDie() {
    // Descending thud
    playTone(320, 'sawtooth', 0.15, 0.18);
    playTone(200, 'sawtooth', 0.18, 0.18, 0.12);
    playTone(100, 'sawtooth', 0.25, 0.18, 0.26);
  }

  function soundStart() {
    // Ascending fanfare
    playTone(440,  'sine', 0.10, 0.12);
    playTone(550,  'sine', 0.10, 0.12, 0.10);
    playTone(660,  'sine', 0.10, 0.12, 0.20);
    playTone(880,  'sine', 0.14, 0.14, 0.32);
  }

  function soundNewBest() {
    // Triumphant jingle
    playTone(660,  'sine', 0.10, 0.15);
    playTone(880,  'sine', 0.10, 0.15, 0.10);
    playTone(1100, 'sine', 0.10, 0.15, 0.20);
    playTone(1320, 'sine', 0.16, 0.18, 0.32);
  }

  // ── Snake Game ──
  function initSnake() {
    const canvas   = document.getElementById('snake-canvas');
    const ctx      = canvas.getContext('2d');
    const scoreEl  = document.getElementById('snake-score');
    const bestEl   = document.getElementById('snake-best');
    const startBtn = document.getElementById('snake-start-btn');
    const GRID     = 15;
    const COLS     = Math.floor(canvas.width  / GRID);
    const ROWS     = Math.floor(canvas.height / GRID);
    const GOLD     = '#FFD700';
    const GOLD_DIM = '#B8960C';
    const FOOD_COL = '#ff6b6b';

    let snake, dir, nextDir, food, score, best, loop, running;

    best = parseInt(localStorage.getItem('ns_snake_best') || '0');
    bestEl.textContent = best;

    function reset() {
      snake   = [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }];
      dir     = { x: 1, y: 0 };
      nextDir = { x: 1, y: 0 };
      score   = 0;
      scoreEl.textContent = 0;
      placeFood();
    }

    function placeFood() {
      let pos;
      do {
        pos = { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) };
      } while (snake.some(s => s.x === pos.x && s.y === pos.y));
      food = pos;
    }

    function drawRect(x, y, color, radius) {
      radius = radius || 3;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.roundRect(x * GRID + 1, y * GRID + 1, GRID - 2, GRID - 2, radius);
      ctx.fill();
    }

    function draw() {
      ctx.fillStyle = '#07060A';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(184,150,12,0.08)';
      for (let x = 0; x < COLS; x++) {
        for (let y = 0; y < ROWS; y++) {
          ctx.beginPath();
          ctx.arc(x * GRID + GRID / 2, y * GRID + GRID / 2, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.shadowColor = FOOD_COL;
      ctx.shadowBlur  = 8;
      drawRect(food.x, food.y, FOOD_COL, 6);
      ctx.shadowBlur  = 0;

      snake.forEach((seg, i) => {
        const isHead = i === 0;
        ctx.shadowColor = isHead ? GOLD : 'transparent';
        ctx.shadowBlur  = isHead ? 10 : 0;
        drawRect(seg.x, seg.y, isHead ? GOLD : GOLD_DIM, isHead ? 5 : 3);
        ctx.shadowBlur  = 0;
      });
    }

    function drawMessage(title, sub) {
      ctx.fillStyle = 'rgba(7,6,10,0.82)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = GOLD;
      ctx.font = "bold 18px 'Cinzel', serif";
      ctx.textAlign = 'center';
      ctx.fillText(title, canvas.width / 2, canvas.height / 2 - 16);
      ctx.fillStyle = GOLD_DIM;
      ctx.font = "13px 'EB Garamond', serif";
      ctx.fillText(sub, canvas.width / 2, canvas.height / 2 + 12);
      ctx.textAlign = 'left';
    }

    function tick() {
      dir = { ...nextDir };
      const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

      if (head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS) return gameOver();
      if (snake.some(s => s.x === head.x && s.y === head.y)) return gameOver();

      snake.unshift(head);

      if (head.x === food.x && head.y === food.y) {
        score++;
        scoreEl.textContent = score;
        if (score > best) {
          best = score;
          bestEl.textContent = best;
          localStorage.setItem('ns_snake_best', best);
          soundNewBest();
        } else {
          soundEat();
        }
        placeFood();
      } else {
        snake.pop();
        soundMove();
      }

      draw();
    }

    function gameOver() {
      clearInterval(loop);
      running = false;
      soundDie();
      draw();
      drawMessage('Game Over', 'Score: ' + score + ' — Press Start to retry');
      startBtn.textContent = 'Play Again';
    }

    function startGame() {
      if (running) return;
      running = true;
      reset();
      draw();
      soundStart();
      startBtn.textContent = 'Restart';
      clearInterval(loop);
      loop = setInterval(tick, 120);
    }

    startBtn.onclick = () => {
      clearInterval(loop);
      running = false;
      startGame();
    };

    document.addEventListener('keydown', e => {
      if (!running) return;
      const map = {
        ArrowUp:    { x:  0, y: -1 }, w: { x:  0, y: -1 }, W: { x:  0, y: -1 },
        ArrowDown:  { x:  0, y:  1 }, s: { x:  0, y:  1 }, S: { x:  0, y:  1 },
        ArrowLeft:  { x: -1, y:  0 }, a: { x: -1, y:  0 }, A: { x: -1, y:  0 },
        ArrowRight: { x:  1, y:  0 }, d: { x:  1, y:  0 }, D: { x:  1, y:  0 },
      };
      const newDir = map[e.key];
      if (!newDir) return;
      if (newDir.x === -dir.x && newDir.y === -dir.y) return;
      if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key)) e.preventDefault();
      nextDir = newDir;
    });

    document.getElementById('snake-up').onclick    = () => { if (dir.y !==  1) nextDir = { x:  0, y: -1 }; };
    document.getElementById('snake-down').onclick  = () => { if (dir.y !== -1) nextDir = { x:  0, y:  1 }; };
    document.getElementById('snake-left').onclick  = () => { if (dir.x !==  1) nextDir = { x: -1, y:  0 }; };
    document.getElementById('snake-right').onclick = () => { if (dir.x !== -1) nextDir = { x:  1, y:  0 }; };

    drawMessage('NoteShelf Snake', 'Press Start to play');
  }

  function updateOverlay(isDown) {
    if (isFounder()) {
      overlay.style.display = 'none';
      return;
    }
    overlay.style.display = isDown ? 'flex' : 'none';
    if (isDown) initSnake();
  }

  db.ref("siteStatus/isDown").on("value", snap => {
    updateOverlay(snap.val() === true);
  });

  window.addEventListener("ns_login", () => {
    db.ref("siteStatus/isDown").once("value").then(snap => {
      updateOverlay(snap.val() === true);
    });
  });

  window.addEventListener("ns_logout", () => {
    db.ref("siteStatus/isDown").once("value").then(snap => {
      updateOverlay(snap.val() === true);
    });
  });
})();
document.addEventListener('DOMContentLoaded', () => {
  const sequence = ['q','p','w','o','e','i','r','u','t','y'];
  let index = 0;
  let timer = null;

  document.addEventListener('keydown', e => {
    if (e.key.toLowerCase() === sequence[index]) {
      index++;
      clearTimeout(timer);
      timer = setTimeout(() => { index = 0; }, 2000);

      if (index === sequence.length) {
        index = 0;
        clearTimeout(timer);
        if (!me()) {
          const authPopup = document.getElementById('auth-popup');
          const authTitle = document.getElementById('auth-title');
          if (authPopup && authTitle) {
            authTitle.textContent = 'Log In';
            authPopup.style.display = 'flex';
          }
        }
      }
    } else {
      index = 0;
      clearTimeout(timer);
    }
  });
});
