var exquistionCorpse = (function(){
	// Rules:
	// # Function must validate and be linted using at least default options
	// # Function must use the previous commits function in some way (combinatory)
	// # Check your code works before committing it!
	// # It should have some kind of representation that is viewable, but it doesn't have to use the DOM, feel free to get creative
	// # Please follow the format
	// # 'nextUp' is an example function. You can just replace it with your own, call it last inside init(), and remember to include the previous function inside of your own
	// # jQuery is supplied for normalization, but let's try and not use other libraries, unless it's really really really (really) cool.
	return {
		contrib: {
			nextUp: function() {
				// this could be you!
				// this.letsGetThisPartyStarted('Woohoo, look at me!');
			},
			letsGetThisPartyStarted: function(text) {
				// author: Chris Tabor, www.githhub.com/christabor
				return $('body').append('<p>'+text.split('').join(' ===> ').toUpperCase()+'</p>').find('p').css({
					'color': 'yellow',
					'padding': '10px',
					'background-color': 'red'
				});
			}
		},
		init: function() {
			if($) {
				this.contrib.letsGetThisPartyStarted('Take me to Funky Town!');
				// this.contrib.nextUp();
				// etc...
			}
		}
	};
})();
