var rank = require('./lib/ranking');
var setting = require('./setting');

var ranking = function(n){
	setting.number = n || 5;
	rank(setting);
};

ranking();

module.exports = ranking;