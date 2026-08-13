const toys = [
  {
    acc: "FT–001",
    name: "Cursorling",
    mark: "cursorling",
    dare: "A creature that lives near your mouse and judges your velocity.",
    live: "https://cursorling.vercel.app",
    git: "https://github.com/syedahmad0786/cursorling",
  },
  {
    acc: "FT–002",
    name: "THE BUTTON.",
    mark: "please-press",
    dare: "Press it. Then keep pressing. The museum is watching.",
    live: "https://please-press.vercel.app",
    git: "https://github.com/syedahmad0786/please-press",
  },
  {
    acc: "FT–003",
    name: "Plot Armor",
    mark: "plot-armor",
    dare: "Draw a cursed wholesome card. Screenshot it. Send it anyway.",
    live: "https://plot-armor-livid.vercel.app",
    git: "https://github.com/syedahmad0786/plot-armor",
  },
  {
    acc: "FT–004",
    name: "Vapor Market",
    mark: "vapor-market",
    dare: "Type nonsense. Get a polished product page that sells nothing.",
    live: "https://vapor-market.vercel.app",
    git: "https://github.com/syedahmad0786/vapor-market",
  },
  {
    acc: "FT–005",
    name: "Grandiose",
    mark: "grandiose",
    dare: "Saving a file should feel like a film premiere.",
    live: "https://grandiose-seven.vercel.app",
    git: "https://github.com/syedahmad0786/grandiose",
  },
  {
    acc: "FT–006",
    name: "Specter",
    mark: "term-specter",
    dare: "A ghost in your terminal. Rubber-duck it until it gets weird.",
    live: "https://term-specter.vercel.app",
    extra: "npx github:syedahmad0786/term-specter",
    git: "https://github.com/syedahmad0786/term-specter",
  },
  {
    acc: "FT–007",
    name: "Chimemoji",
    mark: "chimemoji",
    dare: "Fuse two emoji. Receive a creature, a name, and a myth.",
    live: "https://chimemoji.vercel.app",
    git: "https://github.com/syedahmad0786/chimemoji",
  },
  {
    acc: "FT–008",
    name: "Mild Inconvenience",
    mark: "mild-inconvenience",
    dare: "A public API of beautifully pointless measurements.",
    live: "https://mild-inconvenience.vercel.app",
    git: "https://github.com/syedahmad0786/mild-inconvenience",
  },
  {
    acc: "FT–009",
    name: "Peel Pack",
    mark: "peel-pack",
    dare: "Scratch the foil. Peel the stickers. Receive bad advice.",
    live: "https://peel-pack.vercel.app",
    git: "https://github.com/syedahmad0786/peel-pack",
  },
  {
    acc: "FT–010",
    name: "Still Here",
    mark: "still-here",
    dare: "A live count of people who are here instead of working.",
    live: "https://still-here-psi.vercel.app",
    git: "https://github.com/syedahmad0786/still-here",
  },
  {
    acc: "FT–011",
    name: "Rake",
    mark: "rake-garden",
    dare: "There is no score. Drag the sand. Keep the URL.",
    live: "https://rake-garden.vercel.app",
    git: "https://github.com/syedahmad0786/rake-garden",
  },
  {
    acc: "FT–012",
    name: "The Elsewhere",
    mark: "the-elsewhere",
    dare: "Take me somewhere useless. A portal plus three original one-joke rooms.",
    live: "https://the-elsewhere.vercel.app",
    git: "https://github.com/syedahmad0786/the-elsewhere",
  },
  {
    acc: "FT–013",
    name: "Elsewho",
    mark: "elsewho",
    dare: "Paste a name. Receive eight other lives, printed.",
    live: "https://elsewho.vercel.app",
    git: "https://github.com/syedahmad0786/elsewho",
  },
  {
    acc: "FT–014",
    name: "Jigmoji",
    mark: "jigmoji",
    dare: "An emoji that lip-syncs and dances. Export the clip.",
    live: "https://jigmoji.vercel.app",
    git: "https://github.com/syedahmad0786/jigmoji",
  },
  {
    acc: "FT–015",
    name: "Mood Pointer",
    mark: "mood-pointer",
    dare: "The cursor itself is the character. No pet.",
    live: "https://mood-pointer.vercel.app",
    git: "https://github.com/syedahmad0786/mood-pointer",
  },
  {
    acc: "FT–016",
    name: "Pixel Penance",
    mark: "pixel-penance",
    dare: "One pixel every three minutes. The canvas remembers.",
    live: "https://pixel-penance.vercel.app",
    git: "https://github.com/syedahmad0786/pixel-penance",
  },
  {
    acc: "FT–017",
    name: "Pet the Void",
    mark: "pet-the-void",
    dare: "A hole in the page. Hold it. It purrs. It gets larger.",
    live: "https://pet-the-void.vercel.app",
    git: "https://github.com/syedahmad0786/pet-the-void",
  },
  {
    acc: "FT–018",
    name: "Hunted 404",
    mark: "hunted-404",
    dare: "A 404 that hunts the cursor. Clicks do not work.",
    live: "https://hunted-404.vercel.app",
    git: "https://github.com/syedahmad0786/hunted-404",
  },
];

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const shelf = document.querySelector("#shelf");

for (const t of toys) {
  const li = document.createElement("li");
  li.className = "card";
  li.innerHTML = `
    <div class="card-top">
      <p class="acc">${t.acc}</p>
      <img class="icon" src="./marks/${t.mark}.svg" width="40" height="40" alt="" />
    </div>
    <h2>${t.name}</h2>
    <p>${t.dare}${t.extra ? `<br><code>${t.extra}</code>` : ""}</p>
    <div class="links">
      <a href="${t.live}">open</a>
      <a href="${t.git}">source</a>
    </div>`;
  if (!reduce) {
    li.addEventListener("pointermove", (e) => {
      const r = li.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      li.style.setProperty("--rx", `${(6 - py * 10).toFixed(2)}deg`);
      li.style.setProperty("--ry", `${(px * 12).toFixed(2)}deg`);
    });
    li.addEventListener("pointerleave", () => {
      li.style.setProperty("--rx", "4deg");
      li.style.setProperty("--ry", "0deg");
    });
  }
  shelf.append(li);
}
