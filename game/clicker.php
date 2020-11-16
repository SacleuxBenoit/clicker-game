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
        <ul>
            <li>Sort 1</li>
            <li>Sort 2</li>
            <li>Sort 3</li>
            <li>Sort 4</li>
        </ul>
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