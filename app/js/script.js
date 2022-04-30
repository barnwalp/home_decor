console.log('test');
let figures = document.querySelectorAll('.section-column-photo');
let images = document.querySelectorAll('.section-column-photo img');
let buttons = document.querySelectorAll('.btn');

function filterSelection(element, button) {
  for (let i=0; i<buttons.length; i++) {
    buttons[i].classList.remove('active');
    // if(buttons[i].className == button) {
    //   buttons[i].classList.add('active');
    // }
  }
  element.classList.add('active');
  if(button == "all") {
    for(let i=0; i<images.length; i++) {
      figures[i].classList.add('show');
      figures[i].classList.remove('hide');
    }  
  } else{
    for(let i=0; i<images.length; i++) {
      figures[i].classList.remove('show');
      figures[i].classList.add('hide');
      if(images[i]['alt'].indexOf(button) != -1) {
        console.log()
        figures[i].classList.add('show');
        figures[i].classList.remove('hide');
      }
    }
  }
}