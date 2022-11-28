const { TextMeObject } = require ("./TextMeObject");

class Message extends TextMeObject {
  chatId;
  WriterId;
  sendDate;
  text;

  constructor(msgInput) {
    super('msg');
    this.chatId = msgInput.chatId;
    this.writerId = msgInput.writerId;
    this.sendDate = msgInput.sendDate;
    this.text = msgInput.text;
  }
}


module.exports = {Message}