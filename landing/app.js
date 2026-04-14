const SITE_PASSWORD = "arielsagy";

function unlockSite(gateEl) {
  document.body.classList.remove("site-locked");
  if (gateEl) gateEl.remove();
}

function createPasswordGate() {
  const gate = document.createElement("div");
  gate.className = "password-gate";
  gate.innerHTML = `
    <div class="password-gate-card" role="dialog" aria-modal="true" aria-labelledby="gate-title">
      <p class="password-gate-eyebrow">Private preview</p>
      <h2 id="gate-title">Enter password to continue</h2>
      <p class="password-gate-text">
        This site is protected while Ocean Drops is in rollout mode.
      </p>
      <form id="password-gate-form" class="password-gate-form">
        <label class="password-gate-label" for="password-gate-input">Password</label>
        <input id="password-gate-input" class="password-gate-input" type="password" autocomplete="current-password" required />
        <p id="password-gate-error" class="password-gate-error" aria-live="polite"></p>
        <button type="submit" class="btn btn-primary password-gate-btn">Unlock site</button>
      </form>
    </div>
  `;
  return gate;
}

function initPasswordGate() {
  document.body.classList.add("site-locked");
  const gate = createPasswordGate();
  document.body.appendChild(gate);

  const form = gate.querySelector("#password-gate-form");
  const input = gate.querySelector("#password-gate-input");
  const errorEl = gate.querySelector("#password-gate-error");

  if (input) input.focus();
  if (!form || !input || !errorEl) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (input.value === SITE_PASSWORD) {
      unlockSite(gate);
      return;
    }

    errorEl.textContent = "Incorrect password. Please try again.";
    input.value = "";
    input.focus();
  });
}

function renderLatestRelease() {
  const host = document.getElementById("latest-release-card");
  const data = window.oceanDropsContent?.latestRelease;
  if (!host || !data) return;

  host.innerHTML = `
    <header class="release-head">
      <p class="release-version">${data.version}</p>
      <p class="release-date">${data.date}</p>
    </header>
    <p class="release-summary">${data.summary}</p>
    <h3>What's new</h3>
    <ul class="release-meta">
      ${data.highlights.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function renderUpdates() {
  const host = document.getElementById("updates-feed");
  const updates = window.oceanDropsContent?.updates;
  if (!host || !Array.isArray(updates)) return;

  host.innerHTML = updates
    .map(
      (entry) => `
      <article class="timeline-item">
        <header class="timeline-item-head">
          <p class="timeline-title">${entry.title}</p>
          <p class="timeline-date">${entry.date}</p>
        </header>
        <p>${entry.body}</p>
      </article>
    `
    )
    .join("");
}

function setFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString();
}

initPasswordGate();
renderLatestRelease();
renderUpdates();
setFooterYear();
