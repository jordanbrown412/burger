var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(vals, cb) {
    orm.insertOne("burger", vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(col, condition, cb) {
    orm.updateOne("burger", col, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;