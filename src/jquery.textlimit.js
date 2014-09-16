/**
 * @library     textlimit.js
 * @description A simple plugin to restrict text inputs to specific word limits.
 * @author      Christian Freear <christianfreear@gmail.com>
 * @license     http://unlicense.org/UNLICENSE
 */

(function ( $ ) {
    $.fn.textlimit = function( options ) {

        //default settings
        var settings = $.extend({
            wordLimit: 10
        }, options);

        //chain
        return this.each(function(){

            $(this).keyup(function(){

                //select all words (non-whitespace characters)
                var matches = this.value.match(/\S+/g);

                if (matches && matches.length > settings.wordLimit) {
                    var val = this.value;

                    //split on whitespace characters up to wordLimit
                    val = val.split(/\s+/, settings.wordLimit);
                    //space on the end so that continued typing creates new word
                    this.value = val.join(" ") + " ";
                }

            });

        });
    };
}( jQuery ));