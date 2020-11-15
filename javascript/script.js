let zone = document.getElementById('zone');
let nextZone = document.getElementById('nextZone');
let lifeBar = document.getElementById('lifeBar');

// Zone

let currentZone = 1;
let monster = 0;
let monstersLeft = 2;

// NPC

let npcLife = 100;
let npcMaxLife = 100;

// Player

let damagePlayer = 10;

zone.textContent = "current zone : " + currentZone;
nextZone.textContent = "Monster left for the next zone : " + monster + " / " + monstersLeft;
lifeBar.textContent = npcLife + " / " + npcMaxLife

        function damage(){
                let currentLife =  npcLife -= damagePlayer
                lifeBar.textContent = currentLife + " / " + npcMaxLife;

                if(currentLife <= 0){
                        monsterDead();
                }
        }

        function monsterDead(){
                currentLife = 0
                lifeBar.textContent = currentLife + " / " + npcMaxLife 
        }
