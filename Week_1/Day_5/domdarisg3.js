/* 		 DOM EVENTS
-------------------------------------------------------------------------------
1. EVENT HANDLER
------------------------------------------
Inline HTML attribute										*/

const p3 = document.querySelector('.p3');
function ubahWarna(){
	p3.style.backgroundColor = 'lightblue';	
}

/* lanjutannya see line 41 di domdarisg.html
------------------------------------------------------------------------
ELement Method													*/ 

const p2 = document.querySelector('.p2');
function ubahWarnap2(){
	p2.style.backgroundColor = 'red';
}
p2.onclick = ubahWarnap2;

/*---------------------------------------------------------------------------
2. addEventListener()													
-----------------------------------------------------------------------------*/

const p4 = document.querySelector('section#b p');
/*p4.addEventListener('click', function() {
	alert('ok');
}); */

p4.addEventListener('click', function() {
	const ul = document.querySelector('section#b ul');
	const liBaru = document.createElement('li');
	const teksBaru = document.createTextNode('item baru');
	liBaru.appendChild(teksBaru);
	ul.appendChild(liBaru);
});

/*----------------------------------------------------------------------------
Apa perbedaan Event Handler dengan addEventListener()? 
	jika kita membuat perubahan/event lebih dari satu
		Event Handler akan menimpa perubahan lama dengan perubahan yang baru
		addEventListener() akan menambah perubahan tersebut.				

contoh, karena sebelumnya sudah membuat event untuk merubah warna background,
		sekarang akan dicoba untuk membuat event untuk merubah warna font. 
		fokus pada p2 untuk Event Handler dan p4 untuk addEventListener */


function ubahWarnap2(){
	p2.style.color = 'blue';
}
p2.onclick = ubahWarnap2;

p4.addEventListener('click', function(){
	p4.style.color = 'red';
});

/* p4.addEventListener('dblclick', function(){
	p4.style.color = 'red';
}); */

p4.addEventListener('mouseenter', function(){
	p4.style.backgroundColor = 'salmon';
});

p4.addEventListener('mouseleave', function(){
	p4.style.backgroundColor = 'lightblue';
});