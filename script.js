const winners = [
  {
    season: "2026",
    competition: "Fantasy Premier League",
    teamName: "Ndidi Party",
    name: "Mohsin Mohammed",
    alias: "Willy Long"
  },
  {
    season: "2025",
    competition: "Fantasy Premier League",
    teamName: "Kloppenheimer",
    name: "Mohammed Nihal",
    alias: "Kloppenheimer"
  },
  {
    season: "2026",
    competition: "The Oracle Cup - Fifa World Fantasy Cup",
    teamName: "INSERT TEAM NAME",
    name: "INSERT NAME",
    alias: "INSERT ALIAS"
  },
  {
    season: "2026",
    competition: "Predictor Cup - Kicktipp World Cup Predictions",
    teamName: "INSERT TEAM NAME",
    name: "INSERT NAME",
    alias: "INSERT ALIAS"
  }
];

const container = document.getElementById("winners");

winners.forEach(winner => {
  container.innerHTML += `
    <div class="card">
      <div class="trophy">🏆</div>
      <div class="season">${winner.season} Champion</div>
      <div class="competition">${winner.competition}</div>
      <h2 class="team">${winner.teamName}</h2>
      <div class="name">${winner.name}</div>
      <div class="alias">"${winner.alias}"</div>
    </div>
  `;
});