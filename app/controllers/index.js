// supported toasts.
var supportedToasts = ['success', 'error', 'info', 'warning'];

// bind rows
$.tableView.data = supportedToasts.map(function(name){
	return {title: name.toUpperCase(), hasChild: true};
});

// toast initial
$.toast = Alloy.createWidget('net.beyondlink.toast');
$.index.add($.toast.getView());

// bind row click event
$.tableView.on('click', function(e){
	var n = supportedToasts[e.index];
	$.toast[n](String.format('Toast message of %s.', n));
});

$.index.open();
