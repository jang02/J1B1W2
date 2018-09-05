// Jan Garretsen
// Applicatie en media ontwikkelaar
/*var tafel = parseInt(prompt('Voer een getal in'))		//laat gewoon een tafel zien, maakt niet uit welk getal
document.writeln('1' + 'x' + tafel + '= ' + 1 * tafel);
document.writeln('2' + 'x' + tafel + '= ' + 2 * tafel);
document.writeln('3' + 'x' + tafel + '= ' + 3 * tafel);
document.writeln('4' + 'x' + tafel + '= ' + 4 * tafel);
document.writeln('5' + 'x' + tafel + '= ' + 5 * tafel);
document.writeln('6' + 'x' + tafel + '= ' + 6 * tafel);
document.writeln('7' + 'x' + tafel + '= ' + 7 * tafel);
document.writeln('8' + 'x' + tafel + '= ' + 8 * tafel);
document.writeln('9' + 'x' + tafel + '= ' + 9 * tafel);
document.writeln('10' + 'x' + tafel + '= ' + 10 * tafel);*/

//var a = 12;
var a = parseInt(prompt('Voer een getal in'));     		//laat de gebruiker een random getal invoeren
var b = 6;
var c = 10;
var d = 5;
var e = a + b;											//rekent de 1e som uit
var f = e * c;											//rekent de 2e som uit
var g = f / d;											//rekent de 3e som uit
var h = g - a;											//rekent de 4e som uit
document.writeln(a + '+' + b + '= ' + e);				//laat het antwoord + berekening zien op het scherm
document.writeln(e + 'x' + c + '= ' + f);				//laat het antwoord + berekening zien op het scherm
document.writeln(f + '/' + d + '= ' + g);				//laat het antwoord + berekening zien op het scherm
document.writeln(g + '-' + a + '= ' + h);				//laat het antwoord + berekening zien op het scherm