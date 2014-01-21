// include lib/vector.js lib

var v1 = vector.create(10, 5)
	, v2 = vector.create(3,4)
	, v3 = v1.add(v2)
	, v4 = v1.multiply(2)
	;

console.log(v1.getLength());
console.log(v1.divideBy(2));
console.log(v1.getLength());
console.log(v4.getLength());

