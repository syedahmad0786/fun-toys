const toys = [
  {
    acc: "FT–001",
    name: "Cursorling",
    dare: "A creature that lives near your mouse and judges your velocity.",
    live: "https://cursorling.vercel.app",
    git: "https://github.com/syedahmad0786/cursorling",
  },
  {
    acc: "FT–002",
    name: "THE BUTTON.",
    dare: "Press it. Then keep pressing. The museum is watching.",
    live: "https://please-press.vercel.app",
    git: "https://github.com/syedahmad0786/please-press",
  },
  {
    acc: "FT–003",
    name: "Plot Armor",
    dare: "Draw a cursed wholesome card. Screenshot it. Send it anyway.",
    live: "https://plot-armor-livid.vercel.app",
    git: "https://github.com/syedahmad0786/plot-armor",
  },
  {
    acc: "FT–004",
    name: "Vapor Market",
    dare: "Type nonsense. Get a polished product page that sells nothing.",
    live: "https://vapor-market.vercel.app",
    git: "https://github.com/syedahmad0786/vapor-market",
  },
  {
    acc: "FT–005",
    name: "Grandiose",
    dare: "Saving a file should feel like a film premiere.",
    live: "https://grandiose-seven.vercel.app",
    git: "https://github.com/syedahmad0786/grandiose",
  },
  {
    acc: "FT–006",
    name: "Specter",
    dare: "A ghost in your terminal. Rubber-duck it until it gets weird.",
    live: "https://github.com/syedahmad0786/term-specter",
    extra: "npx github:syedahmad0786/term-specter",
    git: "https://github.com/syedahmad0786/term-specter",
  },
  {
    acc: "FT–007",
    name: "Chimemoji",
    dare: "Fuse two emoji. Receive a creature, a name, and a myth.",
    live: "https://chimemoji.vercel.app",
    git: "https://github.com/syedahmad0786/chimemoji",
  },
  {
    acc: "FT–008",
    name: "Mild Inconvenience",
    dare: "A public API of beautifully pointless measurements.",
    live: "https://mild-inconvenience.vercel.app",
    git: "https://github.com/syedahmad0786/mild-inconvenience",
  },
  {
    acc: "FT–009",
    name: "Peel Pack",
    dare: "Scratch the foil. Peel the stickers. Receive bad advice.",
    live: "https://peel-pack.vercel.app",
    git: "https://github.com/syedahmad0786/peel-pack",
  },
  {
    acc: "FT–010",
    name: "Still Here",
    dare: "A live count of people who are here instead of working.",
    live: "https://still-here-psi.vercel.app",
    git: "https://github.com/syedahmad0786/still-here",
  },
  {
    acc: "FT–011",
    name: "Rake",
    dare: "There is no score. Drag the sand. Keep the URL.",
    live: "https://rake-garden.vercel.app",
    git: "https://github.com/syedahmad0786/rake-garden",
  },
];

const shelf = document.querySelector("#shelf");
for (const t of toys) {
  const li = document.createElement("li");
  li.className = "card";
  li.innerHTML = `
    <p class="acc">${t.acc}</p>
    <h2>${t.name}</h2>
    <p>${t.dare}${t.extra ? `<br><code>${t.extra}</code>` : ""}</p>
    <div class="links">
      <a href="${t.live}">open</a>
      <a href="${t.git}">source</a>
    </div>`;
  shelf.append(li);
}
