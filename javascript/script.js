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
let ButtonDamageReduceLife = document.getAnimations('ButtonDamageReduceLife');
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

// stop intervall
let ButtonClearIntReduceLife = document.getElementById('ButtonClearIntReduceLife');
// variables : Zone

let currentZone = 1;
let monster = 0;
let monstersLeft = 5;

// variables : NPC

let npcMaxLife = 100;
let npcLife = npcMaxLife;

// variables : Player

let damagePlayer = 10;
let varSmallAttack = 5;
let varBigAttack = 15;
let gold = 100;

// variables : Power

let totalSmallAttack = varSmallAttack + damagePlayer;
let totalBigAttack = varBigAttack + damagePlayer;
let varReduceLife = 10;
let varDamageReduceLife = 10;

// Display text

function displayGold(){
        goldDisplay.textContent = "Gold : " + gold;
        noGoldLeft();
}

function displayLife(){
        lifeBar.textContent = npcLife + " / " + npcMaxLife;
}

function displayLifeBoss(){
        lifeBar.textContent = bossLife + " / " + bossMaxLife
}

function displayZone(){
        zone.textContent = "Current zone : " + currentZone;
}

function displayNextZone(){
        nextZone.textContent = "Monster left for the next zone : " + monster + " / " + monstersLeft;
}

function displayText(){
        nextZone.textContent = "Monster left for the next zone : " + monster + " / " + monstersLeft;
        descBoss.textContent = "Cost : 200 gold"
        descDamageClick.textContent = "Click damage : " + damagePlayer; 
        descSmallAttack.textContent = "Attack damage : " + totalSmallAttack;
        descBigAttack.textContent = "Attack damage : " + totalBigAttack;
        DescReduceLife.textContent = " Reduce " + varReduceLife + " HP every second";
        DescDamageReduceLife.textContent = "Increase the Reduce Life damage by : " + varDamageReduceLife;

        displayGold();
        displayLife();
        displayZone();
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
                displayZone();
                }
        }

// function NPC

        function increaseMonster(){
                monster++;
        }

        function increaseDamageAndLife(){
                if(currentZone >= 1 && currentZone <=2){
                        npcMaxLife = 100;
                        displayLife()
                        GoldPlayer(1,5);
                }else if(currentZone >= 3 && currentZone <= 5){
                        npcMaxLife = 120;
                        displayLife()
                        GoldPlayer(4,10);
                }else if(currentZone >= 6 && currentZone <= 9){
                        npcMaxLife = 180;
                        varSmallAttack = 30;
                        varBigAttack = 80;
                        displayLife()
                        GoldPlayer(9,15);
                }else if(currentZone >= 10 && currentZone <= 19){
                        npcMaxLife = 280;
                        varSmallAttack = 45;
                        varBigAttack = 90;
                        displayLife()
                        GoldPlayer(10,30);
                }
        }

        function npcDead(){
                npcLife = 0;
                displayLife()
                increaseMonster()
                displayNextZone();
                Zone();
                npcReset();
                increaseDamageAndLife();
        }

        function bossDead(){
                displayLife()
                increaseMonster()
                ButtonNPC.textContent = "PNJ"
                displayNextZone()
                Zone();
                bossReset();
        }

        function summonBoss(){
                if(gold >= 200){
                        bossMaxLife = 1000;
                        gold-=200
                        bossLife = bossMaxLife;
                        zone.textContent = "Current zone : ??";
                        nextZone.textContent = "Monster left for the next zone : ??/??";
                        ButtonNPC.textContent = "BOSS";
                        ButtonNPC.value = "boss"
                        ButtonBoss.disabled = true;
                        ButtonReduceMonster.disabled = true;
                        ButtonDeleteLife.disabled = true;
                        displayGold();
                        displayLifeBoss();
                }
        }

// function Player

        function damage(){
                if(ButtonNPC.value == "npc"){
                        npcLife -= damagePlayer;
                        displayLife()
                        if(npcLife <= 0){
                                npcDead();
                        }
                        displaySmallAttack()
                }else if(ButtonNPC.value == "boss"){
                        bossLife -= damagePlayer;
                        displayLifeBoss();
                        if(bossLife <=0){
                                bossDead();
                        }
                }
        }

        function GoldPlayer(min, max){
                let random = Math.floor((Math.random() * (max - min) + min));
                gold += random;
                displayGold();
        }

