function singIn(){
    document.getElementById("div1").style.display = "block";
    document.getElementById("div2").style.display = "none";
    document.getElementById("joinJs").style.opacity = "0.5";
    document.getElementById("singJs").style.opacity = "1";
  };
  
function joinUs(){
    document.getElementById("div2").style.display = "block";
    document.getElementById("div1").style.display = "none";
    document.getElementById("joinJs").style.opacity = "1";
    document.getElementById("singJs").style.opacity = "0.5";
  };