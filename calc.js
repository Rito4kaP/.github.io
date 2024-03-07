function poditog() {
    var n1, n2,n3,n4, r1, r2, r3, r4;
    var result=0;
    n1 = document.getElementById('ch1').value;
    if(document.getElementById('ch1').value==false){
        document.getElementById('res1').innerHTML = "0";
    }
    else {
        n1 = parseInt(n1);
        r1 = n1*20;
        result=result+r1;
        document.getElementById('res1').innerHTML = r1;
    }
    
    n2 = document.getElementById('ch2').value;
    if(document.getElementById('ch2').value==false){
        document.getElementById('res2').innerHTML = "0";
    }
    else {
        n2 = parseInt(n2);
        r2 = n2*100;
        result=result+r2;
        document.getElementById('res2').innerHTML = r2;
    }
    
    n3 = document.getElementById('ch3').value;
    if(document.getElementById('ch3').value==false){
        document.getElementById('res3').innerHTML = "0";
    }
    else {
        n3 = parseInt(n3);
        r3 = n3*17;
        result=result+r3;
        document.getElementById('res3').innerHTML = r3;
    }

    n4 = document.getElementById('ch4').value;
    if(document.getElementById('ch4').value==false){
        document.getElementById('res4').innerHTML = "0";
    }
    else {
        n4 = parseInt(n4);
        r4 = n4*70;
        result=result+r4;
        document.getElementById('res4').innerHTML = r4;
    }
    document.getElementById('resul').innerHTML = result+" ₽ / ";
    var itog=result*30;
    document.getElementById('itog').innerHTML = itog +' ₽ / ';

}


    let width = 324; // ширина картинки
    let count = 3; // видимое количество изображений

    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');

    let position = 0; // положение ленты прокрутки

    carousel.querySelector('.prev').onclick = function() {
      // сдвиг влево
      position += width ;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0);
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function() {
      // сдвиг вправо
      position -= width;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };

const fon=document.querySelector('.fon');
const wrapper=document.querySelector('.wrapper');
const btnOpen = document.querySelector('.btnOpen');
btnOpen.addEventListener('click', ()=>{
    fon.classList.add('active');
    wrapper.classList.add('active');
});
const btnOp = document.querySelector('.btnOp');
btnOp.addEventListener('click', ()=>{
    fon.classList.add('active');
    wrapper.classList.add('active');
});
const btnClose = document.querySelector('.btnClose');
btnClose.addEventListener('click', ()=>{
    fon.classList.remove('active');
    wrapper.classList.remove('active');
});
document.addEventListener("keyup", function(e) {
	if (e.keyCode == 27 || e.keyCode == 13) {
		fon.classList.remove('active');
        wrapper.classList.remove('active');
	}
});

const burgerMenu = document.querySelector('.burger-menu');
const closeBurger = document.querySelector('.close-burger');
const bLink1 = document.querySelector('.bur1');
const bLink2 = document.querySelector('.bur2');
const bLink3 = document.querySelector('.bur3');
const bLink4 = document.querySelector('.bur4');
const bMenu = document.querySelector('.b-menu');
const burgerBtn = document.querySelector('.burger-btn');
burgerBtn.addEventListener('click', ()=>{
    burgerMenu.classList.add('active');
    bMenu.classList.add('active');
});
closeBurger.addEventListener('click', ()=>{
    burgerMenu.classList.remove('active');
    bMenu.classList.remove('active');
});
bLink1.addEventListener('click', ()=>{
    burgerMenu.classList.remove('active');
    bMenu.classList.remove('active');
});
bLink2.addEventListener('click', ()=>{
    burgerMenu.classList.remove('active');
    bMenu.classList.remove('active');
});
bLink3.addEventListener('click', ()=>{
    burgerMenu.classList.remove('active');
    bMenu.classList.remove('active');
});
bLink4.addEventListener('click', ()=>{
    burgerMenu.classList.remove('active');
    bMenu.classList.remove('active');
});



function checkCheckbox() {
    const str12 = document.querySelector('.str1-2');
    const str13 = document.querySelector('.str1-3');
    const str14 = document.querySelector('.str1-4');
    const str22 = document.querySelector('.str2-2');
    const str23 = document.querySelector('.str2-3');
    const str24 = document.querySelector('.str2-4');
    const str32 = document.querySelector('.str3-2');
    const str33 = document.querySelector('.str3-3');
    const str34 = document.querySelector('.str3-4');
    const str42 = document.querySelector('.str4-2');
    const str43 = document.querySelector('.str4-3');
    const str44 = document.querySelector('.str4-4');
    const checkbox1 = document.getElementById('polsovat');
    const checkbox2= document.getElementById('1c');
    const checkbox3= document.getElementById('zapis');
    const checkbox4= document.getElementById('viezd');
    if (checkbox1.checked) {
        str12.classList.add('vis');
        str13.classList.add('vis');
        str14.classList.add('vis');
    } 
    else {
        str12.classList.remove('vis');
        str13.classList.remove('vis');
        str14.classList.remove('vis');
    }
    if (checkbox2.checked) {
        str22.classList.add('vis');
        str23.classList.add('vis');
        str24.classList.add('vis');
    } 
    else {
        str22.classList.remove('vis');
        str23.classList.remove('vis');
        str24.classList.remove('vis');
    }
    if (checkbox3.checked) {
        str32.classList.add('vis');
        str33.classList.add('vis');
        str34.classList.add('vis');
    } 
    else {
        str32.classList.remove('vis');
        str33.classList.remove('vis');
        str34.classList.remove('vis');
    }
    if (checkbox4.checked) {
        str42.classList.add('vis');
        str43.classList.add('vis');
        str44.classList.add('vis');
    } 
    else {
        str42.classList.remove('vis');
        str43.classList.remove('vis');
        str44.classList.remove('vis');
    }
  }