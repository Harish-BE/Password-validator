const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

toggle.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    classList.toggle('bi-eye');
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
  const letters=/[a-z]/g;
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

}
