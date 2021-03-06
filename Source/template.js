var version = '0.92';

var cache = {};

this.compile = function(tpl, data){
	if(!tpl) return '';
	var fn = cache[tpl];
	if(!fn){
		var functionString = 'with(data){\nvar p = [];';
		var lastHtml = false;
		var lines = tpl.split('\n').forEach(function(line){
			if(/^\s*(<|\{|\\)/.test(line)){
				line = line.replace(/^\\/, '').replace(/'/g, "\\'").replace(/^\s*/, '').replace(/\{(.*?)\}/g, function(full, match) {
					return "', " + match.replace(/\\\'/g, "'") + ", '";
				});
				if(!lastHtml){
					functionString += "\np.push('" + line;
				}else{
					functionString += line;
				}
				lastHtml = true;
			}else{
				if(lastHtml){
					functionString += "');\n" + line;
				}else{
					functionString += '\n' + line;
				}
				lastHtml = false;
			}
		});
		if(lastHtml) {
			functionString += "');\n}\nreturn p.join('');";
		} else {
			functionString += "\n}\nreturn p.join('');";
		}
		fn = new Function('data', functionString);
		cache[tpl] = fn;
	}
	return fn(data);
};
