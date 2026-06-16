const winners = [
  {
    season: "2024/25",
    competition: "Fantasy Premier League",
    teamName: "INSERT TEAM NAME",
    name: "INSERT NAME",
    alias: "INSERT ALIAS"
  },
  {
    season: "2023/24",
    competition: "Fantasy Premier League",
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