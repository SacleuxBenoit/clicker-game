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
let varSmallAttack = 5;
let varBigAttack = 15;
let gold = 1000;

// variables : Power

let totalSmallAttack = varSmallAttack + damagePlayer;
let totalBigAttack = varBigAttack + damagePlayer;
let varReduceLife = 10;


// Display text

function displayText(){
        zone.textContent = "Current zone : " + currentZone;
        nextZone.textContent = "Monster left for the next zone : " + monster + " / " + monstersLeft;
        lifeBar.textContent = npcLife + " / " + npcMaxLife;
        descBoss.textContent = "Cost : 200 gold"
        goldDisplay.textContent = "Gold : " + gold;
        descSmallAttack.textContent = "Attack damage : " + totalSmallAttack;
        descBigAttack.textContent = "Attack damage : " + totalBigAttack;
        DescReduceLife.textContent = " Reduce " + varReduceLife + " HP every 2 second "
}

function displaySmallAttack(){
        if(gold >= 5 && ButtonNPC.value == "npc"){
                totalSmallAttack = varSmallAttack + damagePlayer;
                descSmallAttack.textContent = "Attack damage : " + totalSmallAttack;
        }
}

function displayBigAttack(){
        if(gold >= 12 && ButtonNPC.value == "npc"){
                totalBigAttack = varBigAttack + damagePlayer;
                descBigAttack.textContent = "Attack damage : " + totalBigAttack;
        }
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
                        lifeBar.textContent = npcLife + " / " + npcMaxLife;
                        GoldPlayer(1,3);
                }else if(currentZone >= 3 && currentZone <= 5){
                        npcMaxLife = 120;
                        lifeBar.textContent = npcLife + " / " + npcMaxLife;
                        GoldPlayer(4,7);
                }else if(currentZone >= 6 && currentZone <= 9){
                        npcMaxLife = 180;
                        varSmallAttack = 30;
                        varBigAttack = 80;
                        lifeBar.textContent = npcLife + " / " + npcMaxLife;
                        GoldPlayer(7,10);
                }else if(currentZone >= 10 && currentZone <= 19){
                        npcMaxLife = 280;
                        varSmallAttack = 45;
                        varBigAttack = 90;
                        lifeBar.textContent = npcLife + " / " + npcMaxLife;
                        GoldPlayer(10,19);
                }
        }

        function npcDead(){
                npcLife = 0;
                lifeBar.textContent = npcLife + " / " + npcMaxLife ;
                monster++;
                nextZone.textContent = "Monster left for the next zone : " + monster + " / " + monstersLeft;
                Zone();
                npcReset();
                increaseDamageAndLife();
        }

        function bossDead(){
                lifeBar.textContent = npcLife + " / " + npcMaxLife ;
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
                        npcLife -= damagePlayer;
                        lifeBar.textContent = npcLife + " / " + npcMaxLife;
                        if(npcLife <= 0){
                                npcDead();
                        }
                        displaySmallAttack()
                }else if(ButtonNPC.value == "boss"){
                        bossLife -= damagePlayer;
                        lifeBar.textContent = bossLife + " / " + bossMaxLife
                        if(bossLife <=0){
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
                        displaySmallAttack();
                        displayBigAttack();
                }else{
                        ButtonDamageClick.disabled = true
                }
        }

        function smallAttack(){

                if(gold >= 5 && ButtonNPC.value == "npc"){
                        npcLife -= totalSmallAttack ;
                        lifeBar.textContent = npcLife + " / " + npcMaxLife;
                        gold-= 5;        
                        goldDisplay.textContent = "Gold : " + gold;
                        if(npcLife <= 0){
                                npcDead();
                        }

                }else if(gold >=5 && ButtonNPC.value == "boss"){
                        bossLife -= totalSmallAttack;
                        lifeBar.textContent = bossLife + " / " + bossMaxLife;
                        gold-= 5;        
                        goldDisplay.textContent = "Gold : " + gold;
                        descSmallAttack.textContent = "Attack damage : " + totalSmallAttack;

                        if(bossLife <= 0){
                                bossDead();
                        }
                }
        }

        function bigAttack(){
                if(gold >= 12 && ButtonNPC.value == "npc"){
                        npcLife -= totalBigAttack;
                        lifeBar.textContent = npcLife + " / " + npcMaxLife;
                        gold-= 12;        
                        goldDisplay.textContent = "Gold : " + gold;

                        if(npcLife <= 0){
                                npcDead();
                        }

                }else if(gold => 12 && ButtonNPC.value == "boss"){
                        bossLife -= totalBigAttack;
                        lifeBar.textContent = bossLife + " / " + bossMaxLife;
                        gold-= 12;        
                        goldDisplay.textContent = "Gold : " + gold;
                        descBigAttack.textContent = "Attack damage : " + totalBigAttack;

                        if(bossLife <= 0){
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
                        npcLife -= 10;
                        lifeBar.textContent = npcLife + " / " + npcMaxLife;
                        gold-= 5;        
                        goldDisplay.textContent = "Gold : " + gold;

                        if(npcLife <= 0){
                                npcDead();
                        }
                }else if(ButtonNPC.value == "boss"){
                        bossLife -= 10;
                        lifeBar.textContent = bossLife + " / " + bossMaxLife;
                        gold-= 5;        
                        goldDisplay.textContent = "Gold : " + gold;
                        if(bossLife <= 0){
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
                        bossMaxLife = npcMaxLife;
                        lifeBar.textContent = npcLife + " / " + npcMaxLife;
                        zone.textContent = "Current zone : " + currentZone;
                        gold+= 500;
                        goldDisplay.textContent = "Gold : " + gold;
                        ButtonBoss.disabled = false;
                        ButtonReduceMonster.disabled = false;
                        ButtonDeleteLife.disabled = false;
                        increaseDamageAndLife();
                }
        }