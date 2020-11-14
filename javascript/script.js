let zone = document.getElementById('zone');
let nextZone = document.getElementById('nextZone');
let lifeBar = document.getElementById('lifeBar');

let currentZone = 1;
let monster = 0;
let monstersLeft = 2;

let npcLife = 100;
let npcMaxLife = 100;

zone.textContent = "current zone : " + currentZone;
nextZone.textContent = "Monster left for the next zone : " + monster + " / " + monstersLeft;
lifeBar.textContent = npcLife + " / " + npcMaxLife