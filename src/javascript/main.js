

const projects = document.getElementById('projects');
const allprojects = document.querySelectorAll('.projects__name li')

let background;

allprojects.map(project =>{
  project.addEventListener('mouseover',setBackground(project));
  project.style.backgroundImage = `url(${background})`
})

const setBackground = (project)=>{

  switch(project){
    case project.id === 'moode':
      background = require('../assets/background_home2.png')
      break;
    case project.id === 'nike':
      background = require('../assets/nike_bg.png')
      break;
    case project.id === 'tnf':
      break;
    case project.id === 'sf':
      break;
    case project.id === 'primitiv':
      break;
    case project.id === 'player':
      break;
    case project.id === 'bene':
      break;
    case project.id === 'autres':
      break;
    default: 
    background = require('../assets/background_home.png') 
    break;
  }
}

