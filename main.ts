bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    received = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    serial.writeLine("Thank you.")
    basic.showString(received)
})
let received = ""
bluetooth.startUartService()
basic.showIcon(IconNames.Heart)
