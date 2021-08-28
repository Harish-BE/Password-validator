const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

eye.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    eye.classList.toggle('bi-eye');
});

const psw = document.getElementById("password");
const length = document.getElementById('length');
const letter = document.getElementById('letter');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');

psw.onfocus = function() {
  document.querySelector(".rules").style.display = "block";
}
psw.onblur = function(){
  document.querySelector('.rules').style.display='none';
}

psw.onkeyup = function(){
  const letters=/[a-zA-Z]/g;
  if(psw.value.match(letters)){
    letter.classList.remove('invalid');
    letter.classList.add('valid');
  }else{
    letter.classList.remove('valid');
    letter.classList.add('invalid');
  }

  const symbols=/[^\p{L}\d\s]/u;
  if(psw.value.match(symbols)){
    symbol.classList.remove('invalid');
    symbol.classList.add('valid');
  }else{
    symbol.classList.remove('valid');
    symbol.classList.add('invalid');
  }

  if(psw.value.length>=8){
    length.classList.remove('invalid');
    length.classList.add('valid');
  }else{
    length.classList.remove('valid');
    length.classList.add('invalid');
  }

  const numbers=/[0-9]/g;
  if(psw.value.match(numbers)){
    number.classList.remove('invalid');
    number.classList.add('valid');
  }else{
    number.classList.remove('valid');
    number.classList.add('invalid');
  }
}
