let zone = document.getElementById('zone');
let nextZone = document.getElementById('nextZone');

let currentZone = 1;
let monster = 0;
let monstersLeft = 2;

zone.textContent = "current zone : " + currentZone;
nextZone.textContent = "Monster left for the next zone : " + monster + " / " + monstersLeft;