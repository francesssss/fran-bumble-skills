// APP LOGIC
// Renders ROADMAP (from data.js) and handles click -> panel -> status tracking.
// Status is stored in localStorage under the key below, per node id.

const STORAGE_KEY = "ownership-grid-progress-v1";

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

let progress = loadProgress();
let activeNodeId = null;

function allNodes() {
  return ROADMAP.sections.flatMap((s) => s.nodes);
}

function render() {
  document.getElementById("page-title").textContent = ROADMAP.title;
  document.getElementById("page-subtitle").textContent = ROADMAP.subtitle;
  document.getElementById("page-intro").textContent = ROADMAP.intro;

  const root = document.getElementById("roadmap-root");
  root.innerHTML = "";

  ROADMAP.sections.forEach((section) => {
    const sectionEl = document.createElement("section");
    sectionEl.className = "section";

    sectionEl.innerHTML = `
      <div class="milestone-dot"></div>
      <div class="section-head">
        <div class="section-number">${section.number}</div>
        <h2>${section.title}</h2>
        ${section.ownership ? `<div class="ownership-badge">${section.ownership}</div>` : ""}
        <p class="section-blurb">${section.blurb}</p>
      </div>
      <div class="node-grid"></div>
    `;

    const grid = sectionEl.querySelector(".node-grid");
    section.nodes.forEach((node) => {
      const status = progress[node.id] || "not-started";
      const nodeEl = document.createElement("button");
      nodeEl.className = "node" + (node.level === "optional" ? " optional" : "");
      nodeEl.dataset.status = status;
      nodeEl.dataset.nodeId = node.id;
      nodeEl.innerHTML = `<span class="status-dot"></span>${node.title}`;
      nodeEl.addEventListener("click", () => openPanel(node));
      grid.appendChild(nodeEl);
    });

    root.appendChild(sectionEl);
  });

  updateProgressBar();
}

function updateProgressBar() {
  const nodes = allNodes();
  const done = nodes.filter((n) => progress[n.id] === "done").length;
  const pct = nodes.length ? Math.round((done / nodes.length) * 100) : 0;
  document.getElementById("progress-text").textContent = `${done} of ${nodes.length} topics done`;
  document.getElementById("progress-pct").textContent = `${pct}%`;
  document.getElementById("progress-fill").style.width = `${pct}%`;
}

function refreshNodeEl(nodeId) {
  const el = document.querySelector(`.node[data-node-id="${nodeId}"]`);
  if (el) el.dataset.status = progress[nodeId] || "not-started";
}

function openPanel(node) {
  activeNodeId = node.id;
  document.getElementById("panel-level").textContent = node.level;
  document.getElementById("panel-title").textContent = node.title;
  document.getElementById("panel-desc").textContent = node.description;

  const resList = document.getElementById("panel-resources");
  resList.innerHTML = "";
  if (node.resources && node.resources.length) {
    node.resources.forEach((r) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${r.url}" target="_blank" rel="noopener">${r.label} ↗</a>`;
      resList.appendChild(li);
    });
  } else {
    resList.innerHTML = `<li class="no-resources">No linked resources yet — add your own in data.js.</li>`;
  }

  updateStatusButtons(progress[node.id] || "not-started");

  document.getElementById("panel").classList.add("open");
  document.getElementById("overlay").classList.add("open");
}

function closePanel() {
  document.getElementById("panel").classList.remove("open");
  document.getElementById("overlay").classList.remove("open");
  activeNodeId = null;
}

function updateStatusButtons(current) {
  document.querySelectorAll(".status-btn").forEach((btn) => {
    btn.classList.remove("active-not-started", "active-learning", "active-done");
    if (btn.dataset.status === current) {
      btn.classList.add(`active-${current}`);
    }
  });
}

function setStatus(status) {
  if (!activeNodeId) return;
  progress[activeNodeId] = status;
  saveProgress(progress);
  updateStatusButtons(status);
  refreshNodeEl(activeNodeId);
  updateProgressBar();
}

document.addEventListener("DOMContentLoaded", () => {
  render();

  document.getElementById("panel-close").addEventListener("click", closePanel);
  document.getElementById("overlay").addEventListener("click", closePanel);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePanel();
  });

  document.querySelectorAll(".status-btn").forEach((btn) => {
    btn.addEventListener("click", () => setStatus(btn.dataset.status));
  });
});
