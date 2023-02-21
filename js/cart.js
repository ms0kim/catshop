//pop
const pop = document.querySelector('#top')
const nav = document.querySelector('nav')

document.addEventListener('scroll', function() {
  let homeScroll = document.documentElement.scrollTop;
  if(homeScroll > 200){
    pop.style.cssText = 'margin-top:-40px;'
    nav.style.cssText = 'padding:40px 70px;'
  }else{
    pop.style.cssText = 'margin-top:0px;'
    nav.style.cssText = 'padding:80px 70px;'
  }
});


//로그인
const loginBtn = document.querySelector('#loginBtn');
const logout = document.querySelector('#logout');
const back = document.querySelector('.back');
const login = document.querySelector('#login');
let hold = false;

loginBtn.addEventListener('click', function(){
  document.body.classList.add("noscroll"); 
  back.style.cssText = 'display:block;'
  back.animate([
    {opacity:'0'},
    {opacity:'1'},
  ],{duration:350, fill:'forwards'});
  login.style.cssText = 'display:flex;'
  login.animate([
    {opacity:'0'},
    {opacity:'1'},
  ],{duration:350, fill:'forwards'});
});

back.addEventListener('click', function(){
 if(!hold){
  hold = true;
  document.body.classList.remove("noscroll"); 
  back.animate([
    {opacity:'1'},
    {opacity:'0'},
  ],{duration:350, fill:'forwards'});
  setTimeout(function() {
    hold = false;
    back.style.cssText = 'display:none;'
  }, 2350);
  login.animate([
    {opacity:'1'},
    {opacity:'0'},
  ],{duration:350, fill:'forwards'});
  setTimeout(function() {
    login.style.cssText = 'display:none;'
  }, 2350);
 }
});

const idInput = document.querySelector('#id');
const pwInput = document.querySelector('#pw');
const submit = document.querySelector('#submit');

submit.addEventListener('click', function(){
  if(idInput.value == 'guleum' && pwInput.value == '210120'){
    alert('안녕하세요 guleum님!');
    back.animate([
      {opacity:'1'},
      {opacity:'0'},
    ],{duration:350, fill:'forwards'});
    setTimeout(function() {
      back.style.cssText = 'display:none;'
    }, 2350);
    login.animate([
      {opacity:'1'},
      {opacity:'0'},
    ],{duration:350, fill:'forwards'});
    setTimeout(function() {
      login.style.cssText = 'display:none;'
    }, 2350);
    loginBtn.style.cssText = 'display:none;'
    logout.style.cssText = 'display:flex;'
    document.body.classList.remove("noscroll");
  }else{
    alert('아이디나 비밀번호를 확인해주세요');
    document.body.classList.remove("noscroll"); 
  }
});

logout.addEventListener('click', function(){
  loginBtn.style.cssText = 'display:flex;'
  logout.style.cssText = 'display:none;'
});


//장바구니
const text1 = localStorage.getItem('name1');
const text2 = localStorage.getItem('name2');
const text3 = localStorage.getItem('name3');
const text4 = localStorage.getItem('name4');
const text5 = localStorage.getItem('name5');
const text6 = localStorage.getItem('name6');
const text7 = localStorage.getItem('name7');
const text8 = localStorage.getItem('name8');
const text9 = localStorage.getItem('name9');
const mainWon = document.querySelector('#mainWon');
const allWon = document.querySelector('#allWon');

const cart1 = document.querySelector('#cart .cart1');
let num1 = cart1.querySelector('.numAll');
let won1 = cart1.querySelector('.won span');
let all1 = cart1.querySelector('.all span');
let number1 = num1.innerText;
let wonAll1 = won1.innerText;

const cart2 = document.querySelector('#cart .cart2');
let num2 = cart2.querySelector('.numAll');
let won2 = cart2.querySelector('.won span');
let all2 = cart2.querySelector('.all span');
let number2 = num2.innerText;
let wonAll2 = won2.innerText;

const cart3 = document.querySelector('#cart .cart3');
let num3 = cart3.querySelector('.numAll');
let won3 = cart3.querySelector('.won span');
let all3 = cart3.querySelector('.all span');
let number3 = num3.innerText;
let wonAll3 = won3.innerText;

const cart4 = document.querySelector('#cart .cart4');
let num4 = cart4.querySelector('.numAll');
let won4 = cart4.querySelector('.won span');
let all4 = cart4.querySelector('.all span');
let number4 = num4.innerText;
let wonAll4 = won4.innerText;

const cart5 = document.querySelector('#cart .cart5');
let num5 = cart5.querySelector('.numAll');
let won5 = cart5.querySelector('.won span');
let all5 = cart5.querySelector('.all span');
let number5 = num5.innerText;
let wonAll5 = won5.innerText;

