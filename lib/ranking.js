var request = require('request');
var Table = require('cli-table');

module.exports = function(url){
	var table = new Table({
		head:["基金代码", "基金名称", "万份收益", "7日年化", "结转周期"]
	});
	var parseData = function(body){
		eval(body);
		reData.datas.forEach(function(item){
			table.push([
				item[0],
				item[1],
				item[2] + '元',
				item[4],
				item[7]
			])
		});
		console.log(table.toString());
	};

	request(url, function(err, res, body){
		if(err)
			throw err;
		if(res.statusCode == 200){
			parseData(body);
		}
	});

};
