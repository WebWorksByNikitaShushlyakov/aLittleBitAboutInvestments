const text = document.querySelector('.text');
const textChieldAll = text.children;
function openChields(){
  for(let i=0; i<textChieldAll.length; i++){
      textChieldAll[i].style.cssText = `opacity: 1; transition-delay: ${i*0.1}s`;
  }
  loader.style.cssText = `display: none;`
}
const loader = document.querySelector('.loader');
setTimeout(function(){
  loader.style.cssText = `opacity: 0;`
  setTimeout(openChields, 1500);
},3000);


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
