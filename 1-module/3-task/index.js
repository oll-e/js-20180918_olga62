'use strict';

var inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

function getMinMax(str) {
	var regx = /[+-]?\d+(?:\.\d+)?/g;
	var arr = inputData.match(regx).map(Number);
	var min = Math.min.apply(null, arr);
	var max = Math.max.apply(null, arr);
	
	//console.log(arr);
	console.log("[" + min + ", " + max + "]");
}

console.log(getMinMax(inputData)); // ожидается [-5.8, 73]

/**
 * Read More
 */

var b = "34 + -5.3";

console.log(eval(b));