radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        music.playMelody("E E F G G F E D ", 200)
        music.playMelody("C C D E E D D - ", 200)
        music.playMelody("E E F G G F E D ", 200)
        music.playMelody("C C D E D D C C ", 200)
    } else if (receivedNumber == 2) {
        music.playMelody("E G C5 C5 G A G G ", 120)
        music.playMelody("E E C E E G C5 C5 ", 360)
        music.playMelody("B B A G - A A A ", 240)
        music.playMelody("A C5 B B A G - - ", 240)
        music.playMelody("A A G A A G D D ", 240)
        music.playMelody("E E C C C C - - ", 120)
    } else {
        for (let index = 0; index < 50; index++) {
            music.playMelody("C5 B A G A A A A ", 1200)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(100)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(1)
