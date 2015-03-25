(function ($) {

    'use strict';

    $.fn.carousel = function (options) {

        var settings = $.extend({
                prev: '.prev',
                next: '.next',
                event: 'click',
                item: '.carousel-item',
                wrapper: '.carousel-wrapper',
                itemsToScroll: 1,
                scrollSpead: 200,
                autoScrollTime: 3000
            }, options)
        
        var $carousel = this,
            $wrapper = $carousel.find(settings.wrapper),
            $prev = $carousel.find(settings.prev),
            $next = $carousel.find(settings.next)

        var itemWidth = $carousel.find(settings.item + ':eq(0)').width(),
            itemQuant = $carousel.find(settings.item).length,
            activePageNumber = 1

        var API = {
                setActive: function (pageNumber) {
                    activePageNumber = pageNumber
                    pageNumber--
                    $carousel.find('.active').removeClass('active')
                    $carousel.find(settings.item + ':eq(' + pageNumber + ')')
                             .addClass('active')
                },
                checkNavDisplay: function () {
                    if (activePageNumber > 1 && activePageNumber + settings.itemsToScroll <= itemQuant) {
                        $next.show()
                        $prev.show()
                    }
                    if (activePageNumber === 1) {
                        $next.show()
                        $prev.hide()
                    }
                    if (activePageNumber + settings.itemsToScroll > itemQuant) {
                        $next.hide()
                        $prev.show()
                    }
                },
                go: function (pageNumber) {
                    if (pageNumber > itemQuant || pageNumber < 1) return false

                    this.setActive(pageNumber)
                    $wrapper.animate({'left': -1 * itemWidth * (pageNumber -1)}, settings.scrollSpead)
                    API.checkNavDisplay()
                }
            }

        API.setActive(activePageNumber)
        API.checkNavDisplay()

        $prev.on(settings.event, function () {
            var scrollTo = activePageNumber - settings.itemsToScroll
            API.go(scrollTo)
        })

        $next.on(settings.event, function () {
            var scrollTo = activePageNumber + settings.itemsToScroll
            API.go(scrollTo)
        })

        setInterval(function () {
            var scrollTo = activePageNumber + settings.itemsToScroll

            if (scrollTo > itemQuant)
                scrollTo = 1

            API.go(scrollTo)
        }, settings.autoScrollTime)

        return this

    }

})(jQuery)