"use strict";

function ProtoPojazd(id, max_predkosc, predkosc) {
    this.id = id;
    this.max_predkosc = max_predkosc;
    this.predkosc = predkosc;
    this.status = function(s1 = " jedzie za szybko", s2 = " jedzie", s3 = " stoi") { //parametry domyslne funkcji
        if (predkosc > max_predkosc) {
            return id + s1;
        } 
        else if(predkosc > 0){
            return id + s2;
         }
         else {
             return id + s3;
           }
          }
    this.start = function(p) { predkosc = p;}
    this.stop = function() { predkosc = 0;}
} 

const PassatZPrototypem = function() {
    this.maPrototyp = "tak";
}
PassatZPrototypem.prototype = new ProtoPojazd("passat", 100, 10)
module.exports = PassatZPrototypem;

console.log("\n.prototype widoczne:");
console.log(PassatZPrototypem.prototype);
var passat = new PassatZPrototypem();
var mess = `\n_prototype ukryte:\n${passat._prototype}` //interpolacja napisow
console.log(mess);

PassatZPrototypem.prototype.nowaF = function() {
    console.log("\nnowa funkcja");
}
passat.nowaF();
