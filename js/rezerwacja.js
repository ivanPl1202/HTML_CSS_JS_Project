
function ValidateSelect() {
        var dselect = document.getElementById("selectt");
        if (dselect.value == "") {
            //If the "Please Select" option is selected display error.
            
            return false;
        }
        return true;
    }
function ValidateDate() {
        var dselect = document.getElementById("date");
        if (dselect.value == "") {
            //If the "Please Select" option is selected display error.
            
            return false;
        }
        return true;
    }

function sprawdzPole(pole_id,obiektRegex) {
//Funkcja sprawdza czy wartość wprowadzona do pola tekstowego
//pasuje do wzorca zdefiniowanego za pomocą wyrażenia regularnego
//Parametry funkcji:
//pole_id - id sprawdzanego pola tekstowego
//obiektRegex - wyrażenie regularne
//---------------------------------
var obiektPole = document.getElementById(pole_id);
if(!obiektRegex.test(obiektPole.value)) return (false);
else return (true);
}function sprawdz_radio(nazwa_radio){
//Funkcja sprawdza czy wybrano przycisk radio
//z grupy przycisków o nazwie nazwa_radio
//---------------------------------------
var obiekt=document.getElementsByName(nazwa_radio);
 for (i=0;i<obiekt.length;i++)
 { wybrany=obiekt[i].checked;
if (wybrany) return true; }
return false;
}
function sprawdz_box(box_id)
{//Funkcja sprawdza czy przycisk typu checkbox
//o identyfikatorze box_id jest zaznaczony
//----------------------------------------
var obiekt=document.getElementById(box_id);
if (obiekt.checked) return true;
else return false;
}
function sprawdz()
{ //Funkcja realizujaca sprawdzanie całego fomularza
//wykorzystując funkcje pomocnicze
//--------------------------------
var ok=true; //zmienna informująca o poprawnym wypełnieniu formularza
//Definicje odpowiednich wyrażeń regularnych dla sprawdzenia
//poprawności danych wprowadzonych do pól tekstowych
obiektNazw = /^[a-zA-Z]{2,20}$/; //wyrażenie regularne dla nazwiska
obiektemail =
/^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
obiektPhone=/^[0-9]{9}$/;
//Sprawdzanie kolejnych pól formularza.
//w przypadku błędu - pojawia się odpowiedni komunikat
if (!sprawdzPole("name",obiektNazw))
{ ok=false;
document.getElementById("name_error").style.display="block";
document.getElementById("name_error").innerHTML=
"Wpisz poprawnie imię!";
document.getElementById("name_error").style.color = "red";
}
else document.getElementById("name_error").style.display="none";
if (!sprawdzPole("surname",obiektNazw))
{ ok=false;
document.getElementById("surname_error").style.display="block";
document.getElementById("surname_error").innerHTML=
"Wpisz poprawne nazwisko!";
document.getElementById("surname_error").style.color = "red";
}
else document.getElementById("surname_error").style.display="none";
if (!sprawdzPole("email",obiektemail))
{ ok=false;
document.getElementById("email_error").style.display="block";
document.getElementById("email_error").innerHTML=
"Wpisz poprawny email!";
document.getElementById("email_error").style.color = "red";
}
else document.getElementById("email_error").style.display="none";

if (!sprawdzPole("phone",obiektPhone))
{ ok=false;
document.getElementById("phone_error").style.display="block";
document.getElementById("phone_error").innerHTML=
"Wpisz poprawny numer!";
document.getElementById("phone_error").style.color = "red";
}
else document.getElementById("phone_error").style.display="none";

if (!ValidateSelect())
{
	ok=false;
	document.getElementById("select_error").style.display="block";
			document.getElementById("select_error").innerHTML=
			"Wybierz opcję!";
			document.getElementById("select_error").style.color = "red";
}
else document.getElementById("select_error").style.display="none";

if (!ValidateDate())
{
	ok=false;
	document.getElementById("date_error").style.display="block";
			document.getElementById("date_error").innerHTML=
			"Wybierz datę!";
			document.getElementById("date_error").style.color = "red";
}
else document.getElementById("date_error").style.display="none";

let ready = document.querySelector('#osobowe');
// alert(ready.checked);

if (!(ready.checked)) {
	ok = false;
	document.getElementById("osobowe_error").style.display ="block";
	document.getElementById("osobowe_error").innerHTML = "Proszę zaznaczyć!";
	document.getElementById("osobowe_error").style.color = "red";
} else document.getElementById("osobowe_error").style.display ="none";

return ok;
}


function store(){

	if(sprawdz()){
		var item={};
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'-';

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	item.name=document.getElementById('name').value;
	item.surname=document.getElementById('surname').value;
	item.email=document.getElementById('email').value;
	item.phone=document.getElementById('phone').value;
	item.country=document.getElementById('selectt').value;
	item.date=document.getElementById('date').value;
	// let ready = document.getElementById("osobowe").value; 
	localStorage.setItem('item'+date+time, JSON.stringify(item));

	
}


	



 }
function redirect()
{
	window.location.replace("rezerwacja2.html");
}
function redirectback()
{
	window.location.replace("rezerwacja.html");
}
function selectchange()
{
	document.getElementById("name").value="";
	var savedIndex = document.getElementById("itemss").selectedIndex;
	var object= JSON.parse(localStorage.getItem(localStorage.key(savedIndex-1)));
	document.getElementById("name").value=object.name;
	document.getElementById("surname").value=object.surname;
	document.getElementById("email").value=object.email;
	document.getElementById("phone").value=object.phone;
	document.getElementById("selectt").value=object.country;
	document.getElementById("date").value=object.date;
}

function update(){
	
	if(sprawdz()){
		var item={};
		var savedIndex = document.getElementById("itemss").selectedIndex;
		var object= (localStorage.key(savedIndex-1));
	item.name=document.getElementById('name').value;
	item.surname=document.getElementById('surname').value;
	item.email=document.getElementById('email').value;
	item.phone=document.getElementById('phone').value;
	item.country=document.getElementById('selectt').value;
	item.date=document.getElementById('date').value;
	localStorage.setItem(object, JSON.stringify(item));
	}

}
function remove(){
	var savedIndex = document.getElementById("itemss").selectedIndex;
	var object= (localStorage.key(savedIndex-1));
	localStorage.removeItem(object);
	var x = document.getElementById("itemss");
	x.remove(x.selectedIndex);
	x.selectedIndex=0;

}