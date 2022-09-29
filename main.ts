cuteBot.forward()
basic.pause(100)
cuteBot.stopcar()
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        # . . . .
        . . # . .
        . # . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.pause(1000)
})
