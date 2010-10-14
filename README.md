sjs-template
============
Template engine for node.js (and other server side javascript frameworks/libraries). It has the simplest template structure.

How to use
==========

template:
	\Template example:
	<ul>
		for(var i = 0; i < items.length; i++){
			<li><a href="{items[i].link}">{items[i].text.toUpperCase()}</li>
		}
	<ul>
	{moro}
js:

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
			],
			moro: 'god'
		});
		sys.puts(result);
	});
	
result:

	Template example:<ul><li><a href="http://mootools.net">MOOTOOLS</li><li><a href="http://mifjs.net">MIFJS</li><ul>god