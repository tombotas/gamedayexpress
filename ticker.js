(function() {

  // ── CONFIG ──────────────────────────────────────────────────────────────
  const RSS2JSON = 'https://api.rss2json.com/v1/api.json?count=8&rss_url=';

  // Sport-labelled RSS feeds pulled in parallel
  const FEEDS = [
    { emoji: '⚾', label: 'MLB',    url: 'https://www.espn.com/espn/rss/mlb/news'          },
    { emoji: '🏈', label: 'NFL',    url: 'https://www.espn.com/espn/rss/nfl/news'          },
    { emoji: '🏀', label: 'NBA',    url: 'https://www.espn.com/espn/rss/nba/news'          },
    { emoji: '🏒', label: 'NHL',    url: 'https://www.espn.com/espn/rss/nhl/news'          },
    { emoji: '🎓', label: 'NCAAF',  url: 'https://www.espn.com/espn/rss/ncf/news'          },
    { emoji: '🏀', label: 'NCAAB',  url: 'https://www.espn.com/espn/rss/ncb/news'          },
    { emoji: '⛳', label: 'Golf',   url: 'https://www.espn.com/espn/rss/golf/news'         },
    { emoji: '⚽', label: 'Soccer', url: 'https://www.espn.com/espn/rss/soccer/news'       },
    { emoji: '🏎', label: 'F1',     url: 'https://www.espn.com/espn/rss/rpm/news'          },
    { emoji: '📰', label: 'MLB',    url: 'https://www.mlbtraderumors.com/feed'             },
  ];

  // TheSportsDB league IDs for "today's events" — free tier, no key needed
  const TSDB_LEAGUES = [
    { id: '4391', emoji: '🏈', name: 'NFL'  },
    { id: '4387', emoji: '🏀', name: 'NBA'  },
    { id: '4424', emoji: '⚾', name: 'MLB'  },
    { id: '4380', emoji: '🏒', name: 'NHL'  },
    { id: '4346', emoji: '⚽', name: 'MLS'  },
  ];

  const FALLBACK = [
    { title: '⚾ MLB — Latest trade rumors & roster moves', link: 'https://www.mlbtraderumors.com' },
    { title: '🏀 NBA — Playoff race updates',              link: 'https://www.espn.com/nba/'      },
    { title: '🏒 NHL — Stretch run standings',             link: 'https://www.espn.com/nhl/'      },
    { title: '🏈 NFL — Draft news & free agency',         link: 'https://www.espn.com/nfl/'      },
    { title: '⛳ PGA Tour — Leaderboard updates',          link: 'https://www.espn.com/golf/'     },
    { title: '🏎 F1 — Race weekend news',                 link: 'https://www.espn.com/f1/'       },
    { title: '⚽ MLS — Match results & standings',         link: 'https://www.espn.com/soccer/'   },
    { title: '🎓 College sports — Recruiting & transfers', link: 'https://www.espn.com/college-sports/' },
  ];

  // ── HELPERS ─────────────────────────────────────────────────────────────
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function buildTrack(items) {
    const track = document.getElementById('ticker-track');
    if (!track || !items.length) return;
    const doubled = [...items, ...items];
    track.innerHTML = doubled.map(item =>
      `<span class="ticker-sep">◆</span><a href="${item.link}" target="_blank" rel="noopener">${item.title}</a>`
    ).join('');
    // Adjust speed based on content length — more items = faster scroll
    const speed = Math.max(40, Math.min(90, items.length * 4));
    document.getElementById('ticker-track').style.animationDuration = speed + 's';
  }

  // ── FETCH SINGLE RSS FEED ────────────────────────────────────────────────
  function fetchFeed(feedCfg) {
    const apiUrl = RSS2JSON + encodeURIComponent(feedCfg.url);
    return fetch(apiUrl)
      .then(r => r.json())
      .then(data => {
        if (data.status === 'ok' && data.items && data.items.length) {
          return data.items.slice(0, 3).map(item => ({
            title: `${feedCfg.emoji} ${feedCfg.label}: ${item.title.substring(0, 80)}${item.title.length > 80 ? '…' : ''}`,
            link: item.link
          }));
        }
        return [];
      })
      .catch(() => []);
  }

  // ── FETCH TODAY'S EVENTS FROM SPORTSDB ──────────────────────────────────
  function fetchTodayEvents() {
    const today = new Date().toISOString().split('T')[0];
    const calls = TSDB_LEAGUES.map(league => {
      const url = `https://www.thesportsdb.com/api/v1/json/3/eventsday.php?d=${today}&l=${league.id}`;
      return fetch(url)
        .then(r => r.json())
        .then(data => {
          if (!data.events) return [];
          return data.events.slice(0, 3).map(ev => {
            const time = ev.strTime ? ev.strTime.substring(0, 5) + ' ET' : 'Today';
            return {
              title: `${league.emoji} ${league.name}: ${ev.strHomeTeam} vs ${ev.strAwayTeam} — ${time}`,
              link: `https://www.thesportsdb.com/event/${ev.idEvent}`
            };
          });
        })
        .catch(() => []);
    });
    return Promise.all(calls).then(results => results.flat());
  }

  // ── MAIN LOADER ──────────────────────────────────────────────────────────
  function loadTicker() {
    const feedPromises = FEEDS.map(f => fetchFeed(f));
    const eventsPromise = fetchTodayEvents();

    Promise.all([...feedPromises, eventsPromise])
      .then(results => {
        const events  = results[results.length - 1];   // last result = events
        const stories = results.slice(0, -1).flat();    // everything else = RSS stories

        // Interleave: start with today's events (most useful), then stories
        let combined = [];
        if (events.length)  combined = combined.concat(events);
        if (stories.length) combined = combined.concat(shuffle(stories));

        if (combined.length >= 4) {
          buildTrack(combined);
        } else {
          buildTrack(FALLBACK);
        }
      })
      .catch(() => buildTrack(FALLBACK));
  }

  document.addEventListener('DOMContentLoaded', loadTicker);
})();
