const html = document.querySelector('html')
const skillCards = document.querySelectorAll('.skill-card')
const skillName = document.querySelector('.skill-name')
const backToTop = document.querySelector('.to-top')
const menuButton = document.querySelector('#menu-button')
const menu = document.querySelector('header ul')
const links = document.querySelectorAll('header ul li')


//Skill Cards
skillCards.forEach((card)=>{
    let getAttributes = () =>{
        let name = card.getAttribute('data-name')
        skillName.innerHTML = name
    }
    card.addEventListener('mouseover', getAttributes)
    card.addEventListener('click', getAttributes)
})
//Skill Cards


//Back to top Button
window.addEventListener('scroll', ()=>{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTop.style.display = "flex";
    
    } else {
        backToTop.style.display = "none";
    }
})
//Back to top Button


//Menu Button
menuButton.addEventListener('click', ()=>{
    menu.classList.toggle('active-menu')
    
    if(menuButton.classList.contains('fa-bars')){
        menuButton.classList.replace('fa-bars', 'fa-times')
        backToTop.style.opacity = '0'
        backToTop.style.pointerEvents = 'none'
    
    } else {
        menuButton.classList.replace('fa-times', 'fa-bars')
        backToTop.style.opacity = '1'
        backToTop.style.pointerEvents = 'all'
    }
})
//Menu Button

//Links
links.forEach((link)=>{
    link.addEventListener('click', ()=>{
        menu.classList.toggle('active-menu')
        html.style.overflow = 'visible'
        menuButton.classList.replace('fa-times', 'fa-bars')
        backToTop.style.opacity = '1'
        backToTop.style.pointerEvents = 'all'
    })
})
//Links
