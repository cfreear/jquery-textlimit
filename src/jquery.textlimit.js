/**
 * @library     textlimit.js
 * @description A simple plugin to restrict text inputs to specific word limits.
 * @author      Christian Freear <christianfreear@gmail.com>
 * @license     http://unlicense.org/UNLICENSE
 */

;(function ( $, window, document, undefined ) {


    var pluginName = "textlimit",
        defaults = {
            wordLimit: 10
        };

    //Constructor
    function Plugin( element, options ) {
        this.element = element;

        //empty array used so as not to overwrite defaults
        this.options = $.extend( {}, defaults, options );

        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype.init = function () {

        var options = this.options;
        $(this.element).keyup(function(){

            //select all words (non-whitespace characters)
            var matches = this.value.match(/\S+/g);

            if (matches && matches.length > options.wordLimit) {
                var val = this.value;

                //split on whitespace characters up to wordLimit
                val = val.split(/\s+/, options.wordLimit);
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