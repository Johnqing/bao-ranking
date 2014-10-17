var rank = require('./lib/ranking');
var setting = require('./setting');

var objToStr = function(obj){
	if(!obj) return;
	var sTmp = [];
	for(var key in obj){
		var item = obj[key];
		item = typeof item == 'string' ? item : item.join(',');
		sTmp.push(key + '=' + item);
	}
	return sTmp.join('&');
};

var ranking = function(n, sc){
	setting.data['sort'][0] = sc == 'y' ? 'syi' : 'mui';
	setting.data['page'][1] = n || 5;
	console.log(setting.data['page']);
	console.log(setting.url + '?' + objToStr(setting.data));
	rank(setting.url + '?' + objToStr(setting.data));
};
module.exports = ranking;