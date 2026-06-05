// Donnees simulees — remplacables par une vraie API fetch() plus tard
const data = {
uptime : 99.8,
users : Math.floor(Math.random() * 50) + 10,
alerts : Math.floor(Math.random() * 5),
network: [65, 42, 88, 31, 74, 56, 90], // % charge par heure
};
// Mettre a jour les cartes
document.getElementById('uptime').textContent = data.uptime;
document.getElementById('users').textContent = data.users;
document.getElementById('alerts').textContent = data.alerts;
document.getElementById('last-update').textContent =
new Date().toLocaleString('fr-FR');
// Dessiner le graphique en barres (CSS uniquement, pas de librairie)
const chart = document.getElementById('chart');
const labels = ['08h','09h','10h','11h','12h','13h','14h'];
data.network.forEach((val, i) => {
const row = document.createElement('div');
row.style.display = 'flex';
row.style.alignItems = 'center';
row.style.gap = '12px';
row.style.marginBottom = '8px';
const label = document.createElement('span');
label.textContent = labels[i];
label.style.width = '36px';
label.style.color = '#64748b';
const bar = document.createElement('div');
bar.className = 'chart-bar';
bar.style.width = val + '%';
bar.title = val + '%';
const pct = document.createElement('span');
pct.textContent = val + '%';
pct.style.color = '#64748b';
row.appendChild(label);
row.appendChild(bar);
row.appendChild(pct);
chart.appendChild(row);
});