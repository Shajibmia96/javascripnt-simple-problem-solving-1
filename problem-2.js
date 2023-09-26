// function isJavascriptFile(fileName){
//     if(typeof fileName !=="string"){
//         return 'please gives a string'
//     }else{
//         if(fileName .toLowerCase().endsWith('.js' ))
//          {
//               return true;
//         }else{
//             return false;
//         }
//     }

// }

// var getNames = "Arman.7";
// var getName =isJavascriptFile(getNames)
// console.log(getName);



// function isJavascriptFile(fileName){
//        if(typeof fileName !== 'string'){
//         return "Please provides a valid number"
//        }
//        else{
//              const fileArr =fileName.split('.');
//              const lastElement =fileArr.pop();
//              return lastElement.toLowerCase() == "js";
//        }
// }


// var provideFileName = 'Hello.Tanvir. Good .morning.js';
// var provideFileNames = isJavascriptFile(provideFileName)
// console.log(provideFileNames)


// function checkIsJavascriptFile(checkFileName){
//           if(typeof checkFileName !== 'string'){
//                 return "please input a valid file [String]"

//           }else{
//             const dividedPerElement =checkFileName.split('.');
//             const perElement= dividedPerElement .pop();
//             return perElement .toLowerCase()=="js"
            

           
//           }
// }

// console.log(checkIsJavascriptFile("Wellcome. to .Bangladesh.js"))



// function isGames(number){

//     if (typeof number !='number' && number<=0){
//         return "Please proved a valid & positive number"
//     }
//     else{
//         "Go next round"
//     }
    // var multiplication =number*input1;
    // var addition = multiplication+input2;
    // var division  = addition /input3;;
    // var subtraction = division -input4;
    // return subtraction
// };

// var sum = (5);
// var result1 = isGames(0);
// console.log(result1)


// function mindGame(yen){
//     if(typeof yen !== "number" && yen<=0){
//              return "Hello";
//     }
//     else{
//         const result1 = ( ( ( yen*3 ) + 10 ) / 2 ) -5;
//         return result1;
//     }
// }

// console.log(mindGame(5))



function isLGSeven(number){
    if(typeof number !=="number"){
        return "Please input a valid number"
    }

    else{
        var result1 = number -7;
          if(number <7){
            
            return result1;
          }
          else{
           
            return number*2
          }
    };
}

console.log(isLGSeven(7))