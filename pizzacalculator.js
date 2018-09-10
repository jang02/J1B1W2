/*
	Jan Garretsen
	Davinci Applicatie Ontwikkelaar
	Pizza calculator
*/

//vraagt de gebruiker hoeveel pizzas ze willen
var smallamount = parseInt(prompt('Hoeveel kleine pizzas wilt u?'));				
var mediumamount = parseInt(prompt('Hoeveel medium pizzas wilt u?'));
var largeamount = parseInt(prompt('Hoeveel grote pizzas wilt u?'));
//de prijzen van de pizzas
var small = 2.35;
var medium = 3.99;
var large = 5.99;
//rekent alles uit voor de gebruiker
var totalsmall = small * smallamount;
var totalmedium = medium * mediumamount;
var totallarge = large * largeamount;
var totalpizzas = totalsmall + totalmedium + totallarge;
//laat alle informatie op het scherm op een nette manier zien
document.writeln('Kleine pizzas: ' + smallamount);
document.writeln('Prijs per kleine pizza: €' + small);
document.writeln('Totaalprijs kleine pizzas: €' + totalsmall.toFixed(2));
document.writeln('<br />Medium pizzas: ' + mediumamount);
document.writeln('Prijs per medium pizza: €' + medium);
document.writeln('Totaalprijs medium pizzas: €' + totalmedium.toFixed(2));
document.writeln('<br />Grote pizzas: ' + largeamount);
document.writeln('Prijs per grote pizza: €' + large);
document.writeln('Totaalprijs grote pizzas: €' + totallarge.toFixed(2));
document.writeln('<br />Totaalprijs pizzas: €' + totalpizzas.toFixed(2));

//vraagt hoeveel drinken ze willen
var fantaamount = parseInt(prompt('Hoeveel fanta wilt u?'));
var colaamount = parseInt(prompt('Hoeveel cola wilt u?'));
var chocomelamount = parseInt(prompt('Hoeveel chocomel wilt u?'));

var fanta = 1.99
var cola = 1.49
var chocomel = 2.49

var totalfanta = fanta * fantaamount
var totalcola = cola * colaamount
var totalchocomel = chocomel * chocomelamount
var totaldrinks = totalchocomel + totalcola + totalfanta

document.writeln('<br />')
document.writeln('Fanta: ' + fantaamount);
document.writeln('Prijs per Fanta: €' + fanta);
document.writeln('Totaalprijs Fanta: €' + totalfanta.toFixed(2));
document.writeln('<br />Chocomel: ' + chocomelamount);
document.writeln('Prijs per Chocomel: €' + chocomel);
document.writeln('Totaalprijs Chocomel: €' + totalchocomel.toFixed(2));
document.writeln('<br />Cola: ' + colaamount);
document.writeln('Prijs per Cola: €' + cola);
document.writeln('Totaalprijs Cola: €' + totalcola.toFixed(2));
document.writeln('<br />Totaalprijs drinken: €' + totaldrinks.toFixed(2));

var total = totaldrinks + totalpizzas
document.writeln('<br />')
document.writeln('<br />Totaalprijs: €' + total.toFixed(2))