// Power

        function damageClick(){
                if(gold >= 15 && damagePlayer <= 17){
                       damagePlayer += 1;
                       gold-=15;

                       descDamageClick.textContent = "Click damage : " + damagePlayer;
                        displaySmallAttack();
                        displayBigAttack();
                        displayGold();
                }else{
                        ButtonDamageClick.disabled = true
                }
        }

        function smallAttack(){

                if(gold >= 5 && ButtonNPC.value == "npc"){
                        npcLife -= totalSmallAttack ;
                        displayLife()
                        gold-= 5;        
                        displayGold();
                        if(npcLife <= 0){
                                npcDead();
                        }

                }else if(gold >=5 && ButtonNPC.value == "boss"){
                        bossLife -= totalSmallAttack;
                        displayLifeBoss();
                        gold-= 5;        
                        descSmallAttack.textContent = "Attack damage : " + totalSmallAttack;
                        displayGold();

                        if(bossLife <= 0){
                                bossDead();
                        }
                }
        }

        function bigAttack(){
                if(gold >= 12 && ButtonNPC.value == "npc"){
                        npcLife -= totalBigAttack;
                        displayLife()
                        gold-= 12;        
                        displayGold();

                        if(npcLife <= 0){
                                npcDead();
                        }

                }else if(gold => 12 && ButtonNPC.value == "boss"){
                        bossLife -= totalBigAttack;
                        displayLifeBoss();
                        gold-= 12;        
                        displayGold();
                        descBigAttack.textContent = "Attack damage : " + totalBigAttack;

                        if(bossLife <= 0){
                                bossDead();
                        }
                }
        }

        function reduceMonster(){
                if(gold >=50 && monstersLeft >= 3){
                        monstersLeft--;
                        gold -= 50;
                        displayNextZone()
                        displayGold();
                }
        }

        function reduceLife(){
                if(gold >= 5 && ButtonNPC.value == "npc"){
                        npcLife -= varDamageReduceLife;
                        displayLife()
                        gold-= 5;        
                        displayGold();

                        if(npcLife <= 0){
                                npcDead();
                        }
                }else if(ButtonNPC.value == "boss"){
                        bossLife -= 10;
                        displayLifeBoss();
                        gold-= 5;        
                        displayGold();
                        if(bossLife <= 0){
                                bossDead();
                        }
                }
        }

        function startIntReduceLife(){
                ButtonReduceLife.disabled = true;
                ButtonClearIntReduceLife.disabled = false;
                IntervalReduceLife = setInterval(reduceLife, 1000)
        }

        function clearIntReduceLife(){
                clearInterval(IntervalReduceLife);
                ButtonReduceLife.disabled = false;
                ButtonClearIntReduceLife.disabled = true;
        }

        function damageReduceLife(){
                if(gold >= 50){
                        gold -= 50;
                        varDamageReduceLife +=1;
                        displayGold();
                        DescDamageReduceLife.textContent = "Increase the Reduce Life damage by : " + varDamageReduceLife;
                }
        }

        function GetRandomGold(max, min){
                let randomGold = Math.floor((Math.random() * (max - min) + min));
                gold += randomGold
                displayGold();
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
                        displayGold();
                        displayLife()
                        descDeleteLife.textContent = "Reduce the maximum HP by 10"
                if(npcLife >= npcMaxLife)
                        npcLife -=10
                        displayLife()
                }
        }

// function reset
        function npcReset(){
                if(monster >= monstersLeft){
                        monster = 0;
                        displayNextZone()
                }
                if(npcLife <= 0){
                        npcLife = npcMaxLife;
                        displayLife()
                }
        }

        function bossReset(){
                if(monster >= monstersLeft){
                        monster = 0;
                        displayNextZone()
                }
                if(bossLife <= 0){
                        bossLife = npcLife;
                        bossMaxLife = npcMaxLife;
                        gold+= 500;
                        ButtonBoss.disabled = false;
                        ButtonReduceMonster.disabled = false;
                        ButtonDeleteLife.disabled = false;
                        displayGold();
                        increaseDamageAndLife();
                        displayLife()
                        displayZone();
                }
        }