$(document).ready(function () {	
	$('.Shape').each(function(index) { 
		this.style.background = '#' + Math.random().toString(16).slice(2, 8); 
		});
});