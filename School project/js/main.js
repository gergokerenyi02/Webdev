let timer = setInterval(onLoad, 350);


function onLoad()
{
	
	var element1 = document.querySelector("#title");;
	var element2 = document.querySelector("#button");;
  var element3 = document.querySelector("#sub-title");
	var video1 = document.querySelector("video");;
	var video2 = document.querySelector("video");;

	element1.classList.add("fadein");
	element2.classList.add("fadein");
  element3.classList.add("fadein")
	video1.classList.add("fadein");
	video2.classList.add("fadein");


};