/**
 * Since this is a test, I implemented everything in vanilla JS
 * There are no depencies, although I would otherwise have looked to use lodash or immutable for this type of algorithm
 * That did cause it to take little longer to solve, but it was a good exercise ^^
 */
'use strict';

function sum(array) {
	var sum = 0;

	if (array.length === 0) { return 0; }

	for (var i = 0; i < array.length; i++) {
		sum += array[i]; 
	}

	return sum;
}

function combinator(n) {
	var intset = [];
	var subset = [];
	var subsets = [];
	for (var i = 1; i <= n; i++) {
		intset.push(i);
	}
	isSubset(intset, n, subset, subsets);
	var result = uniq(subsets, [], []);
	console.log(result);
}

function isSubset(numbers, target, subset, subsets) {
	var s = sum(subset);
	if (s === target) {
		console.log(`Subset found: ${subset}`);
		subsets.push(subset);
	}	

	if (s >= target) {
		return
	}

	for (var i = 0; i < numbers.length; i++) {
		var n = numbers[i];
		var remaining;
		// if adding the same number gives a result less than n, we should do so
		// otherwise, we pass back a smaller subset of the original intset
		// making this essentially a variant of the knapsack problem
		if (s + n < target) {
			remaining = numbers;
		} else {
			remaining = numbers.slice(1);
		}
		// add the number to the accumulator
		var newSubset = subset.concat([n]);
		console.log(`Remaining: ${remaining}`)
		isSubset(remaining, target, newSubset, subsets);
	}
}

function uniq(array, strings, acc) {
	if (array.length === 0) { return acc; }

	var subset = array[0].sort();
	// a bit of hackery to do a quick and dirty equality check by string comparison
	// lodash would have helped, but implementing this wasn't that hard
	// credit http://stackoverflow.com/questions/6229197/how-to-know-if-two-arrays-have-the-same-values
	var subsetString = subset.join(',');

	//check if array already has the value
	if (strings.indexOf(subsetString) === -1) {
		acc.push(subset);
		strings.push(subsetString);
	}

	array = array.slice(1);

	return uniq(array, strings, acc);
}

combinator(4);