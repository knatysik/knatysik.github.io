;(function () {

  $("#form").submit(function (event) {
    event.preventDefault();
    $(this).find('button').prop('disabled', true)
    $(this).find('.progress').animate({width: '80%'}, 5000)

    const that = this

    var form_data = $(this).serialize()

    $.ajax({
      type: "POST",
      url: "http://localhost/send.php",
      data: form_data,

      success: function () {
        const button = $(that).find('button')
        const propgress = button.find('.progress')

        button.prop('disabled', false)
        propgress.finish().css('width', '100%').parent().addClass('success')

        $(that).trigger('reset')
        setTimeout(function () {
          button.removeClass('success')
          propgress.css('width', 0)
        }, 2000)
      },

      error: function (error) {
        const button = $(that).find('button')
        const propgress = button.find('.progress')
        const button_text = button.find('.button-text')

        button_text.text('Ooops!')

        button.prop('disabled', false)
        propgress.finish().css('width', '100%').parent().addClass('error')
        setTimeout(function () {
          button.removeClass('error')
          propgress.css('width', 0)
          button_text.text('Wyslać')
        }, 2000)
      }
    })
  })

})()