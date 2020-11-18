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
        <p class="parNav">Sort 1 <br> <button onclick="smallAttack()">Sort 1</button></p>

        <p class="parNav">Sort 2 <br> <button onclick="bigAttack()">Sort 2</button></p>

        <p class="parNav">Sort 3 <br> <button>Sort 3</button></p>

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