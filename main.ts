input.onButtonPressed(Button.A, function () {
    basic.pause(2000)
    state = 0
})
let state = 0
music.setBuiltInSpeakerEnabled(true)
let Pushups = 0
state = 2
basic.forever(function () {
    // while until you hit the flat line
    // 
    // waiting until pushed up
    if (state == 0) {
        if (input.acceleration(Dimension.X) > -100) {
            soundExpression.giggle.play()
            Pushups += 1
            state = 1
        }
    } else if (state == 1) {
        if (input.acceleration(Dimension.X) > -800) {
            state = 0
        }
    }
    basic.showNumber(Pushups)
    serial.writeValue("x", input.acceleration(Dimension.X))
})
