input.onButtonPressed(Button.A, function () {
    xgo.execution_action(xgo.action_enum.Stand)
})
input.onButtonPressed(Button.B, function () {
    xgo.execution_action(xgo.action_enum.Crawl_forward)
})
xgo.init_xgo_serial(SerialPin.P14, SerialPin.P13)
