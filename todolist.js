var z;

function add() {
  var y = document.createElement("ul");
  var x = document.getElementById("iv").value;
  y.textContent = x;
  y.className = "a";
  y.setAttribute("onclick", "ch(this)");
  
  z = document.getElementById("ele");
  z.appendChild(y);
  document.getElementById("iv").value = "";
  
  var d = document.createElement("button");
  var dv = document.createTextNode("Del");
  d.appendChild(dv);
  z.appendChild(d);
  
  var e = document.createElement("button");
  var ev = document.createTextNode("Edit");
  e.appendChild(ev);
  z.appendChild(e);
  
  d.addEventListener('click', () => {
    z.removeChild(y);
    z.removeChild(d);
    z.removeChild(e);
  });
  
  e.addEventListener('click', () => editItem(y, e));
}

function editItem(item, editBtn) {
  var editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = item.textContent;
  item.style.display = "none";
  item.parentNode.insertBefore(editInput, item.nextSibling);
  
  var saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.addEventListener("click", () => {
    item.textContent = editInput.value;
    item.style.display = "block";
    editInput.remove();
    saveBtn.remove();
    editBtn.style.display = "block";
  });
  item.parentNode.insertBefore(saveBtn, item.nextSibling);
  
  editBtn.style.display = "none";
}

function ch(element) {
  element.style.textDecoration = element.style.textDecoration === "line-through" ? "none" : "line-through";
}

