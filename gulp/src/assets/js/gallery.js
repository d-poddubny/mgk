$(function (){
    $('.js-gallery .gallery_item > a').click(function (e) {
        e.preventDefault()

        disableGalleryItems()

        var $el = $(this),
            $item = $el.parent('li')

        $item.toggleClass('active')
    })

    $(document).click( function(e){
      if( $(e.target).closest(".js-gallery").length ) return;
      
      disableGalleryItems()
      e.stopPropagation()
    })

    var disableGalleryItems = function () {
        $('.js-gallery .gallery_item').removeClass('active')
    }

})
