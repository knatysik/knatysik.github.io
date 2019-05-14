; (function () {
  const portfolioElement = document.getElementById('portfolio')

  const myWorks = [
    {
      name: '2040 Taxi',
      link: 'http://2040.com.ua/',
      img: 'images/2040.jpg',
      desc: 'Szybka taksówka towarowa'
    },
    {
      name: 'Slavsport',
      link: 'https://www.slavsport.ru/',
      img: 'images/slavsport.jpg',
      desc: 'Sklep internetowy dla sportowców'
    },
    {
      name: 'AH Amidora Horsemenship',
      link: 'https://ah-instruktor.pl/',
      img: 'images/joga-konie.jpg',
      desc: 'Joga i konie'
    },
    {
      name: 'Monolit',
      link: 'http://monolith.in.ua/',
      img: 'images/monolit.jpg',
      desc: 'Literatura dla kierowców'
    },
  ]

  function renderPortfolio(portfolio) {
    let result = ''

    portfolio.forEach(function (item) {
      result += `
            <div class="c-portfolio__item" style='background-image: url("${item.img}")'>
                <div class="c-portfolio__info">
                  <div class="c-portfolio__text">
                    <div class="c-portfolio__name">${item.name ? item.name : ''}</div>
                    <div class="c-portfolio__desc">${item.desc ? item.desc : ''}</div>
                  </div>
                  <a class="c-portfolio__link" href="${item.link ? item.link : ''}" target="_blank">
                    ${'więcej'} 
                  </a>
                </div>
            </div>`
    })
    portfolioElement.insertAdjacentHTML('beforeend', result)
  }

  renderPortfolio(myWorks)
})()

