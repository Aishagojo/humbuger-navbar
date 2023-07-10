let searchBtn  = document.getElementById("searchbtn")
let closeBtn = document.getElementById("closebtn")
let Searchbox = document.querySelector(".searchbox")
let navbar = document.querySelector(".navbar");
let menuToggle = document.getElementById('menu')
let header  = document.querySelector("header")


searchBtn.onclick = function() {
    Searchbox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
    menuToggle.classList.add('hide');
    menu.style.display = 'none'; 
    
  
};

closeBtn.onclick = function() {
    Searchbox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
    menuToggle.classList.remove('hide');
    menu.style.display = 'block'; 

   
};

menuToggle.onclick = function() {
    header.classList.toggle('open');
    Searchbox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
    menuToggle.classList.add('hide');
    menu.style.display = 'block'; 
};
