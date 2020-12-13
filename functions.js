document.addEventListener('DOMContentLoaded', init)
	
function init() {
	document.getElementById('start').addEventListener('click', roll);
	
}
	var zustand = 0
	var zeitms = 0
	var ausgabe = ""
	var erlaubt = false


function roll() {
	
	var anzahl = Number(document.getElementById('person').value)
	var output = document.getElementById('output')

	var offset = 1/anzahl
	

if (Notification.permission !== 'denied') {  Notification.requestPermission(function (permission){if (Notification.permission === "granted") {erlaubt = true};})};
 

	
	setTimeout(function()
	{
		switch (zustand)
	{
		case 0:
		zeitms = 6000*60*offset
		ausgabe="Fenster geschlossen"
		zustand = 1
		break;
		
		case 1:
		zeitms = 1500
		ausgabe="Fenster öffnen!"
		if (erlaubt){var notification = new Notification(" ",{body:" Lüften \n \n"  })};
		zustand = 2
		break;
		
		case 2:
		zeitms = 6000*5
		ausgabe="Fenster offen!"
		zustand = 3
		break;
		
		case 3:
		zeitms = 1500
		ausgabe="Fenster schließen"
		if (erlaubt){var notification = new Notification(" ",{body:" Fenster schließen \n \n"  }};
		zustand = 0
		break;
	}
	output.value = ausgabe
	roll();
	}, zeitms);
	
	
}



