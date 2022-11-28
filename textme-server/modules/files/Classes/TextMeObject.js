const uniqid = require('uniqid');

class TextMeObject{

    constructor(prefix) {
        this.id = (prefix? `${prefix}-` : '') + uniqid ()
    }
}

module.exports = {TextMeObject};