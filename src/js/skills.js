;(function() {
  const skillsElement = document.getElementById('skills')
  const skills = {
    'Języki programowania': {
      'HTML/HTML5': 7,
      'CSS/CSS3': 7,
      JavaScript: 4,
      PHP: 3,
    },
    'Narzędzia': {
      'Sass/LESS': 6,
      Bootstrap: 6,
      Foundation: 5,
      Git: 5,
      Gulp: 4,
      'Adobe Photoshop': 4,
    },
    'Umiejętności komunikacyjne': {
      Polski: 5,
      Angielski: 3,
      Ukraiński: 8,
      Rosyjski: 8,
    }
  }

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

  renderSkillsGroups(skills)

})()