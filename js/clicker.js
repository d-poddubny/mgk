(function ($) {

    'use strict';

    $.fn.clicker = function (options) {

        var settings = $.extend({
                item: '.item'
            }, options)
        
        var $clicker = this,
            $items = $clicker.find(settings.item)

        $items.on('click', function () {
            $items.not(this).removeClass('active')
            $(this).toggleClass('active')
        })

        return this

    }

})(jQuery)