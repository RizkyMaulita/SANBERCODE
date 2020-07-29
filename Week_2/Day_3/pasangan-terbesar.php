<?php
function pasangan_terbesar($angka)
{
	if( !is_int($angka) ) {		//jika ternyata yang diinput bukan angka
		echo "Tolong! Masukan Angka Integer";
	}
	$angkaString = strval($angka);		//buat angka menjadi string
	$tempatSementara = [];

	for($a = 0; $a < strlen($angkaString) - 1; $a++) {
		$tempatSementara[] = $angkaString[$a].$angkaString[$a+1];
	}

	$result = max($tempatSementara);
	$result = (int)$result;
	echo "Input Angka = $angka <br> Pasangan Terbesar = $result <br><br>";
	return $result;
}

// TEST CASES
pasangan_terbesar(641573); // 73
pasangan_terbesar(12783456); // 83
pasangan_terbesar(910233); // 91
pasangan_terbesar(71856421); // 85
pasangan_terbesar(79918293); // 99

?>