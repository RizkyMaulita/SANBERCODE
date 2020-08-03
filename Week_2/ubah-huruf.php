<?php 

function ubah_huruf($string){
	$hasil ="";
	for ($i = 0; $i < strlen($string); $i++){
		$orde = ord($string[$i]);
		if ($orde == 90){				//untuk Z kapital
			$hasil .= chr(65);			//menjadi A kapital
		} else if ($orde == 122){		//untuk z kecil
			$hasil .= chr(97);			//menjadi a kecil
		} else{
			$hasil .= chr($orde + 1);
		}
	}
	return $hasil;
}


echo ubah_huruf('wow'); // xpx
echo "<br/>";
echo ubah_huruf('developer'); // efwfmpqfs
echo "<br/>";
echo ubah_huruf('laravel'); // mbsbwfm
echo "<br/>";
echo ubah_huruf('keren'); // lfsfo
echo "<br/>";
echo ubah_huruf('semangat');
