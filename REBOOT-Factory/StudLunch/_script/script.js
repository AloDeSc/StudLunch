
var wheel1 = document.getElementsByClassName("wheel1"),
	section__list = document.getElementsByClassName("section__list");


		wheel1[0].addEventListener("click", function () {
		section__list[0].classList.toggle('section__list--list');
	
	});

var Bouton = document.getElementsByClassName ("footer"),
	Map = document.getElementById ("Map"),
	Liste = document.getElementById ("Liste");
	i = 1;
	
Bouton[0].addEventListener("click", function(){

	if(i==1){
		Map.classList.add("fadeout");
		Liste.classList.add("fadein");
		Map.classList.remove("fadein");
		Liste.classList.remove("fadeout");
		i=2;
	}
	else if(i==2)
	{
		Map.classList.add("fadein");
		Liste.classList.add("fadeout");
		Map.classList.remove("fadeout");
		Liste.classList.remove("fadein");
		i=1;
	}
	
});
