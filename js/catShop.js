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
    hold = false;
    login.style.cssText = 'display:none;'
  }, 2350);
 }
});

const idInput = document.querySelector('#id');
const pwInput = document.querySelector('#pw');
const submit = document.querySelector('#submit');

submit.addEventListener('click', function(){
  if(idInput.value == 'guleum' && pwInput.value == '210120' && !hold){
    hold = true;
    alert('안녕하세요 guleum님!');
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
      hold = false;
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


//자연스러운 더보기
const content = document.querySelector('#content1')
const plus1 = document.querySelector('.first')
const plus2 = document.querySelector('.last')
let view2 = document.querySelector('.view2')
let view3 = document.querySelector('.view3')

plus1.addEventListener('click', function(){
  content.animate([
    {height:'2100px'}
  ],{duration:350, fill:'forwards'});
  view2.style.cssText = 'display:flex;'
  plus1.style.cssText = 'display:none;'
  plus2.style.cssText = 'display:block;'
});
plus2.addEventListener('click', function(){
  content.animate([
    {height:'2900px'}
  ],{duration:350, fill:'forwards'});
  view3.style.cssText = 'display:flex;'
  plus1.style.cssText = 'display:none;'
  plus2.style.cssText = 'display:none;'
});


//장바구니 저장
const cart1 = document.querySelectorAll('.cart1');
const cart2 = document.querySelectorAll('.cart2');
const cart3 = document.querySelectorAll('.cart3');
const cart4 = document.querySelectorAll('.cart4');
const cart5 = document.querySelectorAll('.cart5');
const cart6 = document.querySelectorAll('.cart6');
const cart7 = document.querySelectorAll('.cart7');
const cart8 = document.querySelectorAll('.cart8');
const cart9 = document.querySelectorAll('.cart9');

cart1.forEach((cartA) => {
  cartA.addEventListener('click', function(){
    localStorage.setItem('name1', "1");
  });
});

cart2.forEach((cartB) => {
  cartB.addEventListener('click', function(){
    localStorage.setItem('name2', "2");
  });
});

cart3.forEach((cartC) => {
  cartC.addEventListener('click', function(){
    localStorage.setItem('name3', "3");
  });
});

cart4.forEach((cartD) => {
  cartD.addEventListener('click', function(){
    localStorage.setItem('name4', "4");
  });
});

cart5.forEach((cartE) => {
  cartE.addEventListener('click', function(){
    localStorage.setItem('name5', "5");
  });
});

cart6.forEach((cartF) => {
  cartF.addEventListener('click', function(){
    localStorage.setItem('name6', "6");
  });
});

cart7.forEach((cartG) => {
  cartG.addEventListener('click', function(){
    localStorage.setItem('name7', "7");
  });
});

cart8.forEach((cartH) => {
  cartH.addEventListener('click', function(){
    localStorage.setItem('name8', "8");
  });
});

cart9.forEach((cartJ) => {
  cartJ.addEventListener('click', function(){
    localStorage.setItem('name9', "9");
  });
});


//탭메뉴
const key1 = document.querySelector('#key1');
const key2 = document.querySelector('#key2');
const key3 = document.querySelector('#key3');
const key4 = document.querySelector('#key4');
const key5 = document.querySelector('#key5');
const keys = document.querySelectorAll('.keyword p');
const view01 = document.querySelector('#view1');
const view02 = document.querySelector('#view2');
const view03 = document.querySelector('#view3');
const view04 = document.querySelector('#view4');
const view05 = document.querySelector('#view5');
const viewAll = document.querySelectorAll('#content3>div .views ul');

key1.addEventListener('click', function(){
  for(i=0; i<keys.length; i++){
    keys[i].classList.remove('select');
  }
  key1.classList.add('select');
  for(i=0; i<viewAll.length; i++){
    viewAll[i].classList.remove('viewNow');
    viewAll[i].animate([
      {opacity:1},
      {opacity:0}
    ],{duration:350, fill:'forwards'});
  }
  view01.classList.add('viewNow');
  view01.animate([
    {opacity:0},
    {opacity:1}
  ],{duration:350, fill:'forwards'});
});

key2.addEventListener('click', function(){
  for(i=0; i<keys.length; i++){
    keys[i].classList.remove('select');
  }
  key2.classList.add('select');
  for(i=0; i<viewAll.length; i++){
    viewAll[i].classList.remove('viewNow');
    viewAll[i].animate([
      {opacity:1},
      {opacity:0}
    ],{duration:350, fill:'forwards'});
  }
  view02.classList.add('viewNow');
  view02.animate([
    {opacity:0},
    {opacity:1}
  ],{duration:350, fill:'forwards'});
});

key3.addEventListener('click', function(){
  for(i=0; i<keys.length; i++){
    keys[i].classList.remove('select');
  }
  key3.classList.add('select');
  for(i=0; i<viewAll.length; i++){
    viewAll[i].classList.remove('viewNow');
    viewAll[i].animate([
      {opacity:1},
      {opacity:0}
    ],{duration:350, fill:'forwards'});
  }
  view03.classList.add('viewNow');
  view03.animate([
    {opacity:0},
    {opacity:1}
  ],{duration:350, fill:'forwards'});
});

key4.addEventListener('click', function(){
  for(i=0; i<keys.length; i++){
    keys[i].classList.remove('select');
  }
  key4.classList.add('select');
  for(i=0; i<viewAll.length; i++){
    viewAll[i].classList.remove('viewNow');
    viewAll[i].animate([
      {opacity:1},
      {opacity:0}
    ],{duration:350, fill:'forwards'});
  }
  view04.classList.add('viewNow');
  view04.animate([
    {opacity:0},
    {opacity:1}
  ],{duration:350, fill:'forwards'});
});

key5.addEventListener('click', function(){
  for(i=0; i<keys.length; i++){
    keys[i].classList.remove('select');
  }
  key5.classList.add('select');
  for(i=0; i<viewAll.length; i++){
    viewAll[i].classList.remove('viewNow');
    viewAll[i].animate([
      {opacity:1},
      {opacity:0}
    ],{duration:350, fill:'forwards'});
  }
  view05.classList.add('viewNow');
  view05.animate([
    {opacity:0},
    {opacity:1}
  ],{duration:350, fill:'forwards'});
});