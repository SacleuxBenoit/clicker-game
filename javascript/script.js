// get Zone

let zone = document.getElementById('zone');
let nextZone = document.getElementById('nextZone');

// get NPC

let lifeBar = document.getElementById('lifeBar');
let ButtonNPC = document.getElementById('ButtonNPC')
let ButtonBoss = document.getElementById('ButtonBoss');

// get Player

let goldDisplay = document.getElementById('goldDisplay');

// get Power

let ButtonDamageClick = document.getElementById('ButtonDamageClick');
let ButtonSmallAttack = document.getElementById('ButtonSmallAttack');
let ButtonBigAttack = document.getElementById('ButtonBigAttack');
let ButtonReduceMonster = document.getElementById('ButtonReduceMonster');
let ButtonReduceLife = document.getElementById('ButtonReduceLife');
let ButtonRandomGold = document.getElementById('ButtonRandomGold');

// get Description

let descDamageClick = document.getElementById('descDamageClick');
let descSmallAttack = document.getElementById('descSmallAttack');
let descBigAttack = document.getElementById('descBigAttack');
let descReduceMonster = document.getElementById('descReduceMonster');
let DescReduceLife = document.getElementById('DescReduceLife');
let descRandomGold = document.getElementById('descRandomGold');
let descDeleteLife = document.getElementById('descDeleteLife');

// variables : Zone

let currentZone = 1;
let monster = 0;
let monstersLeft = 5;

// variables : NPC

let npcMaxLife = 100;
let npcLife = npcMaxLife;

// variables : Boss

let bossMaxLife = 1000;
let bossLife = bossMaxLife;

// variables : Player

let damagePlayer = 5;
let varSmallAttack = 25;
let varBigAttack = 75;
let gold = 1000;

// variables : Power


// Display text

zone.textContent = "Current zone : " + currentZone;
nextZone.textContent = "Monster left for the next zone : " + monster + " / " + monstersLeft;
lifeBar.textContent = npcLife + " / " + npcMaxLife;
goldDisplay.textContent = "Gold : " + gold;

// function Zone
   
        function Zone(){
                if(monster >= monstersLeft){
                currentZone++;
                zone.textContent = "Current zone : " + currentZone;
                }
        }

// function NPC

        function increaseDamageAndLife(){
                if(currentZone >= 1 && currentZone <=2){
                        npcMaxLife = 100;
                        lifeBar.textContent = currentLife + " / " + npcMaxLife;
                        GoldPlayer(1,3);
                }else if(currentZone >= 3 && currentZone <= 5){
                        npcMaxLife = 120;
                        lifeBar.textContent = currentLife + " / " + npcMaxLife;
                        GoldPlayer(4,7);
                }else if(currentZone >= 6 && currentZone <= 9){
                        npcMaxLife = 150;
                        lifeBar.textContent = currentLife + " / " + npcMaxLife;
                        GoldPlayer(7,10);
                }else if(currentZone >= 10 && currentZone <= 19){
                        npcMaxLife = 250;
                        lifeBar.textContent = currentLife + " / " + npcMaxLife;
                        GoldPlayer(10,19);
                }
        }

        function npcDead(){
                currentLife = 0;
                lifeBar.textContent = currentLife + " / " + npcMaxLife ;
                monster++;
                nextZone.textContent = "Monster left for the next zone : " + monster + " / " + monstersLeft;
                Zone();
                Reset();
                increaseDamageAndLife();
        }

        function summonBoss(){
                zone.textContent = "Current zone : ??";
                nextZone.textContent = "Monster left for the next zone : ??/??";
                ButtonNPC.textContent = "BOSS";
                lifeBar.textContent = bossLife + " / " + bossMaxLife
                ButtonNPC.value = "boss"
        }

