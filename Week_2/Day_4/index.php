<?php
require 'animal.php';
require 'frog.php';
require 'ape.php';

$sheep = new animal();
$sheep -> setName("sheep");
// $sheep -> setLegs(2);
// $sheep -> setCold_blooded('false');

echo "Nama hewan: ".$sheep -> getName()."<br>";
echo "Jumlah kaki : ".$sheep  -> legs()."<br>";
echo "Cek hewan berdarah dingin : ".$sheep -> cold_blooded()."<br><br>";
// echo "Jumlah kaki : ".$sheep -> getLegs()."<br>";
// echo "Cek hewan berdarah dingin : ".$sheep -> getCold_blooded()."<br><br>";

$kodok = new frog();
$kodok -> setName("buduk");
// $kodok -> setLegs(4);
// $kodok -> setCold_blooded('true');

echo "Nama hewan: ". $kodok -> getName()."<br>";
echo "Cek hewan berdarah dingin : ".$kodok -> cold_blooded()."<br>";
// echo "Jumlah kaki : ".$kodok -> getLegs()."<br>";
// echo "Cek hewan berdarah dingin : ".$kodok -> getCold_blooded()."<br>";
echo "Bunyi : ".$kodok -> jump()."<br><br>";

$sunggokong = new ape();
$sunggokong -> setName("sunggokong");
// $sunggokong -> setLegs(2);
// $sunggokong -> setCold_blooded('false');

echo "Nama hewan: ".$sunggokong -> getName()."<br>";
echo "Jumlah kaki: ".$sunggokong -> legs()."<br>";
echo "Cek hewan berdarah dingin: ".$sunggokong -> cold_blooded()."<br>";
// echo "Jumlah kaki : ".$sunggokong -> getLegs()."<br>";
// echo "Cek hewan berdarah dingin : ".$sunggokong -> getCold_blooded()."<br>";
echo "Bunyi:".$sunggokong -> yell();