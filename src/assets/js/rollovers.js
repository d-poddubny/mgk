$(function () {
    $('.js-rollover-item').click(function (e) {
        e.preventDefault()

        var $el = $(this),
            $text = $el.next('.gallery_archive_content')

            $('.gallery_archive_content.active').removeClass('active')

            $text.addClass('active')
    })
})
