"use strict";

var alunos = ['maria'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    nota: 3
  };
});
console.log(alunos2);
var alunos1 = ['lucas'];
var alunos3 = alunos1.map(function (itemAtual) {
  return {
    nome: itemAtual,
    nota: 7
  };
});
console.log(alunos3);
var alunos8 = ['vitor'];
var alunos4 = alunos8.map(function (itemAtual) {
  return {
    nome: itemAtual,
    nota: 4
  };
});
console.log(alunos4);
var alunos6 = ['gabriel'];
var alunos5 = alunos6.map(function (itemAtual) {
  return {
    nome: itemAtual,
    nota: 10
  };
});
console.log(alunos5);
var aprovados1 = alunos2.filter(function (item) {
  return item.nota >= 6;
});
console.log(aprovados1);
var aprovados2 = alunos3.filter(function (item) {
  return item.nota >= 6;
});
console.log(aprovados2);
var aprovados3 = alunos4.filter(function (item) {
  return item.nota >= 6;
});
console.log(aprovados3);
var aprovados4 = alunos5.filter(function (item) {
  return item.nota >= 6;
});
console.log(aprovados4);