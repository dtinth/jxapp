
var se = Application('System Events')

const ENTER = 36
const ESCAPE = 53
const DELAY = 0.5

delay(2)
se.keyCode(ENTER)

delay(DELAY)
se.keystroke('YES')
se.keyCode(ENTER)

delay(DELAY)
se.keyCode(ENTER)

delay(DELAY)
se.keyCode(ESCAPE)

delay(DELAY)
se.keyCode(ENTER)

delay(DELAY)
se.keyCode(ESCAPE)
