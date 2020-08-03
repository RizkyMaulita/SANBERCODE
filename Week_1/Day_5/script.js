//DOM SELECTION
//document.getElementById -> element
//(root node).(DOM Selection Method)

//cara supaya gak ribet atau salah nulis, tulis get lalu Tab. nanti keluarnya TagName
//jika mau ke Id, langsung shift i
const judul = document.getElementById('judul'); 	//const itu variabel
judul.style.color = 'red';		//gak tahu ini gak bisa
judul.style.backgroundColor = 'grey'; 	//asli ga bisa
judul.innerHTML = ' Coba Ganti Isi judul';	//ini pun ga bs

// document.getElementsByTagName('') -> HTMLCollection
const p = document.getElementsByTagName('p');