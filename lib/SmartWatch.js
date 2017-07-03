module.exports = SmartWatch;
var Watch = require('./Watch.js');
var Tablet = require('./Tablet.js');
var extend = require('./extend.js');

function SmartWatch(){
  Watch.call(this, this.bodyPart);
}
extend(SmartWatch.prototype, Watch.prototype);
extend(SmartWatch.prototype, Tablet.prototype);