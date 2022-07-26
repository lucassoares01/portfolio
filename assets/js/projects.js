const projectsList = document.querySelector('.projects-area')
const filterWebSites = document.querySelector('#websites-filter')
const filterWebApps = document.querySelector('#webapps-filter')
const allFilter = document.querySelector('#all-filter')


const projects = [
    {
        image: './assets/images/gamingstore.png',
        name: 'Gaming Store',
        description: 'Web Aplcação de carrinho de compras com periféricos.',
        demo: 'https://gaming-storeweb.vercel.app',
        technologies: ['React', 'Styled-Components'],
        web: 'webapp'
    },
    {
        image: './assets/images/fornowebsite.png',
        name: 'Restaurante Forno',
        description: 'Website apresentando um restaurante chamador forno.',
        demo: 'https://restauranteforno.netlify.app',
        technologies: ['HTML', 'CSS', 'Javascript'],
        web: 'website'
    },
    {
        image: './assets/images/easybank.png',
        name: 'Easybank',
        description: 'Website de um banco virtual chamado easybank.',
        demo: 'https://easybankweb.netlify.app', 
        technologies: ['HTML', 'CSS', 'Javascript'],
        web: 'website'
    },
    {
        image: './assets/images/rentacarimage.png',
        name: 'Ridex',
        description: 'Website de uma empresa de aluguel de carros.',
        demo: 'https://ridexweb.vercel.app/', 
        technologies: ['React', 'Styled-Components',],
        web: 'website'
    },
    {
        image: './assets/images/campiodesktop.png',
        name: 'Camp.in Login',
        description: 'Tela de login para complementar um site de camping.',
        demo: 'https://camp-login.netlify.app', 
        technologies: ['HTML', 'CSS', 'Javascript'],
        web: 'website'
    },
    {
        image: './assets/images/devnotes.png',
        name: 'DevNotes',
        description: 'Webapp de notas com CRUD completo.',
        demo: 'https://devnotesweb.vercel.app/', 
        technologies: ['React', 'Styled-Components'],
        web: 'webapp'
    },
    {
        image: './assets/images/financesapp.png',
        name: 'My Finances',
        description: 'Webaplicação de controle de finanças pessoais',
        demo: 'https://myfinancesweb.netlify.app', 
        technologies: ['HTML', 'CSS', 'Javascript'],
        web: 'webapp'
    },
    {
        image: './assets/images/calcimgreact.png',
        name: 'Calculadora de IMC',
        description: 'Webaplicação para calcular o IMC',
        demo: 'https://imccalculator.vercel.app', 
        technologies: ['React', 'CSS'],
        web: 'webapp'
    },
    {
        image: './assets/images/dashboard1.png',
        name: 'Mixtar Dashboard',
        description: 'Dashboard de administrador para uma empresa de vendas.',
        demo: 'https://mixtaradmin.netlify.app',
        technologies: ['HTML', 'CSS', 'Javascript'],
        web: 'website'
    },
    {
        image: './assets/images/weatherApp.png',
        name: 'Weather App',
        description: 'Webaplicação de clima consumindo a Openweather API.',
        demo: 'https://weatherappls.netlify.app', 
        technologies: ['HTML', 'CSS', 'Javascript'],
        web: 'webapp'
    },
    {
        image: './assets/images/moviesearch.png',
        name: 'Movieek',
        description: 'Webaplicação de busca de filmes consumindo a TMDB API.',
        demo: 'https://movieek.netlify.app', 
        technologies: ['HTML', 'CSS', 'Javascript'],
        web: 'webapp'
    }
]

const addProjetcsIntoDOM = ( data ) =>{
    projectsList.innerHTML += `
    <div class="project">
					<div class="project-image">
						<img src="${data.image}" width="400px">
					</div>
					<div class="project-name">
                        ${data.name}
					</div>
					<div class="project-description">
                        ${data.description}
					</div>
					<div class="project-technologies">
						${data.technologies.join(' / ')}
					</div>
					<a href="${data.demo}" target='_blank' class="project-demo">
						Demo
					</a>
				</div>
    `
}

let init = () =>{
    projectsList.innerHTML = ''
    projects.forEach(addProjetcsIntoDOM)
}

init()

filterWebSites.addEventListener('click', ()=>{
    projectsList.innerHTML = ''
    let onlyWebSites = projects.filter((project) =>{
        return project.web === 'website'
    })
    onlyWebSites.forEach(addProjetcsIntoDOM)
})

filterWebApps.addEventListener('click', ()=>{
    projectsList.innerHTML = ''
    let onlyWebApps = projects.filter((project) =>{
        return project.web === 'webapp'
    })
    onlyWebApps.forEach(addProjetcsIntoDOM)
})

allFilter.addEventListener('click', ()=>{
    init()
})
