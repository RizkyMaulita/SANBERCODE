<?php

function papan_catur($angka) {
    for ($i = 0 ; $i < $angka; $i++){
        for ($j = 0 ; $j < ($angka*2)-1 ; $j++){
            if ($j%2== 1 && $i%2== 1){
                echo "# \t";
            }
            else if ($j%2== 0 && $i%2 == 0){
                echo "# \t";
            }else{
                echo "\t";
            }
        }
        echo "\n";
    }
}

// TEST CASES
echo papan_catur(4)."\n\n";
/*
 # # # #
 # # #
 # # # #
 # # #
 */

echo papan_catur(8)."\n\n";

# # # # # # # #
# # # # # # #
# # # # # # # #
# # # # # # #
# # # # # # # #
# # # # # # #
# # # # # # # #
# # # # # # #

echo papan_catur(5)."\n\n";
/*
 # # # # #
 # # # #
 # # # # #
 # # # #
 # # # # #
 