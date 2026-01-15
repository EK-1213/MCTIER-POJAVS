// Lista de jugadores
const players = [
    {
    nick: "RatonGordoo",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/RatonGordoo",
    tiers: { NethPot: "LT3", Crystal: "LT3" }
  },
    {
    nick: "iFromFabriii",
    points: 5,
    skin: "https://render.crafty.gg/3d/bust/iFromFabriii",
    tiers: { Uhc: "LT4", Sword: "HT5" }
  },
    {
    nick: "SheikElDios",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/SheikElDios",
    tiers: { Sword: "HT5" }
  },
    {
    nick: "poo_CJTOK_01_03",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/poo_CJTOK_01_03",
    tiers: { Crystal: "LT3" }
  },
    {
    nick: "Pablitohub",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/Pablitohub",
    tiers: { Crystal: "LT3" }
  },
   {
    nick: "marlow899",
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/marlow899",
    tiers: { Crystal: "HT4" }
  },
   {
    nick: "reparada",
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/reparada",
    tiers: { Uhc: "HT4" }
  },
             {
    nick: "PojavPlayer_ ",
    points: 38,
    skin: "https://render.crafty.gg/3d/bust/PojavPlayer_ ",
    tiers: { Uhc: "HT4", Sword: "LT3", NethPot: "LT3", Axe: " LT3", Smp: "LT3", Crystal: "HT3", }
  },
            {
    nick: "santicpvp",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/santicpvp",
    tiers: { Uhc: "HT5", Sword: "LT5", Crystal: "LT4" }
  },
            {
    nick: "hku8",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/hku8",
    tiers: { Uhc: "LT4", Crystal: "LT3" }
  },
           {
    nick: "piggadestroyer",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/piggadestroyer",
    tiers: { Crystal: "LT5" }
  },
     {
    nick: "Reconectado",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/Reconectado",
    tiers: { Crystal: "LT3" }
  },
      {
    nick: "RosendoXd",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/RosendoXd",
    tiers: { Sword: "LT5" }
  },
     {
    nick: "Ian002",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/Ian002",
    tiers: { Crystal: "LT4" }
  },
    {
    nick: "rvud",
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/rvud",
    tiers: { Crystal: "HT4" }
  },
   {
    nick: "Yoss_zx7",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/Yoss_zx7",
    tiers: { Crystal: "LT4" }
  },
   {
    nick: "Nihgblood_",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/Nihgblood_",
    tiers: { Crystal: "LT3" }
  },
             {
    nick: "icegirl",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/icegirl",
    tiers: { Crystal: "LT3" }
  },
            {
    nick: "Vaso_ITSstreams",
    points: 11,
    skin: "https://render.crafty.gg/3d/bust/Vaso_ITSstreams",
    tiers: { NethPot: "LT4", Crystal: "HT4", Mazo: "HT4" }
  },
            {
    nick: "XxXSarx",
    points: 7,
    skin: "https://render.crafty.gg/3d/bust/XxXSarx",
    tiers: { Crystal: "LT3", Mazo: "LT5" }
  },
            {
    nick: "_Vxzll",
    points: 10,
    skin: "https://render.crafty.gg/3d/bust/_Vxzll",
    tiers: { Uhc: "LT4", Sword: "LT3", Crystal: "LT5" }
  },
          {
    nick: "ImDzku_",
    points: 22,
    skin: "https://render.crafty.gg/3d/bust/ImDzku_",
    tiers: { Uhc: "HT4", Sword: "HT5", NethPot: "HT5", Axe: " LT4", Smp: "LT4", DiaPot: "HT5", Crystal: "LT4", Mazo: "LT4" }
  },
          {
    nick: "NoSoyHenry",
    points: 30,
    skin: "https://render.crafty.gg/3d/bust/NoSoyHenry",
    tiers: { Uhc: "LT3", Sword: "LT3", Smp: "LT3", Crystal: "LT3", Mazo: "LT3" }
  },
          {
    nick: "qrrstr",
    points: 81,
    skin: "https://render.crafty.gg/3d/bust/qrrstr",
    tiers: { Uhc: "LT5", Sword: "LT5", NethPot: "HT2", Axe: " LT5", Smp: "LT5", DiaPot: "LT5", Crystal: "RLT1", Mazo: "LT5" }
  },
        {
    nick: "Macro0Q",
    points: 73,
    skin: "https://render.crafty.gg/3d/bust/ItzRealMeBS900 ",
    tiers: { Uhc: "HT4", Sword: "LT4", NethPot: "LT4", Crystal: "HT1" }
  }
];
// Calcular ranking global
const rankedPlayers = players
  .slice()
  .sort((a, b) => b.points - a.points)
  .map((p, i) => ({ ...p, rank: i + 1 }));

function renderPlayers(list) {
  const container = document.getElementById("player-list");
  container.innerHTML = "";

  const byRank = list.slice().sort((a, b) => a.rank - b.rank);

  byRank.forEach((player) => {
    const card = document.createElement("div");
    card.className = "player-card";

    // Estilos especiales para top 3
    if (player.rank === 1) card.classList.add("gold");
    else if (player.rank === 2) card.classList.add("silver");
    else if (player.rank === 3) card.classList.add("bronze");

    // Número grande de posición
    const rankSlot = document.createElement("div");
    rankSlot.className = "rank-slot";
    rankSlot.textContent = `#${player.rank}`;

    const img = document.createElement("img");
    img.src = player.skin;

    // Bloque de info (nick + puntos + tiers juntos)
    const info = document.createElement("div");
    info.className = "player-info";
    info.innerHTML = `<strong>${player.nick}</strong><br><span>${player.points} puntos</span>`;

    // Bloque de tiers (separado con margen)
    const tiers = document.createElement("div");
    tiers.className = "tiers";
    for (const [mode, tier] of Object.entries(player.tiers)) {
      const badge = document.createElement("div");
      badge.className = `tier ${tier}`;
      badge.textContent = `${mode.toUpperCase()}: ${tier}`;
      tiers.appendChild(badge);
    }

    // Ensamblar tarjeta horizontal: rank + avatar + info + tiers
    card.appendChild(rankSlot);
    card.appendChild(img);
    card.appendChild(info);
    card.appendChild(tiers);
    container.appendChild(card);
  });
}

// Buscador
document.getElementById("search").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = rankedPlayers.filter(p => p.nick.toLowerCase().includes(query));
  renderPlayers(filtered.length ? filtered : rankedPlayers);
});

// Render inicial

renderPlayers(rankedPlayers);
















