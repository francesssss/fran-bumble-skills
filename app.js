// APP LOGIC — renders GRID (from data.js), handles checkboxes + reset.
// Checked state saved in localStorage per task id.

const STORAGE_KEY = "ops-grid-checked-v1";

function loadChecked() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch (e) { return {}; }
}
function saveChecked(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let checked = loadChecked();

function allTasks() {
  return GRID.cards.flatMap((c) => c.tasks);
}

function render() {
  document.getElementById("page-title").textContent = GRID.title;
  document.getElementById("page-subtitle").textContent = GRID.subtitle;
  document.getElementById("page-intro").textContent = GRID.intro;

  // quick links
  const ql = document.getElementById("quicklinks");
  ql.innerHTML = "";
  GRID.quickLinks.forEach((l) => {
    const a = document.createElement("a");
    a.className = "chip";
    a.href = l.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = l.label;
    ql.appendChild(a);
  });

  // cards
  const root = document.getElementById("grid-root");
  root.innerHTML = "";
  GRID.cards.forEach((card) => {
    const el = document.createElement("section");
    el.className = "card accent-" + (card.accent || "muted");

    const linksHtml = card.links && card.links.length
      ? `<div class="card-links">${card.links
          .map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`)
          .join("")}</div>`
      : "";

    el.innerHTML = `
      <div class="card-cadence"><span>${card.cadence}</span><span class="time">${card.time}</span></div>
      <h3>${card.title}</h3>
      <ul class="tasks">
        ${card.tasks
          .map(
            (t) => `
          <li class="task ${checked[t.id] ? "checked" : ""}" data-task-id="${t.id}">
            <span class="checkbox"></span>
            <span class="task-text">${t.text}</span>
          </li>`
          )
          .join("")}
      </ul>
      ${linksHtml}
    `;
    root.appendChild(el);
  });

  root.querySelectorAll(".task").forEach((taskEl) => {
    taskEl.addEventListener("click", () => toggleTask(taskEl.dataset.taskId, taskEl));
  });

  updateProgress();
}

function toggleTask(id, el) {
  checked[id] = !checked[id];
  saveChecked(checked);
  el.classList.toggle("checked", checked[id]);
  updateProgress();
}

function updateProgress() {
  const tasks = allTasks();
  const done = tasks.filter((t) => checked[t.id]).length;
  document.getElementById("day-progress").innerHTML =
    `<strong>${done}</strong> of ${tasks.length} tasks done`;
}

function resetDay() {
  checked = {};
  saveChecked(checked);
  render();
}

document.addEventListener("DOMContentLoaded", () => {
  render();
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("Clear all ticks for a fresh day?")) resetDay();
  });
});
