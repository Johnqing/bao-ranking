var rank = require('./lib/ranking');
var setting = require('./setting');

var ranking = function(n, sc){
	setting.number = (+n) || 5;
	setting.sc = sc == 'y' ? 'yi7' : 'dwjz';
	rank(setting);
};
module.exports = ranking;