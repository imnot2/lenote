$(function() {
	var queue = ['.d1', '.d4', '.d3', '.d5', '.d2', '.d6']
	var handler = setInterval(function() {
		var className = queue.splice(0, 1)[0]
		$(className).fadeIn('slow');
		if(!queue.length){
			clearInterval(handler);
		}
	}, 2000);
});