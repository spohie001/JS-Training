var expect = require('chai').expect;
var Pojazd = require('../src/Pojazd');

describe('Pojazd-tests', function() 
{
	var pojazd;
	beforeEach(function(){
		pojazd = new Pojazd("passat", 100, 10);
	});

	it('powinno wyrzucać wyjątek gdy odwołanie do id', function() 
	{ expect(
		function(pojazd){
			expect(pojazd.id).to.eql("passat");
		}
	).to.throw();
	});

	it('powinno wyrzucać wyjątek gdy odwołanie do max_predkosc', function() 
	{ expect(
		function(pojazd){
			expect(pojazd.max_predkosc).to.eql(100);
		}
	).to.throw();
	});

	it('powinno wyrzucać wyjątek gdy odwołanie do predkosc', function() 
	{ expect(
		function(pojazd){
			expect(pojazd.predkosc).to.eql(10);
		}
	).to.throw();
	});

	it('powinno zwracać status stoi po stop', function() 
	{
		pojazd.stop();
		var status = pojazd.status();
		expect(status).to.eql("passat stoi");
	});

	it('powinno zwracać status jedzie po start', function() 
	{
		pojazd.start(20);
		var status = pojazd.status();
		expect(status).to.eql("passat jedzie");
	});

	it('powinno zwracać status jedzie za szybko po start', function() 
	{
		pojazd.start(200);
		var status = pojazd.status();
		expect(status).to.eql("passat jedzie za szybko");
	});
	
});