document.onmousemove = function(e){
      mouseX = e.clientX - sketch.offsetLeft
      mouseY = e.clientY - sketch.offsetTop
}
document.onmousedown = function(e){
  if(typeof(mousePressed) == 'function'){
    mousePressed()
  }
}

document.onmouseup = function(e){
    if(typeof(mouseRelease) == 'function'){
    mouseRelease()
  }
}