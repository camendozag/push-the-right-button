controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (random_pick == 1) {
        info.changeScoreBy(1)
    }
    generate()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (random_pick == 0) {
        info.changeScoreBy(1)
    }
    generate()
})
function generate () {
    random_pick = randint(0, 1)
    if (random_pick == 0) {
        mySprite.sayText("Push A")
    } else {
        mySprite.sayText("Push B")
    }
}
let random_pick = 0
let mySprite: Sprite = null
game.splash("Push the bttn as directed")
mySprite = sprites.create(img`
    . . . . . b b b b b b . . . . . 
    . . . b b d d d d d d b b . . . 
    . . b b d d b b b b d d b b . . 
    . e d b d b d d d d b d b d e . 
    . f d b d d b b b b d d b d e . 
    . f b d b b d d d d b b d b e . 
    . f e d d d b b b b d d d e e . 
    . f f e b d d d d d d b e e f . 
    . f f e e e e e e e e e e e f . 
    . f f e e e f e e e e e e e f . 
    . f f e f e e e f f e e f e e f 
    . f e e f e f e f e f e f e e e 
    f f e e e e f e e f f e f f e e 
    f e e e e f f e e e e e f f f e 
    e e e e f f f e f e e e e f f f 
    e e e e f f f e f e e e e f f f 
    `, SpriteKind.Player)
info.startCountdown(20)
generate()
