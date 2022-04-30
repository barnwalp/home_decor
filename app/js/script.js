console.log('test');
let figures = document.querySelectorAll('.section-column-photo');
let images = document.querySelectorAll('.section-column-photo img');

function filterSelection(button) {
  if(button == "all") {
    for(let i=0; i<images.length; i++) {
      figures[i].classList.add('show');
    }  
  } else{
    for(let i=0; i<images.length; i++) {
      figures[i].classList.remove('show');
      if(images[i]['alt'].indexOf(button) != -1) {
        console.log()
        figures[i].classList.add('show');
      }
    }
  }
}