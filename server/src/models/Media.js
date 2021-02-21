const Model = require("./Model");

class Media extends Model {
  static get tableName() {
    return "media"
  }
}

module.exports = Media;