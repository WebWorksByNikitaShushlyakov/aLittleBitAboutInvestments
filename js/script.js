const blocks_cover = document.querySelectorAll('.blocks_cover');
var windowHeight = document.documentElement.clientHeight;
for(let i=0; i<blocks_cover.length; i++){blocks_cover[i].style.cssText = `height: ${windowHeight}px;`}
const main_wrapperPhon1 = document.querySelector('.phon1');
main_wrapperPhon1.style.cssText = `height: ${windowHeight}px; top: ${windowHeight}px;`
const main_wrapperPhon2 = document.querySelector('.phon2');
main_wrapperPhon2.style.cssText = `height: ${windowHeight}px; top: ${3*windowHeight}px;`
const main_wrapperPhon3 = document.querySelector('.phon3');
const main_wrapper = document.querySelector('.main_wrapper');
main_wrapper.style.cssText = `height: ${5*windowHeight}px`

var scrollY = window.pageYOffset;
var pageHeight = document.documentElement.scrollHeight;
const progressIndicator = document.querySelector('.progress_indicator');
const progressBlock = document.querySelector('.progress_block img');
var maxScroll = 0;
const menu_wrapper = document.querySelector('.menu_wrapper');
const progress_bar = document.querySelector('.progress_bar');

window.addEventListener("scroll", function(){
  var scrollY = window.pageYOffset;
  pageHeight = document.documentElement.scrollHeight;
  windowHeight = document.documentElement.clientHeight;
  var progresY = scrollY/ ((pageHeight-windowHeight)/100);
  progressIndicator.style.cssText = `width: ${progresY}%;`;
  progressBlock.style.cssText = `transform: rotate(${progresY*3.6}deg);`;
  if (maxScroll<scrollY){maxScroll=scrollY};
  if (scrollY<maxScroll){
                          menu_wrapper.classList.add('menu_open');
                          maxScroll=scrollY;
                        }
                        else{
                          if(menu_wrapper.classList.contains('menu_open')){
                            menu_wrapper.classList.remove('menu_open');
                          };}
})

const clickToUp = document.querySelector('.progress_block');
clickToUp.onclick = function(){window.scrollTo({top: 0,behavior: 'smooth'});}

const phonElem = document.querySelector('.phon_body');
var valueProgresPhon = 0;
function animPhon(){
  if (valueProgresPhon==-500){
                              valueProgresPhon=0;
                              phonElem.classList.add('phon_elemLast');
                            }else{phonElem.classList.remove('phon_elemLast');};
  phonElem.style.cssText = `left: ${valueProgresPhon}%;`;
  valueProgresPhon=valueProgresPhon-100;
}
setInterval(animPhon, 7000);

const block4_butBody = document.querySelector('.block4_buttons_body');
const block4_butsAll = block4_butBody.querySelectorAll('.block4_buttons_body >div');
const block5_bodyAll = document.querySelectorAll('.block5_body >div');
const block5_close = document.querySelector('.block5_close');
block4_butBody.onclick = function(event){
  if (event.target != block4_butBody){
    for(let i = 0; i<3; i++){
        if(event.target==block4_butsAll[i]){
          block5_close.classList.remove('block5_close');
          block4_butsAll[i].classList.add('butIsActived');
          block5_bodyAll[i+1].style.cssText = `display:block;`
          main_wrapperPhon3.style.cssText = `display:block; height: ${windowHeight}px; top: ${5*windowHeight}px;`}
          else {block5_bodyAll[i+1].style.cssText = `display:none;`;
                block4_butsAll[i].classList.remove('butIsActived');}
    }
    block5_close.scrollIntoView({behavior: "smooth", block: 'start'});
  }
}

//Сёрфинг-----------------------------------------------------
const menu_surf = document.querySelector('.menu_surf');
const menu_surfAll = menu_surf.children;
const blockHi = document.querySelector('.block_hi');
const block_collection = document.querySelectorAll('.blocks_cover');
menu_surf.onclick = function(event){
  if(event.target == menu_surfAll[0])blockHi.scrollIntoView({behavior: "smooth", block: 'start'});
  if(event.target == menu_surfAll[1])block_collection[0].scrollIntoView({behavior: "smooth", block: 'start'});
  if(event.target == menu_surfAll[2])block_collection[1].scrollIntoView({behavior: "smooth", block: 'start'});
  if(event.target == menu_surfAll[3])block_collection[3].scrollIntoView({behavior: "smooth", block: 'start'});
  if(event.target == menu_surfAll[4])block_collection[5].scrollIntoView({behavior: "smooth", block: 'start'});
}

const forMobil = document.querySelector('.forMobil');
// const menu_wrapper = document.querySelector('.menu_wrapper');
const menu_surf_elements = document.querySelector('.menu_surf');
forMobil.onclick = function(){
  menu_wrapper.classList.toggle('menu_swiped');
  forMobil.classList.toggle('forMobilIsOpen');
  menu_surf_elements.classList.toggle('menu_surf_Ready');
}
// loader
function openChields(){
  loader.style.cssText = `display: none;`
  body.style.cssText = `overflow: visible;`
}
const body = document.querySelector('body');
const loader = document.querySelector('.loader');
setTimeout(function(){
  loader.style.cssText = `opacity: 0;`
  setTimeout(openChields, 1000);
  blockHi.scrollIntoView({block: 'start'});
  setTimeout(watching, 1000);
},2000);

const textStyleCollection = document.querySelectorAll('.textStyle');
function watching(){
  var scrollY;
  let r=0.6, i=0;
  windowHeight = document.documentElement.clientHeight;
  window.addEventListener('scroll', function(){
    scrollY = window.pageYOffset;
    if (scrollY>windowHeight*r){p(i); r++; i++}
      function p(i){
        let collectionP = textStyleCollection[i].querySelectorAll('p');
        for (let j=0; j<collectionP.length; j++){
          collectionP[j].style.cssText = `opacity: 1; transition-delay: ${j*0.1}s;`;

          if (i==2){
            const liCollection = textStyleCollection[2].querySelectorAll('ul li');
            for(let j2=0; j2<liCollection.length; j2++){
              liCollection[j2].style.cssText = `opacity: 1; transition-delay: ${j2*0.1}s;`;
            }
          }
        }
      }
    }
  )
}
