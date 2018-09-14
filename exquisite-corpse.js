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

            /**
             * This method shows the decisive question at the end of the game
             * @param title The title of the question
             * @param contentHTML The content of the question
             * @param callback A simple old school callback to be called when you press the yes or no button. 
             * If the callback returns true, then a funny "You win the game!" message is shown.
             * @returns The jQuery UI dialog instance
             * @author Javier "Ciberman" Mora <http://github.com/jhm-ciberman>
             */
            showFinalGameQuestion: function (title, contentHTML, callback) {
                const that = this;
                const content = document.createElement('div');
                content.setAttribute('title', title);
                content.innerHTML = contentHTML;
                document.body.appendChild(content);

                const dialog = $(content).dialog({
                    modal: true,
                    buttons: {
                        "Yes": () => click(true),
                        "No": () => click(false),
                    }
                });

                function click(win) {
                    dialog.dialog("close");
                    if (callback(win)) {
                        that.bouncyBouncy('You win the game!');
                        const dialog = document.querySelector('.letsGetThisPartyStarted');
                        dialog.setAttribute('title', "Congratulations!");
                        $(dialog).dialog({
                            modal: true,
                            width: 500,
                        });
                    }
                }
                return dialog;
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
                // Replace this call with the function you write
                this.contrib.showFinalGameQuestion('Are you sure?', 'For real are you sure?', (a) => a);
            }
        }
    };
})();
