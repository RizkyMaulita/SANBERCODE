<?php

class animal
{
    public $name;
    public $legs;
    public $cold_blooded;
    
    
    public function getName()
    {
        return $this->name;
    }
    public function setName($name)
    {
        $this->name = $name;
    }
    
//     public function getLegs()
//     {
//         return $this->legs;
//     }
    
//     public function setLegs($legs)
//     {
//         $this->legs = $legs;
//     }
//     public function getCold_blooded()
//     {
//         return $this->cold_blooded;
//     }
    
//     public function setCold_blooded($cold_blooded)
//     {
//         $this->cold_blooded = $cold_blooded;
//     }
    
//karena di soal disuruh buat default legs dan cold_bloodednya seperti ini, yaudah ikutin perintah heheh
    public function legs()
    {
        return $this->legs = 2;
    }
    
    public function cold_blooded()
    {
        return $this-> cold_blooded = 'false';
    }
}

