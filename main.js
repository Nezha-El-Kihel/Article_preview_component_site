document.querySelector(".share_btn").addEventListener("click", share_social);
var open_close = 2;
function share_social(e) {
	e.preventDefault();
	if (open_close%2 == 0) {	
		if (document.body.offsetWidth >= 800) {
			document.querySelector("#share_to").style.display = "block";
			document.querySelector("#share_to").classList.remove("min");
			document.querySelector("#share_to").classList.add("max");
			document.querySelector(".bottom-bot").style.display = "block";
		}
		else{
			document.querySelector("#share_to").style.display = "block";
			document.querySelector("#share_to").classList.add("min");
			document.querySelector("#share_to").classList.remove("max");
			document.querySelector(".bottom-bot").style.display = "none";
		}
	}
	else{
		document.querySelector("#share_to").style.display = "none";
	}
	open_close++;
}
