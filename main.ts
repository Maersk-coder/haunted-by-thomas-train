function Randombevægelse_Thomas () {
    Randombevægelse = Adgang_til_bevægelse_Thomas("abc")._pickRandom()
    if (Randombevægelse == "Right") {
        Thomas_Tog.setVelocity(50, 0)
    } else if (Randombevægelse == "Up") {
        Thomas_Tog.setVelocity(0, -50)
    } else if (Randombevægelse == "Down") {
        Thomas_Tog.setVelocity(0, 50)
    } else if (Randombevægelse == "Left") {
        Thomas_Tog.setVelocity(-50, 0)
    }
}
function Change_level (Level_nummer: string) {
    if (Level_number == 1) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else if (Level_number == 2) {
        tiles.setCurrentTilemap(tilemap`Level 2 Tilemap`)
        tiles.placeOnRandomTile(Thomas_Tog, assets.tile`Togspor lodret`)
    } else if (Level_number == 3) {
        tiles.setCurrentTilemap(tilemap`level0`)
        tiles.placeOnRandomTile(Thomas_Tog, assets.tile`Togspor lodret`)
    }
    tiles.placeOnRandomTile(Hero, assets.tile`Togspor vandret`)
}
sprites.onDestroyed(SpriteKind.Food, function (sprite) {
    Olie()
})
function Adgang_til_bevægelse_Thomas (Enemysprite: string) {
    let direction: string[] = []
    if (!(Thomas_Tog.tileKindAt(TileDirection.Left, sprites.castle.tileGrass1))) {
        direction.push("Left")
    }
    if (!(Thomas_Tog.tileKindAt(TileDirection.Top, sprites.castle.tileGrass1))) {
        direction.push("Up")
    }
    if (!(Thomas_Tog.tileKindAt(TileDirection.Right, sprites.castle.tileGrass1))) {
        direction.push("Right")
    }
    if (!(Thomas_Tog.tileKindAt(TileDirection.Bottom, sprites.castle.tileGrass1))) {
        direction.push("Down")
    }
    return direction
}
function Olie () {
    Food = sprites.create(assets.image`Olie`, SpriteKind.Food)
}
function Spawnenemies () {
    for (let value of tiles.getTilesByType(assets.tile`kryds`)) {
        Create_Thomas_Tog()
        tiles.placeOnTile(Thomas_Tog, value)
        tiles.setTileAt(value, assets.tile`kryds`)
        Randombevægelse_Thomas()
    }
}
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    Randombevægelse_Thomas()
    console.log(Thomas_Tog.x)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.splatter)
    game.setGameOverMessage(false, "GAME OVER!")
})
function Sir_Topham_Hatt () {
    Hero = sprites.create(assets.image`Sir Hatt`, SpriteKind.Player)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
    if (true) {
        tiles.placeOnRandomTile(Food, assets.tile`Togspor lodret`)
    }
})
function Create_Thomas_Tog () {
    Thomas_Tog = sprites.create(assets.image`Thomas`, SpriteKind.Enemy)
}
let Thomas_Tog: Sprite = null
let Randombevægelse = ""
let Hero: Sprite = null
let Level_number = 0
let Food: Sprite = null
info.setScore(0)
Food = sprites.create(assets.image`Olie`, SpriteKind.Food)
tiles.placeOnRandomTile(Food, assets.tile`Togspor lodret`)
Sir_Topham_Hatt()
Level_number = 1
Change_level("1")
if (info.score() == 1) {
    Change_level("2")
}
tiles.placeOnRandomTile(Hero, assets.tile`Togspor vandret`)
Spawnenemies()
Randombevægelse_Thomas()
game.onUpdate(function () {
    controller.moveSprite(Hero, 75, 75)
    scene.cameraFollowSprite(Hero)
})
