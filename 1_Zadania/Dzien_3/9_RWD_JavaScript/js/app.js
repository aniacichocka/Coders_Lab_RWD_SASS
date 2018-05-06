document.addEventListener("DOMContentLoaded", function(event) {
	var btnMenu = document.getElementById("menu-trigger");
	var menu = document.getElementsByClassName("menu")[0];

	btnMenu.addEventListener("click", function() {
		menu.classList.toggle("element-hidden");
	});

	var mobile = window.matchMedia("screen and (max-width: 320px)");
	sizeChanged(mobile.matches);
	mobile.addListener(function(mobile) {
		sizeChanged(mobile.matches);
	});

	function sizeChanged(isSmall) {
		if (isSmall) {
			btnMenu.classList.remove("element-hidden");
			menu.classList.add("element-hidden");
		} else {
			btnMenu.classList.add("element-hidden");
			menu.classList.remove("element-hidden");
		}
	}
});
