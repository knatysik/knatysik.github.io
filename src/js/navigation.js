
function getRelatedContent(el) {
  return $($(el).attr('href'))
}

$('#menu a').on('click', function(e) {
  e.preventDefault()
  $('html,body').animate({
    scrollTop: getRelatedContent(this).offset().top - 30,
  })
})

var wpDefaults = {
  context: window,
  continuous: true,
  enabled: true,
  horizontal: false,
  offset: 0,
  triggerOnce: false,
}

$('section')
  .waypoint(function(direction) {
    if (direction === 'up') return
    $('.c_menu a').removeClass('active')
    $('.c_menu a[href="#'+this.element.id+'"]').addClass('active')

    if (this.element.id === 'contact-section') {
      $(this.element).find('input').first().focus()
    }
  }, {
    offset: '90%'
  })

$('section')
  .waypoint(function(direction) {
    if (direction === 'down') return
    $('.c_menu a').removeClass('active')
    $('.c_menu a[href="#'+this.element.id+'"]').addClass('active')
  }, {
    offset: 0
  })

