;(function() {
  const skillsElement = document.getElementById('skills')
  const jobElement = document.getElementById('job')
  const educationElement = document.getElementById('education')
  const portfolioElement = document.getElementById('portfolio')
  const skills = {
    'Programming languages': {
      'HTML/HTML5': 6,
      'CSS/CSS3': 6,
      JavaScript: 3,
      PHP: 3,
    },
    Tools: {
      'Sass/LESS': 6,
      Bootstrap: 6,
      Foundation: 5,
      Git: 5,
      Gulp: 4,
      'Adobe Photoshop': 4,
    },
    'Comunication skills': {
      Polski: 5,
      Angielski: 3,
      Ukraiński: 8,
  }
  }
  const jobs = [
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
  const myWorks = [
    {
      name: '2040 Taxi',
      link: 'http://2040.com.ua/',
      img: '../assets/images/2040.jpg',
      desc: 'Szybka taksówka towarowa'
    },
    {
      name: 'Arbat',
      link: 'http://arbat-t.ru/',
      img: '../assets/images/arbat.jpg',
      desc: 'Drukarnia'
    },
    {
      name: 'Mamimu',
      link: 'http://mamimu.com.ua/',
      img: '../assets/images/mamimu.jpg',
      desc: 'Sklep internetowy ubrań dla dzieci'
    },
    {
      name: 'Monolit',
      link: 'http://monolith.in.ua/',
      img: '../assets/images/monolit-3.jpg',
      desc: 'Literatura dla kierowców'
    },
  ]

  function renderSkillsGroups(skills) {
    let result = ''
    for (let key in skills) {
      result +=`
        <div class="c-skills__group">
            <div class="c-skills__group-title">${key}</div>
            <div class="c-skills__items">${renderSkills(skills[key])}</div>
        </div>`
    }

    skillsElement.insertAdjacentHTML('beforeend', result)
  }

  function renderSkills (skills) {
    let result = ''
    for (let key in skills) {
      result += `
            <div class="c-skills__item">
                <div class="c-skills__name">${key}</div>
                <div class="c-skills__level">${renderLevel(skills[key])}</div>
            </div>`
    }
    return result
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
            <div class="c-timeline__year">${item.year ? item.year : ''}</div>
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

  function renderPortfolio(portfolio) {
    let result = ''

      portfolio.forEach(function(item) {
        result += `
            <div class="c-portfolio__item" style='background-image: url("${item.img}")'>
                <div class="c-portfolio__info">
                  <div class="c-portfolio__name">${item.name ? item.name : ''}</div>
                  <div class="c-portfolio__desc">${item.desc ? item.desc : ''}</div>
                  <a class="c-portfolio__link" href="${item.link ? item.link : ''}" target="_blank">
                     ${'więcej'} 
                  </a>
                </div>
            </div>`
        })
    portfolioElement.insertAdjacentHTML('beforeend', result)
  }

  renderSkillsGroups(skills)

  jobElement.insertAdjacentHTML('beforeend', renderTimeline(jobs))
  educationElement.insertAdjacentHTML('beforeend', renderTimeline(education))

  renderPortfolio(myWorks)
})()

