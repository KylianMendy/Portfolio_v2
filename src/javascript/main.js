
const projects = document.getElementById('projects');
const allProjects = document.querySelectorAll('.projects__name li');
const allPrjctBis = [...allProjects];

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
  project.addEventListener('mouseover', project => setBackground(project) )
});

let test; 

const setBackground = ({target})=>{

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
  projects.style.backgroundImage = `url(${background})`;
}

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

