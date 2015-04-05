$(function () {

    $('.js-accordion > li > a').click(function (e) {
        e.preventDefault()
        var $el = $(this),
            $parent = $(this).parent('li'),
            $subnav = $el.next('ul')

        if ($subnav.length === 0) return false

        if ($subnav.is(':visible')) {
            $parent.removeClass('active')
            $subnav.slideUp(200)
        }
        else {
            $parent.addClass('active')
            $subnav.slideDown(200)
        }

    })

})
