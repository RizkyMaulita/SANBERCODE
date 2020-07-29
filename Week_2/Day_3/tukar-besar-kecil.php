<?php
function tukar_besar_kecil($string){
	$hasil = "";
	for ($i = 0; $i < strlen($string); $i++){
		$orde = ord($string[$i]);
		if ($orde > 64 && $orde < 91){
			$hasil .= chr($orde + 32);
		} else if( $orde > 96 && $orde < 123){
			$hasil .= chr($orde - 32);
		}else{
			$hasil .= $string[$i];
		}
	}
	echo ("<br> Kalimat Input: $string <br> Kalimat Output : ");
	return $hasil;
}

// TEST CASES
echo tukar_besar_kecil('Hello World')."<br>"; // "hELLO wORLD"
echo tukar_besar_kecil('I aM aLAY')."<br>"; // "i Am Alay"
echo tukar_besar_kecil('My Name is Bond!!')."<br>"; // "mY nAME IS bOND!!"
echo tukar_besar_kecil('IT sHOULD bE me')."<br>"; // "it Should Be ME"
echo tukar_besar_kecil('001-A-3-5TrdYW')."<br>"; // "001-a-3-5tRDyw"

?>