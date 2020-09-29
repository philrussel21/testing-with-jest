function repeatMessage(msg, repeatCount) {
  let showMsg = "";
  for (let index = 0; index < repeatCount; index++) {
    showMsg += msg
  }

  return showMsg
}

module.exports = {
  repeatMessage
}