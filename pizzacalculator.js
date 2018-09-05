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
const small = 2.35;
const medium = 3.99;
const large = 5.99;
//rekent alles uit voor de gebruiker
var totalsmall = small * smallamount;
var totalmedium = medium * mediumamount;
var totallarge = large * largeamount;
var total = totalsmall + totalmedium + totallarge;
//laat alle informatie op het scherm op een nette manier zien
document.writeln('Kleine pizzas: ' + smallamount);
document.writeln('Prijs per kleine pizza: €' + small);
document.writeln('Totaalprijs kleine pizzas: €' + totalsmall.toFixed(2));
document.writeln('<br />');

document.writeln('Medium pizzas: ' + mediumamount);
document.writeln('Prijs per medium pizza: €' + medium);
document.writeln('Totaalprijs medium pizzas: €' + totalmedium.toFixed(2));
document.writeln('<br />');

document.writeln('Grote pizzas: ' + largeamount);
document.writeln('Prijs per grote pizza: €' + large);
document.writeln('Totaalprijs grote pizzas: €' + totallarge.toFixed(2));
document.writeln('<br />');

document.writeln('Totaalprijs: €' + total.toFixed(2));
document.writeln('<br />')
