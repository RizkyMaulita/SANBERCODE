<?php 

function tentukan_deret_geometri($arr)
{
	$a = $arr[0];
	$r = $arr[1] / $a;

	for ($i = 0; $i < count($arr) -1; $i++) { 
		$banding = $arr[$i + 1] / $arr[$i];

		if ( $banding != $r) {
			return "false";
		}
	}
	return "true";
}

echo tentukan_deret_geometri([1, 3, 9, 27, 81]); // true
echo "<br/>";
echo tentukan_deret_geometri([2, 4, 8, 16, 32]); // true
echo "<br/>";
echo tentukan_deret_geometri([2, 4, 6, 8]); // false
echo "<br/>";
echo tentukan_deret_geometri([2, 6, 18, 54]); // true
echo "<br/>";
echo tentukan_deret_geometri([1, 2, 3, 4, 7, 9]); //false