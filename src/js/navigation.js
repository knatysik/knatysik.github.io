// ======================================
// Helper functions
// ======================================
// Get section or article by href
function getRelatedContent(el) {
  return $($(el).attr('href'))
}
// Get link by section or article id
function getRelatedNavigation(el) {
  return $('#menu a[href=#' + $(el).attr('id') + ']')
}

// ======================================
// Smooth scroll to content
// ======================================
$('#menu a').on('click', function(e) {
  e.preventDefault()
  $('html,body').animate({
    scrollTop: getRelatedContent(this).offset().top - 20,
  })
})

// ======================================
// Waypoints
// ======================================
// Default cwaypoint settings
// - just showing
var wpDefaults = {
  context: window,
  continuous: true,
  enabled: true,
  horizontal: false,
  offset: 0,
  triggerOnce: false,
}

$('section').waypoint(
  function() {
    getRelatedNavigation(this).toggleClass('active')
  },
  {
    offset: '90%',
  }
)
