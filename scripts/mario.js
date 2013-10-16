
$(document).ready(function () {		
	function setClass(row, startX, endX, className) {
		for (var i = startX; i <= endX; i++) {
			var selector = "div.Shape[row='" + row + "'][col='" + i+ "']";
			$(selector).addClass(className);			
		};		
	}

	function drawImage() {
		setClass(0, 3, 7, 'clothing');
		setClass(1, 2, 10, 'clothing');

		setClass(2, 2, 4, 'skin');
		setClass(2, 7, 7, 'skin');
		setClass(2, 5, 6, 'handsAndFace');
		setClass(2, 8, 8, 'handsAndFace');

		setClass(3, 1, 1, 'skin');
		setClass(3, 2, 2, 'handsAndFace');
		setClass(3, 3, 3, 'skin');
		setClass(3, 4, 6, 'handsAndFace');
		setClass(3, 3, 7, 'skin');
		setClass(3, 8, 10, 'handsAndFace');

		setClass(4, 1, 1, 'skin');
		setClass(4, 2, 2, 'handsAndFace');
		setClass(4, 3, 4, 'skin');
		setClass(4, 5, 7, 'handsAndFace');
		setClass(4, 8, 8, 'skin');
		setClass(4, 9, 11, 'handsAndFace');

		setClass(5, 1, 2, 'skin');
		setClass(5, 3, 6, 'handsAndFace');
		setClass(5, 5, 10, 'skin');

		setClass(6, 3, 9, 'handsAndFace');		
		setClass(7, 4, 4, 'clothing');
		
		setClass(7, 2, 3, 'skin');
		setClass(7, 5, 7, 'skin');
		setClass(8, 1, 3, 'skin');
		setClass(8, 4, 4, 'clothing');
		setClass(8, 5, 6, 'skin');
		setClass(8, 7, 7, 'clothing');
		setClass(8, 8, 10, 'skin');

		setClass(9, 0, 3, 'skin');
		setClass(9, 4, 7, 'clothing');
		setClass(9, 8, 11, 'skin');
		
		setClass(10, 0, 1, 'handsAndFace');
		setClass(10, 2, 2, 'skin');
		setClass(10, 3, 3, 'clothing');
		setClass(10, 8, 8, 'clothing');
		setClass(10, 4, 4, 'handsAndFace');
		setClass(10, 7, 7, 'handsAndFace');
		setClass(10, 9, 9, 'skin');
		setClass(10, 10, 11, 'handsAndFace');
		setClass(10, 5, 6, 'clothing');

		setClass(11, 0, 2, 'handsAndFace');
		setClass(11, 9, 11, 'handsAndFace');
		setClass(11, 3, 8, 'clothing');

		setClass(12, 0, 1, 'handsAndFace');
		setClass(12, 10, 11, 'handsAndFace');
		setClass(12, 2, 9, 'clothing');

		setClass(13, 2, 4, 'clothing');
		setClass(13, 7, 9, 'clothing');

		setClass(14, 1, 3, 'skin');
		setClass(14, 8, 10, 'skin');

		setClass(15, 0, 3, 'skin');
		setClass(15, 8, 11, 'skin');
	}	

	// Assign row and column numbers to each color box
	$('.row').each(function(rowIndex)  { 
			$(this).find('div.Shape').each(function(columnIndex)  { 
				$(this).attr('row', rowIndex); 
				$(this).attr('col', columnIndex);
			}); 
		});

	drawImage();	
});



