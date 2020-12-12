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
let ButtonDeleteLife = document.getElementById('ButtonDeleteLife');

// get Description

let descDamageClick = document.getElementById('descDamageClick');
let descSmallAttack = document.getElementById('descSmallAttack');
let descBigAttack = document.getElementById('descBigAttack');
let descReduceMonster = document.getElementById('descReduceMonster');
let DescReduceLife = document.getElementById('DescReduceLife');
let descRandomGold = document.getElementById('descRandomGold');
let descDeleteLife = document.getElementById('descDeleteLife');
let descBoss = document.getElementById('descBoss')

// variables : Zone

let currentZone = 1;
let monster = 0;
let monstersLeft = 5;

// variables : NPC

let npcMaxLife = 100;
let npcLife = npcMaxLife;

// variables : Player

let damagePlayer = 5;
let varSmallAttack = 25;
let varBigAttack = 75;
let gold = 1000;

// variables : Power


// Display text

function displayText(){
        zone.textContent = "Current zone : " + currentZone;
        nextZone.textContent = "Monster left for the next zone : " + monster + " / " + monstersLeft;
        lifeBar.textContent = npcLife + " / " + npcMaxLife;
        descBoss.textContent = "cost : 200 gold"
        goldDisplay.textContent = "Gold : " + gold;
}

displayText();

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
                        npcMaxLife = 180;
                        varSmallAttack = 30;
                        varBigAttack = 80;
                        lifeBar.textContent = currentLife + " / " + npcMaxLife;
                        GoldPlayer(7,10);
                }else if(currentZone >= 10 && currentZone <= 19){
                        npcMaxLife = 280;
                        varSmallAttack = 45;
                        varBigAttack = 90;
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
                npcReset();
                increaseDamageAndLife();
        }

        function bossDead(){
                bossCurrentLife = 0;
                lifeBar.textContent = bossCurrentLife + " / " + bossMaxLife ;
                monster++;
                nextZone.textContent = "Monster left for the next zone : " + monster + " / " + monstersLeft;
                ButtonNPC.textContent = "PNJ"
                Zone();
                bossReset();
        }

        function summonBoss(){
                bossMaxLife = 1000;
                gold-=200
                bossLife = bossMaxLife;
                zone.textContent = "Current zone : ??";
                nextZone.textContent = "Monster left for the next zone : ??/??";
                ButtonNPC.textContent = "BOSS";
                lifeBar.textContent = bossLife + " / " + bossMaxLife
                ButtonNPC.value = "boss"
                goldDisplay.textContent = "Gold : " + gold;
                ButtonBoss.disabled = true;
                ButtonReduceMonster.disabled = true;
                ButtonDeleteLife.disabled = true;
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
                        if(bossCurrentLife <=0){
                                bossDead();
                        }
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
                        let bossCurrentLife =  bossLife -= varSmallAttack;
                        lifeBar.textContent = bossCurrentLife + " / " + bossMaxLife;
                        gold-= 5;        
                        goldDisplay.textContent = "Gold : " + gold;
                        descSmallAttack.textContent = "Attack damage : " + varSmallAttack;

                        if(bossCurrentLife <= 0){
                                bossDead();
                        }
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
                        let bossCurrentLife =  bossLife -= varBigAttack;
                        lifeBar.textContent = bossCurrentLife + " / " + bossMaxLife;
                        gold-= 12;        
                        goldDisplay.textContent = "Gold : " + gold;
                        descBigAttack.textContent = "Attack damage : " + varBigAttack;

                        if(bossCurrentLife <= 0){
                                bossDead();
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
                if(gold >= 5 && ButtonNPC.value == "npc"){
                        let currentLife =  npcLife -= 10;

                        lifeBar.textContent = currentLife + " / " + npcMaxLife;
                        gold-= 5;        
                        goldDisplay.textContent = "Gold : " + gold;

                        if(currentLife <= 0){
                                npcDead();
                        }
                }else if(ButtonNPC.value == "boss"){
                        let bossCurrentLife =  bossLife -= 10;
                        lifeBar.textContent = bossCurrentLife + " / " + bossMaxLife;
                        gold-= 5;        
                        goldDisplay.textContent = "Gold : " + gold;
                        if(bossCurrentLife <= 0){
                                bossDead();
                        }
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
                if(ButtonNPC.value == "npc" && gold >= 100 && npcMaxLife >=50){
                        npcMaxLife -= 10;
                        gold -= 100;
                        goldDisplay.textContent = "Gold : " + gold;
                        lifeBar.textContent = npcLife + " / " + npcMaxLife;
                        descDeleteLife.textContent = "Reduce the maximum HP by 10"
                if(npcLife >= npcMaxLife)
                        npcLife -=10
                        lifeBar.textContent = npcLife + " / " + npcMaxLife;
                }else if(ButtonNPC.value == "boss" && gold >= 100 && bossMaxLife >=500){
                        bossMaxLife -= 10;
                        gold -= 40;
                        goldDisplay.textContent = "Gold : " + gold;
                        lifeBar.textContent = bossLife + " / " + bossMaxLife;
                if(bossLife >= bossMaxLife)
                        bossLife -=10
                        lifeBar.textContent = bossLife + " / " + bossMaxLife;
                }
        }

// function : reset
        function npcReset(){
                if(monster >= monstersLeft){
                        monster = 0;
                        nextZone.textContent = "Monster left for the next zone : " + monster + " / " + monstersLeft;
                }
                if(npcLife <= 0){
                        npcLife = npcMaxLife;
                        lifeBar.textContent = npcLife + " / " + npcMaxLife;
                }
        }

        function bossReset(){
                if(monster >= monstersLeft){
                        monster = 0;
                        nextZone.textContent = "Monster left for the next zone : " + monster + " / " + monstersLeft;
                }
                if(bossLife <= 0){
                        bossLife = npcLife;
                        bossMaxLife = npcMaxLife
                        lifeBar.textContent = bossLife + " / " + bossMaxLife;
                        zone.textContent = "Current zone : " + currentZone;
                        gold+= 500;
                        goldDisplay.textContent = "Gold : " + gold;
                        ButtonBoss.disabled = false;
                        ButtonReduceMonster.disabled = false;
                        ButtonDeleteLife.disabled = false;
                }
        }