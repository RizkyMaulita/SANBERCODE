/* 			DOM SELECTION PART 1
-------------------------------------------------------------------------------------
   document.getElementById 			-> element
(root node).(DOM Selection Method)

/*cara supaya gak ribet atau salah nulis, tulis get lalu Tab. nanti keluarnya TagName
jika mau ke Id, langsung shift i */
const judul2 = document.getElementById('judul'); 	//const itu variabel
judul2.style.color = 'red';		
judul2.style.backgroundColor = 'grey'; 	
judul2.innerHTML = ' <em> Coba Ganti Isi judul </em>';	

// document.getElementsByTagName('') -> HTMLCollection
const pp = document.getElementsByTagName('p'); 	//ini merupakan array
/*jika mau kasih background color di p ini gak bisa, karena itu merupakan array. 
karena background color hanya bisa untuk per element */
pp[0].style.backgroundColor = 'lightblue';
// kalau mau satu2 bisa, tapi bisa pakai looping
/* for (let i = 1; i < pp.length; i++){		//di js pakai let, lihat video mengapa gak pakai variable. 
	pp[i].style.backgroundColor = 'red';
} */

// kalau mau tahu apa bedanya var, let, dan const bisa dilihat disini https://www.youtube.com/watch?v=7HDgJScwIrI

/*	kan kalau getElementByTagName itu untuk element yang lebih dari satu, lalu nnt jadinya HTML Collection
	bagaimana jika ternyata, elementnya hanya satu ?
		tetap saja nanti akan kedetect sebagai HTMLCollection.
		lalu bagaimana jika ingin mengubahnya menjadi element ? Sehingga dapat memanipulasinya? 
			caranya pakai indexnya. */

const h = document.getElementsByTagName('h1')[0];
h.style.fontSize = '50px';
document.getElementsByClassName('p1')[1].innerHTML = 'Quiz 1';

// document.getElementByClassName() -> HTMLCollection

// const p = document.getElementsByClassName('p1');
// p[0].innerHTML = 'ini kelas di p1 yang diubah dari javascript';
// document.getElementsByClassName('p1')[0].innerHTML = 'ini kelas di p1';

/*atau bisa kek gini
const l = document.getElementsByClassName('list');
l[0].innerHTML = 'ini list';

tapi hasil dari 39 - 40 itu menjadikan listnya tinggal satu saja.
coba yang dibawah ini gak bisa wkwkkw
for (let i = 1;  i < l.length; i++ ){
	l[i].innerHTML = `'ini array ke-'+ [i] +' dari kelas di list yang diubah dari javascript'`;	
} */


/* ------------------------------------------------------------------------------------------------------------
						DOM SELECTION PART 2
---------------------------------------------------------------------------------------------------------------

document.querySelector() -> element 
sebenarnya seperti kek di CSS. lihat line 23 - 25. 
tapi ini digunakan jika kita tidak boleh mengubah html
*/

const p2 = document.querySelector('#b p');
p2.style.color = 'green';
p2.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(3)');
li2.style.background = 'green';

/*
const p = document.querySelector('p');
p.innerHTML = 'Ini diubah melalui javascript';

ini nanti hasilnya yang diubah hanya satu, yang pertama.
bagaimana jika kita ingin mengubah semuanya ?
	pakai querySelectorAll */

/*const p3 = document.querySelectorAll('p');
for (let i = 0; i < p3.length; i++){
	p3[i].style.backgroundColor = 'grey';
} */

// MENGUBAH NODE ROOT 

const sectionB = document.getElementById('b');
const p5 = sectionB.getElementsByTagName('p');	//bisa pakai cara ini
p5[0].style.color = 'red';
const p4 = sectionB.querySelector('p');		//atau ini
p4.style.backgroundColor = 'grey';

const sectionA = document.querySelector('section#a');
const p6 = sectionA.getElementsByTagName('p');
p6[1].style.backgroundColor = 'grey';