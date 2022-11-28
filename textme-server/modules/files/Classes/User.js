const { TextMeObject } = require ("./TextMeObject");

class User extends TextMeObject {
  name;
  lastName;
  avatarImage;
  isConnected;

  constructor(userInput) {
    super();
    this.name = userInput.name;
    this.lastName = userInput.lastName;
    this.avatarImage = userInput.avatarImage;
    this.phone = userInput.phone;
    this.isConnected = true;
  }
}


module.exports = {User}