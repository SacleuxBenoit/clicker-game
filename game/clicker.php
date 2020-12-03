<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/style.css">
    <title>Clicker game</title>
</head>
<body>

    <header>
        <h1>Clicker game</h1>
    </header>

    <p id="goldDisplay">Gold</p>
    
    <nav class="navDamage">

        <div class="parNav">
            <p>increase damage per click : cost 15 gold</p>
            <button onclick="damageClick()" id="ButtonDamageClick">damage click</button>
            <p>Click damage : +2</p>
        </div>

        <div class="parNav">
            <p>small attack : cost 5 gold</p>
            <button onclick="smallAttack()" id="ButtonSmallAttack">small attack</button>
            <p>attack damage : 25</p>
        </div>

        <div class="parNav">
            <p>big attack : cost 12 gold</p>
            <button onclick="bigAttack()"  id="ButtonBigAttack">big attack</button>
            <p>damage : 75</p>   
        </div>

        <div class="parNav">
            <p>Reduce Monster : cost 50 gold</p>
            <button onclick="reduceMonster()"  id="ButtonReduceMonster">reduce monster</button> 
            <p> reduces the maximum number of monsters (2 monster minimum )</p>
        </div>

        <div class="parNav">
            <p>Reduce Life : cost 5 gold every 2 second</p>
                <button onclick="startIntReduceLife()"  id="ButtonReduceLife">reduce life</button>
                <button onclick="clearIntReduceLife()"  id="ButtonClearIntReduceLife">STOP</button>
                <p> reduce the life of monsters every 2 second </p>
        </div>

        <div class="parNav">
            <p>Random gold : cost 10 gold</p>
            <button onclick="randomGold()"  id="ButtonRandomGold">random gold</button>
            <p> give you between 7 and 15 gold </p>
        </div>
        
        <div class="parNav">
            <p>Delete life : cost 100 gold</p>
            <button onclick="deleteLife()"  id="ButtonDeleteLife">Delete life</button>
            <p> Reduce the maximum HP by 10 </p>
        </div>

    </nav>

    <div class="npc">

        <p id="zone"></p>
        <p id="nextZone">Monster left for the next zone</p>

        <button id="buttonNPC" onclick="damage()">NPC</button>

        <p id="lifeBar"></p>

    </div>

    <script src="../javascript/script.js"></script>
</body>
</html>