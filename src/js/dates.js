$(function () {
    $('.js-dates-block a').click(function (e) {
        e.preventDefault()
        $('.js-dates_popup').fadeIn(200)
    })

    $('.js-dates_popup .btn_close').click(function (e) {
        e.preventDefault()
        disableDatesPopup()  
    })

    $(document).click( function(e){
      if( $(e.target).closest(".js-dates-block").length ) return;
      
      disableDatesPopup()
      e.stopPropagation()
    })

    var disableDatesPopup = function () {
        $('.js-dates_popup').fadeOut(200)        
    }

})
