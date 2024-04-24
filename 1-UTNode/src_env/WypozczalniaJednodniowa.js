"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Samochod = require('./Samochod');
var WypozczalniaJednodniowa = /*#__PURE__*/_createClass(
//klasy (definiowane przez slowo kluczowe class)
function WypozczalniaJednodniowa() {
  var _this = this;
  _classCallCheck(this, WypozczalniaJednodniowa);
  _defineProperty(this, "podaj_wypozyczone", function () {
    var dzisiaj = new Date();
    var jutro = new Date();
    var pojutrze = new Date();
    jutro.setDate(dzisiaj.getDate() + 1);
    pojutrze.setDate(jutro.getDate() + 1);
    jutro = jutro.toDateString();
    pojutrze = pojutrze.toDateString();
    var licznik = 0; //zmienne o zasiegu bloku
    this.tab.forEach(function (s) {
      //zachowanie this w funkcji zagniezdzonej i =>, tutaj this.tab zwróciłoby undefined
      if (s.kiedy_dostepny() === pojutrze) {
        licznik = licznik + 1;
      } else if (s.kiedy_dostepny() === jutro) {
        licznik = licznik + 1;
      }
    });
    var msg = "Liczba wypożyczonych traktorów to: ";
    msg = msg.replaceAll("traktorów", "aut"); //replaceAll dla stringow
    return msg + licznik;
  });
  _defineProperty(this, "podaj_dostepne", function (dzien) {
    var lista_dostepnych = [];
    this.tab.forEach(function (s) {
      var dostepny = s.kiedy_dostepny();
      if (dzien === dostepny) {
        lista_dostepnych.push(s);
      }
    });
    return lista_dostepnych;
  });
  _defineProperty(this, "podaj_top10_wypozyczanych", function () {
    var top10 = [];
    this.tab.forEach(function (s) {
      if (top10.length < 10) {
        top10.push(s);
        top10.sort(function (x, y) {
          return y.ile_razy_wypozyczony() - x.ile_razy_wypozyczony();
        });
      } else {
        if (top10[top10.length - 1].ile_razy_wypozyczony() < s.ile_razy_wypozyczony()) {
          top10.pop();
          top10.push(s);
          top10.sort(function (x, y) {
            return y.ile_razy_wypozyczony() - x.ile_razy_wypozyczony();
          });
        }
      }
    });
    return top10;
  });
  _defineProperty(this, "podaj_top10_uszkadzanych", function () {
    //uproszczona skladnie "strzalkowa" dla funkcji anonimowych
    var top10 = [];
    this.tab.forEach(function (s) {
      if (top10.length < 10) {
        top10.push(s);
        top10.sort(function (x, y) {
          return y.ile_razy_uszkodzony() - x.ile_razy_uszkodzony();
        });
      } else {
        if (top10[top10.length - 1].ile_razy_uszkodzony() < s.ile_razy_uszkodzony()) {
          top10.pop();
          top10.push(s);
          top10.sort(function (x, y) {
            return y.ile_razy_uszkodzony() - x.ile_razy_uszkodzony();
          });
        }
      }
    });
    //przypisania dekomponujace struktury i listy
    var usterkowy = top10[0];
    var usterkowy_klasycznie = top10[0];
    var msg = "najbardziej usterkowe auto dostepne: " + usterkowy.kiedy_dostepny();
    var msg_k = "najbardziej usterkowe auto dostepne: " + usterkowy_klasycznie.kiedy_dostepny();
    console.log(msg);
    console.log(msg_k);
    return top10;
  });
  this.tab = [];
  for (var _len = arguments.length, samochody = new Array(_len), _key = 0; _key < _len; _key++) {
    samochody[_key] = arguments[_key];
  }
  samochody.forEach(function (s) {
    _this.tab.push(s);
  });
});
module.exports = WypozczalniaJednodniowa;

////*DATY*/
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
var s1 = new Samochod(1, 1000000, 2, 50, [d1], [d1], true);
var s2 = new Samochod(2, 2000000, 2, 50, [d2, d1], [d2, d1], true);
var s3 = new Samochod(3, 3000000, 2, 50, [d3, d2, d1], [d3, d2, d1], true);
var s4 = new Samochod(4, 4000000, 2, 50, [d4, d3, d2, d1], [d4, d3, d2, d1], true);
var s5 = new Samochod(5, 5000000, 2, 50, [d4], [d4, d3, d2], false);
var s6 = new Samochod(6, 6000000, 2, 50, [d4, d2], [d4, d3, d1], false);
var s7 = new Samochod(7, 2000000, 5, 100, [d2, d1], [d2, d1], true);
var s8 = new Samochod(8, 3000000, 5, 100, [d3, d2, d1], [d3, d2, d1], true);
var s9 = new Samochod(9, 4000000, 5, 100, [d4, d3, d2], [d4, d3, d2, d1], true);
var s10 = new Samochod(10, 5000000, 5, 100, [d4], [d4, d3, d2], false);
var s11 = new Samochod(11, 6000000, 5, 100, [d4, d2], [d4, d3, d1], false);
var s12 = new Samochod(12, 1000000, 5, 100, [d1], [d1], true);
var s13 = new Samochod(13, 1000000, 2, 50, [d1], [d1], true);
var wypozyczalnia = new WypozczalniaJednodniowa(s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13);
wypozyczalnia.podaj_top10_uszkadzanych();