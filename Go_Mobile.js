var my_Is_Busy = false ; 
$("body").bind("DOMSubtreeModified", function() {
var x = $('table');
	if(! my_Is_Busy && x.length > 0){
		my_Is_Busy = true ; 
		console.log(x);

		/////////////////////////////////////////////////
		var my_Mobile_Stylesheet = document.createElement("link"); 
		my_Mobile_Stylesheet.rel = "stylesheet";
		my_Mobile_Stylesheet.type = "text/css";
		my_Mobile_Stylesheet.href = "http://johnpolacek.github.io/stacktable.js/stacktable.css";
		$("head").append(my_Mobile_Stylesheet);
		/////////////////////////////////////////////////
		$.getScript( "http://johnpolacek.github.io/stacktable.js/stacktable.js", function( data, textStatus, jqxhr ) {
		  console.log( data ); // Data returned
		  console.log( textStatus ); // Success
		  console.log( jqxhr.status ); // 200
		  console.log( "Load was performed." );
		  $('table').stacktable()
		});
		/////////////////////////////////////////////////
	}
});