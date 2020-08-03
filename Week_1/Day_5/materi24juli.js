
var mhs={
	nama : "Sandika Galih",
	umur : 31,
	ips : [3.00, 2.50, 3.20],
	alamat : {			//ini object dalam object
		jalan: "Jl. abc No.123",
		kota : "Bandung",
		provinsi : " Jawa Barat "
	}
}
document.getElementById("eksternal") = mhs.nama;
/* di console web bisa di trial pemanggilan outputnya
		mhs.nama		mhs.alamat
		mhs.umur		mhs.alamat.kota
		mhs["nama"]		mhs["alamat"]["jalan"]
		mhs.ips			mhs.alamat["provinsi"]
		mhs.ips[2] */

/*--------------------------------------------------------------------
 				MATERI DOM (Document Object Model)

link https://www.youtube.com/watch?v=aT60R1cySLM&list=PLFIM0718LjIWB3YRoQbQh82ZewAGtE2-3

DOM ini berfungsi membuat halaman web menjadi interaktif dan menarik
DOM adalah antarmuka pemrograman untuk HTML yang merepresentasikan halaman web,
sehingga program dapat mengubah dan memanipulasi strukturnya.

DOM menurut Sandhika Galih ialah representasi elemen HTML pada dokumen menjadi sebuah object

bisa check via inspeksi -> console -> ketik document -> expand document. 
nah itu isinya DOM
atau bisa check via file .js -> console.log(document);

POHON HIRARKI DOM / DOM TREE (dibawah ini graph untuk dom tree versi vertical)
	Window
		Document
			HTML 
				body
					h1
					p
						a
					ul
						li , li, li
				head
					title
					meta
					meta
		History
		Location

DOM
	- antarmuka pemrograman berbasis objek yang merepresentasikan dokumen web
	- DOM membuat seluruh komponen dari halaman web dapat diakses dan dimanipulasi
	- Komponen : elemen HTML, atribut, text, dll
	- DOM dapat dimanipulasi (dibuat, diubah, dihapus) menggunakan javascript

----------------------------------------------------------------------------------------------------------
				MATERI DOM TREE 

link https://www.youtube.com/watch?v=zY5RlT5q5EM&list=PLFIM0718LjIWB3YRoQbQh82ZewAGtE2-3&index=2

Di dalam DOM Tree terdapat beberapa type node/simpul :
	Element*   			Entity						Document*
	Attribute  			Entity Reference			Document Type
	Text*   			Processing Instruction		Document Fragment
	CData Section   	Comment  					Notation

	*yang di video ini hanya fokus ketiga itu saja.

NodeList VS HTMLCollection
	-keduanya merupakan kumpulan node
	-struktur datanya mirip array, walaupun bukan array
	-jika kita memilih satu simpul apapun, itu disebut node
	-jika kita memilih lebih dari satu node dengan SEMBARANG TYPE node, itu disebut NodeList
	-jika kita memilih lebih dari satu node dengan TYPENYA ELEMENT HTML saja, itu disebut HTMLCollection
	-HTMLCollection bersifat live., sedangkan NodeList tidak.

STRUKTUR HIERARKI DOM 
	-Root Node
		- node yang menjadi sumber dari semua node lain di dalam DOM
		- contoh, document
	-Parent Node
		- node yang berada 1 tingkat diatas node yang lain
		- contoh, body adalah parent dari h1, p , p, div dan a
	-Child Node
		- node yang berada 1 tingkat dibawah node yang lain
		- contoh, h1 adaah child dari body
	-Siblings 
		- node yang berada di tingkat yang sama
	- Descendants
		- seperti keturunan, anak, cucu, cicit, dll. 

-------------------------------------------------------------------------------------------------------
				MATERI DOM SELECTION

link :  https://www.youtube.com/watch?v=bCKxPvA8KPo&list=PLFIM0718LjIWB3YRoQbQh82ZewAGtE2-3&index=3

DOM Selection Method
			Method					Hasil
	- getElementById()				element						//hanya untuk satu element
	- getElementsByTagName()		HTMLCollection				//boleh lebih dari satu element
	- getElementsByClassName()		HTMLCollection				//boleh lebih dari satu element
	- querySelector()				element
	- querySelectorAll()			nodeList

latihannya di file domdarisg.html dan domdarisg.js

----------------------------------------------------------------------------------------------------------------------
				MATERI DOM MANIPULATION

link : https://www.youtube.com/watch?v=ff5aKnXmnx0&list=PLFIM0718LjIWB3YRoQbQh82ZewAGtE2-3&index=5

DOM Manipulation Method
	- Manipulasi Element
		element.innerHTML
		element.style.<property>
		element.setAttribute()
			element.getAttribute()
			element.setAttribute()
			element.removeAttribute()
		element.classList
			element.classList.add()
			element.classList.remove()
			element.classList.toggle()
				jika element sebelumnya belum punya class tersebut, maka akan ditambahkan class tersebut
				namun jika sudah punya, maka akan dihilangkan class tersebut.
				bangk* emang wkwkwk ini dia maunya gimana sih :D ada disuruh pergi, gak ada malah dicari wkwkwk
			element.classList.item()
			element.classList.contains()
			element.classList.replace()
		...
	- Manipulasi Node
		document.createElement()
		document.createTextNode()
		node.appendChild()
			simpan di akhir element di parent node tersebut
		node.insertBefore()
		parentNode.removeChild()
		parentNode.replaceChild()
		...

disini dapat dilihat beberapa method-method yang dapat dijalankan, namun terdapat pula yang tidak support di browser tertentu
	https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

contoh method baru pada manipulasi node (tapi ada yang tidak support di browser tertentu):
	parentNode.append()
		menambahkan element di akhir parent
	parentNode.prepend()
		menambahkan element di akhir parent
	childNode.before()
	childNode.after()
	childNode.remove()
	childNode.replaceWith()
	...

latihannya di file domdarisg.html dan domdarisg2.js 

-------------------------------------------------------------------------------------------------------------------------
				MATERI DOM EVENTS

link https://www.youtube.com/watch?v=ndYweb0Yn6o&list=PLFIM0718LjIWB3YRoQbQh82ZewAGtE2-3&index=7

Events(kejadian) != Even (genap)

Events pada javascript merepresentasikan sebuah kejadian yang terjadi di dalam DOM
kejadian tersebut bisa dilakukan oleh user (mouse event, keyboard event, dll)
ataupun dilakukan secara otomatis oleh API (animasi selesai dijalankan, halaman selesai di load, dll)

Cara 'mendengarkan' event
	Event Handler
		Inline HTML attribute
			see line 41 di domdarisg.html
			ini tidak direkomendasikan, karena mengeksekusinya di file HTML. jadi mencampuradukkan keduanya.
		Element method
	addEventListener()

Daftar Event atau Event List 
	Mouse Event  			View Event
	Keyboard Event  		Form Event
	Resources Event  		CSS Animation & Transition Event
	Focus Event 			Drag & Drop Event
	dll

	dapat dilihat di link berikut https://developer.mozilla.org/en-US/docs/Web/Events

Mouse Event 
	click			mouseenter			....
	dblclick		mouseup
	mouseover		wheel

Keyboard Event
	keydown			keypress		keyup

View Event
	resize 			scroll

Form Event
	reset 			submit 


latihannya di file domdarisg.html dan domdarisg3.js

-------------------------------------------------------------------------------------
				MATERI DOM TRANSVERSAL

link https://www.youtube.com/watch?v=SVOCSoGYdpQ&list=PLFIM0718LjIWB3YRoQbQh82ZewAGtE2-3&index=10

singkatnya seperti menelusuri sebuah element dari element yang sudah diseleksi melalui silsilah keluarganya (parent node)

DOM TRANVERSAL METHOD 
		Method 						Hasil
	parentNode						node
	parentElement					element
	nextSibling 					node
	nextElementSibling 				element
	previousSibling 				node
	previousElementSibling			element

latihan di domsg.html, style.css, domtransversal.js

-----------------------------------------------------------------------------------------------------------------------
			MATERI PREVENT DEFAULT

link https://www.youtube.com/watch?v=FuOBsbntmvs&list=PLFIM0718LjIWB3YRoQbQh82ZewAGtE2-3&index=11

PREVENT DEFAULT 
	- ialah sebuah method yang ada di object event 
	- contoh, e di line 41 - 42 file domtranversal.js)
	- Tujuannya ialah untuk menghentikan aksi default yang dilakukan oleh sebuah element.

latihan di domsg.html, style.css, domtransversal.js
-----------------------------------------------------------------------------------------------------------------------
			MATERI EVENT BUBBLING

link https://www.youtube.com/watch?v=a_JFfPHTAf4&list=PLFIM0718LjIWB3YRoQbQh82ZewAGtE2-3&index=12

jadi ketika kita memberikan event ke sebuah element, maka sebenarnya itu juga berlaku pada pembungkusnya

latihan di domsg.html, style.css, domtransversal.js
