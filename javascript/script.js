let zone = document.getElementById('zone');
let nextZone = document.getElementById('nextZone');
let lifeBar = document.getElementById('lifeBar');

// variables : Zone

let currentZone = 1;
let monster = 0;
let monstersLeft = 2;

// variables : NPC

let npcMaxLife = 100;
let npcLife = npcMaxLife;

// variables : Player

let damagePlayer = 10;

zone.textContent = "current zone : " + currentZone;
nextZone.textContent = "Monster left for the next zone : " + monster + " / " + monstersLeft;
lifeBar.textContent = npcLife + " / " + npcMaxLife;

        function damage(){
                let currentLife =  npcLife -= damagePlayer;
                lifeBar.textContent = currentLife + " / " + npcMaxLife;

                if(currentLife <= 0){
                        monsterDead();
                }
        }

        function monsterDead(){
                currentLife = 0;
                lifeBar.textContent = currentLife + " / " + npcMaxLife ;
                monster++;
                nextZone.textContent = "Monster left for the next zone : " + monster + " / " + monstersLeft;
                Zone();
                Reset();

        }

        function Zone(){
                if(monster == monstersLeft){
                        currentZone++
                        zone.textContent = "current zone : " + currentZone;
                }
        }

        function Reset(){
                if(monster == monstersLeft){
                        monster = 0;
                        nextZone.textContent = "Monster left for the next zone : " + monster + " / " + monstersLeft;
                }
                if(npcLife <= 0){
                        npcLife = npcMaxLife
                        lifeBar.textContent = npcLife + " / " + npcMaxLife;

                }
        }