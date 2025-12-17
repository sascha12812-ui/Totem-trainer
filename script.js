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
  if (!active) return;

  const reaction = Date.now() - startTime;
  document.getElementById("time").innerText =
    "Reaktionszeit: " + reaction + " ms";

  document.getElementById("status").innerText = "Training beendet";
  active = false;
});
