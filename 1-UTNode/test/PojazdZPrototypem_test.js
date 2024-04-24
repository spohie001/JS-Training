var expect = require('chai').expect;
var PassatZPrototypem = require('../src/PojazdZPrototypem');

describe('PojazdZPrototypem-tests', function() 
{
	var pojazd;
	beforeEach(function(){
		pojazd = new PassatZPrototypem();
	});

	it('powinno wyświetlać id gdy odwołanie do id', function() 
	{
			expect(pojazd.id).to.eql("passat");
	});

	it('powinno wyświetlać max_predkosc gdy odwołanie do max_predkosc', function() 
	{
			expect(pojazd.max_predkosc).to.eql(100);
	});

	it('powinno wyświetlać predkosc gdy odwołanie do predkosc', function() 
	{
			expect(pojazd.predkosc).to.eql(10);
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