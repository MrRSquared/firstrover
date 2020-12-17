bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    serial.writeLine(bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)))
})
bluetooth.startUartService()
basic.showIcon(IconNames.Heart)
