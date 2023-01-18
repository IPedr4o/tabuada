input.onButtonPressed(Button.A, function () {
    Numero += randint(1, 10)
    numero2 = randint(1, 10)
    basic.showNumber(Numero)
    basic.showIcon(IconNames.No)
    basic.showNumber(numero2)
    jogadas += 1
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Pontuação)
    basic.showIcon(IconNames.Yes)
    basic.showString(" de")
    basic.showNumber(jogadas)
    basic.pause(1000)
    basic.clearScreen()
    jogadas += 0
    Pontuação = 0
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Numero * numero2)
})
input.onButtonPressed(Button.B, function () {
    Pontuação += 1
    basic.showString("Nice!")
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
})
let jogadas = 0
let Pontuação = 0
let numero2 = 0
let Numero = 0
Numero = 0
numero2 = 0
Pontuação = 0
jogadas = 0
