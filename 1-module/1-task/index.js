/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
 
function pow (m, n) {	
	var result = m;

	for (var i = 1; i < n; i++) {
		result = result * m;
	}

	console.log(result);
}

var m = prompt('Please input number');
var n = prompt('Please input pow');

if (n <= 1) {
	alert('Please input number > 1');
} else {
	alert( pow(m, n) );
}
