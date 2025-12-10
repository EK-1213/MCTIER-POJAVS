// Lista de jugadores
const players = [
        {
    nick: "ItzRealMeBS900 ",
    points: 10,
    skin: "https://render.crafty.gg/3d/bust/ItzRealMeBS900 ",
    tiers: { Uhc: "HT5", Sword: "HT5", NethPot: "HT5", Crystal: "HT4" }
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