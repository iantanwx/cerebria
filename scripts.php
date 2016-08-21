// PHP
<?php
function getPrimes($n) {
	// throw an exception if $n is not an int or <= 1
	if (!is_int($n) || $n <= 1) { throw new Exception("Input must be of type int and > 1", 1); }

	$primes = array(2);

	// if $n == 2 just return $primes
	if ($n == 2) { return $primes; } 

	// loop over every integer smaller than $n
	for ($i = 3; $i < $n; $i++) {
		$is_prime = true;

		// for every $i, test if, in turn, for all integers < $i,  $i % $j is not 0
		for ($j = 2; $j < $i; $j++) {
			if ($i % $j == 0) {
				$is_prime = false;
				break;
			} 
		}

		if ($is_prime) { array_push($primes, $i); }
	}
	
	var_dump($primes);
	
	return $primes;
}

function truncateArray($array) {
	// throw an exception if $array is not of type array
	if(!is_array($array)) { throw new Exception("Input must be an array", 1); }
	// assign the headers array
	$headers = array("username", "hair_color", "height");
	// initialise an empty array for data nodes
	$data = array();

	// loop over each person in $array
	foreach ($array as $person) {
		// loop over each kv pair per person
		$dataNode = array();
		foreach($person as $header => $value) {
			// assign the value to a new array
			array_push($dataNode, $value);
		}

		// push the new array into $data
		array_push($data, $dataNode);
	}

	$toJSON = array("h" => $headers, "d" => $data);
	$json = json_encode($toJSON);

	return $json;
}

function handleException(Exception $e) {
	echo "There is a problem: ", $e->getMessage(), "\n";
}

try {
	getPrimes(5);
	getPrimes(10);
	getPrimes("error");

} catch(Exception $e) {
	handleException($e);
}

try {
	$res = array(
		array("username" => "ali", "hair_color" => "brown", "height" => 1.2),
		array("username" => "marc", "hair_color" => "blue", "height" => 1.4),
		array("username" => "joe", "hair_color" => "brown", "height" => 1.7),
		array("username" => "zehua", "hair_color" => "black", "height" => 1.8)
	);

	$res_json = truncateArray($res);
	echo $res_json;
} catch(Exception $e) {
	handleException($e);
}