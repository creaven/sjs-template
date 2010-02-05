var sys = require('sys');
var posix = require('posix');
var template = require('../Source/template');
posix.cat('template.html').addCallback(function(text){
	var result = template.compile(text, {
		items: [
			{
				link: 'http://mootools.net',
				text: 'MooTools'
			},
			{
				link: 'http://mifjs.net',
				text: 'mifjs'
			}
		]
	});
	sys.puts(result);
});