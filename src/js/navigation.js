//
// function getRelatedContent(el) {
//   return $($(el).attr('href'))
// }
//
// function getRelatedNavigation(el) {
//   return $('#menu a[href=#' + $(el).attr('id') + ']')
// }
//
// $('#menu a').on('click', function(e) {
//   e.preventDefault()
//   $('html,body').animate({
//     scrollTop: getRelatedContent(this).offset().top - 30,
//   })
// })
//
// var wpDefaults = {
//   context: window,
//   continuous: true,
//   enabled: true,
//   horizontal: false,
//   offset: 0,
//   triggerOnce: false,
// }
//
// $('section').waypoint(
//   function() {
//     getRelatedNavigation(this).toggleClass('active')
//   },
//   {
//     offset: '90%',
//   }
// )
