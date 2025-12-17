if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
  document.body.innerHTML =
    "<h2>❌ Diese Website ist nur für PC gedacht</h2>";
}

let totemKey = null;
let waitingForKey = false;

let startTime;
let active = false;

document.getElementById("start").onclick = () => {
  document.getElementById("status").innerText = "Bereit...";
  document.getElementById("time").innerText = "";
  active = false;

  const delay = Math.random() * 2000 + 1000; // 1–3 Sekunden

  setTimeout(() => {
    document.getElementById("status").innerText = "TOTEM POPPED! DRÜCKE DEINE TASTE!";
    startTime = Date.now();
    active = true;
  }, delay);
};

document.addEventListener("keydown", () => {
if (!active || e.key !== totemKey) return;


  const reaction = Date.now() - startTime;
  document.getElementById("time").innerText =
    "Reaktionszeit: " + reaction + " ms";

  document.getElementById("status").innerText = "Training beendet";
  active = false;
});

document.getElementById("bind").onclick = () => {
  waitingForKey = true;
  document.getElementById("bindKey").innerText = "Drücke eine Taste...";
};

document.addEventListener("keydown", (e) => {
  if (waitingForKey) {
    totemKey = e.key;
    waitingForKey = false;
    document.getElementById("bindKey").innerText =
      "Totem-Taste: " + totemKey;
  }
});
