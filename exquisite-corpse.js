var exquistionCorpse = (function(){
    "use strict";
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

            bouncyBouncy: function(text) {
                // author: Rob Smith, www.githhub.com/kormoc
                this.letsGetThisPartyStarted(text);

                // Convert to div
                var el = $('body p:last');
                el.replaceWith('<div class="letsGetThisPartyStarted">'+el.html()+'</div>');

                // My bounce brings all the boys to the yard
                $('.letsGetThisPartyStarted')
                    .css('color', 'yellow')
                    .css('padding', '10px')
                    .css('background-color', 'red')
                    .css('display', 'none')
                    .show("bounce", 500);
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
                this.contrib.bouncyBouncy('Boing Boing!');
                // this.contrib.nextUp();
                // etc...
            }
        }
    };
})();