// function Player

        function damage(){
                if(ButtonNPC.value == "npc"){
                        let currentLife =  npcLife -= damagePlayer;
                        lifeBar.textContent = currentLife + " / " + npcMaxLife;
                        if(currentLife <= 0){
                                npcDead();
                        }
                }else if(ButtonNPC.value == "boss"){
                        let bossCurrentLife = bossLife -= damagePlayer;
                        lifeBar.textContent = bossLife + " / " + bossMaxLife
                }
        }

        function GoldPlayer(min, max){
                let random = Math.floor((Math.random() * (max - min) + min));
                gold += random;
                goldDisplay.textContent = "Gold : " + gold;
        }

// Power

        function damageClick(){
                if(gold >= 15 && damagePlayer <= 17){
                       damagePlayer += 1;
                       gold-=15;
                       goldDisplay.textContent = "Gold : " + gold;
                       descDamageClick.textContent = "Click damage : " + damagePlayer;
                }else{
                        ButtonDamageClick.disabled = true
                }
        }

        function smallAttack(){
                if(gold >= 5 && ButtonNPC.value == "npc"){
                        let currentLife =  npcLife -= varSmallAttack;
                        lifeBar.textContent = currentLife + " / " + npcMaxLife;
                        gold-= 5;        
                        goldDisplay.textContent = "Gold : " + gold;
                        descSmallAttack.textContent = "Attack damage : " + varSmallAttack;

                        if(currentLife <= 0){
                                npcDead();
                        }

                }else if(gold >=5 && ButtonNPC.value == "boss"){
                        let currentLife =  bossLife -= varSmallAttack;
                        lifeBar.textContent = currentLife + " / " + bossMaxLife;
                        gold-= 5;        
                        goldDisplay.textContent = "Gold : " + gold;
                        descSmallAttack.textContent = "Attack damage : " + varSmallAttack;
                }
        }

        function bigAttack(){
                if(gold >= 12 && ButtonNPC.value == "npc"){
                        let currentLife =  npcLife -= varBigAttack;
                        lifeBar.textContent = currentLife + " / " + npcMaxLife;
                        gold-= 12;        
                        goldDisplay.textContent = "Gold : " + gold;
                        descBigAttack.textContent = "Attack damage : " + varBigAttack;

                        if(currentLife <= 0){
                                npcDead();
                        }
                }else if(gold => 12 && ButtonNPC.value == "boss"){
                        let currentLife =  bossLife -= varBigAttack;
                        lifeBar.textContent = currentLife + " / " + bossMaxLife;
                        gold-= 12;        
                        goldDisplay.textContent = "Gold : " + gold;
                        descBigAttack.textContent = "Attack damage : " + varBigAttack;
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
                if(gold >= 5 && ButtonNPC.value == "npc"){
                        let currentLife =  npcLife -= 10;

                        lifeBar.textContent = currentLife + " / " + npcMaxLife;
                        gold-= 5;        
                        goldDisplay.textContent = "Gold : " + gold;

                        if(currentLife <= 0){
                                npcDead();
                        }
                }else if(ButtonNPC.value == "boss"){
                        let currentLife =  bossLife -= 10;

                        lifeBar.textContent = currentLife + " / " + bossMaxLife;
                        gold-= 5;        
                        goldDisplay.textContent = "Gold : " + gold;
                }
        }

        function startIntReduceLife(){
                ButtonReduceLife.disabled = true;
                IntervalReduceLife = setInterval(reduceLife, 2000)
        }

        function clearIntReduceLife(){
                clearInterval(IntervalReduceLife);
                ButtonReduceLife.disabled = false;
        }

        function GetRandomGold(max, min){
                let randomGold = Math.floor((Math.random() * (max - min) + min));
                gold += randomGold
                goldDisplay.textContent = "Gold : " + gold;
                descRandomGold.textContent = "Give you between " + max + " and " + min + " gold";
        }

        function randomGold(){
                if(gold >= 10){
                        GetRandomGold(7,15);
                        gold -=10
                }
        }

        function deleteLife(){
                if(gold >= 100){
                        npcMaxLife -= 10;
                        gold -= 100;
                        goldDisplay.textContent = "Gold : " + gold;
                        lifeBar.textContent = npcLife + " / " + npcMaxLife;
                        descDeleteLife.textContent = "Reduce the maximum HP by 10"
                }
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