function Create_Thomas_Tog () {
    Thomas_Tog = sprites.create(assets.image`Thomas`, SpriteKind.Enemy)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.setGameOverEffect(false, effects.splatter)
})
function Change_level (Level_nummer: string) {
    let Level_number = 0
    if (Level_number == 1) {
        tiles.setCurrentTilemap(tilemap`level4`)
    } else if (Level_number == 2) {
        tiles.setCurrentTilemap(tilemap`level4`)
    } else if (Level_number == 3) {
        tiles.setCurrentTilemap(tilemap`level4`)
    }
}
function Sir_Topham_Hatt () {
    Hero = sprites.create(assets.image`Sir Hatt`, SpriteKind.Player)
}
let Thomas_Tog: Sprite = null
let Hero: Sprite = null
tiles.setCurrentTilemap(tilemap`level3`)
let Current_level = 1
Hero = sprites.create(assets.image`Sir Hatt`, SpriteKind.Player)
game.onUpdate(function () {
    controller.moveSprite(Hero, 100, 100)
    scene.cameraFollowSprite(Hero)
})
