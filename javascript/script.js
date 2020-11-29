// get Zone

let zone = document.getElementById('zone');
let nextZone = document.getElementById('nextZone');

// get NPC

let lifeBar = document.getElementById('lifeBar');

// get Player

let goldDisplay = document.getElementById('goldDisplay');

// get Power

let ButtonDamageClick = document.getElementById('ButtonDamageClick');
let ButtonSmallAttack = document.getElementById('ButtonSmallAttack');
let ButtonBigAttack = document.getElementById('ButtonBigAttack');
let ButtonReduceMonster = document.getElementById('ButtonReduceMonster');
let ButtonReduceLife = document.getElementById('ButtonReduceLife');
let ButtonRandomGold = document.getElementById('ButtonRandomGold');


// variables : Zone

let currentZone = 1;
let monster = 0;
let monstersLeft = 5;

// variables : NPC

let npcMaxLife = 100;
let npcLife = npcMaxLife;

// variables : Player

let damagePlayer = 10;
let varSmallAttack = 25;
let varBigAttack = 75;
let gold = 0;

// variables : Power


// Display text

zone.textContent = "current zone : " + currentZone;
nextZone.textContent = "Monster left for the next zone : " + monster + " / " + monstersLeft;
lifeBar.textContent = npcLife + " / " + npcMaxLife;
goldDisplay.textContent = "Gold : " + gold;

// function Zone
   
        function Zone(){
                if(monster >= monstersLeft){
                currentZone++;
                zone.textContent = "current zone : " + currentZone;
                }
        }

// function NPC

        function increaseDamageAndLife(){
                if(currentZone >= 1 && currentZone <=2){
                        npcMaxLife = 100;
                        damagePlayer = 10;
                        lifeBar.textContent = currentLife + " / " + npcMaxLife;
                }
                if(currentZone >= 0 && currentZone <= 2){
                        GoldPlayer(1,3);
                }else if(currentZone >= 3 && currentZone <= 5){
                        npcMaxLife = 120;
                        damagePlayer = 12;
                        lifeBar.textContent = currentLife + " / " + npcMaxLife;
                        GoldPlayer(4,7);
                }else if(currentZone >= 6 && currentZone <= 9){
                        npcMaxLife = 150;
                        damagePlayer = 12;
                        lifeBar.textContent = currentLife + " / " + npcMaxLife;
                        GoldPlayer(7,10);
                }else if(currentZone >= 10 && currentZone <= 19){
                        npcMaxLife = 200;
                        damagePlayer = 12;
                        lifeBar.textContent = currentLife + " / " + npcMaxLife;
                        GoldPlayer(10,19);
                }
        }

        function monsterDead(){
                currentLife = 0;
                lifeBar.textContent = currentLife + " / " + npcMaxLife ;
                monster++;
                nextZone.textContent = "Monster left for the next zone : " + monster + " / " + monstersLeft;
                Zone();
                Reset();
                increaseDamageAndLife();
        }

// function Player

        function damage(){
                let currentLife =  npcLife -= damagePlayer;
                lifeBar.textContent = currentLife + " / " + npcMaxLife;
                if(currentLife <= 0){
                        monsterDead();
                }
        }

        function GoldPlayer(min, max){
                let random = Math.floor((Math.random() * (max - min) + min));
                gold += random;
                goldDisplay.textContent = "Gold : " + gold;
        }

// Power

        function damageClick(){
                if(gold >= 15){
                       damagePlayer += 2;
                       gold-=15;
                       goldDisplay.textContent = "Gold : " + gold;
                }else{
                        ButtonDamageClick.disabled = true
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

        function bigAttack(){
                if(gold >= 12){
                        let currentLife =  npcLife -= varBigAttack;
                        lifeBar.textContent = currentLife + " / " + npcMaxLife;
                        gold-= 12;        
                        goldDisplay.textContent = "Gold : " + gold;
                        
                        if(currentLife <= 0){
                                monsterDead();
                        }
                }

        }

        function reduceMonster(){
                if(gold >=50 && monstersLeft >= 3){
                        monstersLeft--;
                        nextZone.textContent = "Monster left for the next zone : " + monster + " / " + monstersLeft;
                        gold -= 50;
                        goldDisplay.textContent = "Gold : " + gold;

                }
        }


        function reduceLife(){
                if(gold >= 5){
                        let currentLife =  npcLife -= 10;
                        lifeBar.textContent = currentLife + " / " + npcMaxLife;
                        gold-= 5;        
                        goldDisplay.textContent = "Gold : " + gold;
                        
                        if(currentLife <= 0){
                                monsterDead();
                        }
                }
        }

        function startIntReduceLife(){
                IntervalReduceLife = setInterval(reduceLife, 2000)
        }
        function clearIntReduceLife(){
                clearInterval(IntervalReduceLife);
       }

// function : else

        function Reset(){
                if(monster >= monstersLeft){
                        monster = 0;
                        nextZone.textContent = "Monster left for the next zone : " + monster + " / " + monstersLeft;
                }
                if(npcLife <= 0){
                        npcLife = npcMaxLife;
                        lifeBar.textContent = npcLife + " / " + npcMaxLife;
                }
        }