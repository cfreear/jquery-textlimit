/**
 * @library     textlimit.js
 * @description A simple plugin to restrict text inputs to specific word limits.
 * @author      Christian Freear <christianfreear@gmail.com>
 * @license     http://unlicense.org/UNLICENSE
 */

;(function ( $, window, document, undefined ) {


    var pluginName = "textlimit",
        defaults = {
            wordlimit: 10
        };

    //Constructor
    function Plugin( element, options ) {
        this.element = element;

        var data = $(this.element).data();
console.log(defaults);
console.log(options);
console.log(data);
console.log("=");
        //empty array used so as not to overwrite defaults
        this.options = $.extend( {}, defaults, options, data );
console.log(this.options);
console.log("----------");

        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype.init = function () {

        var options = this.options;
        $(this.element).keyup(function(){

            //select all words (non-whitespace characters)
            var matches = this.value.match(/\S+/g);

            if (matches && matches.length > options.wordlimit) {
                var val = this.value;

                //split on whitespace characters up to wordLimit
                val = val.split(/\s+/, options.wordlimit);
                //space on the end so that continued typing creates new word
                this.value = val.join(" ") + " ";
            }
        });
    };

    $.fn[pluginName] = function( options ) {
        //chain
        return this.each(function () {
            //prevent multiple instantiations on same element
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data( this, 'plugin_' + pluginName,
                        new Plugin( this, options ));
            }
        });
    };

}( jQuery, window, document ));