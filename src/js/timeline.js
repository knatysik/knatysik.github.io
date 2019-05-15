; (function () {
  const jobElement = document.getElementById('job')
  const educationElement = document.getElementById('education')

  const jobs = [
    {
      year: 'paź 2012 – kwi 2014',
      place: 'Webimperia',
      position: 'front - end developer',
      responsibility:
        'Przygotowanie warstwy frontendowej (HTML/CSS/JavaScript) dla stron internetowych.' +
        ' Praca z takimi popularnymi CMS jak WordPress, OpenCart, Bitrix, Shop-script.',
    },
    {
      year: 'kwi 2014 – lip 2014',
      place: 'WebRussia',
      position: 'front - end developer',
      responsibility:
        'Tworzenie szablonów do Wordpress i OpenCart na podstawie makiet graficznych.',
    },
    {
      year: 'lip 2014 – sty 2015',
      place: 'PromoPage',
      position: 'webmaster',
      responsibility:
        'Optymalizacja stron internetowych. Przygotowaniem layoutów. ' +
        ' Praca z takimi CMS jak Diafan, Drupal i inni.',
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
      year: 2004,
      place: 'Ukończenie szkoły podstawowej',
    },
    {
      year: '2004 - 2007',
      place: 'Ukończenie szkoły ponadgimnazjalnej rezerwy olimpijskiej',
    },
    {
      year: '2007 - 2013',
      place: 'Ukończenie studiów magisterskich, informatyka społeczna',
      position: 'National Technical University "Kharkiv Polytechnic Institute"',
    },
  ]

  function renderTimeline(data) {
    let result = ''

    data.reverse().forEach(function (item) {
      result += `
          <div class="c-timeline__item">
            <div class="c-timeline__year print-none">${item.year ? item.year : ''}</div>
            <div class="c-timeline__work">
              <h5>${item.year}</h5><h3 class="c-timeline__place">${item.place ? item.place : ''}</h3>
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

