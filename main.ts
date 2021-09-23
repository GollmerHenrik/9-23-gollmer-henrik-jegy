let jegy = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        jegy = randint(1, 5)
    }
})
basic.forever(function () {
    if (jegy == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # . # . .
            . . # . .
            . . # . .
            `)
    } else if (jegy == 2) {
        basic.showLeds(`
            . # # . .
            # . . # .
            . . # . .
            . # . . .
            # # # # .
            `)
    } else if (jegy == 3) {
        basic.showLeds(`
            . # # . .
            # . . # .
            . . # . .
            # . . # .
            . # # . .
            `)
    } else if (jegy == 4) {
        basic.showLeds(`
            # . # . .
            # . # . .
            # # # # .
            . . # . .
            . . # . .
            `)
    } else if (jegy == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
})
