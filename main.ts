sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.baDing.play()
    scene.setBackgroundColor(0)
    info.changeScoreBy(1)
    pizza.setPosition(randint(0, 10), randint(0, 10))
    info.startCountdown(10)
})
let pizza: Sprite = null
scene.setBackgroundColor(0)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . f 1 f . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . 2 1 1 1 . . . . . . 
    . . . . . . 1 1 f 1 1 . . . . . 
    . . . . . . 1 1 1 1 1 . . . . . 
    . . . . . . 1 1 f 1 1 . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
game.onUpdateInterval(5000, function () {
    music.powerUp.play()
    scene.setBackgroundColor(13)
    info.changeScoreBy(1)
    mySprite.setPosition(0, 0)
})
