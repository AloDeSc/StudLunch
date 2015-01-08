
var wheel1 = document.getElementsByClassName("wheel1"),
	section__list = document.getElementsByClassName("section__list");

		wheel1[0].addEventListener("click", function(){
		section__list[0].classList.add("section__list--list");
		section__list[0].classList.remove("section__list--map")
	});

var wheel2 =document.getElementsByClassName("wheel2"),
	section__list =document.getElementsByClassName("section__list");

		wheel2[0].addEventListener("click", function(){
		section__list[0].classList.add("section__list--map")
		section__list[0].classList.remove("section__list--list");
	});