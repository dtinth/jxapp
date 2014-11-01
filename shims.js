
var app = require('./')

module.exports = {
  alert: alert,
  prompt: prompt,
  confirm: confirm
}

function alert(text, informationalText) {
  var options = { }
  if (informationalText) options.message = informationalText
  app.displayAlert(text, options)
}

function prompt(text, defaultAnswer) {
  var options = { defaultAnswer: defaultAnswer || '' }
  try {
    return app.displayDialog(text, options).textReturned
  } catch (e) {
    return null
  }
}

function confirm(text) {
  try {
    app.displayDialog(text)
    return true
  } catch (e) {
    return false
  }
}


