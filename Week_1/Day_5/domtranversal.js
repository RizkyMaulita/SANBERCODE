/*				Event Handling

const close = document.querySelector('.close');
const card = document.querySelector('.card');

close.addEventListener('click', function(){
	card.style.display = 'none';
})

ini bisa tapi hanya untuk element pertama yang ditemuin oleh querySelector (karena fungsinya seperti itu), 
So harusnya digunakan querySelectorAll */

/* ini bisa, tapi ini bukan DOM TRANVERSAL 

const close = document.querySelectorAll('.close');
const card = document.querySelectorAll('.card');
for ( let i = 0; i < close.length; i++){
	close[i].addEventListener('click', function(){
		alert('tombol ke - ' + [i]);
		card[i].style.display ='none';
	})
}

----------------------------------------------------------------------------------------------------- 
				DOM TRANVERSAL																	*/	

const close = document.querySelectorAll('.close');

/* ada dua cara, pakai looping for dan forEach


for (let i = 0; i < close.length; i++){
	close[i].addEventListener('click', function(e){
		// close[i].parentElement.style.display='none';
		// console.log(e);
		e.target.parentElement.style.display='none';
	})
} 

close.forEach(function(el){
	el.addEventListener('click', function(e){
		e.target.parentElement.style.display ='none';
	})
})

--------------------------------------------------------------- */

const nama = document.querySelector('.nama');
console.log(nama);
console.log(nama.parentElement);
console.log(nama.parentNode);
console.log(nama.parentElement.parentElement);
console.log(nama.nextSibling);		//ini nanti hasilnya text berupa enter. kalau mau lihat element selanjutnya
console.log(nama.nextElementSibling);
console.log(nama.previousElementSibling.previousElementSibling);		//gak ada, karena sebelum gambar, ga ada lagi
console.log(nama.nextElementSibling.nextElementSibling);

/* ------------------------------------------------
 			PREVENT DEFAULT

dimulai dari ganti element span untuk close menjadi a di HTML
karena default dari a adalah menuju sebuah link href, dan kita ga mau ke link tersebut
sehingga href di a kita kosongkan, yang terjadi adalah di web akan muncul sebuah 'kedipan'
so, untuk menghapus kedipan itu pakai prevent default 															

close.forEach(function(el){
	el.addEventListener('click', function(e){
		e.target.parentElement.style.display ='none';
		e.preventDefault();
	})
})

/*-------------------------------------------------------------------------------------------------------
			EVENT BUBBLING													*/

/* const cards = document.querySelectorAll('.card');
cards.forEach(function(card){
	card.addEventListener('click',function(e){
		alert('ok');
	});
});

/* jadi nanti hasilnya
		- ketika kita klik di sembarang tempat di dalam card, maka akan keluar 'ok'
		- ketika kita klik 'x', maka akan muncul 'ok' dulu baru kehapus cardnya
	so, cara kerja event bubbling ini dimulai dari event yang ada di parent2nya dulu, baru event element itu dijalankan 

	problem : bagaimana jika kita ingin klik 'x', namun tulisan 'ok' tidak muncul ?
	solusi : tambahkan .stopPropagation() di line setelah preventDefault 

	gue pindahin kebawah sini ya.														

close.forEach(function(el){
	el.addEventListener('click', function(e){
		e.target.parentElement.style.display ='none';
		e.preventDefault();
		e.stopPropagation();
	})
})

*/

const container = document.querySelector('.container');
container.addEventListener('click', function(e){
	console.log(e.target);		//ini  nanti dia akan tahu kalau kita ngeklik sesuatu
	if (e.target.className == 'close'){
		e.target.parentElement.style.display ='none';
		e.preventDefault();
	}
})