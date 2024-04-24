"use strict";

function ProtoPojazd(id, max_predkosc, predkosc) {
  this.id = id;
  this.max_predkosc = max_predkosc;
  this.predkosc = predkosc;
  this.status = function () {
    var s1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : " jedzie za szybko";
    var s2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : " jedzie";
    var s3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : " stoi";
    //parametry domyslne funkcji
    if (predkosc > max_predkosc) {
      return id + s1;
    } else if (predkosc > 0) {
      return id + s2;
    } else {
      return id + s3;
    }
  };
  this.start = function (p) {
    predkosc = p;
  };
  this.stop = function () {
    predkosc = 0;
  };
}
var PassatZPrototypem = function PassatZPrototypem() {
  this.maPrototyp = "tak";
};
PassatZPrototypem.prototype = new ProtoPojazd("passat", 100, 10);
module.exports = PassatZPrototypem;
console.log("\n.prototype widoczne:");
console.log(PassatZPrototypem.prototype);
var passat = new PassatZPrototypem();
var mess = "\n_prototype ukryte:\n".concat(passat._prototype); //interpolacja napisow
console.log(mess);
PassatZPrototypem.prototype.nowaF = function () {
  console.log("\nnowa funkcja");
};
passat.nowaF();