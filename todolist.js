function add(){
    var y=document.createElement("ul")
    var x=document.getElementById("iv").value
    y.append(x)
    z=document.getElementById("ele")
    z.appendChild(y)
    var d=document.createElement("span")
    var dv=document.createTextNode("Del")
    d.appendChild(dv)
    document.getElementById("ele").appendChild(d)
    d.addEventListener('click', () => {
        z.removeChild(y);
        z.removeChild(d);
      });
      z.addEventListener('click', () => {
        z.style.textDecoration = 'line-through'
      });
      
}

function clo(){

}