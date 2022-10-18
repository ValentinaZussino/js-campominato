// NUMERO RANDOM
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// PARI DISPARI
function isEven(num){
    if(num % 2 === 0){
        return true;
    } else {
        return false;
    }
}
// PALINDROMO
function palindrome(str) {
    let lowStr = str.toLowerCase();
    let reverseStr = lowStr.split('').reverse().join(''); 
    return reverseStr === lowStr;
}
// FUNZIONI CLELIA ALERT
function notificationError(msgError){
    const alerta = document.createElement('div');
    alerta.className='alert alert-danger';
    alerta.innerHTML = msgError;
    return alerta;
}
function removeFirstNotification(){
    const alertToRemove = document.querySelector('.alert');
    console.log(alertToRemove);
   if(alertToRemove) alertToRemove.remove();
}