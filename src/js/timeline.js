; (function () {
  const jobElement = document.getElementById('job')
  const educationElement = document.getElementById('education')

  const jobs = [
    {
      year: 'paź 2012 – kwi 2014',
      place: 'Webimperia',
      position: 'front - end developer',
      responsibility:
        'Na tym stanowisku byłam odpowiedzialna za przygotowanie warstwy frontendowej (HTML/CSS/JavaScript) dla stron internetowych.' +
        ' Pracowałam z takimi popularnymi CMS jak WordPress, OpenCart, Bitrix, Shop-script.',
    },
    {
      year: 'kwi 2014 – lip 2014',
      place: 'WebRussia',
      position: 'front - end developer',
      responsibility:
        'Głównym zadaniem było tworzenie szablonów do Wordpress i OpenCart na podstawie makiet graficznych.',
    },
    {
      year: 'lip 2014 – sty 2015',
      place: 'PromoPage',
      position: 'webmaster',
      responsibility:
        'Brałam udział w optymalizacji stron internetowych. Zajmowałam się przygotowaniem layoutów. ' +
        ' Pracowałam z takimi CMS jak Diafan, Drupal i inni.',
    },
    {
      year: '2016 – teraz',
      place: 'freelance',
      position: 'front-end developer',
      responsibility:
        '',
    },
  ]
  const education = [
    {
      year: 2006,
      place: 'Ukończyłam szkołę',
    },
    {
      year: '2007 - 2013',
      place: 'National Technical University "Kharkiv Polytechnic Institute"',
      position: "Master's degree, social informatics",
    },
  ]

  function renderTimeline(data) {
    let result = ''

    data.reverse().forEach(function (item) {
      result += `
          <div class="c-timeline__item">
            <div class="c-timeline__year">${item.year ? item.year : ''}</div>
            <div class="c-timeline__work">
              <h3 class="c-timeline__place">${item.place ? item.place : ''}</h3>
              <div class="c-timeline__position">${
        item.position ? item.position : ''
        }</div>
              <div class="c-timeline__responsibility">${
        item.responsibility ? item.responsibility : ''
        }</div>
            </div>
          </div>`
    })
    return result
  }

  jobElement.insertAdjacentHTML('beforeend', renderTimeline(jobs))
  educationElement.insertAdjacentHTML('beforeend', renderTimeline(education))
})()

