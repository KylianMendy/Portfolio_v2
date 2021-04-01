
const projects = document.getElementById('projects');
const allProjects = document.querySelectorAll('.projects__name li');
const allPrjctBis = [...allProjects];
const projectText = document.getElementById('project_text');

const tabl = [{name:'colors', content:'Lancement d’un projet perso sur la création d’une application pour le célèbre studio d’enregistrement Colors studio qui met en avant de nombreux artistes de notre génération. Ce projet m’a permis de faire mes premiers pas dans le monde du web design. J’ai voulu [...]' }, 

{name:'moode', content:'Moode est un projet que j’ai réalisé dans le cadre d’un projet d’école avec d’autres étudiants, le sujet était la création d’un site avec un produit/article ultra personnalisable.Ce sujet très vaste nous a orienté vers la thématique du textile [...]' }, 

{name:'nike', content:'Design d une landing page pour la marque Nike dans le cadre de la sortie de la Nike SB dunk low Travis Scott  ( qui a fait beaucoup de bruit sur les réseaux ! ) et inspiré directement de cette dernière. Projet réalisé exclusivement avec Figma [...]' },

{name:'tnf', content:'Ce projet a pour but la mise en avant d’une marque et d un produit lors de sa sortie J ai choisi un article de la marque The North Face qui me parlait tout en respectant la mise en forme et les informations présentes sur le site original. J’ai utilisé [...]'},

{name:'sf', content:'Street Food est l’un de mes projets favoris ! En effet j’ai pris beaucoup de plaisir à réaliser le design de ce webdocumentaire. Celui-ci rentre dans le cadre d un projet scolaire en groupe avec choix du thème. Nous avons choisi un sujet très en vogue en ce moment : la “Street Food” [...]' },

{name:'primitiv', content:'Primitiv est un projet qui me semblait nécessaire d’avoir dans mon catalogue de créations car c’est une application d’achat de vêtements en ligne, un indispensable de nos jours.Le challenge que je me suis fixé sur le projet est [...]' },

{name:'player', content:'Mon objectif était de créer une plateforme de streaming musical inspirée principalement des géants Spotify et Deezer. Il me fallait reprendre les codes qu’elles utilisent (le système de like, favoris, recherche, playlist etc..) tout en ajoutant une nouvelle feature. J’ai réalisé ce projet [...]' },

{name:'bene', content:'Béné Paramédical est une société constitué de spécialiste dans l’orthopédie générale et dans le conseil et la vente de matériel médical. Le site que possedait cette société était dépassé et avait besoin d’une refonte complète. Suite a cela, je me suis associé avec un collègue pour proposer une nouvelle version du site [...]' },

{name:'autres', content:'Voici ci-dessous d’autres projets que j’ai réalisé qui sont liés de loin ou de près a l’univers du web design . Ces différents travaux m’ont permis de gagner compétence sur différents logiciels et d’exprimer ma créativité [...]!' }
]

import colors_bg from "../assets/backgroundhome.png"
import moode_bg from "../assets/backgroundhome2.png"
import nike_bg from "../assets/nikebg.png"
import sf_bg from "../assets/backgroundhomesf.png"
import tnf_bg from "../assets/backgroundhometnf.png"
import primitiv_bg from "../assets/backgroundhomeprim.png"
import player_bg from "../assets/backgroundhomeplayer.png"
import bene_bg from "../assets/backgroundhomebene.png"
import autre_bg from "../assets/backgroundhomeautre.png"



let background;

allPrjctBis.map(project => {
  project.addEventListener('mouseover', project => setProject(project) )
});


const setText = (target) =>{
   const item = tabl.find(e => e.name === target.id)
   projectText.innerText = item.content

}

const setBackground = (target)=>{

  switch(target.id){
    case 'colors':
      background = colors_bg 
      break;
    case 'moode':
      background = moode_bg 
      break;
    case 'nike':
      background = nike_bg;
      break;
    case  'tnf':
      background = tnf_bg;
      break;
    case  'sf':
      background = sf_bg;
      break;
    case  'primitiv':
      background = primitiv_bg;
      break;
    case  'player':
      background = player_bg;
      break;
    case  'bene':
      background = bene_bg;
      break;
    case  'autres':
      background = autre_bg;
      break;
  }
  projects.style.backgroundImage = `url(${background})`
  
}

const setProject = ({target}) => {
  setBackground(target);
  setText(target);
}









//contact

const contact = document.getElementById('contact')
const ContactButton = document.getElementById('opencontact')

contact.style.display === "none";

ContactButton.addEventListener('click',function(){

  if (contact.className === "contactclose") {
    contact.className = "contact";
  } else {
    contact.className = "contactclose";
  }
})



//parallax

// document.addEventListener('mousemove',parallax);
// function parallax(e){
//   this.querySelector('.wavebghome').array.forEach(layer => {
//     const speed = layer.getAttribute('data-speed')

//     const x = (window.innerWidth - e.pageX*speed)
//     const y = (window.innerHeight - e.pageY*speed)

//     layer.style.transform = `translateX(${x}px) translateY(${y}px)`
//   });
// }