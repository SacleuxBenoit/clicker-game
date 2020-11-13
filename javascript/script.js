let zone = document.getElementById('zone');
let nextZone = document.getElementById('nextZone');

let currentZone = 1;
let mobs = 0;
let mobsLeft = 2;

zone.textContent = "current zone : " + currentZone;
nextZone.textContent = "Mobs left for the next zone : " + mobs + " / " + mobsLeft;