<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Looping</title>
</head>
<body>
    <h1>Berlatih Looping</h1>

    <?php 
        echo "<h3>Soal No 1 Looping I Love PHP</h3>";
        /* 
            Soal No 1 
            Looping I Love PHP
            Lakukan Perulangan (boleh for/while/do while) sebanyak 20 iterasi. Looping terbagi menjadi dua: Looping yang pertama Ascending (meningkat) dan Looping yang ke dua menurun (Descending). 

            Output: 
            LOOPING PERTAMA
            2 - I Love PHP
            4 - I Love PHP
            6 - I Love PHP
            8 - I Love PHP
            10 - I Love PHP
            12 - I Love PHP
            14 - I Love PHP
            16 - I Love PHP
            18 - I Love PHP
            20- I Love PHP
            LOOPING KEDUA
            20 - I Love PHP
            18 - I Love PHP
            16 - I Love PHP
            14 - I Love PHP
            12 - I Love PHP
            10 - I Love PHP
            8 - I Love PHP
            6 - I Love PHP
            4 - I Love PHP
            2 - I Love PHP
        */
        // Lakukan Looping Di Sini
        echo "Looping Pertama <br><br>";
        //ini pakai for
        for ($i = 1; $i < 21; $i++){
            if ($i%2 == 0){
                echo $i." - I Love PHP <br>"; 
            }
        }
        //ini pakai while
        // $i = 0;
        // while ($i < 20) {
        //     $i += 2;
        //     echo $i." - I Love PHP <br>";
        // }

        echo "<br> Looping Kedua <br><br>";
        //ini pakai for
        for ($i = 20; $i > 0; $i--){
            if ($i%2 == 0){
                echo $i." - I Love PHP <br>"; 
            }
        }

        //ini pakai while
        // $j = 20; 
        // while ($j > 0) {
        //     echo $j." - I Love PHP <br>";
        //     $j -= 2;
        // }
        
        echo "<h3>Soal No 2 Looping Array Modulo </h3>";
        /* 
            Soal No 2
            Looping Array Module
            Carilah sisa bagi dengan angka 5 dari setiap angka pada array berikut.
            Tampung ke dalam array baru bernama $rest 
        */

        $numbers = [18, 45, 29, 61, 47, 34];
        echo "array numbers: ";
        print_r($numbers);
        // Lakukan Looping di sini

        echo "<br>";
        // echo $numbers[0]%5;
        $rest = array();
        for ($i = 0; $i < count($numbers); $i++){
            $rest[$i] = $numbers[$i]%5;
        };

        // foreach ($numbers as  $num) {
        //     $rest[] = $num%5;
        // }
        echo "Array sisa baginya adalah:  ";
        print_r($rest); 
        echo "<br>";

        echo "<h3> Soal No 3 Looping Asociative Array </h3>";
        /* 
            Soal No 3
            Loop Associative Array
            Terdapat data items dalam bentuk array dimensi. Buatlah data tersebut ke dalam bentuk Array Asosiatif. Setiap item memiliki key yaitu : id, name, price, description, source. 
            
            Output: 
            Array ( [id] => 001 [name] => Keyboard Logitek [price] => 60000 [description] => Keyboard yang mantap untuk kantoran [source] => logitek.jpeg ) 
            Array ( [id] => 002 [name] => Keyboard MSI [price] => 300000 [description] => Keyboard gaming MSI mekanik [source] => msi.jpeg ) 
            Array ( [id] => 003 [name] => Mouse Genius [price] => 50000 [description] => Mouse Genius biar lebih pinter [source] => genius.jpeg ) 
            Array ( [id] => 004 [name] => Mouse Jerry [price] => 30000 [description] => Mouse yang disukai kucing [source] => jerry.jpeg ) 

        */
        $items = [
            ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpeg'], 
            ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpeg'],
            ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
            ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpeg']
        ];
        
        // Output: 
        // -------------------ini untuk membuat menjadi array assosiasi, tapi tidak multidimensi
        // echo count($items)."<br>";      //4 = jumlah array
        // echo count($items[1])."<br>";   //5 = jumlah id
        // $arrkey = ['id', 'name','price','description','source'];
        // $output = array();
        // for ($i = 0; $i < count($items); $i++){
        //     for($j = 0; $j< count($items[$i]); $j++){
        //         $output[$arrkey[$j]] = $items[$i][$j];
        //     }
        //     print_r($output);
        //     echo "<br>";
        // }
        
        //-------------------ini untuk membuat menjadi satu array multidimensi dan assosiasi----------------------
        //----------cara pertama
        $arrkey = ['id', 'name','price','description','source'];
        $output = array();
        for ($i = 0; $i < count($items); $i++){
            for($j = 0; $j< count($items[$i]); $j++){
                $output[$i][$arrkey[$j]] = $items[$i][$j];
            }
            echo "<br>";
        }
        echo "<pre>";
        print_r($output);
        echo "</pre>";
        // ---------cara kedua
        // $data = array();
        // foreach ($items as $key => $value) {
        //     $data[$key]['id'] = $value[0];
        //     $data[$key]['name'] = $value[1];
        //     $data[$key]['price'] = $value[2];
        //     $data[$key]['description'] = $value[3];
        //     $data[$key]['source'] = $value[4];
        // }
        // echo "<pre>";
        // print_r($data);
        // echo "</pre>";



        echo "<h3>Soal No 4 Asterix </h3>";
        /* 
            Soal No 4
            Asterix 5x5
            Tampilkan dengan looping dan echo agar menghasilkan kumpulan bintang dengan pola seperti berikut: 
            Output: 
            * 
            * * 
            * * * 
            * * * * 
            * * * * *
        */
        echo "Asterix:  <br>";
        $Asterix = array();
        for ($i = 0; $i < 5; $i++){
            for ($j = 0; $j < 5; $j++){
                if ($i >= $j){
                    echo "* ";
                }
            }
            echo "<br>";
        }
        
    ?>

</body>
</html>