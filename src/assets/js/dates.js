$(function () {

    var spead = 100

    var now = new Date()
    $('.js-dates-block .dates-list ul[data-year="' + now.getFullYear() + '"]').fadeIn(spead)    


    $('.js-dates-block .years-list a').click(function(e) {
        e.preventDefault()
        var year = $(this).text()
        var $this = $(this)
        
        $('.js-dates-block .years-list a.active').removeClass('active')
        $this.addClass('active')

        if (!$this.hasClass('active')) {
            $('.js-dates-block .dates-list ul').fadeOut(spead)
            $.each($('.js-dates-block .dates-list ul[data-year="' + year + '"]'), function () {
                $(this).fadeIn(spead)
            })
        }

    })

    $('.js-dates-block .dates-list a').click(function (e) {
        e.preventDefault()
        var $this = $(this)
        $('.js-dates_popup .date').text($this.data('date'))
        $('.js-dates_popup .title').text($this.data('type'))
        $('.js-dates_popup .content').text($this.data('details'))
        $('.js-dates_popup').fadeIn(spead)
    })


    var disableDatesPopup = function () {
        $('.js-dates_popup .date').text('')
        $('.js-dates_popup .title').text('')
        $('.js-dates_popup .content').text('')

        $('.js-dates_popup').fadeOut(spead)
    }

    $('.js-dates_popup .btn_close').click(function (e) {
        e.preventDefault()
        disableDatesPopup()  
    })

    $(document).click( function(e){
      if( $(e.target).closest(".js-dates-block").length ) return;
      
      disableDatesPopup()
      e.stopPropagation()
    })

    
})