const cart6 = document.querySelector('#cart .cart6');
let num6 = cart6.querySelector('.numAll');
let won6 = cart6.querySelector('.won span');
let all6 = cart6.querySelector('.all span');
let number6 = num6.innerText;
let wonAll6 = won6.innerText;

const cart7 = document.querySelector('#cart .cart7');
let num7 = cart7.querySelector('.numAll');
let won7 = cart7.querySelector('.won span');
let all7 = cart7.querySelector('.all span');
let number7 = num7.innerText;
let wonAll7 = won7.innerText;

const cart8 = document.querySelector('#cart .cart8');
let num8 = cart8.querySelector('.numAll');
let won8 = cart8.querySelector('.won span');
let all8 = cart8.querySelector('.all span');
let number8 = num8.innerText;
let wonAll8 = won8.innerText;

const cart9 = document.querySelector('#cart .cart9');
let num9 = cart9.querySelector('.numAll');
let won9 = cart9.querySelector('.won span');
let all9 = cart9.querySelector('.all span');
let number9 = num9.innerText;
let wonAll9 = won9.innerText;

let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;
let g = 0;
let h = 0;
let j = 0;


(function cart_1(){
  if(text1 !== null){
    cart1.style.cssText = 'display:flex;'
    a = 35;
    cartAll();
  }

  cart1.querySelector('.del').addEventListener('click', function(){
    cart1.style.cssText = 'display:none;'
    localStorage.removeItem('name1');
    del_OnClick1();
  });
}());
function count1(type){
  if(type === 'plus'){
    number1 = parseInt(number1) + 1;
  }else if(type === 'minus' && number1 != '1'){
    number1 = parseInt(number1) - 1;
  }
  
  num1.innerText = number1;
  all1.innerText = wonAll1*number1;
  a = wonAll1*number1;
  console.log(a);
  cartAll();
};
function del_OnClick1(){
  a=0;
  cartAll();
};


(function cart_2(){
  if(text2 !== null){
    cart2.style.cssText = 'display:flex;'
    b = 28;
    cartAll();
  }

  cart2.querySelector('.del').addEventListener('click', function(){
    cart2.style.cssText = 'display:none;'
    localStorage.removeItem('name2');
    del_OnClick2();
  });
}());
function count2(type){
  if(type === 'plus'){
    number2 = parseInt(number2) + 1;
  }else if(type === 'minus' && number2 != '1'){
    number2 = parseInt(number2) - 1;
  }

  num2.innerText = number2;
  all2.innerText = wonAll2*number2;
  b = wonAll2*number2;
  cartAll();
};
function del_OnClick2(){
  b=0;
  cartAll();
};


(function cart_3(){
  if(text3 !== null){
    cart3.style.cssText = 'display:flex;'
    c = 42;
    cartAll();
  }

  cart3.querySelector('.del').addEventListener('click', function(){
    cart3.style.cssText = 'display:none;'
    localStorage.removeItem('name3');
    del_OnClick3();
  });
}());
function count3(type){
  if(type === 'plus'){
    number3 = parseInt(number3) + 1;
  }else if(type === 'minus' && number3 != '1'){
    number3 = parseInt(number3) - 1;
  }

  num3.innerText = number3;
  all3.innerText = wonAll3*number3;
  c = wonAll3*number3;
  cartAll();
};
function del_OnClick3(){
  c=0;
  cartAll();
};


(function cart_4(){
  if(text4 !== null){
    cart4.style.cssText = 'display:flex;'
    d = 23;
    cartAll();
  }

  cart4.querySelector('.del').addEventListener('click', function(){
    cart4.style.cssText = 'display:none;'
    localStorage.removeItem('name4');
    del_OnClick4();
  });
}());
function count4(type){
  if(type === 'plus'){
    number4 = parseInt(number4) + 1;
  }else if(type === 'minus' && number4 != '1'){
    number4 = parseInt(number4) - 1;
  }

  num4.innerText = number4;
  all4.innerText = wonAll4*number4;
  d = wonAll4*number4;
  cartAll();
};
function del_OnClick4(){
  d=0;
  cartAll();
};


(function cart_5(){
  if(text5 !== null){
    cart5.style.cssText = 'display:flex;'
    e = 32;
    cartAll();
  }

  cart5.querySelector('.del').addEventListener('click', function(){
    cart5.style.cssText = 'display:none;'
    localStorage.removeItem('name5');
    del_OnClick5();
  });
}());
function count5(type){
  if(type === 'plus'){
    number5 = parseInt(number5) + 1;
  }else if(type === 'minus' && number5 != '1'){
    number5 = parseInt(number5) - 1;
  }

  num5.innerText = number5;
  all5.innerText = wonAll5*number5;
  e = wonAll5*number5;
  cartAll();
};
function del_OnClick5(){
  e=0;
  cartAll();
};


