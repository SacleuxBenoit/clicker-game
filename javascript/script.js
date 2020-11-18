// get Zone

let zone = document.getElementById('zone');
let nextZone = document.getElementById('nextZone');

// get NPC

let lifeBar = document.getElementById('lifeBar');

// get Player

let goldDisplay = document.getElementById('goldDisplay');

// variables : Zone

let currentZone = 1;
let monster = 0;
let monstersLeft = 2;

// variables : NPC

let npcMaxLife = 100;
let npcLife = npcMaxLife;

// variables : Player

let damagePlayer = 10;
let varSmallAttack = 25;
let gold = 0;

zone.textContent = "current zone : " + currentZone;
nextZone.textContent = "Monster left for the next zone : " + monster + " / " + monstersLeft;
lifeBar.textContent = npcLife + " / " + npcMaxLife;
goldDisplay.textContent = "Gold : " + gold;

// function Zone
   
        function Zone(){
                if(monster == monstersLeft){
                currentZone++
                zone.textContent = "current zone : " + currentZone;
                }
        }

// function NPC

        function monsterDead(){
                currentLife = 0;
                lifeBar.textContent = currentLife + " / " + npcMaxLife ;
                monster++;
                nextZone.textContent = "Monster left for the next zone : " + monster + " / " + monstersLeft;
                Zone();
                Reset();
        }

// function Player

        function damage(){
                let currentLife =  npcLife -= damagePlayer;
                lifeBar.textContent = currentLife + " / " + npcMaxLife;
                if(currentLife <= 0){
                        monsterDead();
                }
        }

        function smallAttack(){
                if(gold >= 5){
                        let currentLife =  npcLife -= varSmallAttack;
                        lifeBar.textContent = currentLife + " / " + npcMaxLife;
                        gold-= 5;        
                        goldDisplay.textContent = "Gold : " + gold;
                        
                        if(currentLife <= 0){
                                monsterDead();
                        }
                }

        }

        function GoldPlayer(min, max){
                let random = Math.floor((Math.random() * (max - min) + min));
                gold += random;
                goldDisplay.textContent = "Gold : " + gold;
        }

// function : else

        function Reset(){
                if(monster == monstersLeft){
                        monster = 0;
                        nextZone.textContent = "Monster left for the next zone : " + monster + " / " + monstersLeft;
                }
                if(npcLife <= 0){
                        npcLife = npcMaxLife;
                        lifeBar.textContent = npcLife + " / " + npcMaxLife;
                        GoldPlayer(1,3);
                }
        }