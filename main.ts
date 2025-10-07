function _2_Game_Level_Variable () {
    _1_Advance_Game_Level()
    GameLevel = 1
}
function _3_Increase_difficulty () {
    tiles.setCurrentTilemap(tilemap`Savethepuppies`)
    mySprite2 = sprites.create(assets.image`BlueKnightSide`, SpriteKind.Player)
    controller.moveSprite(mySprite2, 100, 100)
    Difficulty = 0
    info.setScore(1)
}
function level4 () {
    tiles.setCurrentTilemap(tilemap`Lava`)
    tiles.placeOnRandomTile(mySprite, assets.tile`Target`)
}
function _1_Advance_Game_Level () {
    tiles.setCurrentTilemap(tilemap`bushes`)
    mySprite = sprites.create(assets.image`BlueKnight`, SpriteKind.Player)
    tiles.placeOnRandomTile(mySprite, assets.tile`Target`)
    controller.moveSprite(mySprite)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(assets.image`fireball`, mySprite3, 150, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`BrightWeave`, function (sprite, location) {
    Level2()
})
function Level2 () {
    tiles.setCurrentTilemap(tilemap`InsideField`)
    tiles.placeOnRandomTile(mySprite, assets.tile`Target`)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite3.vy = -100
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`Puppy`, function (sprite, location) {
    sprites.destroy(sprite)
    info.changeScoreBy(-1)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
})
function level3 () {
	
}
function _5_Collect_Items () {
    _1_Advance_Game_Level()
    GameLevel = 5
    tiles.setCurrentTilemap(tilemap`Dungeonforenemies`)
    Key = sprites.create(assets.image`key`, SpriteKind.Food)
    tiles.placeOnRandomTile(Key, sprites.dungeon.floorLight2)
    hasKey = false
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Squares`, function (sprite, location) {
    if (true) {
    	
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    GameLevel += 1
    if (GameLevel == 1) {
        Level2()
    } else if (GameLevel == 2) {
        level3()
    }
})
function _4_HP_and_Double_Jump () {
    tiles.setCurrentTilemap(tilemap`Grassyside`)
    mySprite3 = sprites.create(assets.image`BlueKnightSide`, SpriteKind.Player)
    mySprite3.ay = 130
    controller.moveSprite(mySprite3, 100, 0)
    scene.cameraFollowSprite(mySprite3)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(1, 9))
    info.setLife(3)
    EvilBat = sprites.create(assets.image`Bat`, SpriteKind.Enemy)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(41, 12))
    EnemyLife = 3
}
let projectile: Sprite = null
let EnemyLife = 0
let EvilBat: Sprite = null
let hasKey = false
let Key: Sprite = null
let mySprite3: Sprite = null
let projectile2: Sprite = null
let mySprite: Sprite = null
let Difficulty = 0
let mySprite2: Sprite = null
let GameLevel = 0
_1_Advance_Game_Level()
game.onUpdateInterval(randint(800, 3000), function () {
    if (info.score() == 1) {
        projectile = sprites.createProjectileFromSide(assets.image`Bat`, -50, 0)
        projectile.y = randint(0, 120)
    } else if (info.score() <= 5) {
    	
    } else {
    	
    }
})
