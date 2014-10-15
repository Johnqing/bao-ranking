var request = require('request');
var Table = require('cli-table');

module.exports = function(config){
	var table = new Table({
		head:["基金代码", "基金名称", "万份收益", "7日年化"]
	});
	var parseData = function(body){
		eval(body);
		rankData.datas.forEach(function(st){
			var item = st.split(',');
			table.push([
				item[0],
				item[1],
				item[4] + '元',
				item[5] + '%'
			])
		});
		console.log(table.toString());
	};

	var url = config.url + '&pn=' + config.number + '&sc=' + config.sc;
	request(url, function(err, res, body){
		if(err)
			throw err;
		if(res.statusCode == 200){
			parseData(body);
		}
	});

};
