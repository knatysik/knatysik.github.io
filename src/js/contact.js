;(function () {
  const messages = document.getElementById('messages')

  $("#form").submit(function (event) {
    event.preventDefault();
    //console.log($(this).find('button'))
    $(this).find('button').prop('disabled', true);
    $(this).find('.progress').animate({width: '90%'}, 5000)

    const that = this

    var form_data = $(this).serialize();
    console.log(form_data)
    $.ajax({
      type: "POST",
      url: "http://localhost/send.php",
      data: form_data,
      success: function () {
        //const message = '<div class="error">Ваше сообщение отправлено!</div>'
        const button = $(that).find('button')
        const propgress = button.find('.progress')
        //messages.insertAdjacentHTML('beforeend', message)
        button.prop('disabled', false);
        propgress.finish().css('width', '100%').parent().addClass('success')

        $(that).trigger('reset');
        setTimeout(function () {
          button.removeClass('success')
          propgress.css('width', 0)
        }, 2000)
      },
      error: function (error) {
        const button = $(that).find('button')
        const propgress = button.find('.progress')
        button.prop('disabled', false);
        propgress.finish().css('width', '100%').parent().addClass('error')
        setTimeout(function () {
          button.removeClass('error')
          propgress.css('width', 0)
        }, 2000)
      }
    });
  });

})()