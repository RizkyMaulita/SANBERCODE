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
    $wadahReactNative = [];
    $wadahReactJs = [];
    $wadahLaravel = [];
    // foreach ($data as $key => $row) {
    //     $nilai[$key]  = $row['nilai'];
    //     $kelas[$key]  = $row['kelas'];
    // }
    // print_r ($nilai);
    // print_r ($kelas);
    $nilai  = array_column($data, 'nilai');
    $kelas  = array_column($data, 'kelas');
    print_r ($nilai);
    print_r ($kelas);
    array_multisort($kelas, SORT_DESC, $nilai, SORT_DESC, $data);
//     array_multisort($kelas, SORT_DESC, $nilai, SORT_DESC);
    print_r ($nilai);
    print_r ($kelas);
    
    for( $i = 0; $i < count($data); $i++) {
        
        
        if ( $data[$i]['kelas'] == 'React Native') {
            $wadahReactNative[] = $data[$i];
//             $kosong = "";
        } else if ( $data[$i]['kelas'] == 'React JS') {
            $wadahReactJs[] = $data[$i];
//             $kosong = "";
        } else if ( $data[$i]['kelas'] == 'Laravel') {
            $wadahLaravel[] = $data[$i];
//             $kosong = "";
        }
    }
    print_r($wadahReactNative);
    print_r($wadahReactJs);
    print_r($wadahLaravel);
    // Nilai tertinggi masing - masing kelas
    $result[] = $wadahReactNative[0];
    $result[] = $wadahReactJs[0];
    $result[] = $wadahLaravel[0];
    
    return $result;
}
echo ("<pre>");
print_r(skor_terbesar($skor));
echo ("</pre>");