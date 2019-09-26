window.onload = function () {
var imgs = document.querySelectorAll(".banner .slide");
var img = document.querySelector(".banner .slide");
var current = document.querySelector('.current');
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var dots = document.querySelectorAll(".dot");
var overlays = document.querySelectorAll(".overlay");
var n;
var Inter;
var k=false;

dots.onclick = function (){
	Dot_Click();
}

imgs.onclick = function (){
	Slide_Forw();
}

next.onclick = function (){
	Slide_Forw();
}

prev.onclick = function (){
	Slide_Back();
}

current.addEventListener("mouseenter", function() {
var more = document.createElement ('div');
more.className = "more";
more.innerHTML = "<a href='#1'><b>Подробнее ></b></a>";
img.appendChild(more);
});

current.addEventListener("mouseleave", function() {
document.querySelector('.more').style.display = "none";
});

Inter = setInterval(Slide_Forw, 7000);

overlays.onmouseenter = function () {
	document.querySelectorAll(".overlay").style.opacity = ".7";
}
overlays.onmouseleave = function () {
	document.querySelectorAll(".overlay").style.opacity = "1";
}

function Slide_Forw () {
clearInterval(Inter);
	for(var i = 0; i < imgs.length; i++)
  {
  	if (imgs[i].classList.contains("current"))
    {
			dots[i].classList.remove("active");
			imgs[i].classList.remove("current");
      if (i < imgs.length - 1)
      {
      	imgs[i + 1].classList.add("current");
				dots[i + 1].classList.add("active");
      }
      else
      {
      	imgs[0].classList.add("current");
				dots[0].classList.add("active");
      }
      break;
    }
  }
Inter = setInterval(Slide_Forw, 7000);
}

function Slide_Back () {
clearInterval(Inter);
	for(var i = 0; i < imgs.length; i++)
  {
  	if (imgs[i].classList.contains("current"))
    {
    	imgs[i].classList.remove("current");
			dots[i].classList.remove("active");
      if (i < 1)
      {
				dots[imgs.length-1].classList.add("active");
      	imgs[imgs.length-1].classList.add("current");
      }
      else
      {
      	imgs[i-1].classList.add("current");
				dots[i-1].classList.add("active");
      }
      break;
    }
  }
Inter = setInterval(Slide_Forw, 7000);
}

}
