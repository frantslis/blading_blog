// ============================================================
// Rendering logic. You shouldn't need to edit this file —
// add content in posts.js instead.
// ============================================================

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" }).toUpperCase();
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function typeLabel(type) {
  return { video: "VIDEO", photo: "PHOTO", text: "LOG" }[type] || type.toUpperCase();
}

function cardMediaHtml(post) {
  if (post.type === "video" && post.youtubeId) {
    return `
      <div class="card__media type-video">
        <img src="https://img.youtube.com/vi/${escapeHtml(post.youtubeId)}/hqdefault.jpg" alt="${escapeHtml(post.title)} thumbnail" loading="lazy">
        <span class="type-flag">VIDEO</span>
        <span class="timecode"><span class="rec-dot"></span>REC</span>
      </div>`;
  }
  if (post.type === "photo" && post.images.length) {
    return `
      <div class="card__media type-photo">
        <img src="${escapeHtml(post.images[0])}" alt="${escapeHtml(post.title)}" loading="lazy">
        <span class="type-flag">PHOTO</span>
      </div>`;
  }
  return `
    <div class="card__media type-text">
      <span class="type-flag">LOG</span>
    </div>`;
}

function renderHomepage() {
  const rack = document.getElementById("rack");
  const statTotal = document.getElementById("stat-total");
  const statLatest = document.getElementById("stat-latest");
  const statVideos = document.getElementById("stat-videos");

  if (!POSTS.length) {
    rack.innerHTML = `<div class="empty-state">NO ENTRIES YET // ADD YOUR FIRST SESSION IN posts.js</div>`;
    return;
  }

  const sorted = [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));

  if (statTotal) statTotal.textContent = String(sorted.length).padStart(3, "0");
  if (statLatest) statLatest.textContent = formatDate(sorted[0].date);
  if (statVideos) statVideos.textContent = String(sorted.filter(p => p.type === "video").length).padStart(3, "0");

  rack.innerHTML = sorted.map(post => `
    <a class="card" href="post.html?id=${encodeURIComponent(post.id)}">
      ${cardMediaHtml(post)}
      <div class="card__body">
        <h2 class="card__title">${escapeHtml(post.title)}</h2>
        <div class="card__meta">${formatDate(post.date)}${post.spot ? " // " + escapeHtml(post.spot) : ""}${post.category ? " // " + escapeHtml(post.category).toUpperCase() : ""}</div>
        ${post.trick ? `<span class="card__trick">${escapeHtml(post.trick)}</span>` : ""}
      </div>
    </a>
  `).join("");
}

function renderPost() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const post = POSTS.find(p => p.id === id);
  const container = document.getElementById("post-container");

  if (!post) {
    container.innerHTML = `<div class="empty-state">ENTRY NOT FOUND // <a href="index.html" style="color:var(--acid-lime)">BACK TO LOG</a></div>`;
    document.title = "Not found";
    return;
  }

  document.title = post.title;

  let mediaHtml = "";
  if (post.type === "video" && post.youtubeId) {
    mediaHtml = `
      <div class="post-media">
        <div class="video-frame">
          <iframe src="https://www.youtube.com/embed/${escapeHtml(post.youtubeId)}" title="${escapeHtml(post.title)}" allowfullscreen loading="lazy"></iframe>
        </div>
        <span class="timecode"><span class="rec-dot"></span>REC ${formatDate(post.date)}</span>
      </div>`;
  } else if (post.type === "photo" && post.images.length) {
    mediaHtml = `
      <div class="photo-strip">
        ${post.images.map(src => `<img src="${escapeHtml(src)}" alt="${escapeHtml(post.title)}" loading="lazy">`).join("")}
      </div>`;
  }

  const bodyHtml = post.body.map(p => `<p>${escapeHtml(p)}</p>`).join("");

  container.innerHTML = `
    <a class="post-back" href="index.html">&larr; BACK TO LOG</a>
    <h1 class="post-title">${escapeHtml(post.title)}</h1>
    <div class="post-meta">
      <span>${formatDate(post.date)}</span>
      ${post.spot ? `<span>SPOT: <strong>${escapeHtml(post.spot)}</strong></span>` : ""}
      ${post.category ? `<span>CATEGORY: <strong>${escapeHtml(post.category).toUpperCase()}</strong></span>` : ""}
      ${post.trick ? `<span>TRICK: <strong>${escapeHtml(post.trick)}</strong></span>` : ""}
      <span>TYPE: <strong>${typeLabel(post.type)}</strong></span>
    </div>
    ${mediaHtml}
    <div class="post-body">${bodyHtml}</div>
    <div class="post-footer">END OF ENTRY // ${escapeHtml(post.id)}</div>
  `;
}
