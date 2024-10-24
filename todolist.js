function add(){
    var y=document.createElement("ul")
    var x=document.getElementById("iv").value
    y.append(x)
    y.className="a"
    y.setAttribute("onclick","ch(this)")
  
    z=document.getElementById("ele")
    z.appendChild(y)
    document.getElementById("iv").value=""
    var d=document.createElement("button")
    var dv=document.createTextNode("Del")
    d.appendChild(dv)
    document.getElementById("ele").appendChild(d)
    d.addEventListener('click', () => {
      z.removeChild(y);
      z.removeChild(d);
    });
    
}
var faith = true;

function ch(element){
  if(faith){
    element.style.textDecoration = 'line-through'
    faith = false;
  } else {
    element.style.textDecoration = 'none'
    faith = true;
  }
}