(function cart_6(){
  if(text6 !== null){
    cart6.style.cssText = 'display:flex;'
    f = 46;
    cartAll();
  }

  cart6.querySelector('.del').addEventListener('click', function(){
    cart6.style.cssText = 'display:none;'
    localStorage.removeItem('name6');
    del_OnClick6();
  });
}());
function count6(type){
  if(type === 'plus'){
    number6 = parseInt(number6) + 1;
  }else if(type === 'minus' && number6 != '1'){
    number6 = parseInt(number6) - 1;
  }

  num6.innerText = number6;
  all6.innerText = wonAll6*number6;
  f = wonAll6*number6;
  cartAll();
};
function del_OnClick6(){
  f=0;
  cartAll();
};


(function cart_7(){
  if(text7 !== null){
    cart7.style.cssText = 'display:flex;'
    g = 28;
    cartAll();
  }

  cart7.querySelector('.del').addEventListener('click', function(){
    cart7.style.cssText = 'display:none;'
    localStorage.removeItem('name7');
    del_OnClick7();
  });
}());
function count7(type){
  if(type === 'plus'){
    number7 = parseInt(number7) + 1;
  }else if(type === 'minus' && number7 != '1'){
    number7 = parseInt(number7) - 1;
  }

  num7.innerText = number7;
  all7.innerText = wonAll7*number7;
  g = wonAll7*number7;
  cartAll();
};
function del_OnClick7(){
  g=0;
  cartAll();
};


(function cart_8(){
  if(text8 !== null){
    cart8.style.cssText = 'display:flex;'
    h = 34;
    cartAll();
  }

  cart8.querySelector('.del').addEventListener('click', function(){
    cart8.style.cssText = 'display:none;'
    localStorage.removeItem('name8');
    del_OnClick8();
  });
}());
function count8(type){
  if(type === 'plus'){
    number8 = parseInt(number8) + 1;
  }else if(type === 'minus' && number8 != '1'){
    number8 = parseInt(number8) - 1;
  }

  num8.innerText = number8;
  all8.innerText = wonAll8*number8;
  h = wonAll8*number8;
  cartAll();
};
function del_OnClick8(){
  h=0;
  cartAll();
};


(function cart_9(){
  if(text9 !== null){
    cart9.style.cssText = 'display:flex;'
    j = 38;
    cartAll();
  }

  cart9.querySelector('.del').addEventListener('click', function(){
    cart9.style.cssText = 'display:none;'
    localStorage.removeItem('name9');
    del_OnClick9();
  });
}());
function count9(type){
  if(type === 'plus'){
    number9 = parseInt(number9) + 1;
  }else if(type === 'minus' && number9 != '1'){
    number9 = parseInt(number9) - 1;
  }

  num9.innerText = number9;
  all9.innerText = wonAll9*number9;
  j = wonAll9*number9;
  cartAll();
};
function del_OnClick9(){
  j=0;
  cartAll();
};


//장바구니 합계
function cartAll(){
  mainWon.innerText = a+b+c+d+e+f+g+h+j+'$';
  allWon.innerText = a+b+c+d+e+f+g+h+j+3+'$';
};


//전체상품 삭제
document.querySelector('.white').addEventListener('click', function(){
  cart1.style.cssText = 'display:none;'
  cart2.style.cssText = 'display:none;'
  cart3.style.cssText = 'display:none;'
  cart4.style.cssText = 'display:none;'
  cart5.style.cssText = 'display:none;'
  cart6.style.cssText = 'display:none;'
  cart7.style.cssText = 'display:none;'
  cart8.style.cssText = 'display:none;'
  cart9.style.cssText = 'display:none;'
  localStorage.removeItem('name1');
  localStorage.removeItem('name2');
  localStorage.removeItem('name3');
  localStorage.removeItem('name4');
  localStorage.removeItem('name5');
  localStorage.removeItem('name6');
  localStorage.removeItem('name7');
  localStorage.removeItem('name8');
  localStorage.removeItem('name9');
});


//주문하기 누를 때
const orderBtn = document.querySelector('#order');
const orderText = document.querySelector('.last');

orderBtn.addEventListener('click', function(){
  orderText.style.cssText = 'display:flex;'
  orderText.animate([
    {opacity:'0'},
    {opacity:'1'},
  ],{duration:350, fill:'forwards'});
  setTimeout(function() {
    orderText.animate([
      {opacity:'1'},
      {opacity:'0'},
    ],{duration:350, fill:'forwards'});
  }, 2000);
  setTimeout(function() {
    orderText.style.cssText = 'display:none;'
  }, 2350);
});