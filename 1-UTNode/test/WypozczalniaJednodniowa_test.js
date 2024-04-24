var expect = require('chai').expect;
var WypozczalniaJednodniowa = require('../src/WypozczalniaJednodniowa');
var Samochod = require('../src/Samochod');
describe('WypozczalniaJednodniowa-tests', function() 
{
	
	var zbiorSamochodow = [];
	/*DATY*/
	var d1 = new Date();
	var d2 = new Date();
	d2.setDate(d1.getDate() - 2);
	var d3 = new Date();
	d2.setDate(d1.getDate() - 2);
	var d4 = new Date();
	d3.setDate(d1.getDate() - 2);

	d1 = d1.toDateString();
	d2 = d2.toDateString();
	d3 = d3.toDateString();
	d4 = d4.toDateString();
	
	/*SAMOCHODY*/
	//separatory w liczbach
	var s1 = new Samochod(1,1_000_000,2,50,[d1],[d1], true );
	var s2 = new Samochod(2,2_000_000,2,50,[d2,d1],[d2,d1], true );
	var s3 = new Samochod(3,3_000_000,2,50,[d3,d2,d1],[d3,d2,d1], true );
	var s4 = new Samochod(4,4_000_000,2,50,[d4,d3,d2,d1],[d4,d3,d2,d1], true );
	var s5 = new Samochod(5,5_000_000,2,50,[d4],[d4,d3,d2], false );
	var s6 = new Samochod(6,6_000_000,2,50,[d4,d2],[d4,d3,d1], false );
	var s7 = new Samochod(7,2_000_000,5,100,[d2,d1],[d2,d1], true ); 
	var s8 = new Samochod(8,3_000_000,5,100,[d3,d2,d1],[d3,d2,d1], true ); 
	var s9 = new Samochod(9,4_000_000,5,100,[d4,d3,d2],[d4,d3,d2,d1], true );
	var s10 = new Samochod(10,5_000_000,5,100,[d4],[d4,d3,d2], false );
	var s11 = new Samochod(11,6_000_000,5,100,[d4,d2],[d4,d3,d1], false ); 
	var s12 = new Samochod(12,1_000_000,5,100,[d1],[d1], true );
	var s13 = new Samochod(13,1_000_000,2,50,[d1],[d1], true );

	var wypozyczalnia;

	beforeEach(function(){
		wypozyczalnia = new WypozczalniaJednodniowa(s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13);
	});
	
	it('podaj_wypozyczone powinno zwracać komunikat z poprawną liczbą aut', function() 
	{ 
		var status = wypozyczalnia.podaj_wypozyczone();
		expect(status).to.eql("Liczba wypożyczonych aut to: 9");
	});
	it('podaj_dostepne powinno zwracać liste dostepnych aut', function() 
	{ 
		var status = wypozyczalnia.podaj_dostepne(d1);
		expect(status).to.eql([s5,s6,s10,s11]);
	});
	it('podaj_top10_wypozyczanych powinno zwracać liste 10 najczesciej wypozyczanych aut', function() 
	{ 
		var status = wypozyczalnia.podaj_top10_wypozyczanych();
		expect(status).to.eql([s4, s9, s3, s5, s6, s8, s10, s11, s2, s7]);
	});
	it('podaj_top10_uszkadzanych powinno zwracać liste 10 najczesciej uszkadzanych aut', function() 
	{ 
		var status = wypozyczalnia.podaj_top10_uszkadzanych();
		expect(status).to.eql([s4,s3,s8,s9,s2,s6,s7,s11,s1,s5]);
	});
});