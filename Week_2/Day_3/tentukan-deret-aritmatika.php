<?php 

function tentukan_deret_aritmatika($arr)
{
	//Rumus : Un = a + (n-1)b
	$a = $arr[0];
	$b = $arr[1] - $arr[0];
	for ($i = 0; $i < count($arr) -1; $i++) { 
		$banding = $arr[$i + 1] - $arr[$i];
		if ( $banding != $b) {
			return "false";
		}
	}
	return "true";
}


echo tentukan_deret_aritmatika([1, 2, 3, 4, 5, 6]);// true
echo "<br/>";
echo tentukan_deret_aritmatika([2, 4, 6, 12, 24]);// false
echo "<br/>";
echo tentukan_deret_aritmatika([2, 4, 6, 8]); //true
echo "<br/>";
echo tentukan_deret_aritmatika([2, 6, 18, 54]);// false
echo "<br/>";
echo tentukan_deret_aritmatika([1, 2, 3, 4, 7, 9]);// false
