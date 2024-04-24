"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Samochod = /*#__PURE__*/function () {
  function Samochod(numer, przebieg, liczba_pasazerów, cena_za_dzien, lista_uszkodzen, lista_wypozyczen, wypozyczony) {
    _classCallCheck(this, Samochod);
    this.numer = numer;
    this.przebieg = przebieg;
    this.liczba_pasazerów = liczba_pasazerów;
    this.cena_za_dzien = cena_za_dzien;
    this.lista_uszkodzen = lista_uszkodzen;
    this.lista_wypozyczen = lista_wypozyczen;
    this.wypozyczony = wypozyczony;
  }
  _createClass(Samochod, [{
    key: "wypozycz",
    value: function wypozycz() {
      if (this.wypozyczony === false) {
        this.wypozyczony = true;
        this.lista_wypozyczen.push(new Date().toDateString());
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "zwroc",
    value: function zwroc() {
      if (this.wypozyczony === true) {
        this.wypozyczony = false;
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "kiedy_dostepny",
    value: function kiedy_dostepny() {
      var dzisiaj = new Date();
      var jutro = new Date();
      jutro.setDate(dzisiaj.getDate() + 1);
      var pojutrze = new Date();
      pojutrze.setDate(jutro.getDate() + 1);
      dzisiaj = dzisiaj.toDateString();
      jutro = jutro.toDateString();
      pojutrze = pojutrze.toDateString();
      if (this.wypozyczony === true) {
        if (this.lista_wypozyczen[this.lista_wypozyczen.length - 1] === dzisiaj) {
          return pojutrze;
        } else {
          return jutro;
        }
      } else {
        return dzisiaj;
      }
    }
  }, {
    key: "dodaj_uszkodzenie",
    value: function dodaj_uszkodzenie() {
      this.lista_uszkodzen.push(new Date().toDateString());
    }
  }, {
    key: "ile_razy_wypozyczony",
    value: function ile_razy_wypozyczony() {
      return this.lista_wypozyczen.length;
    }
  }, {
    key: "ile_razy_uszkodzony",
    value: function ile_razy_uszkodzony() {
      return this.lista_uszkodzen.length;
    }
  }]);
  return Samochod;
}();
module.exports = Samochod;