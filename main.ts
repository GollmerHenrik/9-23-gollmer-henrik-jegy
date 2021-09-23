let jegy = 0
input.onButtonPressed(Button.A, function () {
    jegy = randint(0, 5)
})
basic.forever(function () {
	
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
            # # # . .
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
