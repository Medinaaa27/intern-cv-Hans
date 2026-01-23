function toggleSection(id){
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}