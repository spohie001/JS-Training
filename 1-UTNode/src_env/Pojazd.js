"use strict";

module.exports = function (id, max_predkosc, predkosc) {
  this.status = function () {
    if (predkosc > max_predkosc) {
      return id + " jedzie za szybko";
    } else if (predkosc > 0) {
      return id + " jedzie";
    } else {
      return id + " stoi";
    }
  };
  this.start = function (p) {
    predkosc = p;
  };
  this.stop = function () {
    predkosc = 0;
  };
};