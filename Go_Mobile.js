var my_Mobile_Script = document.createElement("script");
my_Mobile_Script.type = "text/javascript";
my_Mobile_Script.src = "http://johnpolacek.github.io/stacktable.js/stacktable.js";
$("head").append(my_Mobile_Script);

var my_Mobile_Stylesheet = document.createElement("link"); 
my_Mobile_Stylesheet.rel = "stylesheet";
my_Mobile_Stylesheet.type = "text/css";
my_Mobile_Stylesheet.href = "http://johnpolacek.github.io/stacktable.js/stacktable.css";
$("head").append(my_Mobile_Stylesheet);

var x = $('table');
x.stacktable();