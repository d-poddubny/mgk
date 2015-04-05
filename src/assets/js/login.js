$(function () {

    $('.js-login').click(function (e) {
        e.preventDefault()
        $('.js-auth_popup').fadeIn(200)
    })

    $('.js-auth_popup .btn_close').click(function (e) {
        e.preventDefault()
        disableAuthPopup()
    })

    $(document).click( function(e){
      if( $(e.target).closest(".js-auth_popup").length || $(e.target).is('.js-login')) return;
      
      disableAuthPopup()
      e.stopPropagation()
    })

    var disableAuthPopup = function () {
        $('.js-auth_popup').fadeOut(200)        
    }

})
