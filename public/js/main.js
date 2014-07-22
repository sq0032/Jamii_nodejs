$(function(){
	//$( "#selectable" ).selectable();
	
	
	$(".selectable").selectable({
		selected: function (event, ui) {
			if ($(ui.selected).hasClass('click-selected')) {
				$(ui.selected).removeClass('ui-selected click-selected');

			} else {
				$(ui.selected).addClass('click-selected');

			}
		},
		unselected: function (event, ui) {
			if ($(ui.unselected).hasClass('click-selected')) {
				$(ui.unselected).addClass('ui-selected click-selected');
			}
				
			//$(ui.unselected).removeClass('click-selected');
			//alert($(ui.unselected).html());
		},
		selecting:function(event, ui){
			//if ($(ui.unselected).hasClass('click-selected'))
		}
	});
	
});