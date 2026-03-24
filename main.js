  const d = new Date();
  document.getElementById('ticker-date').textContent =
    'GameDay Express — ' + d.toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'});

  const searchEl = document.getElementById('search');
  const clearBtn = document.getElementById('clear-btn');

  function runFilter(q) {
    q = q.toLowerCase().trim();
    let anyVisible = false;
    document.querySelectorAll('.card').forEach(card => {
      const tags  = (card.dataset.tags||''). toLowerCase();
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      card.querySelectorAll('.link-item').forEach(item => {
        const a = item.querySelector('a');
        if (!a) return;
        const raw = a.textContent;
        if (!q) { a.innerHTML = raw; item.style.display = ''; }
        else if (raw.toLowerCase().includes(q)) {
          a.innerHTML = raw.replace(new RegExp(q,'gi'), m=>`<span class="highlight">${m}</span>`);
          item.style.display = '';
        } else { a.innerHTML = raw; item.style.display = 'none'; }
      });
      const anyLink = !q || Array.from(card.querySelectorAll('.link-item')).some(i=>i.style.display!=='none');
      const matchCard = !q || tags.includes(q) || title.includes(q);
      const show = anyLink || matchCard;
      card.style.display = show ? '' : 'none';
      if (show) anyVisible = true;
    });
    document.getElementById('no-results').style.display = anyVisible ? 'none' : 'block';
  }

  searchEl.addEventListener('input', ()=>runFilter(searchEl.value));
  clearBtn.addEventListener('click', ()=>{ searchEl.value=''; runFilter(''); });

  function filterChip(el, tag) {
    document.querySelectorAll('.feat-chip').forEach(c=>c.classList.remove('active'));
    el.classList.add('active');
    runFilter(tag);
  }

  // Scroll to top button
  window.addEventListener('scroll', () => {
    document.getElementById('scroll-top').style.display = window.scrollY > 400 ? 'block' : 'none';
  });

  // ── PERSONALIZED QUICK HITS ──────────────────────────────
  const PINS_KEY = 'gde_pins_v1';

  function loadPins() {
    try { return JSON.parse(localStorage.getItem(PINS_KEY)) || []; }
    catch { return []; }
  }
  function savePins(pins) {
    try { localStorage.setItem(PINS_KEY, JSON.stringify(pins)); } catch {}
  }

  function renderPins() {
    const pins = loadPins();
    const container = document.getElementById('quick-hits-links');
    const empty = document.getElementById('qh-empty');
    container.querySelectorAll('.pinned-chip').forEach(el => el.remove());
    if (pins.length === 0) {
      empty.style.display = 'inline-block';
    } else {
      empty.style.display = 'none';
      pins.forEach(pin => {
        const chip = document.createElement('span');
        chip.className = 'pinned-chip';
        chip.innerHTML = `<a href="${pin.url}" target="_blank">${pin.name}</a><button class="unpin-btn" title="Unpin" onclick="unpin('${pin.url}')">✕</button>`;
        container.appendChild(chip);
      });
    }
    // Update pin button states across all link items
    document.querySelectorAll('.pin-btn').forEach(btn => {
      const url = btn.dataset.url;
      const isPinned = pins.some(p => p.url === url);
      btn.textContent = isPinned ? '📌' : '📌';
      btn.classList.toggle('pinned', isPinned);
      btn.title = isPinned ? 'Unpin' : 'Pin to Quick Hits';
    });
  }

  function togglePin(url, name) {
    let pins = loadPins();
    const idx = pins.findIndex(p => p.url === url);
    if (idx > -1) {
      pins.splice(idx, 1);
    } else {
      pins.push({ url, name });
    }
    savePins(pins);
    renderPins();
  }

  function unpin(url) {
    let pins = loadPins().filter(p => p.url !== url);
    savePins(pins);
    renderPins();
  }

  // Add pin buttons to every link item
  document.querySelectorAll('.link-item').forEach(item => {
    const a = item.querySelector('a');
    if (!a) return;
    const btn = document.createElement('button');
    btn.className = 'pin-btn';
    btn.textContent = '📌';
    btn.title = 'Pin to Quick Hits';
    btn.dataset.url = a.href;
    btn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      togglePin(a.href, a.textContent.trim());
    };
    item.appendChild(btn);
  });

  // Initial render
  renderPins();
