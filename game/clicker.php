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
        <p class="parNav">small attack : cost 5 gold <br> <button onclick="smallAttack()">small attack</button></p>

        <p class="parNav">big attack : cost 12 gold <br> <button onclick="bigAttack()">big attack</button></p>

        <p class="parNav">Reduce Monster : cost 50 gold <br> <button onclick="reduceMonster()">reduce monster</button></p>

        <p class="parNav">Reduce Life : cost 5 gold per second<br> <button onclick="IntervalReduceLife()">reduce life</button></p>


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