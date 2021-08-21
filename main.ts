input.onButtonPressed(Button.A, function () {
    bullet = game.createSprite(sprite.get(LedSpriteProperty.X), 4)
    for (let index = 0; index < 4; index++) {
        bullet.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    if (bullet.isTouching(sprite_2)) {
        game.addScore(1)
        sprite_2.set(LedSpriteProperty.X, randint(0, 4))
    }
    bullet.delete()
    bulletD += -1
})
input.onButtonPressed(Button.AB, function () {
    game.pause()
    basic.showNumber(game.score())
    game.resume()
})
let bullet: game.LedSprite = null
let sprite_2: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 4)
sprite_2 = game.createSprite(randint(0, 4), 0)
let level = 1
let time = 20
let TIME_2 = 20
let bulletD = 10
basic.forever(function () {
    for (let index = 0; index < 20; index++) {
        basic.pause(1000)
        time += -1
    }
    if (level == 1 && bulletD == 0) {
        game.pause()
        basic.clearScreen()
        basic.showString("time up")
    }
})
basic.forever(function () {
    if (level == 2) {
        for (let index = 0; index < 30; index++) {
            basic.pause(1000)
            TIME_2 += -1
        }
        if (!(bulletD == 0 && game.score() == 10)) {
            game.pause()
            basic.clearScreen()
            basic.showString("time up")
        }
    }
})
basic.forever(function () {
    sprite.move(1)
    if (sprite.get(LedSpriteProperty.X) == 0 || sprite.get(LedSpriteProperty.X) == 4) {
        sprite.turn(Direction.Right, 180)
    }
    basic.pause(200)
})
basic.forever(function () {
    if (bulletD == 0) {
        game.gameOver()
    }
})
basic.forever(function () {
    if (game.score() == 5) {
        if (level == 1) {
            level = 2
            basic.showString("LEVEL 2")
            time = 30
            bulletD = 10
        }
    }
    if (game.score() == 10) {
        game.pause()
        basic.clearScreen()
        basic.showString("WIN")
        game.setScore(0)
    }
    if (level == 2) {
        basic.pause(2000)
        sprite_2.set(LedSpriteProperty.X, randint(0, 4))
    }
})
