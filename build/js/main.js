/**
 * Created by natusya on 11.02.18.
 */
;(function() {
  const skillsElement = document.getElementById('skills')
  const experienceElement = document.getElementById('experience')
  const educationElement = document.getElementById('education')
  const skills = {
    'HTML/HTML5': 6,
    'CSS/CSS3': 6,
    JavaScript: 3,
    PHP: 3,
    'Sass/LESS': 6,
    Bootstrap: 6,
    Foundation: 5,
    Git: 5,
    Gulp: 4,
  }
  const experience = [
    {
      year: 'paź 2012 – kwi 2014',
      place: 'Webimperia',
      position: 'front - end developer',
      responsibility:
        'Brałem udział w optymalizacji stron internetowych.Pracowała z takimi cms jak Diafan, Drupal i inni.',
    },
    {
      year: 'kwi 2014 – lip 2014',
      place: 'WebRussia',
      position: 'front - end developer',
      responsibility:
        'Głównym zadaniem było stworzenie warstw z psd w Wordpress i OpenCart.',
    },
    {
      year: 'lip 2014 – sty 2015',
      place: 'PromoPage',
      position: 'front - end developer',
      responsibility:
        'Głównym zadaniem było stworzenie warstw z psd w Wordpress i OpenCart.',
    },
  ]
  const education = [
    {
      year: 2006,
      place: 'ukończyłam szkołę',
    },
    {
      year: '2007 - 2013',
      place: 'National Technical University "Kharkiv Polytechnic Institute"',
      position: "Master's degree, social informatics",
    },
  ]

  function renderSkills(skills) {
    let result = ''
    for (let key in skills) {
      result += `
            <div class="c-skills__item">
                <div class="c-skills__name">${key}</div>
                <div class="c-skills__level">${renderLevel(skills[key])}</div>
            </div>`
    }
    skillsElement.insertAdjacentHTML('beforeend', result)
  }

  function renderLevel(value) {
    const length = 8
    let result = ''

    for (let i = 0; i < length; i++) {
      if (i < value) {
        result += `<div class="fill"></div>`
      } else {
        result += `<div></div>`
      }
    }
    return result
  }

  function renderTimeline(data) {
    let result = ''

    data.reverse().forEach(function(item) {
      result += `
          <div class="c-timeline__item">
            <div class="c-timeline__year">
              <h5 class="c-timeline__interval">${
                item.year ? item.year : ''
              }</h5>
            </div>
            <div class="c-timeline__work">
              <h3 class="c-timeline__place">${item.place ? item.place : ''}</h3>
              <h4 class="c-timeline__position">${
                item.position ? item.position : ''
              }</h4>
              <div class="c-timeline__responsibility">${
                item.responsibility ? item.responsibility : ''
              }</div>
            </div>
          </div>`
    })
    return result
  }

  renderSkills(skills)

  experienceElement.insertAdjacentHTML('beforeend', renderTimeline(experience))
  educationElement.insertAdjacentHTML('beforeend', renderTimeline(education))
})()
