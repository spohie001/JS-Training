var expect = require('chai').expect;
var Samochod = require('../src/Samochod');

describe('Samochod-tests', function() 
{
	
		var dzisiaj = new Date();
        var wczoraj = new Date();
        wczoraj.setDate(dzisiaj.getDate() - 1);
        var przedwczoraj = new Date();
        przedwczoraj.setDate(wczoraj.getDate() - 1);
        var jutro = new Date();
        jutro.setDate(dzisiaj.getDate() + 1);
        var pojutrze = new Date();
        pojutrze.setDate(jutro.getDate() + 1);

        dzisiaj = dzisiaj.toDateString();
        wczoraj = wczoraj.toDateString();
        przedwczoraj = przedwczoraj.toDateString();
        jutro = jutro.toDateString();
        pojutrze = pojutrze.toDateString();

		it('wypozycz powinno zwracać true gdy wypożyczamy wolny samochód', function() 
		{ 
			var samochod = new Samochod(1,1,5,100,[przedwczoraj,wczoraj],[wczoraj], false);
			
			var status = samochod.wypozycz();
			expect(status).to.eql(true);
		});
		it('wypozycz powinno zwracać false gdy wypożyczamy wolny wypożyczony', function() 
		{ 
			var samochod = new Samochod(1,1,5,100,[przedwczoraj,wczoraj],[wczoraj], true);
			
			var status = samochod.wypozycz();
			expect(status).to.eql(false);
		});
		it('zwroc powinno zwracać true gdy zwracamy wypożyczony samochód', function() 
		{ 
			var samochod = new Samochod(1,1,5,100,[przedwczoraj,wczoraj],[wczoraj], true);
			
			var status = samochod.zwroc();
			expect(status).to.eql(true);
		});
		it('zwroc powinno zwracać false gdy zwracamy wolny samochód', function() 
		{ 
			var samochod = new Samochod(1,1,5,100,[przedwczoraj,wczoraj],[wczoraj], false);
			
			var status = samochod.zwroc();
			expect(status).to.eql(false);
		});

		it('kiedy_dostepny powinno zwracać dzisiaj gdy nie wypożyczony', function() 
		{ 


			var samochod = new Samochod(1,1,5,100,[przedwczoraj,wczoraj],[wczoraj], false);
			
			var status = samochod.kiedy_dostepny();
			expect(status).to.eql(dzisiaj);
		});
		it('kiedy_dostepny powinno zwracać jutro gdy wypożyczony wczoraj', function() 
		{ 


			var samochod = new Samochod(1,1,5,100,[przedwczoraj,wczoraj],[wczoraj], true);
			
			var status = samochod.kiedy_dostepny();
			expect(status).to.eql(jutro);
		});
		it('kiedy_dostepny powinno zwracać pojutrze gdy wypożyczony dzisiaj', function() 
		{ 


			var samochod = new Samochod(1,1,5,100,[],[dzisiaj], true);
			
			var status = samochod.kiedy_dostepny();
			expect(status).to.eql(pojutrze);
		});
		it('ile_razy_wypozyczony powinno zwracać poprawna liczbe wypozyczen', function() 
		{ 
			var samochod = new Samochod(1,1,5,100,[przedwczoraj,wczoraj],[przedwczoraj,wczoraj,dzisiaj], true);
			
			var status = samochod.ile_razy_wypozyczony();
			expect(status).to.eql(3);
		});
		it('ile_razy_uszkodzony powinno zwracać zwracać poprawna liczbe uszkodzeń', function() 
		{ 
			var samochod = new Samochod(1,1,5,100,[przedwczoraj,wczoraj],[przedwczoraj,wczoraj,dzisiaj], true);
			
			var status = samochod.ile_razy_uszkodzony();
			expect(status).to.eql(2);
		});
});