(function () {}()); try { (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function () {
    "use strict";
    var from = Number(localStorage.getItem("sendTroops.from")) || 5,
        to = Number(localStorage.getItem("sendTroops.to")) || 30,
        type = Number(localStorage.getItem("sendTroops.type")) || "b";
    localStorage.setItem("sendTroops.from", prompt("From:", from));
    localStorage.setItem("sendTroops.to", prompt("To:", to));
    localStorage.setItem("sendTroops.type", prompt("Type (a | b | c):", type));
})();
},{}]},{},[1]) } catch(e) { console.error(e);alert(e); };