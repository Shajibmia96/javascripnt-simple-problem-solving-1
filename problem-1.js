//  check a numer that is integer or not
function isInteger(number){
      if(typeof number !=="number"){
        return'Please input a number'
      }
      if(number%1==0){
        return true;
      }
      else{
        return false;
      }
      
}
var inputNumber= isInteger(6.9)
console.log(inputNumber)