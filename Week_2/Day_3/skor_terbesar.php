<?php 
$skor = [
  [
    "nama" => "Bobby",
    "kelas" => "Laravel",
    "nilai" => 78
  ],
  [
    "nama" => "Regi",
    "kelas" => "React Native",
    "nilai" => 86
  ],
  [
    "nama" => "Aghnat",
    "kelas" => "Laravel",
    "nilai" => 90
  ],
  [
    "nama" => "Indra",
    "kelas" => "React JS",
    "nilai" => 85
  ],
  [
    "nama" => "Yoga",
    "kelas" => "React Native",
    "nilai" => 77
  ],
];

function skor_terbesar($data) 
{
	$result = [];
	$KelasReactNative = [];
	$KelasReactJs = [];
	$KelasLaravel = [];
	foreach ($data as $key => $row) {
	    $nilai[$key]  = $row['nilai'];
	    $kelas[$key]  = $row['kelas'];
	}
	// print_r ($nilai);
	// print_r ($kelas);
	array_multisort($kelas, SORT_DESC, $nilai, SORT_DESC, $data);
	// print_r ($nilai);
	// print_r ($kelas);

	for( $i = 0; $i < count($data); $i++) {
		if ( $data[$i]['kelas'] == 'React Native') {
			$KelasReactNative[] = $data[$i];
		} else if ( $data[$i]['kelas'] == 'React JS') {
			$KelasReactJs[] = $data[$i];
		} else if ( $data[$i]['kelas'] == 'Laravel') {
			$KelasLaravel[] = $data[$i];
		}
	}
	echo ('Data kelas React Native: <br>');
	foreach ($KelasReactNative as $key => $Native) {
		echo "&nbsp Nama :".$Native['nama']."<br>";
		// echo "&nbsp Kelas :".$Native['kelas']."<br>";
		echo "&nbsp Nilai :".$Native['nilai']."<br><br>";
	}
	echo ('Data kelas ReactJs: <br>');
	foreach ($KelasReactJs as $key => $Js) {
		echo "&nbsp Nama :".$Js['nama']."<br>";
		// echo "&nbsp Kelas :".$Js['kelas']."<br>";
		echo "&nbsp Nilai :".$Js['nilai']."<br><br>";
	}
	echo ('Data kelas Laravel: <br>');
	foreach ($KelasReactJs as $key => $Laravel) {
		echo "&nbsp Nama :".$Laravel['nama']."<br>";
		// echo "&nbsp Kelas :".$Laravel['kelas']."<br>";
		echo "&nbsp Nilai :".$Laravel['nilai']."<br><br>";
	}
	// Nilai tertinggi masing - masing kelas
	$result[] = $KelasReactNative[0];
	$result[] = $KelasReactJs[0];
	$result[] = $KelasLaravel[0];
	echo "Kesimpulan : <br>";
	foreach ($result as $key => $hasil) {
		echo "&nbsp Skor terbesar dari kelas ".$hasil['kelas']." diperoleh oleh ".$hasil['nama']." dengan skor sebesar ".$hasil['nilai']."<br>";
	}
	echo "<br> Dan bentuk array assositifnya seperti berikut : <br>";
	return $result;
}
echo ("<pre>");
print_r(skor_terbesar($skor));
echo ("</pre>");