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

        <p class="parNav">increase damage per click : cost 15 gold <br> <button onclick="damageClick()" id="ButtonDamageClick">damage click</button></p>

        <p class="parNav">small attack : cost 5 gold <br> <button onclick="smallAttack()" id="ButtonSmallAttack">small attack</button></p>

        <p class="parNav">big attack : cost 12 gold <br> <button onclick="bigAttack()"  id="ButtonBigAttack">big attack</button></p>

        <p class="parNav">Reduce Monster : cost 50 gold <br> <button onclick="reduceMonster()"  id="ButtonReduceMonster">reduce monster</button></p>

        <p class="parNav">Reduce Life : cost 5 gold every 2 seconds<br> <button onclick="startIntReduceLife()"  id="ButtonReduceLife">reduce life</button>
            <button onclick="clearIntReduceLife()"  id="ButtonClearIntReduceLife">STOP</button>
        </p>

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