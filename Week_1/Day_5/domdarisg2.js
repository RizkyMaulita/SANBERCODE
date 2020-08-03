/*		DOM MANIPULATION ELEMENT  			*/

const judul = document.getElementById('judul');
judul.innerHTML = "<em>INI JUDUL : DOM Manipulation</em>"

/* const sectionA = document.querySelector('section#a');
sectionA.innerHTML = 'ini section A';

/* 	walaupun di HTML itu banyak sekali element di section A,
	namun karena kita hanya ganti pakai paragraf seperti diatas, maka hasilnya seperti itu.
	tapi, jika mau buat struktur seperti yg di HTML, bisa seperti 
		
		sectionA.innerHTML = '<div><p>paragraph1</p></div>'; 		*/

judul.style.color = 'grey';
judul.style.backgroundColor ='salmon';

judul.setAttribute ('name', 'litha');

const a = document.querySelector('section#a a');
a.setAttribute('id','link');

/* 	jadi attribute itu kek id, class, href, dll. 
	kalau mau mengambil attributenya pake getAttribute('') di console log htmlnya

	contoh di console log
		a.getAttribute('id')
		-> link 	*/

a.removeAttribute('href'); 	//nanti jadinya ga ada linknya di html, karena udah dihapus

const p2 = document.querySelector('.p2');
// p2.setAttribute('class','label'); 	

/* 	ini bisa, tapi yang ada malah menggantikan class yang lama menjadi class yang baru. 
	padahal inginnya menambah, bukan menimpa/menggantikan. 
	sehingga cara ini kurang efektif, dan perlu pakai cara yang lain yaitu element.class */

p2.classList.add('label');
// p2.classList.remove('label');
p2.classList.toggle('label');
p2.classList.add('satu');
p2.classList.add('dua');
p2.classList.add('tiga');

p2.classList.item(2);				//urutannya dari 0
p2.classList.contains('dua'); 		//outputnya true/false
p2.classList.replace ('tiga', 'empat');

//---------------------------------------------------------------------------------------------
/* 					DOM MANIPULATION NODE
-----------------------------------------------------------------------------------------------
node.appendChild -> ketika kita mau membuat element baru di akhir element pada parent Node  	*/

//buat elemen baru
const pBaru = document.createElement('p');		//ini untuk buat paragrafnya
const tekspBaru = document.createTextNode('Ini isi Teks di Paragraph Baru');		//isi teksnya disini

//simpan tulisan ke dalam paragraf
pBaru.appendChild(tekspBaru);

//simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

/*----------------------------------------------------------------------------------------------------
insertBefore -> digunakan untuk kita dapat menyisipkan elemen baru di tengah2 atau sebelum element baru (bukan di akhir) 	*/

const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('Ini isi Teks di List Baru');
liBaru.appendChild(textLiBaru);
const ul = document.querySelector('section#b ul');
// const li2 = document.querySelector('section#b ul li:nth-child(2)'); 	//bisa pakai ini
const li2 = ul.querySelector('li:nth-child(2)');		//ini juga bisa

ul.insertBefore(liBaru, li2);

/*--------------------------------------------------------------------------------
parentNode.removeChild() 											*/

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

/*---------------------------------------------------------------------------------------
parentNode.replaceChild() 														*/

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const texth2Baru = document.createTextNode('ini Judul di H2 baru');

h2Baru.appendChild(texth2Baru);
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'red';

