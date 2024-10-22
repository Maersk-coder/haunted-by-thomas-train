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
    let Level_number = 0
    if (Level_number == 1) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else if (Level_number == 2) {
        tiles.setCurrentTilemap(tilemap`Level 2 Tilemap`)
    } else if (Level_number == 3) {
        tiles.setCurrentTilemap(tilemap`level0`)
    }
}
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
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    Randombevægelse_Thomas()
    console.log(Thomas_Tog.x)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.setGameOverEffect(false, effects.splatter)
})
function Sir_Topham_Hatt () {
    Hero = sprites.create(assets.image`Sir Hatt`, SpriteKind.Player)
}
function Create_Thomas_Tog () {
    Thomas_Tog = sprites.create(assets.image`Thomas`, SpriteKind.Enemy)
}
let Hero: Sprite = null
let Randombevægelse = ""
let Thomas_Tog: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
Create_Thomas_Tog()
tiles.placeOnRandomTile(Thomas_Tog, assets.tile`myTile`)
Randombevægelse_Thomas()
game.onUpdate(function () {
    controller.moveSprite(Hero, 100, 100)
    scene.cameraFollowSprite(Thomas_Tog)
})
