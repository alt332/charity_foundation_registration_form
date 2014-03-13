var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  nrc: String,
  currentAddress: {
    buildingNo: String,
    roomNo: String,
    streetRoad: String,
    township: String,
    state: String,
    country: String
  },
  permanentAddress: String,
  contactPhone: String,
  contactEmail: String,
  ucsy: {
    major: String,
    batch: String,
    year: String,
  },
  otherUni: {
    name: String,
    major: String,
    batch: String,
    year: String,
  },
  howdoyouknow: {
    website: { type: Boolean, default: false },
    facebook: { type: Boolean, default: false },
    wordofmouth: { type: Boolean, default: false },
    others: String,
  },
  haveAnyFriends: String,
  dateOfAcceptance: Number
});

module.exports = mongoose.model("User", userSchema);
