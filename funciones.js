
document.getElementById("burguer__menu").addEventListener("click", myFunction);


function myFunction() {
    var x = document.getElementById("pages__navbar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

