﻿// Дано натуральное число N. 
// Вычислите сумму его цифр, используя рекурсию(строки, массивы и циклы использовать запрещено).
let n = prompt("Введите число");
n = parseInt(n);

rec = n => n < 1 ? 0 : n + rec(Math.floor(-n));
// Math.floor - Округление до ближайшего меньшего целого
rec();